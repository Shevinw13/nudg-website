# Implementation Plan: Nudg Marketing Website

## Overview

Build a static, single-page marketing website for the Nudg iOS app using Next.js (App Router), Tailwind CSS, and TypeScript with static export to Vercel. The site showcases the app's value proposition through 7 content sections, responsive layout, animations, and performance-optimized delivery. All content is hardcoded — no API routes, no forms, no server runtime.

## Tasks

- [x] 1. Project setup and configuration
  - [x] 1.1 Initialize Next.js project with TypeScript, Tailwind CSS, and static export
    - Initialize Next.js with App Router and TypeScript (`npx create-next-app@latest --typescript --app`)
    - Configure `next.config.mjs` with `output: 'export'` for static generation
    - Install and configure Tailwind CSS with custom Nudg design tokens in `tailwind.config.ts`: navy (#0B1D3A), teal (#0CBFA6), mint (#E6F9F6), gray (#F2F4F7), lightGray (#E5E7EB)
    - Configure Inter font via `next/font/google` in root layout
    - Set up ESLint with Next.js recommended config
    - _Requirements: 15.1, 15.2, 15.3, 13.7_

  - [x] 1.2 Create project directory structure and TypeScript types
    - Create directory structure: `components/layout/`, `components/sections/`, `components/ui/`, `lib/`, `public/images/mockups/`, `public/images/icons/`
    - Create `lib/types.ts` with all TypeScript interfaces: Feature, Step, PricingTier, Testimonial, Industry, ValueProposition, SmsMessage, SmsConversation, NavLink
    - Create `lib/constants.ts` with all hardcoded data: BRAND, NAV_LINKS, STEPS (6), FEATURES (10), PRICING_TIERS (3), INDUSTRIES (6), VALUE_PROPOSITIONS (4), SMS conversations, testimonial data
    - Create `lib/metadata.ts` with SEO metadata helpers for each page
    - _Requirements: 15.1, 14.1, 14.2_

  - [x] 1.3 Set up testing framework (Vitest + React Testing Library + Playwright)
    - Install and configure Vitest with React Testing Library and jsdom environment
    - Install `@testing-library/jest-dom` for DOM matchers
    - Install `jest-axe` for accessibility testing
    - Install and configure Playwright for E2E tests
    - Create test directory structure: `__tests__/components/`, `__tests__/accessibility/`, `__tests__/e2e/`
    - _Requirements: 11.1, 12.1_

- [x] 2. Layout components and root structure
  - [x] 2.1 Create SectionWrapper component
    - Build `components/layout/SectionWrapper.tsx` with props: id, children, className, background (white/navy/mint/gray)
    - Apply max-w-7xl (1280px), mx-auto centering, responsive horizontal padding (px-4 mobile, px-8 tablet+)
    - Apply vertical section spacing (py-20 to py-28 on desktop)
    - Support section anchor IDs for smooth-scroll navigation
    - _Requirements: 13.5, 13.6, 10.4_

  - [x] 2.2 Create Button component
    - Build `components/ui/Button.tsx` with variants: primary (teal bg, white text), secondary (navy bg, white text), outline (border only)
    - Support sizes: sm, md, lg with minimum 44×44px touch target on mobile
    - Render as `<a>` when href prop is provided, `<button>` otherwise
    - Include ariaLabel prop for icon-only buttons, visible focus indicators (2px outline offset)
    - _Requirements: 10.2, 12.4, 12.7, 13.2_

  - [x] 2.3 Create Navbar component with mobile menu
    - Build `components/layout/Navbar.tsx` with sticky positioning, z-50
    - Display Nudg horizontal lockup logo (teal arrow + "nudg" wordmark) as clickable scroll-to-top
    - Display navigation links: "How It Works", "Features", "Pricing" with smooth-scroll behavior (300-800ms)
    - Display App Store CTA button (placeholder href "#") visually differentiated from nav links
    - Implement mobile hamburger menu (below 768px): hide nav links, show hamburger icon with aria-label "Menu"
    - Implement mobile menu expand/collapse with focus trapping when open
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 12.7, 12.8_

  - [x] 2.4 Create Footer component
    - Build `components/layout/Footer.tsx` with Nudg stacked/horizontal logo, tagline "The right nudge. More 5-star reviews."
    - Display App Store download badge (placeholder href "#")
    - Display contact email as clickable mailto link
    - Display Privacy Policy and Terms of Service links (to /privacy and /terms)
    - Display copyright notice: © [current year] Nudg
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 13.11_

  - [x] 2.5 Create root layout and page shell
    - Build `app/layout.tsx` with Inter font, semantic HTML (html lang="en", nav, main, footer structure)
    - Include global metadata: title, description, Open Graph tags, canonical URL, favicon references
    - Compose Navbar + main + Footer in layout
    - Build `app/page.tsx` shell that imports and composes all section components in order
    - Create `app/privacy/page.tsx` and `app/terms/page.tsx` with placeholder legal content and unique metadata
    - Ensure single h1 per page
    - _Requirements: 14.1, 14.2, 14.5, 14.6, 12.5, 12.6, 15.1_

  - [ ]* 2.6 Write unit tests for layout components
    - Test Navbar renders logo, nav links, CTA button
    - Test Navbar mobile menu toggle behavior
    - Test Footer renders all required links and copyright
    - Test SectionWrapper applies correct classes for each background variant
    - Run jest-axe on Navbar and Footer for accessibility violations
    - _Requirements: 2.1, 2.2, 9.1-9.7, 12.1_

- [x] 3. Checkpoint - Verify project builds and layout renders
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. UI utility components
  - [x] 4.1 Create AnimateOnScroll component
    - Build `components/ui/AnimateOnScroll.tsx` as a client component ("use client")
    - Implement Intersection Observer to add CSS animation class when element enters viewport
    - Support animations: fade-in, slide-up, fade-slide-up with configurable delay for staggering
    - Respect `prefers-reduced-motion`: skip all animations when enabled
    - Animation duration 300-600ms with easing function
    - _Requirements: 13.8_

  - [x] 4.2 Create Icon component with SVG icons
    - Build `components/ui/Icon.tsx` with inline SVG icons (no external icon library)
    - Support all icon names referenced in constants: phone-send, message-auto, reply, star-link, shield, inbox, tap, route, chart, bell, cloud-off, lock, copy-check, clock, alert-circle, thermometer, wrench, zap, sparkles, tree, more-horizontal, star, shield-alert, trending-up, check
    - Support size prop (default 24px), className, ariaLabel (for standalone icons), ariaHidden (for decorative)
    - _Requirements: 12.2, 12.7, 3.9_

  - [x] 4.3 Create FeatureCard component
    - Build `components/ui/FeatureCard.tsx` with icon, title, description
    - Gray (#F2F4F7) card background, rounded corners (rounded-xl), padding
    - Ensure icon has accessible text alternative
    - _Requirements: 4.3, 13.4_

  - [x] 4.4 Create StepCard component
    - Build `components/ui/StepCard.tsx` with teal circle containing step number, icon, title, description
    - Step number displayed in teal (#0CBFA6) circle, minimum 32×32px icon
    - _Requirements: 3.2, 3.9_

  - [x] 4.5 Create PricingCard component
    - Build `components/ui/PricingCard.tsx` with tier name, price, SMS quota, description, CTA button
    - Support highlighted prop: teal border, scale-105 transform, badge display
    - CTA button with placeholder href "#"
    - _Requirements: 6.3, 6.5, 6.6_

  - [x] 4.6 Create SmsBubble component
    - Build `components/ui/SmsBubble.tsx` with message, direction (sent/received), timestamp
    - Sent messages: right-aligned, teal/navy background, white text
    - Received messages: left-aligned, light gray background, dark text
    - Support ratingBadge prop with colored circle (teal/green for positive, orange/amber for negative)
    - _Requirements: 5.3, 5.6, 5.7_

  - [x] 4.7 Create PhoneMockup component
    - Build `components/ui/PhoneMockup.tsx` with device frame (rounded corners, bezel shadow)
    - Wrap Next.js Image component with proper width/height to prevent CLS
    - Accept imageSrc, imageAlt, className props
    - _Requirements: 1.5, 13.9_

  - [ ]* 4.8 Write unit tests for UI components
    - Test FeatureCard renders icon, title, description
    - Test StepCard renders step number in teal circle
    - Test PricingCard highlighted variant applies badge and distinct styling
    - Test SmsBubble direction affects alignment and background color
    - Test AnimateOnScroll respects prefers-reduced-motion
    - Test Icon renders correct SVG and accessibility attributes
    - _Requirements: 4.3, 3.2, 6.5, 5.6, 13.8, 12.7_

- [x] 5. Section components (content sections)
  - [x] 5.1 Build Hero section
    - Build `components/sections/Hero.tsx` with headline "More 5-star reviews. Less effort."
    - Add subheadline "Nudg turns finished jobs into more Google reviews with one simple text—automatically."
    - Render 4 value proposition blocks (icon + bold title + description) from VALUE_PROPOSITIONS constant
    - Add App Store CTA button with accessible name and placeholder href
    - Add PhoneMockup showing Nudg dashboard with descriptive alt text
    - Desktop: 2-column layout (text left, phone right). Mobile: single-column stacked (text above phone, value props in 2×2 grid)
    - Ensure hero content fits within initial desktop viewport (1280px+)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7_

  - [x] 5.2 Build How It Works section
    - Build `components/sections/HowItWorks.tsx` with section heading "How It Works" and id="how-it-works"
    - Render 6 StepCard components from STEPS constant with arrow connectors between steps
    - Desktop (1024px+): 3-column × 2-row grid with arrows between cards
    - Mobile (below 768px): vertical stack in sequential order
    - Wrap each card in AnimateOnScroll for staggered entrance animation
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12_

  - [x] 5.3 Build Features section
    - Build `components/sections/Features.tsx` with section heading (contains "features") and id="features"
    - Render 10 FeatureCard components from FEATURES constant
    - Desktop (1024px+): 3-column grid. Tablet (768-1023px): 2-column grid. Mobile (<768px): single-column
    - Wrap cards in AnimateOnScroll for entrance animations
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 5.4 Build SMS Demo section
    - Build `components/sections/SmsDemo.tsx` with section heading referencing SMS/conversation/experience
    - Render two conversation mockups from SMS constants: "Happy Customer Experience" (positive path) and "Issues Resolved Faster" (negative path)
    - Use SmsBubble components for each message with correct direction, timestamps, and rating badges
    - Desktop: side-by-side conversations. Mobile: stacked vertically
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

  - [x] 5.5 Build Pricing section
    - Build `components/sections/Pricing.tsx` with pricing heading and id="pricing"
    - Render 3 PricingCard components from PRICING_TIERS constant in ascending order
    - Growth tier highlighted with "14 day Free Trial" badge and visual distinction
    - Include "All features included" statement
    - Include note about Apple App Store subscription management
    - No payment forms or purchase buttons
    - Desktop: 3-column layout. Mobile: stacked
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9_

  - [x] 5.6 Build Social Proof section
    - Build `components/sections/SocialProof.tsx` with two subsections
    - "Built for Service Businesses": render 6 industry icons + labels from INDUSTRIES constant
    - "Loved by Business Owners": render testimonial card with 5-star rating, quote, name, title, business type, avatar
    - Desktop (1024px+): 2-column layout. Mobile: stacked vertically
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [x] 5.7 Build Bottom CTA section
    - Build `components/sections/BottomCta.tsx` with navy background
    - Display Nudg logo mark (teal arrow icon) above or left of headline
    - Headline: "One text. Happier customers. More 5-star reviews."
    - Prominent "Start Your Free Trial" button (placeholder href "#")
    - Trust indicators with checkmark icons: "14-day free trial", "No credit card required", "Cancel anytime"
    - White and teal text on navy background
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ]* 5.8 Write unit tests for section components
    - Test Hero renders headline, subheadline, 4 value props, CTA button, phone mockup
    - Test HowItWorks renders exactly 6 steps with correct titles
    - Test Features renders exactly 10 feature cards
    - Test SmsDemo renders both positive and negative conversation paths
    - Test Pricing renders 3 tier cards with Growth highlighted
    - Test SocialProof renders industries and testimonial
    - Test BottomCta renders headline, CTA button, 3 trust indicators
    - Run jest-axe accessibility checks on each section
    - _Requirements: 1.1-1.5, 3.1-3.8, 4.1-4.2, 5.1-5.5, 6.1-6.5, 7.1-7.3, 8.1-8.3, 12.1_

- [x] 6. Checkpoint - Full page renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Static assets, SEO, and performance optimization
  - [x] 7.1 Add static assets and favicon
    - Create/add placeholder phone mockup images in `public/images/mockups/`
    - Create Open Graph image (1200×630) in `public/images/og-image.png`
    - Add favicon files: `favicon.ico` (16×16) and `favicon-32x32.png` (32×32) using Nudg teal arrow icon
    - _Requirements: 14.2, 13.10_

  - [x] 7.2 Create sitemap.xml, robots.txt, and configure SEO metadata
    - Create `public/sitemap.xml` listing all public pages (/, /privacy, /terms) with absolute URLs
    - Create `public/robots.txt` allowing all crawlers and referencing sitemap.xml
    - Ensure unique meta title (≤60 chars) and meta description (≤160 chars) per page
    - Add canonical URL meta tag on each page
    - Verify single h1 per page in markup
    - _Requirements: 14.1, 14.3, 14.4, 14.5, 14.6_

  - [x] 7.3 Optimize images and performance
    - Use Next.js `<Image>` component with explicit width/height for all images to prevent CLS
    - Configure images for WebP/AVIF output with JPEG/PNG fallback
    - Add `loading="lazy"` for below-fold images, `priority` for hero image
    - Verify LCP target (hero image or headline) loads quickly
    - Ensure no layout shift from font loading (next/font handles this)
    - _Requirements: 11.2, 11.3, 11.4, 11.5, 11.6_

- [x] 8. Responsive design and accessibility polish
  - [x] 8.1 Verify and fix responsive layout across breakpoints
    - Test at 320px, 768px, 1024px, 1440px viewport widths
    - Ensure no horizontal overflow at any breakpoint
    - Verify touch targets ≥44×44px on mobile
    - Verify body text ≥16px on all viewports
    - Ensure single-column mobile-first layout expands at breakpoints
    - Fix any overlapping, truncated, or unreachable elements
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [x] 8.2 Verify and fix accessibility compliance
    - Verify all non-decorative images have alt text; decorative images use alt=""
    - Verify color contrast ratios (4.5:1 body text, 3:1 large text) for all color combinations
    - Verify keyboard navigation works for all interactive elements with visible focus indicators
    - Verify semantic HTML structure (nav, main, section, footer, h1-h6)
    - Verify ARIA labels on all icon-only interactive elements
    - Verify logical reading order matches visual layout
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7_

  - [ ]* 8.3 Write E2E tests for responsive and navigation behavior
    - Playwright test: verify no horizontal scroll at 320px, 768px, 1024px, 1440px
    - Playwright test: verify smooth scroll navigation on link click
    - Playwright test: verify mobile menu opens/closes and focus trapping
    - Playwright test: verify touch targets ≥44×44px at mobile viewport
    - _Requirements: 10.1, 10.2, 10.4, 2.3, 2.7, 12.8_

  - [ ]* 8.4 Write accessibility integration tests
    - Run jest-axe on full page composition
    - Verify prefers-reduced-motion disables animations
    - Verify screen reader order matches visual layout
    - _Requirements: 12.1, 13.8, 12.6_

- [x] 9. Build verification and final integration
  - [x] 9.1 Verify static build and deployment readiness
    - Run `next build` and confirm static export succeeds with no errors
    - Verify `/out` directory contains only static HTML, CSS, JS, and image assets
    - Verify no API routes or middleware in output
    - Verify sitemap.xml and robots.txt present in build output
    - Verify all pages generate valid HTML
    - Confirm no server-side runtime dependencies
    - _Requirements: 15.3, 15.6, 14.3, 14.4_

  - [ ]* 9.2 Run Lighthouse audit and validate scores
    - Run Lighthouse on built site: Performance ≥90, Accessibility ≥95, SEO ≥90
    - Verify LCP ≤1.5s on simulated 4G
    - Verify CLS ≤0.1
    - Fix any issues found
    - _Requirements: 11.1, 11.4, 11.6, 12.1_

- [x] 10. Final checkpoint - Production ready
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- No property-based tests — this is a static site with hardcoded content, no algorithmic logic
- Unit tests validate component rendering and accessibility
- E2E tests validate responsive behavior and navigation
- All App Store CTAs use placeholder href "#" until the real listing is available
- Phone mockup images can be placeholder screenshots initially

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2"] },
    { "id": 3, "tasks": ["2.3", "2.4", "2.5", "4.1", "4.2"] },
    { "id": 4, "tasks": ["4.3", "4.4", "4.5", "4.6", "4.7", "2.6"] },
    { "id": 5, "tasks": ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "4.8"] },
    { "id": 6, "tasks": ["5.8", "7.1", "7.2", "7.3"] },
    { "id": 7, "tasks": ["8.1", "8.2"] },
    { "id": 8, "tasks": ["8.3", "8.4", "9.1"] },
    { "id": 9, "tasks": ["9.2"] }
  ]
}
```
