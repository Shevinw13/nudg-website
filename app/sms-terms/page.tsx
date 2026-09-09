import type { Metadata } from 'next';
import { smsTermsMetadata } from '@/lib/metadata';

export const metadata: Metadata = smsTermsMetadata;

export default function SmsTermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">SMS Messaging Terms &amp; Conditions</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: September 8, 2026
        </p>

        <p>
          These SMS Messaging Terms &amp; Conditions apply to text messages sent by independent
          local businesses (each, &quot;the Business&quot;) &mdash; including sole proprietors and
          registered companies (LLCs, corporations) &mdash; to their own customers using the Nudgli
          platform, provided by Nudgli LLC. Each Business is a separate, independently operated
          business and is the sender of these messages. Nudgli is the messaging platform and
          technology provider only.
        </p>

        <h2>1. Program Name</h2>
        <p>
          Nudgli Feedback Requests, sent by an independent local business (&quot;the Business&quot;)
          using the Nudgli platform (provided by Nudgli LLC).
        </p>

        <h2>2. Program Description</h2>
        <p>
          After completing a job or service, the Business sends you a one-time SMS asking you to
          rate your experience from 1 to 5. If you respond, the Business may send one follow-up
          message with a link to leave a public review. You are contacted only because you provided
          your mobile number and agreed to receive this message at the point of service.
        </p>

        <h2>3. Message Frequency</h2>
        <p>
          Message frequency varies; you will typically receive 1&ndash;3 messages per service
          interaction. This is a recurring messaging program only to the extent you continue to use
          the Business&apos;s services.
        </p>

        <h2>4. Message and Data Rates</h2>
        <p>Message and data rates may apply.</p>

        <h2>5. Opt-Out and Help Instructions</h2>
        <p>
          <strong>Reply STOP at any time to unsubscribe. Reply HELP for help.</strong>
        </p>

        <h2>6. Carrier Disclaimer</h2>
        <p>Carriers are not liable for any delayed or undelivered messages.</p>

        <h2>7. Customer Support</h2>
        <p>
          For assistance, contact the Business directly, or contact the Nudgli platform support team
          at{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>.
        </p>

        <h2>8. Privacy</h2>
        <p>
          Your information is handled in accordance with our{' '}
          <a href="/sms-privacy" className="text-teal hover:underline">SMS Messaging Privacy Policy</a>.
          We do not share or sell your mobile information or opt-in consent with third parties or
          affiliates for marketing or promotional purposes.
        </p>
      </div>
    </div>
  );
}
