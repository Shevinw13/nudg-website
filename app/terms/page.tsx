import type { Metadata } from 'next';
import { termsMetadata } from '@/lib/metadata';

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy mb-8">Terms of Service</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy [&_h2]:mt-8 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-navy [&_h3]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
        <p className="text-sm text-gray-500">
          Effective Date: July 4, 2025
        </p>

        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Nudgli mobile application
          and website located at nudgli.app (collectively, the &quot;Service&quot;), operated by Nudgli (&quot;we,&quot;
          &quot;our,&quot; or &quot;us&quot;).
        </p>
        <p>
          By creating an account or using the Service, you agree to be bound by these Terms. If you do not
          agree, do not use the Service.
        </p>

        <h2>1. Eligibility</h2>
        <p>You must meet the following requirements to use the Service:</p>
        <ul>
          <li>You are at least 18 years of age.</li>
          <li>You have the legal authority to enter into these Terms on behalf of yourself or your business.</li>
          <li>You are located in the United States or a jurisdiction where the Service is available.</li>
          <li>You are not prohibited from using the Service under any applicable law.</li>
        </ul>

        <h2>2. Account Registration</h2>
        <ul>
          <li>You must provide accurate and complete information when creating your account.</li>
          <li>You are responsible for maintaining the security of your account credentials.</li>
          <li>You are responsible for all activity that occurs under your account.</li>
          <li>You must notify us immediately at <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a> if you suspect unauthorized access to your account.</li>
        </ul>

        <h2>3. Description of Service</h2>
        <p>
          Nudgli is an SMS-based review collection platform for service businesses. The Service allows you to:
        </p>
        <ul>
          <li>Send SMS review requests to your customers.</li>
          <li>Automatically route customer responses based on their satisfaction rating.</li>
          <li>Direct happy customers (4-5 star ratings) to your Google Business Profile to leave a public review.</li>
          <li>Receive private feedback from unhappy customers (1-3 star ratings) in your Nudgli inbox.</li>
          <li>Track review activity, response rates, and business growth through a dashboard.</li>
        </ul>

        <h2>4. Subscriptions and Payment</h2>
        <ul>
          <li>The Service is offered through paid subscription plans with a 14-day free trial.</li>
          <li>Subscriptions are billed and managed entirely through the Apple App Store.</li>
          <li>Each plan includes a monthly SMS quota. Messages beyond your quota will not be sent until the next billing cycle or an upgrade.</li>
          <li>Prices are subject to change. We will provide notice of price changes in advance.</li>
          <li>You may cancel your subscription at any time through your Apple ID account settings. Cancellation takes effect at the end of the current billing period.</li>
          <li>Refunds are handled by Apple in accordance with their refund policies.</li>
          <li>No credit card information is collected or stored by Nudgli.</li>
        </ul>

        <h2>5. Acceptable Use</h2>
        <p>You agree to use the Service only for lawful purposes. Specifically, you agree that you will:</p>
        <ul>
          <li>Obtain proper consent from each customer before sending them an SMS through the Service.</li>
          <li>Comply with the Telephone Consumer Protection Act (TCPA) and all applicable federal, state, and local laws regarding SMS and telemarketing communications.</li>
          <li>Only send review requests to customers with whom you have an existing business relationship.</li>
          <li>Not use the Service to send unsolicited messages, spam, or messages to purchased contact lists.</li>
          <li>Not use the Service to harass, threaten, or send abusive content to any person.</li>
          <li>Not use the Service to solicit fake reviews or manipulate review platforms.</li>
          <li>Not attempt to circumvent SMS quotas, duplicate protections, or opt-out mechanisms.</li>
          <li>Not reverse engineer, decompile, or attempt to extract the source code of the Service.</li>
          <li>Not use the Service in any way that could damage, disable, or impair its operation.</li>
        </ul>

        <h2>6. SMS Compliance and TCPA</h2>
        <p>
          Nudgli sends SMS messages to your customers on your behalf. You acknowledge and agree that:
        </p>
        <ul>
          <li>You are the sender of record for all SMS messages sent through your account.</li>
          <li>You bear sole responsibility for obtaining prior express consent from recipients before using the Service to contact them.</li>
          <li>Nudgli automatically honors opt-out requests. When a recipient replies &quot;STOP,&quot; no further messages will be sent to that number from your account.</li>
          <li>You will not send messages to numbers on the National Do Not Call Registry unless you have an existing business relationship or prior express consent.</li>
          <li>You will maintain records of consent as required by law.</li>
          <li>Violation of TCPA or other messaging laws may result in immediate suspension or termination of your account.</li>
        </ul>

        <h2>7. Customer Data</h2>
        <ul>
          <li>You retain ownership of the customer data (phone numbers, names) that you input into the Service.</li>
          <li>You grant us a limited license to use this data solely to operate the Service on your behalf (sending messages, displaying responses, generating analytics).</li>
          <li>You represent that you have the right to provide this customer data to us and that doing so does not violate any law or third-party rights.</li>
          <li>We will not use your customer data for our own marketing purposes or share it with other Nudgli users.</li>
          <li>Upon account deletion, customer data will be removed within 30 days.</li>
        </ul>

        <h2>8. Intellectual Property</h2>
        <ul>
          <li>The Service, including its design, code, features, and branding, is owned by Nudgli and protected by copyright, trademark, and other intellectual property laws.</li>
          <li>You are granted a limited, non-exclusive, non-transferable, revocable license to use the Service for its intended purpose during your active subscription.</li>
          <li>You may not copy, modify, distribute, or create derivative works based on the Service.</li>
          <li>The Nudgli name, logo, and related marks are our trademarks. You may not use them without our prior written consent.</li>
        </ul>

        <h2>9. Third-Party Services</h2>
        <p>The Service integrates with or relies on the following third-party services:</p>
        <ul>
          <li><strong>Apple App Store:</strong> For subscription billing and app distribution. Subject to Apple&apos;s Terms of Service.</li>
          <li><strong>Google Business Profile:</strong> For directing customers to leave reviews. Subject to Google&apos;s Terms of Service.</li>
          <li><strong>SMS providers:</strong> For message delivery. We use commercially reasonable efforts to ensure delivery but cannot guarantee it.</li>
        </ul>
        <p>
          We are not responsible for the availability, accuracy, or practices of third-party services.
          Your use of third-party services is governed by their respective terms and policies.
        </p>

        <h2>10. Service Availability</h2>
        <ul>
          <li>We strive to maintain high availability but do not guarantee uninterrupted access to the Service.</li>
          <li>We may perform maintenance, updates, or modifications that temporarily affect availability.</li>
          <li>SMS delivery depends on carrier networks and is not guaranteed for every message.</li>
          <li>We reserve the right to modify, suspend, or discontinue any feature of the Service at any time with reasonable notice.</li>
        </ul>

        <h2>11. Termination</h2>
        <ul>
          <li>You may stop using the Service and cancel your subscription at any time.</li>
          <li>We may suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or use the Service in a way that harms others or our systems.</li>
          <li>Upon termination, your right to use the Service ceases immediately. Data deletion will follow the timeline described in our Privacy Policy.</li>
          <li>Sections of these Terms that by their nature should survive termination will survive (including Limitation of Liability, Indemnification, and Dispute Resolution).</li>
        </ul>

        <h2>12. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>We do not warrant that:</p>
        <ul>
          <li>The Service will be uninterrupted, error-free, or secure.</li>
          <li>All SMS messages will be delivered successfully.</li>
          <li>The Service will result in increased reviews or business growth.</li>
          <li>Customer responses or reviews will be accurate or favorable.</li>
        </ul>

        <h2>13. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NUDGLI AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND
          AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR
          REPUTATION, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE.
        </p>
        <p>
          OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATED TO THE SERVICE SHALL NOT EXCEED THE
          AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        </p>

        <h2>14. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Nudgli and its officers, directors, employees,
          and agents from any claims, damages, losses, liabilities, costs, or expenses (including reasonable
          attorneys&apos; fees) arising from:
        </p>
        <ul>
          <li>Your use of the Service.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any law or regulation, including TCPA.</li>
          <li>SMS messages sent through your account.</li>
          <li>Any dispute between you and your customers.</li>
        </ul>

        <h2>15. Dispute Resolution</h2>
        <p>
          Any dispute arising from these Terms or the Service shall be resolved through binding
          arbitration administered by the American Arbitration Association (AAA) under its Consumer
          Arbitration Rules. Arbitration will take place in the state where Nudgli is incorporated,
          unless otherwise agreed.
        </p>
        <p>
          You agree to resolve disputes on an individual basis and waive any right to participate in
          a class action or class-wide arbitration.
        </p>
        <p>
          Notwithstanding the above, either party may seek injunctive or equitable relief in a court
          of competent jurisdiction for matters involving intellectual property or unauthorized access
          to the Service.
        </p>

        <h2>16. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the State of Delaware,
          without regard to its conflict of law provisions.
        </p>

        <h2>17. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes by posting
          the updated Terms on this page and updating the Effective Date. For significant changes, we may
          also notify you via email or in-app notification. Your continued use of the Service after changes
          take effect constitutes acceptance of the updated Terms.
        </p>

        <h2>18. General Provisions</h2>
        <ul>
          <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nudgli regarding the Service.</li>
          <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions remain in full effect.</li>
          <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.</li>
          <li><strong>Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.</li>
          <li><strong>Force Majeure:</strong> We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, carrier outages, or government actions.</li>
        </ul>

        <h2>19. Contact Us</h2>
        <p>If you have questions about these Terms, contact us at:</p>
        <p>
          Nudgli<br />
          Email:{' '}
          <a href="mailto:support@nudgli.app" className="text-teal hover:underline">support@nudgli.app</a>
        </p>
      </div>
    </div>
  );
}
