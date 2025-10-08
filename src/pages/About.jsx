import SEOHead from '../components/SEOHead';
import useLoadImage from '../hooks/useLoadImage';

import image1 from '../assets/pexels-wireless-earbuds-about.webp';
import image2 from '../assets/pexels-wireless-earbuds-new.webp';
import image3 from '../assets/pexels-wireless-earbuds-black.webp';

const About = () => {
  const {images, error} = useLoadImage([image1, image2, image3]);

  return (
    <>
      <SEOHead
        title="About Kalonix | Honest Wireless Earbuds Reviews by John Lerry Samson"
        description="Meet John Lerry Samson, founder of Kalonix. Discover our mission to help you find affordable, high-quality wireless earbuds for daily life through expert testing and unbiased recommendations."
        ogTitle="About Kalonix | Expert Audio Reviews for Everyday Users"
        ogDescription="Learn about John Lerry Samson and the Kalonix team. We started this site to guide you to budget-friendly, top-rated earbuds that fit your active lifestyle—backed by real-world testing and audio expertise."
      />
      <div className="prose prose-lg dark:prose-invert max-w-none mx-auto p-8">
        <h1>About Kalonix</h1>
        
        <section className="mb-8">
          <h2>Who We Are</h2>
          <p>Hi, I'm <strong>John Lerry Samson</strong>, the founder and sole curator of Kalonix. Based in the Philippines, I'm a tech enthusiast with a passion for audio gear that makes everyday life better. While I'm a one-person team for now, I pour my heart into every review to bring you reliable insights on wireless earbuds and audio products.</p>
          <div className="flex justify-center mb-4">
            <img
              src={images[0]}
              alt="John Lerry Samson, founder of Kalonix, smiling while testing earbuds"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </div>
          <p>This personal touch ensures authentic, hands-on recommendations without corporate bias.</p>
        </section>

        <section className="mb-8">
          <h2>Why We Started Kalonix</h2>
          <p>I created Kalonix because I was frustrated with the overwhelming choices on Amazon—endless options, vague specs, and reviews that felt scripted. As someone who's always on the go with daily activities like commuting, working out, or just chilling with podcasts, I wanted a go-to resource for <em>affordable, high-quality wireless earbuds</em> that actually deliver. My goal? Help busy people like you cut through the noise and find earbuds that suit your lifestyle without breaking the bank.</p>
          <div className="flex justify-center mb-4">
            <img
              src={images[1]} // Replace with a photo of your setup or inspiration
              alt="John's workspace with earbuds and testing gear, representing the start of Kalonix"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p>From my own hunts for budget gems, Kalonix was born in 2025 to make smart buying simple and fun.</p>
        </section>

        <section className="mb-8">
          <h2>Our Expertise in Earbuds and Audio</h2>
          <p>With over 5 years of diving deep into audio tech, I've tested dozens of earbuds across budgets—from entry-level under $50 to premium picks. My background includes tinkering with sound systems, contributing to local tech forums, and even building custom playlists to push audio limits. I stay updated on trends like ANC (active noise cancellation), battery life, and codec support because great sound shouldn't be a luxury.</p>
          <p>At Kalonix, expertise means real knowledge: I know why IPX7 water resistance matters for runners or how aptX Adaptive elevates calls for remote workers.</p>
        </section>

        <section className="mb-8">
          <h2>Our Testing Methodology</h2>
          <p>Transparency is everything here. Every earbud we review goes through a rigorous, multi-step process:</p>
          <ul>
            <li><strong>Unboxing & Build Quality:</strong> First impressions on fit, materials, and case design.</li>
            <li><strong>Sound & Audio Performance:</strong> Tested across genres (bass-heavy EDM, vocal podcasts, crisp classical) using tools like frequency analyzers and my trained ears.</li>
            <li><strong>Battery & Connectivity:</strong> Real-world drain tests during workouts, calls, and all-day wear; Bluetooth stability in crowded environments.</li>
            <li><strong>Features & Comfort:</strong> ANC effectiveness, app controls, and long-term wear for activities like gym sessions or office marathons.</li>
            <li><strong>Value Check:</strong> Compared against Amazon prices and competitors to ensure it's a true deal.</li>
          </ul>
          <div className="flex justify-center mb-4">
            <img
              src={images[2]}
              alt="Kalonix testing methodology: earbuds connected to audio analyzer and phone"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <p>We only recommend what we'd use ourselves—no paid promotions, just honest verdicts.</p>
        </section>

        <section className="mb-8">
          <h2>Our Mission Statement</h2>
          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "At Kalonix, our mission is to empower everyday adventurers with affordable, high-quality wireless earbuds that enhance your daily rhythm—delivering crystal-clear sound, unbeatable value, and zero fluff. Because great audio shouldn't cost a fortune; it should just work."
          </blockquote>
          <p>This drives every post, review, and recommendation on our site.</p>
        </section>

        <section className="mb-8">
          <h2>Connect With Us</h2>
          <p>Got questions about earbuds or want to share your favorites? Reach out at <a href="mailto:johnlerryramossamson@gmail.com">johnlerryramossamson@gmail.com</a> or via our <a href="/contact">contact page</a>. Let's chat audio!</p>
        </section>
      </div>
    </>
  );
};

export default About;