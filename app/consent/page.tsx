import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Consent Policy - Nudgli',
  description: 'Nudgli SMS opt-in consent policy and verbal consent script for review request messages.',
};

export default function ConsentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">SMS Consent Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: July 4, 2026
        </p>

        <h2>Overview</h2>
        <p>
          Nudgli is an SMS-based review collection platform. Business owners using Nudgli send review
          request text messages to their customers after completing a service. All messages are sent
          only with the customer&apos;s prior verbal consent.
        </p>

        <h2>Opt-In Type</h2>
        <p>
          <strong>Verbal consent.</strong> The business owner obtains verbal consent from the customer
          in person at the time of service, before any SMS message is sent through Nudgli.
        </p>

        <h2>Verbal Consent Script</h2>
        <p>
          Business owners using Nudgli are instructed to inform their customer with the following
          script (or substantially similar language) before sending a review request:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
          <p className="italic text-gray-700">
            &ldquo;We&apos;d like to send you a quick text to get your feedback on today&apos;s service.
            You&apos;ll receive one message asking you to rate your experience from 1 to 5.
            Message and data rates may apply. You can reply STOP at any time to opt out, or
            HELP for assistance. Our Terms of Service are at nudgli.app/terms and our Privacy
            Policy is at nudgli.app/privacy. Is that okay?&rdquo;
          </p>
        </div>
        <p>
          The customer provides verbal consent by confirming (&ldquo;yes&rdquo;) and providing their
          phone number to the business owner.
        </p>

        <h2>Message Details</h2>
        <ul>
          <li><strong>Message frequency:</strong> One (1) initial message per review request. Up to two (2) follow-up messages if the customer responds with a rating.</li>
          <li><strong>Message content:</strong> A personalized text asking the customer to rate their experience from 1 to 5, followed by either a Google Review link (for positive ratings) or a thank-you message (for negative ratings).</li>
          <li><strong>Sender:</strong> Messages are sent from a Nudgli toll-free number on behalf of the business.</li>
        </ul>

        <h2>Opt-Out Process</h2>
        <ul>
          <li>Customers can reply <strong>STOP</strong> at any time to immediately opt out of all future messages.</li>
          <li>Upon receiving STOP, the system confirms the opt-out and no further messages are sent to that number.</li>
          <li>Customers can reply <strong>START</strong> or <strong>UNSTOP</strong> to re-subscribe at any time.</li>
          <li>Customers can reply <strong>HELP</strong> to receive support information.</li>
        </ul>

        <h2>Conversation Expiry</h2>
        <p>
          If a customer does not respond within 72 hours, the conversation is automatically closed.
          No further messages are sent.
        </p>

        <h2>Data Handling</h2>
        <ul>
          <li>Customer phone numbers are encrypted using AES-256 and stored securely.</li>
          <li>Phone numbers are used solely for the purpose of sending the review request.</li>
          <li>Customer data is never sold or shared with third parties for marketing purposes.</li>
          <li>Customers may request deletion of their data at any time.</li>
        </ul>

        <h2>Compliance</h2>
        <p>
          Nudgli complies with the Telephone Consumer Protection Act (TCPA), the CAN-SPAM Act,
          and all applicable federal, state, and local regulations governing SMS communications.
          Business owners using Nudgli agree to our{' '}
          <a href="/terms" className="text-teal hover:underline">Terms of Service</a> which
          require them to obtain proper consent before sending messages.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this consent policy, contact us at:{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>
        </p>
      </div>
    </div>
  );
}
