import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const AffiliateDisclosure = () => {
  return (
    <>
      <SEOHead
        title="Affiliate Disclosure | Kalonix"
        description="Kalonix is a participant in the Amazon Associates Program. We earn commissions from qualifying purchases through affiliate links at no extra cost to you. Our recommendations remain honest and unbiased."
        ogTitle="Affiliate Disclosure | Kalonix"
        ogDescription="Discover how Kalonix partners with Amazon and others via affiliates. We disclose earnings from links while prioritizing transparent, value-driven reviews of wireless earbuds and audio gear."
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto p-8 pt-14">
        <h1>Affiliate Disclosure</h1>
        <p>As an Amazon Associate, we earn from qualifying purchases. This site contains affiliate links, which may earn us a commission at no extra cost to you.</p>

        <h2>Amazon Associates Program</h2>
        <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>

        <h2>Commission Disclosure</h2>
        <p>We may earn commissions when you purchase through our affiliate links. These commissions come at NO additional cost to you. Commissions do not influence our honest reviews and recommendations. We only recommend products we believe provide value.</p>

        <h2>Editorial Independence</h2>
        <p>Our reviews and recommendations are based on:</p>
        <ul>
          <li>Product research and analysis</li>
          <li>User feedback and ratings</li>
          <li>Industry standards</li>
          <li>Personal testing (when applicable)</li>
        </ul>

        <p>Transparency is key at Kalonix. If you have questions, feel free to <Link to="/contact">contact us</Link>.</p>
      </div>
    </>
  );
}

export default AffiliateDisclosure;