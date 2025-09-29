import React from 'react';
import { Search } from 'lucide-react';
import { LogoSVG } from '../components/SVGs';
import CTAButton from '../components/CTAButton';

const Navbar = () => {

  return (
    <nav className="w-full flex justify-between">
      <a href="/" className="flex items-center gap-2">
        <LogoSVG className="w-14 h-14 mt-2" />
        <span className="font-bold text-lg text-red-600">Kalonix</span>
      </a>

      <ul className="flex justify-center items-center gap-6">
        <li>
          <a href="/top-earbuds" className="hover:text-blue-400 transition">
            Top Earbuds
          </a>
        </li>
        <li>
          <a href="/reviews" className="hover:text-blue-400 transition">
            Reviews
          </a>
        </li>
        <li>
          <a href="/buying-guide" className="hover:text-blue-400 transition">
            Buying Guide
          </a>
        </li>
        <li>
          <a href="/deals" className="hover:text-blue-400 transition">
            Deals
          </a>
        </li>
        <li>
          <a href="">
            <Search />
          </a>
        </li>
        <li> 
          <a href="/">
            <CTAButton link="/" className="bg-blue-700">Shop Now</CTAButton>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;