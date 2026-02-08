// Curb Appeal Scoring System
// Weights: Profile completeness (25%), Photos (20%), Reviews (25%), Review responses (15%), Activity (15%)

export interface PlaceDetails {
  place_id: string;
  name: string;
  formatted_address?: string;
  formatted_phone_number?: string;
  international_phone_number?: string;
  website?: string;
  opening_hours?: {
    weekday_text?: string[];
    open_now?: boolean;
  };
  photos?: Array<{
    photo_reference: string;
    height: number;
    width: number;
  }>;
  rating?: number;
  user_ratings_total?: number;
  reviews?: Array<{
    author_name: string;
    rating: number;
    text: string;
    time: number;
    relative_time_description: string;
  }>;
  types?: string[];
  business_status?: string;
  url?: string;
  // Additional fields
  price_level?: number; // 0-4 (Free to Very Expensive)
  editorial_summary?: {
    overview?: string;
  };
  // Service options
  delivery?: boolean;
  dine_in?: boolean;
  takeout?: boolean;
  curbside_pickup?: boolean;
  reservable?: boolean;
  // Food attributes
  serves_beer?: boolean;
  serves_wine?: boolean;
  serves_breakfast?: boolean;
  serves_brunch?: boolean;
  serves_lunch?: boolean;
  serves_dinner?: boolean;
  serves_vegetarian_food?: boolean;
  // Accessibility
  wheelchair_accessible_entrance?: boolean;
}

export interface ScoreBreakdown {
  completeness: {
    score: number;
    maxScore: number;
    percentage: number;
    details: {
      hasName: boolean;
      hasAddress: boolean;
      hasPhone: boolean;
      hasWebsite: boolean;
      hasHours: boolean;
      hasCategory: boolean;
      hasDescription: boolean;
      hasPriceLevel: boolean;
    };
  };
  photos: {
    score: number;
    maxScore: number;
    percentage: number;
    count: number;
    recommendation: string;
  };
  reviews: {
    score: number;
    maxScore: number;
    percentage: number;
    count: number;
    averageRating: number;
    recommendation: string;
  };
  responses: {
    score: number;
    maxScore: number;
    percentage: number;
    responseRate: number;
    recommendation: string;
  };
  activity: {
    score: number;
    maxScore: number;
    percentage: number;
    recommendation: string;
  };
}

export interface ActionItem {
  category: "completeness" | "photos" | "reviews" | "responses" | "activity";
  severity: "critical" | "warning" | "suggestion";
  title: string;
  description: string;
  howToFix: string;
}

export interface AuditResult {
  placeId: string;
  businessName: string;
  address: string;
  phone: string;
  website: string;
  category: string;
  rating: number;
  reviewCount: number;
  photoCount: number;
  totalScore: number;
  scoreLabel: "Needs work" | "Getting there" | "Good" | "Excellent";
  scoreColor: "red" | "amber" | "green" | "bright-green";
  breakdown: ScoreBreakdown;
  actionItems: ActionItem[];
  summary: string;
  createdAt: string;
  // Additional profile details
  priceLevel?: number;
  description?: string;
  businessStatus?: string;
  googleMapsUrl?: string;
  // Service attributes
  attributes: {
    delivery?: boolean;
    dineIn?: boolean;
    takeout?: boolean;
    curbsidePickup?: boolean;
    reservable?: boolean;
    wheelchairAccessible?: boolean;
  };
}

// Weights for scoring
const WEIGHTS = {
  completeness: 0.25,
  photos: 0.20,
  reviews: 0.25,
  responses: 0.15,
  activity: 0.15,
};

function calculateCompletenessScore(place: PlaceDetails): ScoreBreakdown["completeness"] {
  const details = {
    hasName: !!place.name && place.name.length > 0,
    hasAddress: !!place.formatted_address && place.formatted_address.length > 0,
    hasPhone: !!place.formatted_phone_number,
    hasWebsite: !!place.website,
    hasHours: !!place.opening_hours?.weekday_text && place.opening_hours.weekday_text.length > 0,
    hasCategory: !!place.types && place.types.length > 0,
    hasDescription: !!place.editorial_summary?.overview,
    hasPriceLevel: place.price_level !== undefined && place.price_level !== null,
  };

  const total = Object.values(details).filter(Boolean).length;
  const maxFields = 8;
  const maxScore = 25;
  const score = Math.round((total / maxFields) * maxScore);
  const percentage = Math.round((total / maxFields) * 100);

  return { score, maxScore, percentage, details };
}

function calculatePhotosScore(place: PlaceDetails): ScoreBreakdown["photos"] {
  const count = place.photos?.length || 0;
  const maxScore = 20;

  let score: number;
  let recommendation: string;

  if (count === 0) {
    score = 0;
    recommendation = "You have no photos. Businesses with 10+ photos get 35% more clicks. Add photos of your team, your work, and your location.";
  } else if (count <= 2) {
    score = 4;
    recommendation = `You have ${count} photo${count === 1 ? "" : "s"}. Add at least 8 more to show customers what you're about.`;
  } else if (count <= 5) {
    score = 8;
    recommendation = `You have ${count} photos. You're getting there, but 10+ photos is the sweet spot. Show more of your work.`;
  } else if (count <= 10) {
    score = 14;
    recommendation = `You have ${count} photos. Good! Consider adding a few more recent ones to keep your listing fresh.`;
  } else {
    score = 20;
    recommendation = `You have ${count} photos. Great job! Just make sure they're recent and high quality.`;
  }

  const percentage = Math.round((score / maxScore) * 100);
  return { score, maxScore, percentage, count, recommendation };
}

function calculateReviewsScore(place: PlaceDetails): ScoreBreakdown["reviews"] {
  const count = place.user_ratings_total || 0;
  const averageRating = place.rating || 0;
  const reviews = place.reviews || [];
  const maxScore = 25;

  // Score based on review count (40% of reviews score = 10 pts max)
  // Based on research: avg business has 39 reviews, top-ranked have 240+
  // Consumers need 40+ reviews to trust a rating
  let countScore: number;
  if (count === 0) countScore = 0;
  else if (count < 10) countScore = 1;      // Very low
  else if (count < 25) countScore = 2;      // Below average
  else if (count < 40) countScore = 4;      // Just below trust threshold
  else if (count < 75) countScore = 5;      // Average (meets 40 minimum)
  else if (count < 150) countScore = 7;     // Good
  else if (count < 250) countScore = 8;     // Excellent (approaching top 3)
  else if (count < 500) countScore = 9;     // Top tier
  else countScore = 10;                      // World class

  // Score based on average rating (40% of reviews score = 10 pts max)
  let ratingScore: number;
  if (averageRating === 0) ratingScore = 0;
  else if (averageRating < 3) ratingScore = 2;
  else if (averageRating < 3.5) ratingScore = 4;
  else if (averageRating < 4) ratingScore = 6;
  else if (averageRating < 4.5) ratingScore = 8;
  else ratingScore = 10;

  // Score based on review recency (20% of reviews score = 5 pts max)
  // CRITICAL: 73% of consumers only trust reviews from the last 30 days
  // Target: 10-15 reviews/month for competitive businesses
  let recencyScore: number = 0;
  let recencyNote: string = "";

  if (reviews.length > 0) {
    const now = Date.now() / 1000; // Convert to seconds (Google uses Unix timestamps)
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60);
    const ninetyDaysAgo = now - (90 * 24 * 60 * 60);

    // Note: API only returns 5 most recent reviews, so we extrapolate
    const reviewsLast30Days = reviews.filter(r => r.time > thirtyDaysAgo).length;
    const reviewsLast90Days = reviews.filter(r => r.time > ninetyDaysAgo).length;

    // Note: Google API only returns 5 most recent reviews, so we use this as a signal
    // If most of the 5 are recent, they likely have good review velocity
    if (reviewsLast30Days >= 4) {
      recencyScore = 5;
      recencyNote = "Your reviews are fresh — that builds trust with new customers.";
    } else if (reviewsLast30Days >= 2) {
      recencyScore = 4;
      recencyNote = "Keep the momentum going with fresh reviews every month.";
    } else if (reviewsLast30Days >= 1) {
      recencyScore = 3;
      recencyNote = "Recent reviews help — 73% of customers only trust reviews from the last month.";
    } else if (reviewsLast90Days >= 1) {
      recencyScore = 1;
      recencyNote = "Your most recent reviews are getting old. Fresh reviews build more trust.";
    } else {
      recencyScore = 0;
      recencyNote = "No recent reviews. Your listing may look inactive to customers.";
    }
  } else if (count > 0) {
    // Has reviews but we can't see them (API only returns 5 most recent)
    recencyScore = 1;
    recencyNote = "Review recency matters — 73% of customers only trust reviews from the last month.";
  }

  const score = Math.round(countScore + ratingScore + recencyScore);
  const percentage = Math.round((score / maxScore) * 100);

  let recommendation: string;
  if (count === 0) {
    recommendation = "You have no reviews yet. Ask your happy customers to leave a review — it's the fastest way to build trust.";
  } else if (count < 10) {
    recommendation = `You have ${count} reviews. Most successful local businesses have 50+. Every new review helps you show up higher in search.`;
  } else if (averageRating < 4) {
    recommendation = `Your ${averageRating.toFixed(1)} star average could be hurting you. Most customers skip businesses under 4 stars.`;
  } else if (recencyScore <= 2 && count >= 10) {
    recommendation = `${count} reviews with ${averageRating.toFixed(1)} stars is solid, but ${recencyNote.toLowerCase()}`;
  } else if (count < 50) {
    recommendation = `${count} reviews with a ${averageRating.toFixed(1)} average is good. Aim for 50+ to dominate local search.`;
  } else if (count < 100) {
    recommendation = `${count} reviews with ${averageRating.toFixed(1)} stars puts you ahead of most competitors. ${recencyNote}`;
  } else {
    recommendation = `${count} reviews with ${averageRating.toFixed(1)} stars is excellent! ${recencyNote}`;
  }

  return { score, maxScore, percentage, count, averageRating, recommendation };
}

function calculateResponsesScore(place: PlaceDetails): ScoreBreakdown["responses"] {
  // Note: Google Places API doesn't return response data directly
  // We'll estimate based on available review data
  // In a real implementation, you'd need the GBP API for this
  const reviews = place.reviews || [];
  const maxScore = 15;

  // Since we can't reliably detect responses via Places API,
  // we'll give a middle score and encourage them to respond
  const responseRate = 0; // Unknown
  const score = 5; // Partial credit since we can't verify
  const percentage = Math.round((score / maxScore) * 100);

  const recommendation = reviews.length > 0
    ? `We can see you have reviews but can't verify response rate. Responding to every review — good or bad — shows you care about customers.`
    : "Once you get reviews, make sure to respond to each one. It shows customers you're engaged and builds trust.";

  return { score, maxScore, percentage, responseRate, recommendation };
}

function calculateActivityScore(place: PlaceDetails): ScoreBreakdown["activity"] {
  // Note: Google Places API doesn't return post/update data
  // We'll give partial credit and encourage posting
  const maxScore = 15;
  const score = 5; // Partial credit since we can't verify
  const percentage = Math.round((score / maxScore) * 100);

  const recommendation = "Posting updates to your Google profile weekly keeps you visible in search. Share promotions, news, or behind-the-scenes content.";

  return { score, maxScore, percentage, recommendation };
}

function generateActionItems(breakdown: ScoreBreakdown, place: PlaceDetails): ActionItem[] {
  const items: ActionItem[] = [];

  // CRITICAL: Check business status first
  if (place.business_status === "CLOSED_TEMPORARILY") {
    items.push({
      category: "completeness",
      severity: "critical",
      title: "Your business is marked as temporarily closed",
      description: "Google shows your business as temporarily closed. This kills your visibility in search results.",
      howToFix: "In your Google Business Profile, go to 'Info' and update your business status to 'Open'. If you were closed temporarily, make sure to reopen.",
    });
  } else if (place.business_status === "CLOSED_PERMANENTLY") {
    items.push({
      category: "completeness",
      severity: "critical",
      title: "Your business is marked as permanently closed",
      description: "Google thinks your business is permanently closed! You won't appear in search results at all.",
      howToFix: "In your Google Business Profile, request to reopen your business. You may need to verify ownership again.",
    });
  }

  // Completeness action items
  const { details } = breakdown.completeness;
  if (!details.hasPhone) {
    items.push({
      category: "completeness",
      severity: "critical",
      title: "Add your phone number",
      description: "Customers can't call you if they can't find your number.",
      howToFix: "Go to your Google Business Profile, click 'Edit profile', and add your phone number under 'Contact'.",
    });
  }
  if (!details.hasWebsite) {
    items.push({
      category: "completeness",
      severity: "warning",
      title: "Add your website",
      description: "A website link gives customers more info and builds credibility.",
      howToFix: "In your Google Business Profile, click 'Edit profile' and add your website URL.",
    });
  }
  if (!details.hasHours) {
    items.push({
      category: "completeness",
      severity: "critical",
      title: "Add your business hours",
      description: "People won't visit if they don't know when you're open. You're invisible to anyone searching by hours.",
      howToFix: "In your Google Business Profile, click 'Edit profile', then 'Hours', and add your operating hours for each day.",
    });
  }
  if (!details.hasDescription) {
    items.push({
      category: "completeness",
      severity: "warning",
      title: "Add a business description",
      description: "Your profile is missing a description. This is prime real estate to tell customers what makes you special.",
      howToFix: "In your Google Business Profile, click 'Edit profile', then 'Description'. Write 2-3 sentences about what you do and why customers choose you.",
    });
  }
  if (!details.hasPriceLevel) {
    items.push({
      category: "completeness",
      severity: "suggestion",
      title: "Set your price range",
      description: "Customers filter by price. If yours isn't set, you won't show up in those searches.",
      howToFix: "In your Google Business Profile, click 'Edit profile' and set your price level ($ to $$$$).",
    });
  }

  // Photos action items
  const photoCount = breakdown.photos.count;
  if (photoCount === 0) {
    items.push({
      category: "photos",
      severity: "critical",
      title: "Add photos to your listing",
      description: "Listings with photos get 35% more clicks to their website and 42% more requests for directions.",
      howToFix: "In your Google Business Profile, click 'Add photo'. Upload at least 5-10 photos showing your business, team, and work.",
    });
  } else if (photoCount < 5) {
    items.push({
      category: "photos",
      severity: "warning",
      title: `Add ${10 - photoCount} more photos`,
      description: "You're almost there! Businesses with 10+ photos perform significantly better in search.",
      howToFix: "Add photos of your storefront, interior, team, and examples of your work or products.",
    });
  }

  // Reviews action items
  const reviewCount = breakdown.reviews.count;
  const rating = breakdown.reviews.averageRating;
  if (reviewCount === 0) {
    items.push({
      category: "reviews",
      severity: "critical",
      title: "Get your first reviews",
      description: "Reviews are the #1 factor customers use to decide. No reviews = no trust.",
      howToFix: "Ask your 5 happiest customers to leave a Google review. Send them a direct link to make it easy.",
    });
  } else if (reviewCount < 10) {
    items.push({
      category: "reviews",
      severity: "warning",
      title: "Build up your review count",
      description: `${reviewCount} reviews is a good start, but most successful local businesses have 25+.`,
      howToFix: "Make asking for reviews part of your routine. After a good interaction, send a follow-up text or email with your review link.",
    });
  }
  if (rating > 0 && rating < 4) {
    items.push({
      category: "reviews",
      severity: "warning",
      title: "Improve your average rating",
      description: `A ${rating.toFixed(1)} average could be hurting you. Most customers only consider 4+ star businesses.`,
      howToFix: "Read your negative reviews for patterns. Address those issues, then focus on getting more positive reviews to bring up your average.",
    });
  }

  // Review recency action item — 5 reviews/month is the standard
  const reviews = place.reviews || [];
  if (reviews.length > 0) {
    const now = Date.now() / 1000;
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60);
    const ninetyDaysAgo = now - (90 * 24 * 60 * 60);
    const reviewsLast30Days = reviews.filter(r => r.time > thirtyDaysAgo).length;
    const reviewsLast90Days = reviews.filter(r => r.time > ninetyDaysAgo).length;

    if (reviewsLast90Days === 0) {
      items.push({
        category: "reviews",
        severity: "critical",
        title: "Your reviews are stale",
        description: "No reviews in 90+ days makes your business look inactive. Customers check review dates — old reviews kill trust.",
        howToFix: "Start a review campaign today. Text your last 10 happy customers with a direct link to your Google review page.",
      });
    } else if (reviewsLast30Days < 3) {
      // Note: We can only see 5 most recent reviews via API, so we use this as a signal
      // If less than 3 of the 5 most recent are from last 30 days, review velocity may be slow
      items.push({
        category: "reviews",
        severity: "suggestion",
        title: "Keep the reviews coming",
        description: "73% of customers only trust reviews from the last month. Top local businesses aim for 5+ new reviews every month.",
        howToFix: "Make asking for reviews automatic. Send a follow-up text or email after every job with your Google review link.",
      });
    }
  }

  // Response action items
  items.push({
    category: "responses",
    severity: "suggestion",
    title: "Respond to all your reviews",
    description: "Responding to reviews — especially negative ones — shows you care. It also signals to Google that you're active.",
    howToFix: "Check your reviews weekly. Thank positive reviewers by name. For negative reviews, apologize and offer to make it right offline.",
  });

  // Activity action items
  items.push({
    category: "activity",
    severity: "suggestion",
    title: "Post weekly updates",
    description: "Regular Google posts keep your listing fresh and can feature promotions, events, or news.",
    howToFix: "In your Google Business Profile, click 'Add update'. Share a promotion, photo, or business update at least once a week.",
  });

  // Service attributes for food/restaurant businesses
  const foodTypes = ["restaurant", "cafe", "bakery", "bar", "food", "meal_delivery", "meal_takeaway"];
  const isFood = place.types?.some(t => foodTypes.some(ft => t.toLowerCase().includes(ft)));

  if (isFood) {
    const hasAnyServiceOption = place.delivery || place.dine_in || place.takeout || place.curbside_pickup;
    if (!hasAnyServiceOption) {
      items.push({
        category: "completeness",
        severity: "warning",
        title: "Add service options",
        description: "Customers filter by delivery, takeout, and dine-in. Set these so you show up in filtered searches.",
        howToFix: "In your Google Business Profile, go to 'Edit profile' > 'More' and enable the service options you offer (delivery, takeout, dine-in, curbside pickup).",
      });
    }
    if (!place.reservable && place.dine_in) {
      items.push({
        category: "completeness",
        severity: "suggestion",
        title: "Enable reservations",
        description: "If you take reservations, enable this feature to let customers book directly from Google.",
        howToFix: "In your Google Business Profile, look for 'Reservations' or connect a booking partner like OpenTable.",
      });
    }
  }

  // Accessibility
  if (place.wheelchair_accessible_entrance === false) {
    items.push({
      category: "completeness",
      severity: "suggestion",
      title: "Update accessibility info",
      description: "Accessibility attributes help customers with disabilities find businesses they can visit.",
      howToFix: "In your Google Business Profile, go to 'Edit profile' > 'Accessibility' and mark which features your business offers.",
    });
  }

  // Sort by severity
  const severityOrder = { critical: 0, warning: 1, suggestion: 2 };
  items.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return items;
}

function getScoreLabel(score: number): "Needs work" | "Getting there" | "Good" | "Excellent" {
  if (score <= 40) return "Needs work";
  if (score <= 60) return "Getting there";
  if (score <= 80) return "Good";
  return "Excellent";
}

function getScoreColor(score: number): "red" | "amber" | "green" | "bright-green" {
  if (score <= 40) return "red";
  if (score <= 60) return "amber";
  if (score <= 80) return "green";
  return "bright-green";
}

function generateSummary(score: number, actionItems: ActionItem[]): string {
  const criticalCount = actionItems.filter(i => i.severity === "critical").length;

  if (score <= 40) {
    return criticalCount > 0
      ? `Your Google presence needs attention. You have ${criticalCount} critical issue${criticalCount > 1 ? "s" : ""} that could be costing you customers.`
      : "Your Google presence is turning away potential customers. A few quick fixes could make a big difference.";
  }
  if (score <= 60) {
    return "You're on the right track, but there's room to improve. A few updates could help you stand out from competitors.";
  }
  if (score <= 80) {
    return "Your Google presence is solid! A few tweaks could push you to the top of local search results.";
  }
  return "Excellent! Your Google presence is helping you win customers. Keep it updated to maintain your edge.";
}

export function calculateAuditScore(place: PlaceDetails): AuditResult {
  const breakdown: ScoreBreakdown = {
    completeness: calculateCompletenessScore(place),
    photos: calculatePhotosScore(place),
    reviews: calculateReviewsScore(place),
    responses: calculateResponsesScore(place),
    activity: calculateActivityScore(place),
  };

  // Calculate weighted total score
  const totalScore = Math.round(
    breakdown.completeness.score * (WEIGHTS.completeness / 0.25) +
    breakdown.photos.score * (WEIGHTS.photos / 0.20) +
    breakdown.reviews.score * (WEIGHTS.reviews / 0.25) +
    breakdown.responses.score * (WEIGHTS.responses / 0.15) +
    breakdown.activity.score * (WEIGHTS.activity / 0.15)
  );

  const actionItems = generateActionItems(breakdown, place);
  const primaryType = place.types?.[0]?.replace(/_/g, " ") || "Business";

  return {
    placeId: place.place_id,
    businessName: place.name,
    address: place.formatted_address || "",
    phone: place.formatted_phone_number || "",
    website: place.website || "",
    category: primaryType.charAt(0).toUpperCase() + primaryType.slice(1),
    rating: place.rating || 0,
    reviewCount: place.user_ratings_total || 0,
    photoCount: place.photos?.length || 0,
    totalScore,
    scoreLabel: getScoreLabel(totalScore),
    scoreColor: getScoreColor(totalScore),
    breakdown,
    actionItems,
    summary: generateSummary(totalScore, actionItems),
    createdAt: new Date().toISOString(),
    // Additional profile details
    priceLevel: place.price_level,
    description: place.editorial_summary?.overview,
    businessStatus: place.business_status,
    googleMapsUrl: place.url,
    // Service attributes
    attributes: {
      delivery: place.delivery,
      dineIn: place.dine_in,
      takeout: place.takeout,
      curbsidePickup: place.curbside_pickup,
      reservable: place.reservable,
      wheelchairAccessible: place.wheelchair_accessible_entrance,
    },
  };
}
