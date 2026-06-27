export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  smsQuota: string;
  description: string;
  highlighted: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  businessType: string;
  rating: number;
  avatarSrc: string;
}

export interface Industry {
  name: string;
  icon: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface SmsMessage {
  id: string;
  direction: 'sent' | 'received';
  message: string;
  timestamp: string;
  ratingBadge?: { value: number; sentiment: 'positive' | 'negative' };
}

export interface SmsConversation {
  label: string;
  messages: SmsMessage[];
}

export interface NavLink {
  label: string;
  href: string;
}
