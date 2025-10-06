import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Kalonix"
        description="Review Kalonix's Terms of Service for details on using our affiliate platform, including user eligibility, content guidelines, intellectual property rights, affiliate disclosures, and dispute resolution processes. By accessing our services, you agree to these terms."
        ogTitle="Terms & Conditions | Kalonix"
        ogDescription="Review Kalonix's Terms of Service for details on using our affiliate platform, including user eligibility, content guidelines, intellectual property rights, affiliate disclosures, and dispute resolution processes. By accessing our services, you agree to these terms."
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto p-8">
        <h1>Terms and Conditions</h1>
        <small>Last Updated: 10/06/2025</small>
        <ol>
          <li>
            <h2>Agreement to Terms</h2>
            <p>By accessing and using Kalonix ("Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website.</p>
          </li>

          <li>
            <h2>Website Purpose</h2>
            <p>Kalonix provides information, reviews, and recommendations about wireless earbuds and related audio products. Content is for informational purposes only.</p>
          </li>

          <li>
            <h2>Affiliate Disclosure</h2>
            <h3>Amazon Associates Program</h3>
            <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
            <h3>Commission Disclosure</h3>
            <p>We may earn commissions when you purchase through our affiliate links. These commissions come at NO additional cost to you. Commissions do not influence our honest reviews and recommendations. We only recommend products we believe provide value.</p>
            <h3>Editorial Independence</h3>
            <p>Our reviews and recommendations are based on:</p>
            <ul>
              <li>Product research and analysis</li>
              <li>User feedback and ratings</li>
              <li>Industry standards</li>
              <li>Personal testing (when applicable)</li>
            </ul>
          </li>

          <li>
            <h2>No Guarantees</h2>
            <h3>Product Information</h3>
            <p>Product details, prices, and availability are subject to change. We strive for accuracy but cannot guarantee all information is current. Always verify details on the merchant's website before purchasing.</p>
            <h3>Results</h3>
            <p>Product performance may vary based on individual use. We make no guarantees about specific outcomes or results.</p>
          </li>

          <li>
            <h2>Intellectual Property</h2>
            <h3>Our Content</h3>
            <p>All content on this website (text, images, logos, designs) is owned by Kalonix or licensed to us. You may not:</p>
            <ul>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use our content for commercial purposes</li>
              <li>Claim our content as your own</li>
            </ul>
            <h3>Fair Use</h3>
            <p>You may:</p>
            <ul>
              <li>Share links to our content</li>
              <li>Quote brief excerpts with proper attribution</li>
              <li>Use content for personal, non-commercial purposes</li>
            </ul>
          </li>

          <li>
            <h2>User Conduct</h2>
            <p>When using our website, you agree NOT to:</p>
            <ul>
              <li>Post harmful, offensive, or illegal content</li>
              <li>Spam or harass other users</li>
              <li>Attempt to hack or compromise site security</li>
              <li>Use automated tools to scrape content</li>
              <li>Impersonate others</li>
            </ul>
          </li>

          <li>
            <h2>Third-Party Links</h2>
            <p>Our website contains links to third-party websites (including Amazon and other retailers). We are not responsible for:</p>
            <ul>
              <li>Content on external websites</li>
              <li>Privacy practices of third parties</li>
              <li>Transactions made on external sites</li>
            </ul>
          </li>

          <li>
            <h2>Disclaimer of Warranties</h2>
            <h3>"As Is" Basis</h3>
            <p>This website is provided "as is" without warranties of any kind, either express or implied.</p>
            <h3>No Warranty For:</h3>
            <ul>
              <li>Accuracy or completeness of information</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Fitness for a particular purpose</li>
              <li>Compatibility with your devices</li>
            </ul>
          </li>

          <li>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Kalonix shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from your use of the website</li>
              <li>Issues with products purchased through affiliate links</li>
            </ul>
          </li>

          <li>
            <h2>Indemnification</h2>
            <p>You agree to indemnify and hold Kalonix harmless from any claims, damages, or expenses arising from:</p>
            <ul>
              <li>Your use of the website</li>
              <li>Your violation of these terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </li>

          <li>
            <h2>Medical/Health Disclaimer</h2>
            <h3>Hearing Safety</h3>
            <p>Prolonged exposure to loud audio can damage hearing. Follow manufacturer guidelines for safe volume levels. Consult a healthcare professional if you experience hearing issues.</p>
            <h3>Not Medical Advice</h3>
            <p>Content on this website is not medical advice. Consult qualified professionals for health-related concerns.</p>
          </li>

          <li>
            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance of modified terms.</p>
          </li>

          <li>
            <h2>Geographic Restrictions</h2>
            <p>This website is operated from the Philippines. We make no representation that content is appropriate or available for use in other locations.</p>
          </li>

          <li>
            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of the Republic of the Philippines, without regard to conflict of law principles.</p>
          </li>

          <li>
            <h2>Severability</h2>
            <p>If any provision of these terms is found invalid or unenforceable, the remaining provisions will remain in full effect.</p>
          </li>

          <li>
            <h2>Entire Agreement</h2>
            <p>These terms constitute the entire agreement between you and Kalonix regarding use of the website.</p>
          </li>

          <li>
            <h2>Contact Information</h2>
            <p>For questions about these Terms and Conditions:</p>
            <ul>
              <li>Email: <a href="mailto:johnlerryramossamson@gmail.com">johnlerryramossamson@gmail.com</a></li>
              <li>Website: <Link to="/contact">https://kalonix.milkyway.sbs/contact</Link></li>
            </ul>
          </li>
        </ol>
        <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
      </div>
    </>
  );
}

export default TermsAndConditions;