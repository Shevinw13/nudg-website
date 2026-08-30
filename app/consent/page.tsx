import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Consent & Opt-In Process - Nudgli',
  description: 'How Nudgli collects SMS consent from business owners and their customers. Opt-in process, verification flow, and compliance details.',
};

export default function ConsentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">SMS Consent &amp; Opt-In Process</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: July 4, 2026
        </p>

        <h2>How Nudgli Collects SMS Consent</h2>
        <p>
          Nudgli sends SMS messages only to users who have explicitly opted in through our
          in-app registration process. We never send unsolicited messages. Below is the
          complete opt-in flow for both business owners (platform messages) and their
          customers (review request messages).
        </p>

        {/* ===== SECTION 1: Business Owner Opt-In (Toll-Free) ===== */}
        <h2>1. Business Owner Opt-In (Account Verification)</h2>
        <p>
          Nudgli sends operational SMS messages (account verification and status notifications)
          only to business owners who have created a Nudgli account through the iOS app.
        </p>

        <h3>Opt-In Process (Step by Step)</h3>
        <ol>
          <li>The business owner downloads the Nudgli app from the Apple App Store.</li>
          <li>On the account creation screen, they enter their business name, email, and password.</li>
          <li>At the bottom of the signup screen, they agree to the <a href="/terms" className="text-teal hover:underline">Terms of Service</a> and <a href="/privacy" className="text-teal hover:underline">Privacy Policy</a> (required for account creation).</li>
          <li>A <strong>separate, optional checkbox</strong> (unchecked by default) reads: <em>&quot;I agree to receive SMS messages from Nudgli for account verification and notifications. Msg &amp; data rates may apply. Reply STOP to opt out.&quot;</em></li>
          <li>The user must actively check this box to consent to SMS messaging. <strong>SMS consent is not required to create an account.</strong></li>
          <li>If they consent and later provide their phone number during business registration, Nudgli sends <strong>one verification message</strong> asking the user to reply YES to confirm their identity.</li>
          <li><strong>No further messages are sent unless the user replies YES.</strong></li>
          <li>Once confirmed, the business owner receives only operational messages (approval notifications, account alerts).</li>
        </ol>

        <h3>Screenshot of Opt-In Screen</h3>
        <p>
          The following screenshot shows the account creation screen with the optional SMS
          consent checkbox (unchecked by default, clearly separate from account creation):
        </p>
        <div className="my-4 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 p-4 flex justify-center">
          <img
            src="/images/mockups/app-sms-consent.png"
            alt="Nudgli app signup screen showing an optional unchecked checkbox with SMS consent text: I agree to receive SMS messages from Nudgli for account verification and notifications. Msg and data rates may apply. Reply STOP to opt out."
            className="max-w-[300px] w-full rounded-lg shadow-sm"
          />
        </div>

        <h3>Sample Verification Message</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
          <p className="font-mono text-sm text-gray-700">
            Nudgli: To activate SMS messaging for your business, please reply YES to confirm
            you are the authorized owner. This is a one-time verification. Reply HELP for
            assistance or STOP to opt out. Msg &amp; data rates may apply.
          </p>
        </div>

        <h3>Opt-In Type</h3>
        <p>
          <strong>Web form (in-app checkbox).</strong> The business owner checks an optional SMS
          consent checkbox on the account creation screen. This checkbox is unchecked by default
          and is not required to create an account. After providing their phone number during
          business registration, the user confirms via text by replying YES to the verification
          message (double opt-in).
        </p>

        <h3>Opt-In Keywords</h3>
        <p>
          <strong>START</strong>, <strong>YES</strong> — to opt in or re-subscribe.<br />
          <strong>STOP</strong> — to immediately opt out of all messages.<br />
          <strong>HELP</strong> — to receive support information.
        </p>

        <h3>Message Frequency</h3>
        <ul>
          <li>One (1) verification message during setup.</li>
          <li>Occasional operational notifications (registration approved, account alerts). No more than 5 messages per month.</li>
          <li>No marketing messages are sent to this number.</li>
        </ul>

        {/* ===== SECTION 2: Customer Opt-In (Review Requests) ===== */}
        <h2>2. Customer Opt-In (Review Requests)</h2>
        <p>
          When a business owner uses Nudgli to send a review request to their customer,
          the customer must have provided prior verbal consent.
        </p>

        <h3>Opt-In Type</h3>
        <p>
          <strong>Verbal consent.</strong> The business owner obtains verbal consent from the customer
          in person at the time of service, before any SMS message is sent through Nudgli.
        </p>

        <h3>Verbal Consent Script</h3>
        <p>
          Business owners using Nudgli are instructed to inform their customer with the following
          script (or substantially similar language) before sending a review request:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
          <p className="italic text-gray-700">
            &ldquo;We&apos;d like to send you a quick text to get your feedback on today&apos;s service.
            You&apos;ll receive one message asking you to rate your experience from 1 to 5.
            Message and data rates may apply. You can reply STOP at any time to opt out, or
            HELP for assistance. Is that okay?&rdquo;
          </p>
        </div>
        <p>
          The customer provides verbal consent by confirming (&ldquo;yes&rdquo;) and providing their
          phone number to the business owner.
        </p>

        <h3>In-App Consent Reminder</h3>
        <p>
          Before sending each review request, the Nudgli app displays a consent disclaimer
          below the Send button: <em>&quot;By sending, you confirm this customer has consented
          to receive SMS.&quot;</em> This serves as a reminder to the business owner of their
          obligation to obtain consent.
        </p>

        <h3>Sample Review Request Message</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
          <p className="font-mono text-sm text-gray-700">
            Hi Jane! Thanks for choosing Mitchell Plumbing today. How would you rate your
            experience? Reply with a number from 1 to 5.<br /><br />
            Reply STOP to opt out.
          </p>
        </div>

        <h3>Message Details</h3>
        <ul>
          <li><strong>Message frequency:</strong> One (1) initial message per review request. Up to two (2) follow-up messages if the customer responds with a rating.</li>
          <li><strong>Sender:</strong> Messages are sent from a dedicated local phone number assigned to the business by Nudgli.</li>
          <li><strong>No marketing:</strong> Messages are transactional (feedback requests only). No promotional content is sent.</li>
        </ul>

        <h3>Two-Way Messaging &amp; Inbound Calls</h3>
        <p>
          The dedicated phone number assigned to a business can receive replies and calls
          from customers:
        </p>
        <ul>
          <li><strong>Replies:</strong> Customers may reply to any message. Their replies are delivered to the business owner. If a customer replies outside of an active feedback conversation, they receive a single courtesy auto-reply letting them know their message was received.</li>
          <li><strong>This number is not monitored 24/7.</strong> The courtesy auto-reply states this, and customers are directed to contact the business by other means for urgent matters.</li>
          <li><strong>Inbound calls:</strong> If a customer calls the number, the call is forwarded to the business&apos;s own phone. Nudgli does not answer or record calls.</li>
          <li><strong>Photos (MMS):</strong> Customers may send photos, which are delivered to the business owner alongside that customer&apos;s feedback.</li>
        </ul>

        {/* ===== Opt-Out ===== */}
        <h2>3. Opt-Out Process</h2>
        <p>Both business owners and customers can opt out at any time:</p>
        <ul>
          <li>Reply <strong>STOP</strong> to immediately opt out of all future messages.</li>
          <li>Upon receiving STOP, the system sends a confirmation and no further messages are sent to that number.</li>
          <li>Reply <strong>START</strong> or <strong>UNSTOP</strong> to re-subscribe at any time. You will receive a confirmation reply acknowledging that you have re-subscribed.</li>
          <li>Reply <strong>HELP</strong> to receive support information and contact details.</li>
        </ul>

        <h3>Help Message</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4">
          <p className="font-mono text-sm text-gray-700">
            Nudgli: For support, visit https://nudgli.app or email support@nudgli.app.
            Reply STOP to opt out of messages.
          </p>
        </div>

        {/* ===== Data & Compliance ===== */}
        <h2>4. Data Handling &amp; Compliance</h2>
        <ul>
          <li>Phone numbers are encrypted using AES-256 and stored securely.</li>
          <li>Phone numbers are used solely for the stated purpose (verification or review requests).</li>
          <li><strong>We do not share, sell, or provide mobile phone numbers, messaging consent, or opt-in data to third parties or affiliates for marketing or promotional purposes. Message and data rates may apply.</strong></li>
          <li>Users may request deletion of their data at any time.</li>
          <li>Active SMS conversation threads expire after 72 hours of inactivity. Customer records and history (such as ratings, feedback, and business-owner notes) are retained for as long as the business&apos;s account is active so the business can maintain an ongoing relationship record. See our <a href="/privacy" className="text-teal hover:underline">Privacy Policy</a> for full retention details.</li>
        </ul>
        <p>
          Nudgli complies with the Telephone Consumer Protection Act (TCPA), CTIA guidelines,
          the CAN-SPAM Act, and all applicable federal, state, and local regulations governing
          SMS communications.
        </p>

        <h2>5. Contact</h2>
        <p>
          For questions about this consent policy or to exercise your opt-out rights, contact us at:{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>
        </p>
        <p>
          Nudgli LLC<br />
          Website: <a href="https://www.nudgli.app" className="text-teal hover:underline">https://www.nudgli.app</a><br />
          Terms of Service: <a href="/terms" className="text-teal hover:underline">https://www.nudgli.app/terms</a><br />
          Privacy Policy: <a href="/privacy" className="text-teal hover:underline">https://www.nudgli.app/privacy</a>
        </p>
      </div>
    </div>
  );
}
