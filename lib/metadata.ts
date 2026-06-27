import type { Metadata } from 'next';

const BASE_URL = 'https://nudg.app';

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
      siteName: 'Nudg',
      images: [
        {
          url: `${BASE_URL}/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'Nudg - More 5-star reviews with one simple text',
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
  title: 'Nudg - More 5-Star Reviews with One Simple Text',
  description: 'Nudg helps small service businesses get more Google reviews automatically. One text after every job turns happy customers into 5-star reviews.',
  path: '',
});

export const privacyMetadata = createMetadata({
  title: 'Privacy Policy - Nudg',
  description: 'Learn how Nudg protects your data and respects your privacy. Read our privacy policy for details on data collection and usage.',
  path: '/privacy',
});

export const termsMetadata = createMetadata({
  title: 'Terms of Service - Nudg',
  description: 'Read the Nudg terms of service to understand the rules and guidelines for using our SMS review collection platform.',
  path: '/terms',
});
