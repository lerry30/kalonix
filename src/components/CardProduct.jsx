// import { useState } from 'react';
import { Star } from 'lucide-react';
import { AmazonLogo } from '../components/SVGs';
import { Link } from 'react-router-dom';

const CardProduct = ({
    imageUrl, 
    productName, 
    altTag, 
    price, 
    extra={}, 
    description, 
    rating=0, 
    reviewCount=0, 
    affiliateUrl, 
    className
  }) => {
  
  const isTooLongDesc = description.length > 120;
  const starBarWidth = `${rating / 5 * 100}%`;

  return (
    <div className={`bg-secondary w-full md:min-w-[17rem] h-full max-h-[80vh] rounded-lg overflow-hidden flex flex-col ${className}`}>
      <div className="max-h-[12.5rem] h-[12.5rem] bg-white p-4 flex justify-center">
        <img 
          src={imageUrl} 
          alt={altTag}
          className="w-full object-contain max-h-full"
          draggable={false}
          loading='lazy'
        />
      </div>
      <div className="p-3 pb-6 flex-1 flex flex-col">
        <article className="max-w-full">
          <h4 className="text-3xl max-h-[2.2rem] overflow-hidden text-ellipsis whitespace-nowrap font-extrabold">{productName}</h4>
          <p className="text-2xl"><span>Price: </span><strong>{price}</strong></p>
          {Object.keys(extra).length > 0 && (
            <p className="my-1"><span>{extra.label} </span><strong>{extra.data}</strong></p>
          )}
          <p className={`text-sm ${isTooLongDesc ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {isTooLongDesc && (
            <Link to="products/jbl-vibe-buds" className="text-blue-600 my-2 text-sm">Read more</Link>
          )}
          <p className="mt-1 mb-4 flex">
            <strong>{Number(rating).toFixed(1)}</strong>
            <div className="relative w-[calc(22px*5)] ml-1">
              <div className="absolute flex z-10 overflow-hidden" style={{width: starBarWidth}}>
                <Star stroke="#e6b400" fill="#e6b400" size={22} className="min-w-[22px]" />
                <Star stroke="#e6b400" fill="#e6b400" size={22} className="min-w-[22px]" />
                <Star stroke="#e6b400" fill="#e6b400" size={22} className="min-w-[22px]" />
                <Star stroke="#e6b400" fill="#e6b400" size={22} className="min-w-[22px]" />
                <Star stroke="#e6b400" fill="#e6b400" size={22} className="min-w-[22px]" />
              </div>
              <div className="absolute flex z-20">
                <Star stroke="#e6b400" size={22}/>
                <Star stroke="#e6b400" size={22}/>
                <Star stroke="#e6b400" size={22}/>
                <Star stroke="#e6b400" size={22}/>
                <Star stroke="#e6b400" size={22}/>
              </div>
            </div>
            <span className="ml-4">({reviewCount})</span>
          </p>
        </article>
        <a 
          href={affiliateUrl} 
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