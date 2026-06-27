# Requirements Document

## Introduction

Nudg is a static, read-only marketing website showcasing the Nudg iOS mobile app — a tool that helps small service businesses (plumbers, barbers, dentists, cleaners, etc.) generate more Google reviews by automatically texting customers after a completed service. The website's primary purpose is to articulate in simple, short, easy-to-understand language how easy it is to use Nudg. It communicates the app's value proposition, demonstrates its simplicity through visual mockups and an SMS conversation demo, displays pricing tiers, and will eventually drive visitors to download the app from the Apple App Store (App Store link to be added later). The site is entirely read-only with no user accounts, no payments, no forms, and no dynamic features. It is built with Next.js (App Router) and Tailwind CSS, deployed to Vercel, and designed with a sleek, minimal aesthetic inspired by Linear, Raycast, and Cal.com.

## Glossary

- **Website**: The Nudg static marketing site deployed at the primary domain
- **Visitor**: Any person browsing the Website
- **Hero_Section**: The top-most viewport of the landing page containing the primary headline, subheadline, App Store CTA, and phone mockup
- **How_It_Works_Section**: The section illustrating the 6-step SMS review collection flow
- **Features_Section**: The section highlighting key capabilities of the Nudg app using feature cards
- **Pricing_Section**: The section displaying subscription tier information
- **SMS_Demo_Section**: The section showing a simulated SMS conversation mockup demonstrating the customer experience
- **Social_Proof_Section**: The section displaying target industries and a customer testimonial
- **Bottom_CTA_Section**: The final call-to-action section above the footer with a prominent "Start Your Free Trial" button
- **Footer**: The bottom section containing navigation links, legal links, contact info, and App Store CTA
- **Navigation**: The sticky site header containing section links and a download button
- **App_Store_CTA**: A button or badge that will eventually link to the Apple App Store listing for Nudg (placeholder "#" href until App Store link is available)
- **Phone_Mockup**: A visual representation of a mobile phone frame containing app screenshots or UI illustrations
- **Feature_Card**: A card component displaying a feature icon, title, and brief description
- **Page**: The single-page landing layout comprising all sections of the Website

## Requirements

### Requirement 1: Hero Section with Value Proposition

**User Story:** As a small business owner visiting the site, I want to immediately understand what Nudg does and how it helps me, so that I can decide whether to download the app.

#### Acceptance Criteria

1. WHEN a Visitor loads the Page, THE Hero_Section SHALL display a headline of "More 5-star reviews. Less effort." or equivalent copy that references reviews and ease of use
2. WHEN a Visitor loads the Page, THE Hero_Section SHALL display a subheadline of "Nudg turns finished jobs into more Google reviews with one simple text—automatically." or equivalent copy referencing automation and simplicity
3. THE Hero_Section SHALL display a row of exactly 4 value proposition blocks below the subheadline, each with an icon, a bold title, and a one-sentence description: "More 5-Star Reviews", "Catch Issues Early", "Save Time", and "Grow Your Business"
4. THE Hero_Section SHALL display an App_Store_CTA styled as a button with placeholder href ("#") until the App Store link is available; the button SHALL have an accessible name describing its purpose
5. THE Hero_Section SHALL display a Phone_Mockup showing the Nudg app Home Dashboard screen (displaying Review Opportunities Created, Happy Customers, Needs Attention, Response Rate, and a "Send Review Request" button) with alt text describing the app interface
6. WHILE the viewport width is 1280px or above, THE Hero_Section SHALL render its headline, subheadline, value propositions, App_Store_CTA, and Phone_Mockup within the initial viewport without requiring vertical scrolling
7. WHILE the viewport width is below 768px, THE Hero_Section SHALL adapt its layout to a single-column stacked arrangement with the headline, subheadline, and App_Store_CTA positioned above the Phone_Mockup in the document flow, and the value proposition blocks stacked in a 2×2 grid or single column

### Requirement 2: Navigation

**User Story:** As a visitor, I want a clear navigation bar so that I can quickly jump to any section of the page.

#### Acceptance Criteria

1. THE Navigation SHALL display the Nudg horizontal lockup logo (teal curved-arrow icon to the left of the lowercase "nudg" wordmark in navy) on the left side as a clickable element that scrolls the Page to the top
2. THE Navigation SHALL display links labeled "How It Works", "Features", and "Pricing" that correspond to the How_It_Works_Section, Features_Section, and Pricing_Section respectively
3. WHEN a Visitor clicks a Navigation link, THE Website SHALL smooth-scroll to the corresponding section over a duration between 300ms and 800ms
4. THE Navigation SHALL display an App_Store_CTA styled as a filled button with placeholder href ("#") visually differentiated from the text-styled navigation links
5. WHEN a Visitor scrolls down the Page past the Hero_Section, THE Navigation SHALL remain fixed at the top of the viewport with a z-index ensuring it overlays page content
6. WHILE the viewport width is below 768px, THE Navigation SHALL hide the navigation links and display a hamburger menu icon with an accessible label of "Menu" or "Open navigation"
7. WHEN a Visitor taps the hamburger menu icon, THE Navigation SHALL expand to display all navigation links in a vertically stacked menu; WHEN a Visitor taps a link within the expanded menu or taps the hamburger icon again, THE Navigation SHALL collapse the menu

### Requirement 3: How It Works Section

**User Story:** As a small business owner, I want to see how the SMS review flow works step by step, so that I understand the process before downloading.

#### Acceptance Criteria

1. THE How_It_Works_Section SHALL display a section heading of "How It Works" or equivalent
2. THE How_It_Works_Section SHALL display the review collection process in exactly 6 sequential steps, each with a visible step number (1-6) displayed in a teal circle
3. THE How_It_Works_Section SHALL describe Step 1 "Send a Text" with a description referencing entering the customer's phone number after every job
4. THE How_It_Works_Section SHALL describe Step 2 "We Text Automatically" with a description referencing sending a friendly request asking for a 1-5 rating
5. THE How_It_Works_Section SHALL describe Step 3 "They Reply with a Number" with a description referencing customers replying with a number from 1-5
6. THE How_It_Works_Section SHALL describe Step 4 "Happy Customers Get a Review Link" with a description referencing 5-star replies receiving a link to leave a Google review
7. THE How_It_Works_Section SHALL describe Step 5 "Issues Come to You First" with a description referencing lower ratings coming directly to the business owner to fix
8. THE How_It_Works_Section SHALL describe Step 6 "You Manage Everything in One Inbox" with a description referencing viewing, replying, and resolving all feedback in one place
9. THE How_It_Works_Section SHALL display an icon or illustration of minimum 32×32 pixels for each step
10. THE How_It_Works_Section SHALL display arrow connectors between adjacent steps to convey sequential flow
11. WHILE the viewport width is 1024px or above, THE How_It_Works_Section SHALL display the 6 steps in a 2-row × 3-column grid or a horizontal scrollable row with arrows between steps
12. WHILE the viewport width is below 768px, THE How_It_Works_Section SHALL stack all 6 steps vertically in sequential order

### Requirement 4: Features Section

**User Story:** As a small business owner, I want to learn about the app's key features, so that I understand the full value of Nudg beyond the core SMS flow.

#### Acceptance Criteria

1. THE Features_Section SHALL display a section heading that contains the word "features" or "capabilities" and is between 3 and 10 words in length
2. THE Features_Section SHALL display exactly 10 Feature_Card components, one for each of the following: One-Tap SMS Requests, Smart Routing, Real-Time Dashboard, Feedback Inbox, Push Notifications, Offline Resilient, Secure by Default, Duplicate Protection, Conversation Expiry, and Invalid Response Handling
3. THE Features_Section SHALL present each Feature_Card with a title matching the feature name, a description of 10 to 50 words, and a visually distinct icon with an accessible text alternative describing the feature
4. WHILE the viewport width is between 768px and 1023px, THE Features_Section SHALL arrange Feature_Card components in a 2-column grid layout
5. WHILE the viewport width is 1024px or above, THE Features_Section SHALL arrange Feature_Card components in a 3-column grid layout
6. WHILE the viewport width is below 768px, THE Features_Section SHALL stack Feature_Card components in a single-column layout

### Requirement 5: SMS Demo Section

**User Story:** As a small business owner, I want to see what the SMS conversation looks like from my customer's perspective, so that I feel confident about the experience before downloading.

#### Acceptance Criteria

1. THE SMS_Demo_Section SHALL display a section heading that communicates the customer text message experience using words such as "experience", "conversation", or "SMS"
2. THE SMS_Demo_Section SHALL display two side-by-side conversation mockups on desktop (stacked on mobile): one labeled "Happy Customer Experience" and one labeled "Issues Resolved Faster"
3. THE SMS_Demo_Section SHALL style each conversation with rounded message bubbles, distinct background colors for sent versus received messages, and timestamp headers (e.g., "Today 10:15 AM")
4. THE SMS_Demo_Section SHALL show the positive path ("Happy Customer Experience"): an outbound rating request → customer reply of "5" → system response with celebratory acknowledgment, Google Review link, and thank-you message
5. THE SMS_Demo_Section SHALL show the negative path ("Issues Resolved Faster"): an outbound rating request → customer reply of "2" → system response with empathetic apology, a statement that someone will reach out, and appreciation for the feedback
6. THE SMS_Demo_Section SHALL align outbound messages (sent by the system) to the right side with a teal or navy background, and inbound messages (sent by the customer) to the left side with a light gray or white background
7. THE SMS_Demo_Section SHALL display the customer's rating reply in a colored circle badge (teal/green for positive, orange/amber for negative) to visually differentiate the rating

### Requirement 6: Pricing Section

**User Story:** As a small business owner, I want to see the subscription pricing tiers, so that I can understand the cost before downloading the app.

#### Acceptance Criteria

1. THE Pricing_Section SHALL display a section heading communicating pricing information
2. THE Pricing_Section SHALL display exactly 3 subscription tiers in ascending order: Starter ($9.99/mo, 250 SMS per month), Growth ($29.99/mo, 1000 SMS per month), and Pro ($79.99/mo, 5000 SMS per month)
3. THE Pricing_Section SHALL display the tier name, monthly price, SMS quota, and a target-user description of no more than 60 characters for each tier
4. THE Pricing_Section SHALL state that all tiers include all features
5. THE Pricing_Section SHALL visually highlight the Growth tier as the recommended option by displaying a "14 day Free Trial" or "Most Popular" badge and applying a distinct visual treatment (e.g., border, scale, or background color) that differentiates it from the other two tier cards
6. THE Pricing_Section SHALL include a call-to-action with text such as "Start Free Trial" or "Download the App" using a placeholder href ("#") until the App Store link is available
7. THE Pricing_Section SHALL state that subscriptions are managed via the Apple App Store
8. THE Pricing_Section SHALL NOT include any payment forms, purchase buttons, or transaction functionality
9. THE Website SHALL NOT include any forms, user input fields, account creation flows, or payment processing on any page

### Requirement 7: Social Proof Section

**User Story:** As a small business owner, I want to see that Nudg is built for businesses like mine and that other owners trust it, so that I feel confident downloading it.

#### Acceptance Criteria

1. THE Social_Proof_Section SHALL display a "Built for Service Businesses" subsection with icons and labels for at least 5 service industries: HVAC, Plumbing, Electrical, Cleaning, and Landscaping, plus a "& More" indicator
2. THE Social_Proof_Section SHALL display a "Loved by Business Owners" subsection containing at least one customer testimonial
3. THE Social_Proof_Section SHALL display each testimonial with a 5-star rating, quoted text, the reviewer's name, title/role, and business type
4. THE Social_Proof_Section SHALL display a profile photo or avatar alongside each testimonial
5. WHILE the viewport width is 1024px or above, THE Social_Proof_Section SHALL display the industries subsection and testimonial subsection side by side in a 2-column layout
6. WHILE the viewport width is below 768px, THE Social_Proof_Section SHALL stack the industries and testimonial subsections vertically

### Requirement 8: Bottom CTA Section

**User Story:** As a visitor who has scrolled through the entire page, I want a final prominent call-to-action, so that I can easily start my free trial.

#### Acceptance Criteria

1. THE Bottom_CTA_Section SHALL display a headline of "One text. Happier customers. More 5-star reviews." or equivalent motivating copy
2. THE Bottom_CTA_Section SHALL display a prominently styled "Start Your Free Trial" button with a placeholder href ("#") until the App Store link is available
3. THE Bottom_CTA_Section SHALL display trust indicators: "14-day free trial", "No credit card required", and "Cancel anytime" each preceded by a checkmark icon
4. THE Bottom_CTA_Section SHALL use a navy or dark background with white and teal text to create visual contrast from the preceding sections
5. THE Bottom_CTA_Section SHALL display the Nudg logo mark (teal arrow icon) to the left of or above the headline

### Requirement 9: Footer

**User Story:** As a visitor, I want a footer with useful links and legal information, so that I can navigate the site and find relevant policies.

#### Acceptance Criteria

1. THE Footer SHALL display an App Store download badge with a placeholder href ("#") until the Nudg iOS App Store listing is available
2. THE Footer SHALL display a contact email address as a clickable mailto link
3. THE Footer SHALL display a link labeled "Privacy Policy" that navigates to the /privacy page
4. THE Footer SHALL display a link labeled "Terms of Service" that navigates to the /terms page
5. THE Footer SHALL display a copyright notice containing the symbol ©, the current four-digit year, and the text "Nudg"
6. THE Footer SHALL display the Nudg stacked logo (teal curved-arrow icon above the lowercase "nudg" wordmark) or the horizontal lockup as a visible brand identifier
7. THE Footer SHALL display the tagline "The right nudge. More 5-star reviews." near the logo
8. THE Footer SHALL be present on all pages of the site including the home page, /privacy page, and /terms page

### Requirement 10: Responsive Design

**User Story:** As a visitor using any device, I want the website to look good and function correctly on my screen, so that I have a consistent experience.

#### Acceptance Criteria

1. THE Website SHALL render without overlapping elements, truncated text, or unreachable interactive elements at viewport widths of 320px, 768px, 1024px, and 1440px
2. WHILE the viewport width is below 768px, THE Website SHALL use a minimum touch target size of 44×44 CSS pixels for all interactive elements including buttons, links, and menu items
3. THE Website SHALL maintain a minimum body text size of 16px on all viewports
4. WHEN a Visitor resizes the browser window to any width at or above 320px, THE Website SHALL reflow content without requiring horizontal scrolling
5. THE Website SHALL load in a single-column mobile-optimized layout by default before responsive breakpoints expand the layout for wider viewports

### Requirement 11: Performance

**User Story:** As a visitor, I want the website to load quickly, so that I do not abandon the page while waiting.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Performance score of 90 or above on mobile using Lighthouse default mobile throttling settings
2. THE Website SHALL use Next.js static site generation to pre-render all pages at build time
3. THE Website SHALL lazy-load images that are positioned below the initial mobile viewport (412×823 CSS pixels) by deferring their network requests until the user scrolls within 200px of them
4. THE Website SHALL achieve a Largest Contentful Paint (LCP) of 1.5 seconds or less on a simulated 4G connection (150ms RTT, 1.6 Mbps throughput) as measured by Lighthouse
5. THE Website SHALL serve images in WebP or AVIF format with a fallback to JPEG or PNG for browsers that do not support next-generation formats
6. THE Website SHALL achieve a Cumulative Layout Shift (CLS) score of 0.1 or less as measured by Lighthouse on mobile

### Requirement 12: Accessibility

**User Story:** As a visitor with accessibility needs, I want the website to be perceivable and operable, so that I can access all content and functionality.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Accessibility score of 95 or above
2. THE Website SHALL provide alt text for all non-decorative images; decorative images SHALL use an empty alt attribute (alt="") or be rendered via CSS background
3. THE Website SHALL maintain a color contrast ratio of at least 4.5:1 for body text and 3:1 for large text (18px bold or 24px regular) against their backgrounds
4. THE Website SHALL support keyboard navigation for all interactive elements with visible focus indicators that have a minimum 2px outline or border offset from the element edge
5. THE Website SHALL use semantic HTML elements (nav, main, section, footer, h1-h6) to convey document structure
6. WHEN a Visitor navigates with a screen reader, THE Website SHALL present content in a logical reading order matching the visual layout
7. THE Website SHALL provide ARIA labels for all icon-only interactive elements (hamburger menu, social links, icon buttons) that describe their function
8. WHEN the mobile Navigation menu is open, THE Website SHALL trap keyboard focus within the menu until it is closed

### Requirement 13: Visual Design and Brand

**User Story:** As a visitor, I want the website to feel sleek, modern, and approachable, so that it reflects the simplicity and professionalism of the Nudg app.

#### Acceptance Criteria

1. THE Website SHALL use Navy (#0B1D3A) as the primary dark color for text and dark section backgrounds
2. THE Website SHALL use Teal (#0CBFA6) as the primary accent color for CTAs, buttons, and active elements
3. THE Website SHALL use Mint (#E6F9F6) as a light accent for alternating section backgrounds
4. THE Website SHALL use Gray (#F2F4F7) as the background color for elevated card surfaces
5. THE Website SHALL use a maximum content width of 1280px centered on the page with horizontal padding of at least 16px on mobile and at least 32px on viewports 768px and above
6. THE Website SHALL maintain vertical spacing between 80px and 120px between major sections on desktop viewports (1024px and above)
7. THE Website SHALL use no more than 2 typeface families across the entire site, with a clean sans-serif (such as Inter) as the primary typeface
8. WHEN a section enters the viewport during scroll, THE Website SHALL apply a fade-in or slide-up entrance animation with a duration between 300ms and 600ms and an easing function; the animation SHALL not trigger for visitors who have enabled prefers-reduced-motion
9. THE Website SHALL use Phone_Mockup components to display app screenshots within a device frame that includes visible rounded corners and a device bezel or shadow
10. THE Website SHALL use the Nudg logo mark (teal curved-arrow icon) as the favicon in both 16×16 and 32×32 pixel sizes
11. THE Website SHALL reference the brand tagline "The right nudge. More 5-star reviews." in either the hero subheadline or the footer
12. THE Website SHALL use only approved logo variations: horizontal lockup (icon + wordmark) for the Navigation, stacked logo or horizontal lockup for the Footer, and the logo mark alone for the favicon

### Requirement 14: SEO and Metadata

**User Story:** As the Nudg team, I want the website to be discoverable by search engines, so that potential customers can find Nudg organically.

#### Acceptance Criteria

1. THE Website SHALL include a unique meta title (maximum 60 characters) and meta description (maximum 160 characters) on each page
2. THE Website SHALL include Open Graph meta tags (og:title, og:description, og:image) for social media sharing, where og:image references an image with minimum dimensions of 1200×630 pixels
3. THE Website SHALL generate a sitemap.xml file at build time that lists the URLs of all public pages (home, /privacy, /terms)
4. THE Website SHALL include a robots.txt file permitting search engine indexing of all public pages and referencing the sitemap.xml URL
5. THE Website SHALL use a single h1 element per page
6. THE Website SHALL include a canonical URL meta tag on each page that references the page's own absolute URL

### Requirement 15: Static Deployment

**User Story:** As the development team, I want the website to be statically generated and deployed to Vercel, so that it is fast, reliable, and easy to maintain.

#### Acceptance Criteria

1. THE Website SHALL be built using Next.js with the App Router
2. THE Website SHALL be styled using Tailwind CSS
3. THE Website SHALL be configured with static export mode such that the build process generates only pre-rendered HTML, CSS, JavaScript, and image assets with no server-side runtime dependencies, no API routes, and no middleware
4. WHEN a commit is pushed to the main branch, THE Website SHALL trigger an automatic deployment to Vercel that completes within 5 minutes for a successful build
5. IF a build error occurs during deployment, THEN THE Website SHALL fail the deployment, retain the previously deployed stable version, and surface the build failure status in the Vercel dashboard
6. THE Website SHALL contain no dynamic server-rendered routes, no server-side data fetching at request time, and no dependencies requiring a Node.js runtime at serve time
