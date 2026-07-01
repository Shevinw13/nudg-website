# Implementation Plan: How It Works Redesign

## Overview

Replace the internal implementation of `components/sections/HowItWorks.tsx` with a premium three-stage layout (Send → Customers Respond → Grow) plus a final CTA block. The component preserves its existing export signature (no props), reuses existing UI primitives, and modifies only a single file.

## Tasks

- [x] 1. Implement the redesigned HowItWorks component
  - [x] 1.1 Replace the HowItWorks component with new internal structure and SendStage
    - Clear existing component internals (FlowStep, DownDot, PhoneFrame helpers)
    - Keep `"use client"` directive and existing imports for SectionWrapper, AnimateOnScroll, Button
    - Add import for PhoneMockup from `@/components/ui/PhoneMockup`
    - Add import for Image from `next/image`
    - Create the `SendStage` inline function component with:
      - `<h3>` headline "Send" using `text-3xl md:text-4xl lg:text-5xl font-bold text-navy`
      - Subheadline: "Send one text after every completed job"
      - Supporting copy: "Enter your customer's phone number and Nudgli handles the rest"
      - PhoneMockup rendering `/images/mockups/app-send-request.png` with descriptive alt text
    - Scaffold the main `HowItWorks` export with SectionWrapper (id="how-it-works", background="white") rendering SendStage wrapped in AnimateOnScroll
    - _Requirements: 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 9.1, 9.2_

  - [x] 1.2 Implement the RespondStage with split green/amber layout
    - Create the `RespondStage` inline function component with:
      - `<h3>` headline "Customers Respond" using premium typography classes
      - Grid layout: `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8`
      - Green panel (left): rounded-3xl, border-2 border-green-200, gradient accent bar, 5-star indicator with "Happy Customer" badge, 3 benefit items with green check icons (Google Review Generated, More Visibility, Your Business Grows)
      - Amber panel (right): rounded-3xl, border-2 border-amber-200, gradient accent bar, low-star indicator with "Needs Attention" badge, 3 benefit items with amber icons (Private Feedback, Call the Customer, Protect Your Reputation)
    - Wire RespondStage into the main HowItWorks component wrapped in AnimateOnScroll with delay={100}
    - Add `mb-24 lg:mb-32` spacing between SendStage and RespondStage
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 6.2, 7.2_

  - [x] 1.3 Implement the GrowStage and FinalCTA
    - Create the `GrowStage` inline function component with:
      - `<h3>` headline "Grow" using premium typography classes
      - Subheadline: "Watch your reviews and reputation grow"
      - Dashboard image (`/images/mockups/app-dashboard.png`) displayed flat (no phone frame) in a rounded-2xl container with shadow-xl and border-lightGray
      - Descriptive alt text on the image
    - Create the `FinalCTA` inline function component with:
      - `<h3>` headline: "Your best customers want to help. They just need a nudge."
      - Supporting copy: "Start collecting more Google reviews while giving every unhappy customer a chance to be heard first."
      - Button (variant="primary", size="lg", href="#") with label "Start Free Trial"
      - Disclaimer: "No credit card required"
    - Wire GrowStage and FinalCTA into the main component wrapped in AnimateOnScroll with delay={200} and delay={300} respectively
    - Add `mb-24 lg:mb-32` spacing between RespondStage and GrowStage, and `mt-24 lg:mt-32` before FinalCTA
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 6.1, 6.2, 6.3, 6.4, 6.5_

  - [x] 1.4 Verify accessibility and heading hierarchy
    - Ensure the section has a single `<h2>` element (either visually hidden or as a section intro) followed by `<h3>` elements for each stage
    - Verify all images have non-empty descriptive alt attributes
    - Confirm AnimateOnScroll handles prefers-reduced-motion (no code changes needed, just verify usage)
    - Verify Button color contrast meets 4.5:1 ratio (existing Button component handles this)
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 2. Checkpoint - Verify build and visual correctness
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 3. Testing
  - [ ]* 3.1 Write unit tests for HowItWorks component rendering
    - Test that all three stage headlines render in correct order (Send, Customers Respond, Grow)
    - Test that the Final CTA headline, button, and disclaimer render correctly
    - Test that PhoneMockup is rendered with correct imageSrc prop
    - Test that SectionWrapper receives id="how-it-works" and background="white"
    - Test heading hierarchy: verify h2/h3 nesting
    - _Requirements: 1.4, 2.1, 3.1, 4.1, 5.1, 5.3, 8.2_

  - [ ]* 3.2 Write property test for premium typography scale
    - **Property 1: Stage headlines use premium typography scale**
    - **Validates: Requirements 6.1**

  - [ ]* 3.3 Write property test for image alt text
    - **Property 2: All images include descriptive alt text**
    - **Validates: Requirements 8.1**

  - [ ]* 3.4 Write property test for minimal supporting copy
    - **Property 3: Stages have minimal supporting copy**
    - **Validates: Requirements 6.3**

- [x] 4. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Only `components/sections/HowItWorks.tsx` is modified — no other files change
- The existing `page.tsx` import/render order remains untouched
- All existing UI primitives (SectionWrapper, AnimateOnScroll, Button, PhoneMockup) are reused without modification
- Copy text is predefined and static — no API calls or data models involved
- Premium spacing between stages: `mb-24 lg:mb-32` (≥96px desktop, satisfies 80px minimum)
- Typography scale for headlines: `text-3xl md:text-4xl lg:text-5xl`

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["1.3"] },
    { "id": 3, "tasks": ["1.4"] },
    { "id": 4, "tasks": ["3.1", "3.2", "3.3", "3.4"] }
  ]
}
```
