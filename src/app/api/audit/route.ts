import { NextRequest, NextResponse } from "next/server";
import { calculateAuditScore, PlaceDetails } from "@/lib/scoring";

// Simple in-memory cache for audit results (24 hour TTL)
const auditCache = new Map<string, { data: ReturnType<typeof calculateAuditScore>; timestamp: number }>();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get("placeId");

  if (!placeId) {
    return NextResponse.json(
      { error: "placeId is required" },
      { status: 400 }
    );
  }

  // Check cache
  const cached = auditCache.get(placeId);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json(cached.data);
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY not configured");
    return NextResponse.json(
      { error: "API not configured" },
      { status: 500 }
    );
  }

  try {
    // Fetch place details from Google Places API
    const fields = [
      // Core info
      "place_id",
      "name",
      "formatted_address",
      "formatted_phone_number",
      "international_phone_number",
      "website",
      "opening_hours",
      "business_status",
      "url",
      // Categorization
      "types",
      "price_level",
      // Content
      "editorial_summary",
      "photos",
      // Reviews
      "rating",
      "user_ratings_total",
      "reviews",
      // Service options (restaurants/retail)
      "delivery",
      "dine_in",
      "takeout",
      "curbside_pickup",
      "reservable",
      // Food attributes
      "serves_beer",
      "serves_wine",
      "serves_breakfast",
      "serves_brunch",
      "serves_lunch",
      "serves_dinner",
      "serves_vegetarian_food",
      // Accessibility
      "wheelchair_accessible_entrance",
    ].join(",");

    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", fields);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Places API error:", data.status, data.error_message);
      return NextResponse.json(
        { error: "Failed to fetch business details" },
        { status: 500 }
      );
    }

    const placeDetails: PlaceDetails = data.result;
    const auditResult = calculateAuditScore(placeDetails);

    // Cache the result
    auditCache.set(placeId, { data: auditResult, timestamp: Date.now() });

    return NextResponse.json(auditResult);
  } catch (error) {
    console.error("Audit API error:", error);
    return NextResponse.json(
      { error: "Failed to perform audit" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // POST endpoint for running a new audit (same as GET but can accept body)
  try {
    const body = await request.json();
    const placeId = body.placeId;

    if (!placeId) {
      return NextResponse.json(
        { error: "placeId is required" },
        { status: 400 }
      );
    }

    // Redirect to GET handler with query param
    const url = new URL(request.url);
    url.searchParams.set("placeId", placeId);

    return GET(new NextRequest(url, { method: "GET" }));
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
