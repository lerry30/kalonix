import CTAButton from '../components/CTAButton';

const Banner = () => {

  return (
    <section className="w-full h-[calc(100vh-var(--navbar-height))] flex justify-center items-center flex-col">
      <h1 className="text-6xl text-center font-bold">Top Wireless Earbuds</h1>
      <h2 className="text-5xl text-center font-semibold mb-4">Under $50 in 2025</h2>
      <p className="mb-6 text-center">Discover budget-friendly earbuds with great sound & features.</p>
      <CTAButton link="/" className="bg-blue-700">Shop Now</CTAButton>
    </section>
  );
}

export default Banner;