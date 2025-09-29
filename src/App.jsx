import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

function App() {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[var(--navbar-height)] text-white p-4">
        <header className="h-full container mx-auto flex justify-center">
          <Navbar />
        </header>
      </div>
      <main className="min-h-screen container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;