import { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculateAuditScore, PlaceDetails, AuditResult } from "@/lib/scoring";
import { AuditResults } from "./AuditResults";

interface AuditPageProps {
  params: Promise<{ placeId: string }>;
}

async function getAuditData(placeId: string): Promise<AuditResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error("GOOGLE_PLACES_API_KEY not configured");
    return null;
  }

  try {
    const fields = [
      "place_id",
      "name",
      "formatted_address",
      "formatted_phone_number",
      "international_phone_number",
      "website",
      "opening_hours",
      "business_status",
      "url",
      "types",
      "price_level",
      "editorial_summary",
      "photos",
      "rating",
      "user_ratings_total",
      "reviews",
      "delivery",
      "dine_in",
      "takeout",
      "curbside_pickup",
      "reservable",
      "serves_beer",
      "serves_wine",
      "serves_breakfast",
      "serves_brunch",
      "serves_lunch",
      "serves_dinner",
      "serves_vegetarian_food",
      "wheelchair_accessible_entrance",
    ].join(",");

    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", fields);
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), { cache: "no-store" });
    const data = await response.json();

    if (data.status !== "OK") {
      console.error("Places API error:", data.status, data.error_message);
      return null;
    }

    const placeDetails: PlaceDetails = data.result;
    return calculateAuditScore(placeDetails);
  } catch (error) {
    console.error("Failed to fetch audit:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: AuditPageProps): Promise<Metadata> {
  const { placeId } = await params;
  const audit = await getAuditData(placeId);

  if (!audit) {
    return {
      title: "Audit Not Found — Curb Appeal",
    };
  }

  const title = `${audit.businessName} scored ${audit.totalScore}/100 — Curb Appeal`;
  const description = `${audit.summary} Check your Google Business Profile score for free.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: `/api/og?placeId=${placeId}`,
          width: 1200,
          height: 630,
          alt: `${audit.businessName} GBP Score: ${audit.totalScore}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?placeId=${placeId}`],
    },
  };
}

export default async function AuditPage({ params }: AuditPageProps) {
  const { placeId } = await params;
  const audit = await getAuditData(placeId);

  if (!audit) {
    notFound();
  }

  return <AuditResults audit={audit} />;
}
