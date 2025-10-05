import { data } from '../data/products';
import { motion } from 'framer-motion';
import CardProduct from '../components/CardProduct';

const GridProducts = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="grid md:grid-cols-2 xl:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((product, index) => {
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            layout
          >
            <CardProduct 
              imageUrl={product.imageUrl}
              productName={product.productName}
              altTag={product.altTag} 
              price={product.price} 
              extra={product.extra} 
              description={product.description} 
              rating={product.rating} 
              reviewCount={product.reviewCount} 
              affiliateUrl={product.affiliateUrl}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default GridProducts;