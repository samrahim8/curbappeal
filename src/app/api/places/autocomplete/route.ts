import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const input = searchParams.get("input");

  if (!input) {
    return NextResponse.json({ predictions: [] });
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
    // Using the Places API (New) Text Search for better business results
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json"
    );
    url.searchParams.set("input", input);
    url.searchParams.set("types", "establishment");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString());
    const data = await response.json();

    if (data.status === "OK") {
      return NextResponse.json({
        predictions: data.predictions.map(
          (p: {
            place_id: string;
            description: string;
            structured_formatting: {
              main_text: string;
              secondary_text: string;
            };
          }) => ({
            place_id: p.place_id,
            description: p.description,
            structured_formatting: p.structured_formatting,
          })
        ),
      });
    } else if (data.status === "ZERO_RESULTS") {
      return NextResponse.json({ predictions: [] });
    } else {
      console.error("Places API error:", data.status, data.error_message);
      return NextResponse.json(
        { error: "Failed to search" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Places autocomplete error:", error);
    return NextResponse.json(
      { error: "Failed to search" },
      { status: 500 }
    );
  }
}
