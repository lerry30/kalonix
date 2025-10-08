import { useState, useEffect } from 'react';

const useLoadImage = (urls = []) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(url);
        image.onerror = () => reject(new Error('Failed to load image: ' + url));
        image.src = url;
      });
    };

    (async () => {
      try {
        if (!Array.isArray(urls) || urls.length === 0) {
          throw new Error('Passed URL is not type of array.');
        }

        const loadedImages = await Promise.all(urls.map(url => loadImage(url)));
        setImages(loadedImages);
      } catch (error) {
        console.log('Failed to load images: ', error);
        setError('Load image error: ' + error);
      }
    })();
  }, [urls]);

  return { images, error };
};

export default useLoadImage;