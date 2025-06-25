import { motion } from 'framer-motion';
import { navLinks } from '@/navLinks';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavModal = ({
  setIsNavModalOpen,
}: {
  setIsNavModalOpen: (isOpen: boolean) => void;
}) => {
  const screenWidth = useScreenWidth();

  if (screenWidth > 768) {
    setIsNavModalOpen(false);
  }

  return (
    <motion.div
      initial={{ transform: 'translateX(240px)' }}
      animate={{ transform: 'translateX(0px)' }}
      exit={{ transform: 'translateX(240px)' }}
      variants={navVariants}
      className="fixed right-0 z-50 flex h-full w-60 flex-col gap-y-5 bg-[#e3d9c9] pt-30 pl-8 sm:pt-40"
    >
      {navLinks.map((link, index) => (
        <motion.a
          key={link.href}
          initial={{ transform: 'translateX(100px)' }}
          animate={{ transform: 'translateX(0px)' }}
          transition={{ delay: index / 15 + 0.1 }}
          className="text-black/70 uppercase hover:text-black"
          href={link.href}
          onClick={() => setIsNavModalOpen(false)}
        >
          {link.label}
        </motion.a>
      ))}
    </motion.div>
  );
};
