import type { Metadata } from 'next';
import { smsPrivacyMetadata } from '@/lib/metadata';

export const metadata: Metadata = smsPrivacyMetadata;

export default function SmsPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">SMS Messaging Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: September 8, 2026
        </p>

        <p>
          This SMS Messaging Privacy Policy applies to the text messages sent by independent
          local businesses (each, &quot;the Business&quot;) &mdash; including sole proprietors and
          registered companies (LLCs, corporations) &mdash; to their own customers using Nudgli, a
          messaging platform provided by Nudgli LLC. Each Business is a separate, independently
          operated business that is solely responsible for its own customer relationships and
          communications. Nudgli is the technology provider that delivers messages on the
          Business&apos;s behalf; Nudgli does not own the customer relationship and does not market
          to the Business&apos;s customers.
        </p>

        <h2>1. What This Messaging Program Is</h2>
        <p>
          After the Business completes a job or service for you, it may send you a one-time SMS
          asking you to rate your experience from 1 to 5. If you respond, the Business may send one
          follow-up message with a link to leave a public review. Messages are only sent to
          customers who provided their mobile number and agreed to be contacted at the point of
          service.
        </p>

        <h2>2. Information We Collect and How It&apos;s Used</h2>
        <ul>
          <li><strong>Mobile phone number:</strong> Collected by the Business at the point of service and used solely to deliver the feedback request and any follow-up message.</li>
          <li><strong>Message responses:</strong> Your rating and any reply you send, used only to route your response to the Business and to enable the Business to follow up with you.</li>
        </ul>
        <p>
          We do not use this information for advertising, and we do not use it for any purpose
          beyond operating this feedback-request program.
        </p>

        <h2>3. How We Share Information</h2>
        <p>
          <strong>
            We do not share, sell, or provide your mobile phone number or SMS opt-in consent to any
            third parties or affiliates for marketing or promotional purposes.
          </strong>{' '}
          This commitment is consistent with CTIA guidelines. Your mobile phone number is shared
          only with our messaging provider (Twilio) strictly to deliver these messages, and may be
          disclosed if required by law.
        </p>

        <h2>4. Message Frequency</h2>
        <p>
          Message frequency varies based on how often you use the Business&apos;s services; you will
          typically receive 1&ndash;3 messages per service interaction.
        </p>

        <h2>5. Message and Data Rates</h2>
        <p>Message and data rates may apply.</p>

        <h2>6. Opt-Out and Help</h2>
        <p>
          <strong>Reply STOP at any time to opt out of all messages. Reply HELP for assistance.</strong>
        </p>

        <h2>7. Contact</h2>
        <p>
          For questions about this messaging program, contact the Business directly, or contact the
          Nudgli platform support team at{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>.
        </p>
      </div>
    </div>
  );
}
