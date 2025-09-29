import CTAButton from "../components/CTAButton";

const Cta = () => {
  return (
    <section className="min-h-[70vh] flex justify-center items-center flex-col">
      <h3 className="text-4xl text-center font-bold mb-4">Shop the Best Budget Earbuds Under $50 Now!</h3>
      <p className="text-center mb-6">Explore top-rated wireless earbuds under $50 with great sound and features!</p>
      <CTAButton link="">See Top 15 Picks</CTAButton>
    </section>
  );
}

export default Cta;