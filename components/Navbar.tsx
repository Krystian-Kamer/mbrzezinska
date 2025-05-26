'use client';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { LuMenu } from 'react-icons/lu';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.nav
      className={`flex fixed w-full justify-between md:justify-around 2xl:justify-center items-center text-white 2xl:gap-x-40 h-18 z-10 py-2 duration-300 ${
        isScrolled ? 'bg-black/60' : 'bg-transparent'
      }`}
    >
      <a href='#hero'>Martyna Brzezińska</a>
      <div className='hidden md:flex uppercase text-base'>
        <a className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]' href='#about'>
          O mnie
        </a>
        <a
          className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]'
          href='#services'
        >
          Księgowość
        </a>
        <a
          className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]'
          href='#mediation'
        >
          Mediacje
        </a>
        <a
          className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]'
          href='#negotiations'
        >
          Negocjacje
        </a>
        <a
          className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]'
          href='#contact'
        >
          Kontakt
        </a>
      </div>
      <div className='flex items-center mt-1 gap-x-10 md:gap-x-4 mr-4 text-2xl'>
        <a className='px-2 py-1 hover:text-[#cdad7d]' href='link'>
          <FaInstagram />
        </a>
        <a className='px-2 py-1 hover:text-[#cdad7d]' href='link'>
          <FaLinkedin />
        </a>
        <div className='md:hidden px-2 py-1 hover:text-[#cdad7d] cursor-pointer'>
          <LuMenu />
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
