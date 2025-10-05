import { useState, useEffect } from 'react';

const BladeIntro = () => {
  const [bladeImage, setBladeImage] = useState();

  useEffect(() => {
    (async () => {
      const image = await import('../assets/pexels-wireless-earbuds.webp');
      setBladeImage(image.default);
    })();
  }, []);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
        <article className="px-4 sm:p-0">
          <h2 className="text-4xl pb-4">Discover the Best Affordable Wireless Earbuds Under $50 in 2025</h2>
          <p>Tired of premium prices for basic audio needs? Our curated list of 15 top wireless earbuds under $50 delivers great sound, long battery life, and features like ANC without breaking the bank. Whether for workouts, calls, or daily commutes, these budget picks from brands like JBL, Anker, and Sony offer value-packed performance. We prioritized models with 6+ hours of battery, IP ratings for sweat resistance, and app support for customization. All tested for 2025 compatibility with Android/iOS. Ready to upgrade? Browse our picks below and click to shop via affiliate links—prices fluctuate, so check deals now!</p>
        </article>
        <div>
          <img 
            src={bladeImage} 
            alt="Kalonix wireless earbuds from pexels.com" 
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default BladeIntro;