import React from 'react';
import { Search } from 'lucide-react';
import { LogoSVG } from '../components/SVGs';
import { HBMenu, HeaderNav } from '../components/Nav';
import CTAButton from '../components/CTAButton';

const Navbar = () => {

  return (
    <nav className="relative w-full flex justify-between">
      <HBMenu />

      <a href="/" className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]  
        md:static md:translate-x-0 md:translate-y-0 flex items-center gap-2">
        <LogoSVG className="w-14 h-14 mt-3" />
        <span className="font-bold text-lg text-red-600">Kalonix</span>
      </a>

      <HeaderNav />
      <ul className="flex justify-center items-center gap-6">
        <li>
          <a href="">
            <Search />
          </a>
        </li>
        <li> 
          <a href="/">
            <CTAButton link="/top-earbuds" className="bg-blue-700">Shop Now</CTAButton>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
