import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

function About() {
  return (
    <>
      <SEOHead
        title="About - My SSR App"
        description="Learn about our SSR React application"
        ogTitle="About - My SSR App"
        ogDescription="Learn about our SSR React application"
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
          This is a modern React application built with server-side rendering
          capabilities for better SEO and performance.
        </p>
        <Link 
          to="/"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Go Home
        </Link>
      </motion.div>
    </>
  );
}

export default About;