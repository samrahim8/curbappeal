# Curb Appeal Design System

## Design Philosophy

**World-class UI = Layered depth + purposeful motion + clear hierarchy**

---

## What Works: Action Item Cards (Reference Quality)

These cards hit the mark. Use this pattern as the quality bar.

### Visual Hierarchy

1. **Gradient accent backgrounds** - Subtle `from-{color}/20 via-{color}/5 to-transparent` creates depth without overwhelming
2. **Solid color badges** - High contrast (`bg-red-500 text-white`) for severity, not washed-out pastels
3. **Large display titles** - `text-xl md:text-2xl font-display` commands attention
4. **Muted category labels** - `text-xs uppercase tracking-wider text-text-muted` for context without competition

### Card Structure

```
┌─────────────────────────────────────────────┐
│ [Gradient background layer]                 │
│                                             │
│  [Badge: Fix now]  [Category: PHOTOS]       │
│                                             │
│  Large Title Here                           │
│  That Commands Attention                    │
│                                             │
│  Description text in text-secondary that   │
│  explains the issue clearly.               │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [Expandable "How to fix" section]   │   │
│  │ with accent background              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Show me how] button                       │
│                                             │
└─────────────────────────────────────────────┘
```

### Interactions

- **Expand/collapse** - `transition-all duration-300` with `max-h` animation
- **Button state change** - "Show me how" → "Got it" when expanded
- **Hover states** - `hover:shadow-lg` on priority cards
- **Chevron rotation** - `rotate-180` on expand

### Color Mapping

| Severity | Gradient | Badge | Border |
|----------|----------|-------|--------|
| Critical | `from-red-500/20` | `bg-red-500 text-white` | `border-red-500/20` |
| Warning | `from-amber-500/20` | `bg-amber-500 text-white` | `border-amber-500/20` |
| Suggestion | `from-accent/10` | `bg-accent/10 text-accent` | `border-accent/20` |

### The "How to Fix" Box

```jsx
<div className="bg-accent/5 rounded-2xl p-5 border border-accent/10">
  <div className="flex items-center gap-2 mb-3">
    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
      <LightningIcon className="w-3.5 h-3.5 text-accent" />
    </div>
    <span className="text-sm font-semibold text-accent">How to fix</span>
  </div>
  <p className="text-text-secondary text-sm leading-relaxed">{content}</p>
</div>
```

---

## Collapsible Sections

When hiding content behind a toggle:

1. **Clear trigger** - Full-width clickable area with icon + title + description
2. **Visual affordance** - Chevron in a circular background that rotates
3. **Smooth reveal** - `max-h` transition, not abrupt show/hide
4. **Count indicator** - "3 suggestions to consider"

---

## Core Palette (Craft-inspired)

```css
--background: #F5F3ED;   /* Warm beige */
--surface: #FFFFFF;       /* Cards */
--text: #1A1A1A;          /* Primary text */
--text-secondary: #666666;
--text-muted: #999999;
--accent: #2D4A3E;        /* Forest green */
--accent-light: #3D6354;
--border: #E5E2DB;
--border-light: #EEEBE4;
```

---

## Button Patterns

### Primary (CTA)
```jsx
className="btn-primary px-8 py-4 rounded-full text-base font-medium"
```
- Solid accent background
- White text
- Subtle shadow + lift on hover

### Glass (Secondary)
```jsx
className="glass-button px-5 py-2.5 rounded-full text-sm font-medium text-text"
```
- White/90 background with backdrop blur
- Inset highlight
- Lift on hover

### Text Link (Tertiary)
```jsx
className="text-accent hover:text-accent-light transition-colors"
```

---

## Typography

- **Display/Headings**: `font-display` (Instrument Serif)
- **Body**: `font-body` (Source Serif 4)
- **Section labels**: `text-sm text-text-muted tracking-wide`
- **Large titles**: `text-2xl md:text-3xl font-display`

---

## Spacing

- **Card padding**: `p-6 md:p-8`
- **Section padding**: `py-12 md:py-16`
- **Card gaps**: `space-y-6` for priority, `space-y-4` for suggestions
- **Container max-width**: `max-w-3xl` for content, `max-w-5xl` for grids

---

## Shadows

```css
.shadow-card {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.04),
    0 6px 16px rgba(0, 0, 0, 0.06);
}
```

---

## Animation Defaults

- **Duration**: `duration-200` for micro, `duration-300` for reveals
- **Easing**: Default ease (no custom curves needed)
- **Properties**: `transition-all` for simplicity

---

## Quality Checklist

Before shipping a component, verify:

- [ ] Clear visual hierarchy (what should I look at first?)
- [ ] Appropriate use of depth (shadows, gradients, not flat)
- [ ] Smooth interactions (no jarring state changes)
- [ ] Consistent spacing (using the spacing scale)
- [ ] Typography follows the system
- [ ] Colors from the palette only
- [ ] Mobile-friendly touch targets (min 44px)
