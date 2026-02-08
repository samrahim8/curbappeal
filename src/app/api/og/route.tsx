import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get("placeId");

  // Default values for preview
  let businessName = "Your Business Name";
  let score = 75;
  let scoreLabel = "Good";

  if (placeId) {
    try {
      // Fetch audit data
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://getcurbappeal.com";
      const response = await fetch(
        `${baseUrl}/api/audit?placeId=${encodeURIComponent(placeId)}`
      );

      if (response.ok) {
        const audit = await response.json();
        businessName = audit.businessName;
        score = audit.totalScore;
        scoreLabel = audit.scoreLabel;
      }
    } catch (error) {
      console.error("Failed to fetch audit for OG image:", error);
    }
  }

  // Determine score color
  const getScoreColor = (s: number) => {
    if (s <= 40) return "#EF4444";
    if (s <= 60) return "#F59E0B";
    if (s <= 80) return "#22C55E";
    return "#22C55E";
  };

  const scoreColor = getScoreColor(score);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FDFBF8",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(45, 90, 61, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(45, 90, 61, 0.05) 0%, transparent 50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              backgroundColor: "#2D5A3D",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontSize: 24, fontWeight: 700 }}>
              C
            </span>
          </div>
          <span style={{ fontSize: 32, fontWeight: 600, color: "#1A1A1A" }}>
            Curb Appeal
          </span>
        </div>

        {/* Score circle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: `12px solid ${scoreColor}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: scoreColor,
                lineHeight: 1,
              }}
            >
              {score}
            </span>
            <span
              style={{
                fontSize: 20,
                color: "#6B6B6B",
                marginTop: 4,
              }}
            >
              {scoreLabel}
            </span>
          </div>
        </div>

        {/* Business name */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: "#1A1A1A",
            textAlign: "center",
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          {businessName}
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            backgroundColor: "#2D5A3D",
            borderRadius: 12,
            color: "white",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          Find out YOUR score at getcurbappeal.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
