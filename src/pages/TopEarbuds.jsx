import SEOHead from '../components/SEOHead';
import GridProducts from '../sections/GridProducts';
import { data } from '../data/products';
import { useState, useLayoutEffect } from 'react';

const TopEarbuds = () => {
  const [fData, setFData] = useState(data);

  useLayoutEffect(() => {
    if(fData && Array.isArray(fData)) {
      const itemsWPoint = [];
      for(const nData of fData) {
        const {rating, reviewCount} = nData;
        const point = Number(rating) * Number(reviewCount.replace(/,\s+/g,''));
        itemsWPoint.push({point, ...nData});
      }

      // I've realized that I don't need any fancy sorting algo for small number of items, so I did this.
      for(let i = 0; i < itemsWPoint.length; i++) {
        for(let j = 0; j < i; j++) {
          if(itemsWPoint[i].point > itemsWPoint[j].point) {
            const temp = itemsWPoint[i];
            itemsWPoint[i] = itemsWPoint[j];
            itemsWPoint[j] = temp;
          }
        }
      }

      setFData(itemsWPoint);
    }
  }, []);

  return (
    <>
      <SEOHead
        title="Top Earbuds | Kalonix"
        description="Kalonix is a participant in the Amazon Associates Program. We earn commissions from qualifying purchases through affiliate links at no extra cost to you. Our recommendations remain honest and unbiased."
        ogTitle="Top Earbuds | Kalonix"
        ogDescription="Discover how Kalonix partners with Amazon and others via affiliates. We disclose earnings from links while prioritizing transparent, value-driven reviews of wireless earbuds and audio gear."
      />
      <div>
        <h1 className="text-[2.2rem] font-extrabold my-8">Top Earbuds</h1>
        <GridProducts propData={fData} />
      </div>
    </>
  );
}

export default TopEarbuds;