# GBP Grader

**A simple, beautiful Google Business Profile audit tool for local business owners.**

The tagline: "Find out if Google is helping or hurting your business. 30 seconds. Free."

---

## Current Status: Phase 1 Complete

### What's Built

| Route | Page | Status |
|-------|------|--------|
| `/` | Landing page with search | Working |
| `/audit/[placeId]` | Audit results page | Working |
| `/pricing` | Pricing page (mock CTAs) | Working |
| `/login` | Login placeholder | Working |
| `/api/audit` | Audit calculation API | Working |
| `/api/places/autocomplete` | Google Places autocomplete | Working |
| `/api/og` | OG image generation | Working |

### Features

- Google Places autocomplete search
- Score calculation (0-100) based on:
  - Profile completeness (25%)
  - Photos (20%)
  - Reviews (25%)
  - Review responses (15%)
  - Activity (15%)
- Action items with severity (critical, warning, suggestion)
- Breakdown cards showing each scoring category
- Animated score circle
- Shareable OG images for social media
- Mobile-first responsive design

---

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **OG Images:** @vercel/og
- **Maps API:** Google Places API

---

## Getting Started

### 1. Install dependencies

```bash
cd gbp-grader
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Google Places API key:

```
GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at http://localhost:3000

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── audit/route.ts          # Audit calculation endpoint
│   │   ├── og/route.tsx            # OG image generation
│   │   └── places/autocomplete/    # Google Places autocomplete
│   ├── audit/[placeId]/
│   │   ├── page.tsx                # Audit results page
│   │   ├── AuditResults.tsx        # Client component
│   │   └── loading.tsx             # Loading skeleton
│   ├── login/page.tsx              # Login placeholder
│   ├── pricing/page.tsx            # Pricing page
│   ├── globals.css                 # Global styles & design tokens
│   ├── layout.tsx                  # Root layout
│   ├── not-found.tsx               # 404 page
│   └── page.tsx                    # Landing page
├── components/
│   ├── BusinessSearch.tsx          # Autocomplete search component
│   └── ScoreCircle.tsx             # Animated score circle
└── lib/
    └── scoring.ts                  # Score calculation logic
```

---

## Design System

**Colors:**
- Primary: `#2D5A3D` (Deep Green)
- Background: `#FDFBF8` (Warm Off-white)
- Score Excellent: `#22C55E`
- Score Good: `#4ADE80`
- Score Warning: `#F59E0B`
- Score Poor: `#EF4444`

**Typography:**
- Headings: Plus Jakarta Sans
- Body: Inter

---

## Next Steps (Phase 2+)

### Phase 2: Deploy + Test
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Test with real businesses
- [ ] Share in Facebook groups for feedback

### Phase 3: Add Persistence (Supabase)
- [ ] Set up Supabase project
- [ ] Create database tables
- [ ] Add authentication
- [ ] Store audit history

### Phase 4: Add Payments (Stripe)
- [ ] Set up Stripe products
- [ ] Checkout integration
- [ ] Subscription management

### Phase 5+: Pro Features
- [ ] Review monitoring
- [ ] AI review responses
- [ ] Weekly email reports
- [ ] Competitor tracking

---

## Accounts

| Service | Account |
|---------|---------|
| GitHub | samrahim8 |
| Vercel | sams-projects-35f97947 |
