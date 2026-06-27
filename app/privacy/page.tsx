import type { Metadata } from 'next';
import { privacyMetadata } from '@/lib/metadata';

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>
          Last updated: {new Date().getFullYear()}
        </p>
        <p>
          Nudgli (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and safeguard your information
          when you use the Nudgli mobile application and visit our website.
        </p>
        <h2 className="text-xl font-semibold text-navy">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account,
          send review requests, or contact us for support. This may include your name, email
          address, phone number, and business information.
        </p>
        <h2 className="text-xl font-semibold text-navy">How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services,
          to send SMS messages on your behalf, and to communicate with you about your account.
        </p>
        <h2 className="text-xl font-semibold text-navy">Data Security</h2>
        <p>
          We implement industry-standard security measures including AES-256 encryption
          for all customer data at rest and in transit. We maintain audit logging and support
          GDPR-style data deletion upon request.
        </p>
        <h2 className="text-xl font-semibold text-navy">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:hello@nudgli.app" className="text-teal hover:underline">
            hello@nudgli.app
          </a>.
        </p>
      </div>
    </div>
  );
}
