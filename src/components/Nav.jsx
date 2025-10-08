import { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
  {
    title: 'Top Earbuds',
    link: '/top-earbuds'
  },
  {
    title: 'Reviews',
    link: '/reviews'
  },
  {
    title: 'Buying Guide',
    link: '/buying-guide'
  },
  {
    title: 'Deals',
    link: '/deals'
  },
  {
    title: 'About',
    link: '/about'
  }
];

export const HeaderNav = () => {
  return (
    <ul className="hidden md:flex justify-center items-center gap-6">
      {
        tabs.map((tab, index) => (
          <li key={index}>
            <a href={tab.link} className="hover:text-blue-400 transition">
              {tab.title}
            </a>
          </li>
        ))
      }
    </ul>
  );
}


export const HBMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="md:hidden flex justify-center items-center flex-col">
      <button onClick={() => setToggle(state => !state)}>
        <Menu size={26} />
      </button>
      {
        toggle && (
          <ul className="fixed top-[var(--navbar-height)] left-0 right-0 bottom-0 z-40 flex justify-center items-center flex-col gap-6 bg-primary w-full">
            {
              tabs.map((tab, index) => (
                <motion.li 
                  key={index}
                  initial={{y: 60, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.6}}
                >
                  <a href={tab.link} className="hover:text-blue-400 text-2xl transition">
                    {tab.title}
                  </a>
                </motion.li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}