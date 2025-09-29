// import CardReviews from '../components/CardReviews';

import { Star } from 'lucide-react';

const TrustSignals = () => {
  return (
    <section className="min-h-[50vh] flex justify-center items-center flex-col">
      <h3 className="text-4xl text-center font-bold mb-7">Trusted by 1,000+ audio enthusiasts</h3>
      <div className="flex justify-center items-center gap-4">
        <Star color="yellow" size={60} style={{fill: 'yellow'}} />
        <Star color="yellow" size={60} style={{fill: 'yellow'}} />
        <Star color="yellow" size={60} style={{fill: 'yellow'}} />
        <Star color="yellow" size={60} style={{fill: 'yellow'}} />
        <Star color="yellow" size={60} style={{fill: 'yellow'}} />
      </div>
    </section>
  );
}

export default TrustSignals;