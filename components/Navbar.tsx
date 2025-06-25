'use client';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { LuMenu, LuX } from 'react-icons/lu';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Logo from '../ui/Logo';
import { NavModal } from '@/ui/NavModal';
import { navLinks } from '@/navLinks';

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
        className={`text-light fixed z-100 flex h-18 w-full items-center justify-between py-2 duration-300 md:justify-around 2xl:justify-center 2xl:gap-x-40 ${
          isScrolled ? 'bg-black/60' : 'bg-transparent'
        }`}
      >
        <a className="mt-1 h-10 w-20 px-4 md:mt-0 md:px-0" href="#hero">
          <Logo logoColor="white" />
        </a>
        <div className="hidden text-base uppercase md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="py-1 hover:text-[#cdad7d] md:px-3 lg:px-4"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-1 mr-4 flex items-center gap-x-10 text-2xl md:gap-x-4">
          <a
            className="px-2 py-1 hover:text-[#cdad7d]"
            href="https://www.instagram.com/mediator_martyna_brzezinska/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            <FaInstagram />
          </a>
          <a
            className="px-2 py-1 hover:text-[#cdad7d]"
            href="https://www.linkedin.com/in/martynabrzezinska/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <button
            className="cursor-pointer px-2 py-1 hover:text-[#cdad7d] md:hidden"
            onClick={() => setIsNavModalOpen(!isNavModalOpen)}
          >
            {isNavModalOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence initial={false}>
        {isNavModalOpen ? <NavModal setIsNavModalOpen={setIsNavModalOpen} /> : null}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
