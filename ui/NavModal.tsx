import { motion } from 'framer-motion';
import {navLinks} from "@/navLinks";

export const NavModal = ({setIsNavModalOpen}: { setIsNavModalOpen: (isOpen: boolean) => void }
) => {
    return (
        <motion.div   initial={{ transform: "translateX(200px)" }}
                      animate={{ transform: "translateX(0px)" }}
                      transition={{ type: "keyframes" }}
                      exit={{ transform: "translateX(200px)", opacity: 0.5 }} className='fixed w-60 flex flex-col right-0 bg-[#e3d9c9] pt-30 sm:pt-40 h-full gap-y-5 z-50 pl-8'>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    className='text-black/50 uppercase hover:text-black/90'
                    href={link.href}
                    onClick={()=> setIsNavModalOpen(false)}
                >
                    {link.label}
                </a>
            ))}
        </motion.div>
    );
};