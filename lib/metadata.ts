import type { Metadata } from 'next';

const BASE_URL = 'https://nudgli.app';

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Nudgli',
      images: [
        {
          url: `${BASE_URL}/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'Nudgli - More 5-star reviews with one tap',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/og-image.svg`],
    },
  };
}

export const homeMetadata = createMetadata({
  title: 'Nudgli - More 5-Star Reviews with One Tap',
  description: 'Nudgli turns happy customers into Google reviews and unhappy customers into conversations. Built for local service businesses. No CRM required.',
  path: '',
});

export const privacyMetadata = createMetadata({
  title: 'Privacy Policy - Nudgli',
  description: 'Learn how Nudgli protects your data and respects your privacy. Read our privacy policy for details on data collection and usage.',
  path: '/privacy',
});

export const termsMetadata = createMetadata({
  title: 'Terms of Service - Nudgli',
  description: 'Read the Nudgli terms of service to understand the rules and guidelines for using our SMS review collection platform.',
  path: '/terms',
});

export const smsPrivacyMetadata = createMetadata({
  title: 'SMS Messaging Privacy Policy - Nudgli',
  description: 'Privacy policy for SMS feedback-request messages sent by independent local businesses using the Nudgli platform.',
  path: '/sms-privacy',
});

export const smsTermsMetadata = createMetadata({
  title: 'SMS Messaging Terms & Conditions - Nudgli',
  description: 'Terms and conditions for SMS feedback-request messages sent by independent local businesses using the Nudgli platform.',
  path: '/sms-terms',
});
