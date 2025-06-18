import Logo from "@/ui/Logo";

const Footer = () => {
    return (
        <footer className='w-full bg-gradient-to-b from-black/95 to-blue-950 text-white gap-x-10'>
            <div className='flex justify-center items-center py-8 gap-x-10'>
                <a href='#hero' className='h-10 w-20'>
                <Logo logoColor='white' />
                </a>
                <div>
                    <div>Martyna Brzezińska</div>
                    <div>brzezinskasm@gmail.com</div>
                    <div>726-400-625</div>
                </div>
                <button className='border-1 cursor-pointer border-[#dec193] text-[#dec193] hover:bg-black tracking-wider text-[12px] px-6 py-2'>
                    Umów spotkanie
                </button>
            </div>
            <div className='text-center text-sm pb-1'>
                ©2025 Wszelkie prawa zastrzeżone. Martyna Brzezińska. Wykonanie strony  <a
                href="https://www.czolemwklawiature.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#cdad7d]"
            >
                CWK
            </a>.
            </div>
        </footer>
    );
};

export default Footer;