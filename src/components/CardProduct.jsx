// import { useState } from 'react';
import { AmazonLogo } from '../components/SVGs';

const CardProduct = ({image, title, price, extra={}, description, ratings=0, ratedBy=0, className}) => {
  return (
    <div className={`bg-secondary w-full min-w-[270px] h-full rounded-lg overflow-hidden flex flex-col ${className}`}>
      <img 
        src={image} 
        alt={title}
        className="w-full object-cover"
        draggable={false}
      />
      <div className="p-3 pb-6 flex-1 flex flex-col">
        <article>
          <h4 className="text-3xl font-extrabold">{title}</h4>
          <p className="text-2xl"><span>Price: </span><strong>{price}</strong></p>
          {Object.keys(extra).length > 0 && <p className="my-1"><span>{extra.label} </span><strong>{extra.data}</strong></p>}
          <p className="text-sm my-2">
            {description}
          </p>
          <p className="mt-1 mb-4"><strong>{ratings}</strong><span className="ml-4">{ratedBy} ratings</span></p>
        </article>
        <a 
          href="https://www.amazon.com" 
          target="_blank" 
          className="w-full inline-flex items-center px-4 py-2 bg-white text-black font-semibold rounded-md shadow hover:bg-yellow-500 transition duration-300 justify-center mt-auto"
        >
          <AmazonLogo className="w-20 mr-3 mt-1.5" />
          Buy Now on Amazon
        </a>
      </div>
    </div>
  );
}

export default CardProduct;