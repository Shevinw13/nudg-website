import type { Metadata } from 'next';
import { privacyMetadata } from '@/lib/metadata';

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: July 4, 2025
        </p>

        <p>
          Nudgli (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Nudgli mobile application
          and the website located at nudgli.app (collectively, the &quot;Service&quot;). This Privacy Policy
          describes how we collect, use, disclose, and protect your personal information when you use our Service.
        </p>

        <p>
          By using the Service, you agree to the collection and use of information as described in this policy.
          If you do not agree, please do not use the Service.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Information You Provide</h3>
        <ul>
          <li><strong>Account information:</strong> Name, email address, phone number, business name, and Google Business Profile link when you register.</li>
          <li><strong>Customer data:</strong> Phone numbers and optional names of your customers that you enter to send review requests.</li>
          <li><strong>Payment information:</strong> Subscription purchases are processed by Apple through the App Store. We do not collect or store credit card numbers or billing details.</li>
          <li><strong>Communications:</strong> Messages you send to our support team.</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <ul>
          <li><strong>Device information:</strong> Device type, operating system version, unique device identifiers.</li>
          <li><strong>Usage data:</strong> Features used, number of review requests sent, response rates, and in-app actions.</li>
          <li><strong>Log data:</strong> IP address, access times, pages viewed on our website, and referring URLs.</li>
          <li><strong>Cookies and similar technologies:</strong> We use cookies on our website for analytics and functionality. You can manage cookie preferences through your browser settings.</li>
        </ul>

        <h3>Information from Third Parties</h3>
        <ul>
          <li><strong>SMS delivery data:</strong> Delivery status and response data from our SMS service provider for messages sent through the Service.</li>
          <li><strong>App Store data:</strong> Subscription status from Apple.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide, operate, and maintain the Service.</li>
          <li>To send SMS review requests to your customers on your behalf.</li>
          <li>To route customer responses based on their ratings.</li>
          <li>To display analytics and review data on your dashboard.</li>
          <li>To send you push notifications about new feedback and account activity.</li>
          <li>To process your subscription through the App Store.</li>
          <li>To respond to your support requests.</li>
          <li>To detect, prevent, and address fraud, abuse, or technical issues.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>We do not sell your personal information or your customers&apos; personal information. We share data only in the following circumstances:</p>
        <ul>
          <li><strong>SMS service providers:</strong> We share customer phone numbers with our messaging provider solely to deliver SMS messages on your behalf.</li>
          <li><strong>Cloud infrastructure:</strong> Your data is stored on secure cloud servers provided by our hosting provider.</li>
          <li><strong>Analytics providers:</strong> We use analytics services to understand how the Service is used. These providers receive anonymized or aggregated data.</li>
          <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
          <li><strong>Business transfers:</strong> If Nudgli is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement commercially reasonable security measures to protect your information, including:
        </p>
        <ul>
          <li>AES-256 encryption for data at rest.</li>
          <li>TLS encryption for data in transit.</li>
          <li>Access controls and authentication for all internal systems.</li>
          <li>Audit logging of data access and modifications.</li>
          <li>Regular security reviews.</li>
        </ul>
        <p>
          No method of transmission or storage is 100% secure. While we strive to protect your information,
          we cannot guarantee absolute security.
        </p>

        <h2>5. Data Retention</h2>
        <ul>
          <li><strong>Account data:</strong> Retained for as long as your account is active. Upon account deletion, we remove your personal information within 30 days.</li>
          <li><strong>Customer phone numbers:</strong> Retained only for the duration needed to process the review request and any follow-up. Conversation data expires after 72 hours of inactivity.</li>
          <li><strong>SMS logs:</strong> Retained for up to 12 months for analytics and dispute resolution, then automatically deleted.</li>
          <li><strong>Aggregated analytics:</strong> May be retained indefinitely in de-identified form.</li>
        </ul>

        <h2>6. Your Rights and Choices</h2>

        <h3>All Users</h3>
        <ul>
          <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can update your account information at any time within the app.</li>
          <li><strong>Deletion:</strong> You can request deletion of your account and associated data by contacting us. We will process deletion requests within 30 days.</li>
          <li><strong>Push notifications:</strong> You can opt out of push notifications through your device settings.</li>
        </ul>

        <h3>California Residents (CCPA/CPRA)</h3>
        <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act and the California Privacy Rights Act:</p>
        <ul>
          <li>The right to know what personal information we collect, use, and disclose.</li>
          <li>The right to delete your personal information.</li>
          <li>The right to opt out of the sale or sharing of personal information. We do not sell or share personal information as defined by the CCPA/CPRA.</li>
          <li>The right to non-discrimination for exercising your privacy rights.</li>
          <li>The right to correct inaccurate personal information.</li>
          <li>The right to limit the use of sensitive personal information. We do not use sensitive personal information for purposes beyond what is necessary to provide the Service.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>.
          We will verify your identity before processing any request.
        </p>

        <h2>7. SMS and TCPA Compliance</h2>
        <p>
          Nudgli sends SMS messages to your customers on your behalf. As the user of our Service, you are
          responsible for obtaining appropriate consent from your customers before sending review requests.
          By using Nudgli, you represent and warrant that:
        </p>
        <ul>
          <li>You have obtained prior express consent from each customer before sending them an SMS through Nudgli.</li>
          <li>You comply with the Telephone Consumer Protection Act (TCPA) and all applicable federal, state, and local laws regarding SMS communications.</li>
          <li>You will honor opt-out requests. Nudgli automatically processes &quot;STOP&quot; replies and will not send further messages to numbers that have opted out.</li>
        </ul>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          The Service is not intended for use by anyone under the age of 18. We do not knowingly collect
          personal information from children. If we learn that we have collected personal information from
          a child under 18, we will delete that information promptly. If you believe a child has provided
          us with personal information, please contact us.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Your information is processed and stored in the United States. If you access the Service from
          outside the United States, your information will be transferred to and processed in the United States,
          where data protection laws may differ from those in your jurisdiction.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          The Service may contain links to third-party websites or services (such as Google Reviews).
          We are not responsible for the privacy practices of these third parties. We encourage you to
          review their privacy policies before providing them with your information.
        </p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes by
          posting the updated policy on this page and updating the &quot;Effective Date&quot; above. For significant
          changes, we may also notify you via email or in-app notification. Your continued use of the Service
          after changes constitutes acceptance of the updated policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy or our data practices, contact us at:</p>
        <p>
          Nudgli LLC<br />
          Email:{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>
        </p>
      </div>
    </div>
  );
}
