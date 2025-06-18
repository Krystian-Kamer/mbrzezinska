'use client';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { LuMenu, LuX } from 'react-icons/lu';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Logo from '../ui/Logo'
import {NavModal} from "@/ui/NavModal";
import {navLinks} from "@/navLinks";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
const [isNavModalOpen, setIsNavModalOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
      <>
    <motion.nav
      className={`flex fixed w-full justify-between md:justify-around 2xl:justify-center items-center text-white 2xl:gap-x-40 h-18 z-100 py-2 duration-300 ${
        isScrolled ? 'bg-black/60' : 'bg-transparent'
      }`}
    >
      <a className='h-10 w-20 mt-1 md:mt-0 px-4 md:px-0' href='#hero'><Logo logoColor = 'white'/></a>
      <div className='hidden md:flex uppercase text-base'>
        {navLinks.map((link) => (
            <a
                key={link.href}
                className='md:px-3 lg:px-4 py-1 hover:text-[#cdad7d]'
                href={link.href}
            >
              {link.label}
            </a>
        ))}
      </div>
      <div className='flex items-center mt-1 gap-x-10 md:gap-x-4 mr-4 text-2xl'>
        <a
            className='px-2 py-1 hover:text-[#cdad7d]'
            href='https://www.instagram.com/mediator_martyna_brzezinska/'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
        >
          <FaInstagram />
        </a>
        <a
            className='px-2 py-1 hover:text-[#cdad7d]'
            href='https://www.linkedin.com/in/martynabrzezinska/'
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <button className='md:hidden px-2 py-1 hover:text-[#cdad7d] cursor-pointer' onClick = {()=> setIsNavModalOpen(!isNavModalOpen) } >
          {isNavModalOpen ? <LuX/> :<LuMenu />  }
        </button>
      </div>
    </motion.nav>
        <AnimatePresence initial={false}>
          {isNavModalOpen ? (
              <NavModal setIsNavModalOpen={setIsNavModalOpen}/>
          ) : null}
        </AnimatePresence>
      </>
  );
};
export default Navbar;
