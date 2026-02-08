import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuditResult } from "@/lib/scoring";
import { AuditResults } from "./AuditResults";

interface AuditPageProps {
  params: Promise<{ placeId: string }>;
}

async function getAuditData(placeId: string): Promise<AuditResult | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  try {
    const response = await fetch(
      `${baseUrl}/api/audit?placeId=${encodeURIComponent(placeId)}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      return null;
    }

    return response.json();
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
