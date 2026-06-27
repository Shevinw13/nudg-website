import type {
  Feature,
  Step,
  PricingTier,
  Testimonial,
  Industry,
  ValueProposition,
  SmsConversation,
  NavLink,
} from './types';

export const BRAND = {
  colors: {
    navy: '#0B1D3A',
    teal: '#0CBFA6',
    mint: '#E6F9F6',
    gray: '#F2F4F7',
    lightGray: '#E5E7EB',
    successGreen: '#22C55E',
    white: '#FFFFFF',
  },
  fonts: {
    primary: 'Inter',
  },
  maxWidth: '1280px',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

export const STEPS: Step[] = [
  { number: 1, title: 'Send Request', description: "Enter your customer's phone number.", icon: 'phone-send' },
  { number: 2, title: 'Nudg Sends the Text', description: 'Nudg automatically sends a friendly text asking for a rating.', icon: 'message-auto' },
  { number: 3, title: 'Customer Replies', description: 'They simply reply with a number from 1–5.', icon: 'reply' },
  { number: 4, title: 'Happy Customers', description: '5-star customers receive your Google Review link.', icon: 'star-link' },
  { number: 5, title: 'Private Feedback', description: 'Lower ratings come directly to you so you can make things right.', icon: 'shield' },
  { number: 6, title: 'Manage Everything', description: 'Track feedback and resolve issues from one inbox.', icon: 'inbox' },
];


export const FEATURES: Feature[] = [
  {
    id: 'one-tap',
    icon: 'tap',
    title: 'One-Tap SMS Requests',
    description: "Just enter a phone number. Optional customer name and service type. That's it.",
  },
  {
    id: 'smart-routing',
    icon: 'route',
    title: 'Smart Routing',
    description: 'Positive ratings go to Google Reviews. Negative ratings go to your private feedback inbox. Automatically.',
  },
  {
    id: 'dashboard',
    icon: 'chart',
    title: 'Real-Time Dashboard',
    description: 'See reviews sent, positive responses, needs attention count, and month-over-month growth at a glance.',
  },
  {
    id: 'inbox',
    icon: 'inbox',
    title: 'Feedback Inbox',
    description: 'View negative feedback, call customers directly, and mark issues resolved. All in one place.',
  },
  {
    id: 'notifications',
    icon: 'bell',
    title: 'Push Notifications',
    description: "Get alerted within 60 seconds of new feedback or when you're approaching your SMS limit.",
  },
  {
    id: 'offline',
    icon: 'cloud-off',
    title: 'Offline Resilient',
    description: 'Forms are cached locally. Failed sends retry automatically with exponential backoff. Nothing gets lost.',
  },
  {
    id: 'secure',
    icon: 'lock',
    title: 'Secure by Default',
    description: 'AES-256 encryption for all customer data. Audit logging. GDPR-style deletion on request.',
  },
  {
    id: 'duplicate',
    icon: 'copy-check',
    title: 'Duplicate Protection',
    description: 'Warns you if a customer was already texted in the last 24 hours. No accidental spam.',
  },
  {
    id: 'expiry',
    icon: 'clock',
    title: 'Conversation Expiry',
    description: 'Customers have 72 hours to respond. After that, the conversation closes automatically.',
  },
  {
    id: 'invalid',
    icon: 'alert-circle',
    title: 'Invalid Response Handling',
    description: 'If a customer sends something other than 1-5, we ask once more. After 2 invalid attempts, we politely end it.',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$9.99/mo',
    smsQuota: '250 SMS/month',
    description: 'Solo operators just getting started',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$29.99/mo',
    smsQuota: '1,000 SMS/month',
    description: 'Growing businesses with steady clients',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$79.99/mo',
    smsQuota: '5,000 SMS/month',
    description: 'High-volume service businesses',
    highlighted: false,
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'HVAC', icon: 'thermometer' },
  { name: 'Plumbing', icon: 'wrench' },
  { name: 'Electrical', icon: 'zap' },
  { name: 'Cleaning', icon: 'sparkles' },
  { name: 'Landscaping', icon: 'tree' },
  { name: 'Roofing', icon: 'shield' },
  { name: 'Pest Control', icon: 'alert-circle' },
  { name: '20+ Industries', icon: 'more-horizontal' },
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    icon: 'star',
    title: 'More 5-Star Reviews',
    description: 'Turn happy customers into public advocates for your business.',
  },
  {
    icon: 'shield-alert',
    title: 'Catch Issues Early',
    description: 'Know about unhappy customers before they leave a public review.',
  },
  {
    icon: 'clock',
    title: 'Save Time',
    description: 'One text replaces manual follow-ups and review requests.',
  },
  {
    icon: 'trending-up',
    title: 'Grow Your Business',
    description: 'More reviews improve local visibility and customer trust.',
  },
];

export const SMS_CONVERSATIONS: SmsConversation[] = [
  {
    label: 'Happy Customer',
    messages: [
      { id: 'happy-1', direction: 'sent', message: 'Hi Jane! Thanks for choosing ABC Plumbing today. How would you rate your experience? Reply with a number from 1–5.', timestamp: 'Today 10:15 AM' },
      { id: 'happy-2', direction: 'received', message: '5', timestamp: 'Today 10:18 AM', ratingBadge: { value: 5, sentiment: 'positive' } },
      { id: 'happy-3', direction: 'sent', message: "🎉 Awesome! We're so glad you had a great experience. Would you mind taking 30 seconds to leave us a Google review?\n\nLeave a Review: https://g.page/ABCPlumbing/review\n\nThanks for supporting our local business!", timestamp: 'Today 10:18 AM' },
    ],
  },
  {
    label: 'Needs Attention',
    messages: [
      { id: 'negative-1', direction: 'sent', message: 'Hi Jane! Thanks for choosing ABC Plumbing today. How would you rate your experience? Reply with a number from 1–5.', timestamp: 'Today 2:30 PM' },
      { id: 'negative-2', direction: 'received', message: '2', timestamp: 'Today 2:45 PM', ratingBadge: { value: 2, sentiment: 'negative' } },
      { id: 'negative-3', direction: 'sent', message: "We're sorry your experience wasn't what we hoped for. Someone from our team will reach out shortly to make things right.\n\nThank you for your feedback.", timestamp: 'Today 2:45 PM' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: "Nudg made getting reviews effortless. I simply enter the customer's number before I leave the job and the reviews start coming in. It's the simplest tool we've added to our business.",
    name: 'Tom R.',
    title: 'Owner',
    businessType: 'HVAC Company',
    rating: 5,
    avatarSrc: '/images/icons/avatar-placeholder.svg',
  },
];
