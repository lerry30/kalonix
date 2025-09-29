import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import Banner from '../sections/Banner';
import FeatureblockCarousel from '../sections/FeatureblockCarousel';
import BladeIntro from '../sections/BladeIntro';
import TrustSignals from '../sections/TrustSignals';
import Cta from '../sections/Cta';
import GridProducts from '../sections/GridProducts';

function Home() {
  return (
    <>
      <SEOHead
        title="15 Top Affordable Wireless Earbuds Under $50 in 2025"
        description="Find the best wireless earbuds under $50 with great sound, ANC, and long battery life. Shop our top 15 picks for 2025 and save today!"
        ogTitle="15 Best Budget Wireless Earbuds Under $50 in 2025"
        ogDescription="Discover top-rated wireless earbuds under $50 with features like noise cancellation and waterproofing. Check out our 2025 list and grab yours now!"
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full"
      >
        <Banner />
        <FeatureblockCarousel />
        <BladeIntro />
        <TrustSignals />
        <Cta />
        <GridProducts />
      </motion.div>
    </>
  );
}

export default Home;

// https://www.figma.com/make/ViRcX1KY95IDAqrefaYLHq/Untitled?node-id=0-4&t=tu8V93XHAkK6tRRf-0

// Title
// 15 Top Affordable Wireless Earbuds Under $50 in 2025

// Home page layout
// - Affiliate Disclosure Bar: A slim bar at the top (e.g., “This site contains affiliate links. We may earn a commission at no extra cost to you.”).
// - Navigation Bar
// - Banner
// - Featured block caroucel
// - Blade - 200-300 word intro with keywords (e.g., “affordable wireless earbuds,” “budget earbuds 2025”)
// - Trust Signals: Small section with star ratings or “Trusted by 1,000+ audio enthusiasts.”
// - Call to action
// - Feature block of products in grid layout
// - Footer
// - Copyright

// Inner page layout
// - Affiliate Disclosure: Slim bar or text near the top (e.g., “We may earn a commission from purchases made via our links.”).
// - Navigation bar
// - Page title
// - Breadcrumbs
// - Intro Content: 200-300 word introduction with keywords, explaining the value of budget earbuds and a soft CTA (e.g., “Check out our top picks below!”).
// - Comparison Table: Table with 15 earbuds, columns for model, price, battery life, key features (e.g., ANC, IPX5), and a “Buy Now” affiliate link button.
// - Page content
// - Call to action
// - FAQs Section: 5-8 questions with keyword-rich answers (e.g., “What are the best wireless earbuds under $50 for workouts?”).
// - Related Content: Links to other pages (e.g., “Best Earbuds for Calls” or “Earbuds vs. Headphones”).
// - Social Sharing Buttons: Icons for X, Pinterest, etc., to share the page.
// - Author Bio/Trust Signals: Brief section on why your recommendations are reliable.
// - Footer
// - Copyright
