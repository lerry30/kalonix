import { useState } from "react";
import { data } from '../data/products';

import { GradientEdges1 } from '../components/GradientEdges';
import CardProduct from "../components/CardProduct";

const FeatureblockCarousel = () => {
  

  const [cardIndex, setCardIndex] = useState(Math.floor(data.length/2));
  const [isDragging, setIsDragging] = useState(false);

  const DRAG_BUFFER = 50;
  const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
  };

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -500) {
      if (cardIndex < data.length - 1) {
        setCardIndex(cardIndex + 1);
      }
    } else if (offset > DRAG_BUFFER || velocity > 500) {
      if (cardIndex > 0) {
        setCardIndex(cardIndex - 1);
      }
    }
    setIsDragging(false);
  };

  const nextCard = () => {
    if (cardIndex < data.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  const prevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-primary flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-md">
        {/* Navigation buttons */}
        <button 
          onClick={prevCard}
          disabled={cardIndex === 0}
          className="absolute left-4 md:-left-7 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextCard}
          disabled={cardIndex === data.length - 1}
          className="absolute right-4 md:-right-7 top-1/2 transform -translate-y-1/2 z-10 bg-primary rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel container */}
        <div
          className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${cardIndex * 100}%)`,
          }}
          // onMouseDown={() => setIsDragging(true)}
          // onMouseUp={() => setIsDragging(false)}
        >
          {data.map((product, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 transition-transform duration-300"
              style={{
                transform: `scale(${cardIndex === index ? 1 : 0.9})`,
              }}
            >
              <CardProduct
                image={product.image}
                title={product.productName}
                price={product.price}
                extra={product.extra}
                description={product.description}
                ratings={product.ratings}
                ratedBy={product.ratedBy}
              />
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCardIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === cardIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <GradientEdges1 />
    </div>
  );
};

export default FeatureblockCarousel;