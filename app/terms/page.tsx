import type { Metadata } from 'next';
import { termsMetadata } from '@/lib/metadata';

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">Terms of Service</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
        <p>
          Last updated: {new Date().getFullYear()}
        </p>
        <p>
          Welcome to Nudgli. By accessing or using the Nudgli application and website, you agree to be
          bound by these Terms of Service. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold text-navy">Use of Service</h2>
        <p>
          Nudgli provides an SMS-based review collection service for small service businesses.
          You must be at least 18 years old and have the legal authority to bind your business
          to these terms.
        </p>
        <h2 className="text-xl font-semibold text-navy">Subscriptions</h2>
        <p>
          Nudgli offers subscription plans managed through the Apple App Store. Pricing, SMS
          quotas, and billing are handled entirely by Apple. You may cancel your subscription
          at any time through your Apple ID settings.
        </p>
        <h2 className="text-xl font-semibold text-navy">Acceptable Use</h2>
        <p>
          You agree to use Nudgli only for lawful purposes and in accordance with applicable
          regulations including the Telephone Consumer Protection Act (TCPA). You must have
          consent from customers before sending SMS review requests.
        </p>
        <h2 className="text-xl font-semibold text-navy">Limitation of Liability</h2>
        <p>
          Nudgli is provided &quot;as is&quot; without warranties of any kind. We shall not be
          liable for any indirect, incidental, or consequential damages arising from your use
          of the service.
        </p>
        <h2 className="text-xl font-semibold text-navy">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:hello@nudgli.app" className="text-teal hover:underline">
            hello@nudgli.app
          </a>.
        </p>
      </div>
    </div>
  );
}
