import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

// PrivacyPolicy - I've renamed it to PrivacyContent because - Brave is blocking your PrivacyPolicy.jsx file because its Shields feature (Brave's built-in content blocker) sees "Privacy" or "Policy" in the filename and flags it as a potential tracking/analytics script.
const PrivacyContent = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Kalonix"
        description="Discover how Kalonix safeguards your personal data. Our Privacy Policy outlines our practices for collecting, using, sharing, and protecting your information to ensure transparency and compliance with global standards like GDPR and CCPA."
        ogTitle="Privacy Policy | Kalonix"
        ogDescription="Discover how Kalonix safeguards your personal data. Our Privacy Policy outlines our practices for collecting, using, sharing, and protecting your information to ensure transparency and compliance with global standards like GDPR and CCPA."
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto p-8 pt-14">
        <h1>Privacy Policy</h1>
        <small>Last Updated: 10/06/2025</small>
        <h2>Introduction</h2>
        <p>
          Welcome to Kalonix ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h3>Information We Collect</h3>
        <h4>Currently Collected:</h4>
        
        <ul>
          <li>
            <strong>Automatically Collected Information:</strong>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
              <li>Device information</li>
            </ul>
          </li>
        </ul>

        <h4>Future Collection (when implemented):</h4>
        <ul>
          <li>
            <strong>Personal Information:</strong>
            <ul>
              <li>Name and email address (for newsletters)</li>
              <li>Comments and reviews you submit</li>
              <li>Contact form submissions</li>
            </ul>
          </li>
        </ul>
        
        <h4>Cookies and Tracking:</h4>
        <p>We use cookies and similar technologies to:</p>

        <ul>
          <li>Remember your preferences</li>
          <li>Analyze site traffic (Google Analytics)</li>
          <li>Provide personalized content</li>
          <li>Track affiliate link clicks</li>
        </ul>

        <h4>How We Use Your Information</h4>
        <p>We use collected information to:</p>
        <ul>
          <li>Improve our website and user experience</li>
          <li>Analyze site performance and visitor behavior</li>
          <li>Send newsletters (if you subscribe)</li>
          <li>Respond to your inquiries</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h4>Affiliate Disclosure</h4>
        <p>
          This site contains affiliate links. When you click on links to products and make a purchase, we may receive a commission at no extra cost to you. This helps support our website.
        </p>
        <p>
          We participate in the Amazon Associates Program and may earn from qualifying purchases.
        </p>

        <h4>Third-Party Services</h4>
        <p>We use the following third-party services:</p>
        <p><strong>Amazon Associates</strong> - For affiliate marketing</p>

        <ul>
          <li>
            Privacy Policy: 
            <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank">
              https://www.amazon.com/gp/help/customer/display.html?nodeId=468496
            </a>
          </li>
        </ul>

        <p><strong>Google Analytics</strong> - For website analytics</p>

        <ul>
          <li>
            Privacy Policy: 
            <a href="https://policies.google.com/privacy" target="_blank">
              https://policies.google.com/privacy
            </a>
          </li>
          {/* [Add other services you use] */}
        </ul>

        <h4>Data Sharing</h4>
        <p>We do NOT sell your personal information. We may share data with:</p>
        <ul>
          <li>Service providers who help operate our website</li>
          <li>Analytics providers</li>
          <li>As required by law</li>
        </ul>

        <h4>Your Rights</h4>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of your data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Disable cookies in your browser</li>
        </ul>

        <h4>Data Security</h4>
        <p>
          We implement reasonable security measures to protect your information. However, no internet transmission is 100% secure.
        </p>
        
        <h4>Children's Privacy</h4>
        <p>
          Our website is not intended for children under 13. We do not knowingly collect data from children.
        </p>

        <h4>Changes to This Policy</h4>
        <p>
          We may update this privacy policy periodically. Changes will be posted on this page with an updated date.
        </p>

        <h4>Contact Us</h4>
        <p>If you have questions about this privacy policy, contact us at:</p>

        {/* Email: [your-email@kalonix.milkyway.sbs] */}
        <ul>
          <li>Email: <a href="mailto:johnlerryramossamson@gmail.com">johnlerryramossamson@gmail.com</a></li>
          <li>Website: <Link to="/contact">https://kalonix.milkyway.sbs/contact</Link></li>
        </ul>

        <h4>Cookie Policy</h4>
        
        <h5>What Are Cookies?</h5>
        <p>Cookies are small text files stored on your device when you visit websites.</p>
        
        <h5>Types of Cookies We Use:</h5>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for site functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand site usage (Google Analytics)</li>
          <li><strong>Advertising Cookies:</strong> Track affiliate link clicks</li>
        </ul>

        <h5>Managing Cookies:</h5>
        <p>You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.</p>

        <p>
          <strong>Your privacy matters to us. This policy is designed to be transparent about our data practices.</strong>
        </p>
      </div>
    </>
  );
}

export default PrivacyContent;