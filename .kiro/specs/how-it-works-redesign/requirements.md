# Requirements Document

## Introduction

Redesign the "How It Works" section of the Nudgli marketing website with a premium SaaS-quality visual treatment inspired by Apple, Linear, Stripe, and Vercel. The section presents three sequential stages (Send, Customers Respond, Grow) with large typography, generous whitespace, minimal copy, and a visually striking split layout as the centerpiece. The section ends with a final CTA block. All other page sections remain unchanged.

## Glossary

- **HowItWorks_Section**: The React component rendered between the Hero section and the Features section on the homepage, identified by the `#how-it-works` anchor
- **Send_Stage**: The first stage of the How It Works flow, showing a phone mockup of the Send Request screen with supporting headline and subtitle copy
- **Respond_Stage**: The second stage of the How It Works flow, featuring a large split layout (green/amber) that illustrates happy-path vs needs-attention customer outcomes
- **Grow_Stage**: The third stage of the How It Works flow, displaying the dashboard screenshot to represent business growth
- **Split_Layout**: A two-panel visual component within the Respond_Stage that contrasts the happy-customer path (green, left) against the needs-attention path (amber, right)
- **Final_CTA**: The closing call-to-action block at the bottom of the HowItWorks_Section with specific headline, supporting copy, button, and disclaimer text
- **PhoneMockup**: The existing reusable UI component that renders a dark-bezel phone frame with notch around a screenshot image
- **SectionWrapper**: The existing layout component that provides consistent section padding, max-width container, and background color options
- **AnimateOnScroll**: The existing UI component that provides intersection-observer-based entrance animations

## Requirements

### Requirement 1: Section Structure and Page Integration

**User Story:** As a site visitor, I want the How It Works section to appear in the correct position on the homepage so that the page narrative flows logically from Hero to How It Works to Features.

#### Acceptance Criteria

1. THE HowItWorks_Section SHALL render between the Hero section and the Features section on the homepage
2. THE HowItWorks_Section SHALL use the existing SectionWrapper component with a white background
3. THE HowItWorks_Section SHALL retain the `how-it-works` HTML id attribute for anchor navigation
4. THE HowItWorks_Section SHALL present three stages in sequential vertical order: Send_Stage, Respond_Stage, Grow_Stage, followed by the Final_CTA

### Requirement 2: Send Stage Presentation

**User Story:** As a site visitor, I want to see a clear visual of the Send Request screen with concise supporting copy so that I understand the first step of the Nudgli workflow.

#### Acceptance Criteria

1. THE Send_Stage SHALL display the headline "Send" in large bold typography
2. THE Send_Stage SHALL display the subheadline "Send one text after every completed job"
3. THE Send_Stage SHALL display the supporting copy "Enter your customer's phone number and Nudgli handles the rest"
4. THE Send_Stage SHALL render a PhoneMockup component displaying the `/images/mockups/app-send-request.png` image
5. THE Send_Stage SHALL use the existing PhoneMockup component with the dark bezel and notch pattern
6. THE Send_Stage SHALL apply entrance animation using the AnimateOnScroll component

### Requirement 3: Respond Stage with Split Layout

**User Story:** As a site visitor, I want to see a visually striking split layout showing both possible customer paths so that I understand how Nudgli intelligently routes feedback.

#### Acceptance Criteria

1. THE Respond_Stage SHALL display the headline "Customers Respond"
2. THE Split_Layout SHALL be the visual centerpiece of the HowItWorks_Section with greater visual prominence than the other two stages
3. THE Split_Layout SHALL present two side-by-side panels on viewports 1024px and wider
4. THE Split_Layout SHALL stack panels vertically on viewports narrower than 1024px
5. THE Split_Layout SHALL display a green-themed left panel representing the happy-customer path with a 5-star rating indicator
6. THE Split_Layout SHALL display an amber-themed right panel representing the needs-attention path
7. WHEN a customer rates highly, THE Split_Layout green panel SHALL communicate that a Google Review link is sent automatically
8. WHEN a customer rates poorly, THE Split_Layout amber panel SHALL communicate that private feedback is routed to the business owner
9. THE Respond_Stage SHALL apply entrance animation using the AnimateOnScroll component

### Requirement 4: Grow Stage Presentation

**User Story:** As a site visitor, I want to see the dashboard screenshot representing business growth so that I understand the end result of using Nudgli.

#### Acceptance Criteria

1. THE Grow_Stage SHALL display the headline "Grow"
2. THE Grow_Stage SHALL display the `/images/mockups/app-dashboard.png` image as a dashboard screenshot
3. THE Grow_Stage SHALL present the dashboard image without a phone frame, displayed as a browser-style or flat screenshot
4. THE Grow_Stage SHALL apply entrance animation using the AnimateOnScroll component

### Requirement 5: Final CTA Block

**User Story:** As a site visitor, I want a compelling call-to-action at the end of the How It Works section so that I am motivated to start a free trial.

#### Acceptance Criteria

1. THE Final_CTA SHALL display the headline "Your best customers want to help. They just need a nudge."
2. THE Final_CTA SHALL display the supporting copy "Start collecting more Google reviews while giving every unhappy customer a chance to be heard first."
3. THE Final_CTA SHALL display a primary action button with the label "Start Free Trial"
4. THE Final_CTA SHALL display the disclaimer text "No credit card required" below the button
5. THE Final_CTA SHALL use the existing Button component with the primary variant
6. THE Final_CTA SHALL apply entrance animation using the AnimateOnScroll component

### Requirement 6: Premium Visual Aesthetic

**User Story:** As a site visitor, I want the section to feel visually premium and modern so that I trust Nudgli as a professional product.

#### Acceptance Criteria

1. THE HowItWorks_Section SHALL use large typography for stage headlines (minimum 2xl on mobile, scaling to 4xl or larger on desktop)
2. THE HowItWorks_Section SHALL maintain generous vertical whitespace between stages (minimum 80px spacing on desktop)
3. THE HowItWorks_Section SHALL use minimal copy per stage with no more than two lines of supporting text per stage
4. THE HowItWorks_Section SHALL use the project design tokens for colors: navy for text, teal for accents, white for backgrounds
5. THE HowItWorks_Section SHALL use light backgrounds throughout, consistent with the rest of the site

### Requirement 7: Responsive Layout

**User Story:** As a mobile visitor, I want the How It Works section to display correctly on all screen sizes so that I have a good experience regardless of device.

#### Acceptance Criteria

1. THE HowItWorks_Section SHALL display content in a single-column layout on viewports narrower than 768px
2. THE Split_Layout SHALL use side-by-side panels on viewports 1024px and wider
3. THE HowItWorks_Section SHALL maintain readable typography and appropriate spacing at all breakpoints between 320px and 1536px
4. THE PhoneMockup in the Send_Stage SHALL scale proportionally and remain centered on mobile viewports

### Requirement 8: Accessibility

**User Story:** As a visitor using assistive technology, I want the How It Works section to be accessible so that I can understand the content regardless of how I interact with the page.

#### Acceptance Criteria

1. THE HowItWorks_Section SHALL include descriptive alt text on all images
2. THE HowItWorks_Section SHALL maintain a logical heading hierarchy (h2 for section, h3 for stages)
3. THE HowItWorks_Section SHALL respect the user's prefers-reduced-motion setting by disabling animations when reduced motion is preferred
4. THE Final_CTA button SHALL have sufficient color contrast ratio of at least 4.5:1 between text and background

### Requirement 9: Isolation of Changes

**User Story:** As a developer, I want the redesign to be contained within the HowItWorks component so that no other sections of the site are affected.

#### Acceptance Criteria

1. THE HowItWorks_Section redesign SHALL modify only the `components/sections/HowItWorks.tsx` file for component logic
2. THE HowItWorks_Section redesign SHALL preserve the existing component export name and interface (no props changes)
3. THE HowItWorks_Section redesign SHALL reuse existing UI components (SectionWrapper, AnimateOnScroll, Button, PhoneMockup) without modifying their source files
4. THE HowItWorks_Section redesign SHALL preserve the existing page.tsx import and rendering order without modification
