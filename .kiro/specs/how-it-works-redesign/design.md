# Design Document: How It Works Redesign

## Overview

Redesign the internal implementation of the HowItWorks component to deliver a premium three-stage visual narrative (Send → Customers Respond → Grow) with a final CTA. The component preserves its public API and reuses existing UI primitives (SectionWrapper, AnimateOnScroll, Button, PhoneMockup).

## Architecture

The redesign replaces the internal implementation of `components/sections/HowItWorks.tsx` with a premium three-stage layout while preserving the component's public API (no props, same named export). The component remains a `"use client"` module because it uses `AnimateOnScroll` (which depends on client-side Intersection Observer).

### Component Hierarchy

```
HowItWorks (exported)
├── SectionWrapper (id="how-it-works", background="white")
│   ├── AnimateOnScroll → SendStage
│   │   └── PhoneMockup (app-send-request.png)
│   ├── AnimateOnScroll → RespondStage
│   │   └── SplitLayout
│   │       ├── GreenPanel (happy path)
│   │       └── AmberPanel (needs attention)
│   ├── AnimateOnScroll → GrowStage
│   │   └── DashboardImage (flat, no phone frame)
│   └── AnimateOnScroll → FinalCTA
│       └── Button (primary)
```

All sub-components are private inline functions within the same file. No new files are created.

---

## Components and Interfaces

### HowItWorks (public export)

```tsx
// No props — matches current signature exactly
export function HowItWorks(): JSX.Element
```

### Internal Sub-Components (not exported)

```tsx
// Stage headline + supporting copy + visual
function SendStage(): JSX.Element

// Stage headline + split layout panels
function RespondStage(): JSX.Element

// Stage headline + dashboard flat screenshot
function GrowStage(): JSX.Element

// Headline + copy + CTA button + disclaimer
function FinalCTA(): JSX.Element
```

---

## Layout & Spacing Design

### Vertical Rhythm

Each stage is separated by generous whitespace to create a breathable, premium feel:

```
Section top padding (via SectionWrapper): py-14 lg:py-24
Stage spacing: mb-24 lg:mb-32 (≥96px on desktop, satisfies 80px minimum)
Final CTA top margin: mt-24 lg:mt-32
```

### Typography Scale

Stage headlines use a consistent scale across all three stages:

```tsx
// Stage headline classes
"text-3xl md:text-4xl lg:text-5xl font-bold text-navy"
```

Supporting copy uses a restrained scale:

```tsx
// Subheadline
"text-lg md:text-xl text-navy/70 font-medium"

// Supporting copy
"text-base text-navy/60"
```

### Heading Hierarchy

- `<h2>`: Section-level identifier (visually hidden or used as a screen-reader-only label if needed, or the first stage headline serves this role). The section uses a single `h2` to introduce the flow.
- `<h3>`: Each stage headline (Send, Customers Respond, Grow, CTA headline)

---

## Send Stage Design

Layout: centered single-column with phone mockup below the text content.

```tsx
function SendStage() {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
        Send
      </h3>
      <p className="mt-3 text-lg md:text-xl text-navy/70 font-medium">
        Send one text after every completed job
      </p>
      <p className="mt-2 text-base text-navy/60">
        Enter your customer's phone number and Nudgli handles the rest
      </p>
      <div className="mt-10 flex justify-center">
        <PhoneMockup
          imageSrc="/images/mockups/app-send-request.png"
          imageAlt="Nudgli Send Request screen showing phone number input and send button"
          className="w-[240px] md:w-[280px]"
        />
      </div>
    </div>
  );
}
```

The `PhoneMockup` component is reused directly from `components/ui/PhoneMockup.tsx` — it provides the dark bezel frame with notch.

---

## Respond Stage (Split Layout) Design

The visual centerpiece. Uses a full-width grid to create maximum impact.

### Structure

```tsx
function RespondStage() {
  return (
    <div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center mb-12">
        Customers Respond
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Green Panel */}
        <div className="rounded-3xl border-2 border-green-200 bg-white p-8 lg:p-10 relative overflow-hidden shadow-md">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-400 to-green-500" />
          {/* 5-star indicator + badge */}
          {/* Benefit list items with green check icons */}
          {/* Key message: Google Review link sent automatically */}
        </div>

        {/* Amber Panel */}
        <div className="rounded-3xl border-2 border-amber-200 bg-white p-8 lg:p-10 relative overflow-hidden shadow-md">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-500" />
          {/* Low-star indicator + badge */}
          {/* Benefit list items with amber icons */}
          {/* Key message: Private feedback routed to owner */}
        </div>
      </div>
    </div>
  );
}
```

### Responsive Behavior

- `grid-cols-1` (default): Panels stack vertically below 1024px
- `lg:grid-cols-2`: Side-by-side at 1024px and above

### Panel Content Pattern

Each panel contains:
1. A colored gradient accent bar at the top (1.5px)
2. A star rating indicator + colored badge label
3. 2–3 benefit items with icon + title + short description

The green panel communicates: "Happy customers get a Google Review link automatically."
The amber panel communicates: "Unhappy feedback is routed privately to the business owner."

---

## Grow Stage Design

The dashboard is shown as a flat screenshot — no phone frame — to differentiate it from the Send stage and convey a "dashboard/browser" feel.

```tsx
function GrowStage() {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
        Grow
      </h3>
      <p className="mt-3 text-lg md:text-xl text-navy/70 font-medium">
        Watch your reviews and reputation grow
      </p>
      <div className="mt-10 max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-lightGray">
          <Image
            src="/images/mockups/app-dashboard.png"
            alt="Nudgli dashboard showing review statistics, growth charts, and recent activity"
            width={960}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
```

The image is wrapped in a rounded container with a subtle border and shadow to give it a "browser card" appearance without an actual browser chrome.

---

## Final CTA Design

```tsx
function FinalCTA() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
        Your best customers want to help. They just need a nudge.
      </h3>
      <p className="mt-4 text-base md:text-lg text-navy/60">
        Start collecting more Google reviews while giving every unhappy customer a chance to be heard first.
      </p>
      <div className="mt-8">
        <Button variant="primary" size="lg" href="#">
          Start Free Trial
        </Button>
      </div>
      <p className="mt-3 text-sm text-navy/50">
        No credit card required
      </p>
    </div>
  );
}
```

---

## Animation Strategy

Each stage is wrapped in `AnimateOnScroll` with staggered delays:

| Stage | Delay |
|-------|-------|
| Send | 0ms |
| Respond | 100ms |
| Grow | 200ms |
| Final CTA | 300ms |

`AnimateOnScroll` already handles `prefers-reduced-motion` internally — when reduced motion is preferred, content renders immediately without animation.

---

## Color Token Usage

| Purpose | Token | Value |
|---------|-------|-------|
| Headlines & body text | `text-navy` | #0B1D3A |
| Primary CTA button | `bg-teal` | #0CBFA6 |
| Section background | `bg-white` | #FFFFFF |
| Supporting text | `text-navy/60`, `text-navy/70` | navy with opacity |
| Dashboard border | `border-lightGray` | #E5E7EB |
| Split panel green | Tailwind `green-200/400/500` | standard green palette |
| Split panel amber | Tailwind `amber-200/400/500` | standard amber palette |

---

## Accessibility Considerations

1. **Alt text**: Every `<Image>` has a descriptive `alt` attribute explaining what the image shows
2. **Heading hierarchy**: One `h2` for the section, `h3` for each stage headline
3. **Color contrast**: The Button primary variant (#0CBFA6 on white text) provides 4.5:1+ contrast. Navy text on white background exceeds 7:1.
4. **Reduced motion**: Handled by `AnimateOnScroll` — no additional work needed
5. **Semantic HTML**: Section uses `<section>` via SectionWrapper, logical heading nesting

---

## Responsive Breakpoints Summary

| Breakpoint | Behavior |
|------------|----------|
| < 768px (mobile) | Single column, centered content, phone mockup scales down |
| 768px–1023px (tablet) | Single column with wider spacing, phone at medium size |
| ≥ 1024px (desktop) | Split layout goes side-by-side, full spacing, larger typography |

---

## Data Models

No data model required — all content is hardcoded in the component (static marketing copy). No API calls, no dynamic data.

---

## Error Handling

No error states apply — the component renders static content with local images. `next/image` handles image optimization and fallback intrinsically.

---

## Dependencies

| Dependency | Source | Modification |
|------------|--------|--------------|
| `SectionWrapper` | `@/components/layout/SectionWrapper` | None |
| `AnimateOnScroll` | `@/components/ui/AnimateOnScroll` | None |
| `Button` | `@/components/ui/Button` | None |
| `PhoneMockup` | `@/components/ui/PhoneMockup` | None |
| `next/image` | Next.js built-in | None |

---

## Testing Strategy

### Unit Tests (Example-Based)

The majority of acceptance criteria for this feature are structural/rendering concerns best validated with example-based unit tests:

- **Render structure**: Verify stages appear in correct order, correct headings exist, correct text content renders
- **Component integration**: Verify PhoneMockup, AnimateOnScroll, Button, and SectionWrapper are rendered with correct props
- **Responsive classes**: Verify grid classes produce correct responsive behavior (lg:grid-cols-2 for split layout)
- **Accessibility**: Verify heading hierarchy (h2/h3), alt attributes, and that AnimateOnScroll handles reduced motion
- **Export signature**: Verify the component exports as `HowItWorks` with no required props

### Property-Based Tests

Three properties validated across all stage elements (see Correctness Properties section below).

### Visual Regression (Manual)

- Verify premium feel, spacing, and typography at 320px, 768px, 1024px, and 1440px breakpoints
- Verify split layout color contrast and panel alignment

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Stage headlines use premium typography scale

*For any* stage headline element (Send, Customers Respond, Grow) rendered by the HowItWorks component, the element SHALL have responsive typography classes that provide at minimum `text-2xl` on mobile viewports and scale to `text-4xl` or larger on desktop viewports.

**Validates: Requirements 6.1**

### Property 2: All images include descriptive alt text

*For any* image element rendered within the HowItWorks component, the `alt` attribute SHALL be a non-empty string that describes the content of the image.

**Validates: Requirements 8.1**

### Property 3: Stages have minimal supporting copy

*For any* stage block (Send, Respond, Grow) in the HowItWorks component, the number of supporting text lines (paragraph elements with descriptive copy) SHALL NOT exceed two.

**Validates: Requirements 6.3**
