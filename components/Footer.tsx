import Logo from '@/ui/Logo';
import Wrapper from '@/ui/Wrapper';

const Footer = () => {
  return (
    <footer className="w-full gap-x-10 bg-gradient-to-b from-black/95 to-blue-950 text-white">
      <Wrapper>
        <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-center sm:gap-x-10">
          <a href="#hero" className="h-10 w-20">
            <Logo logoColor="white" />
          </a>
          <div className="text-center sm:text-start">
            <div>Martyna Brzezińska</div>
            <div>brzezinskasm@gmail.com</div>
            <div>726-400-625</div>
          </div>
          <a
            className="inline-block cursor-pointer border-1 px-12 py-2 text-[12px] tracking-wider text-[#E1C188FC] hover:bg-[#CDAD7DFC] hover:text-black/80 sm:px-6"
            href="https://www.linkedin.com/in/martynabrzezinska/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            Umów spotkanie
          </a>
        </div>
      </Wrapper>
      <div className="pb-1 text-center text-sm">
        ©2025 Wszelkie prawa zastrzeżone. Martyna Brzezińska. Wykonanie strony{' '}
        <a
          href="https://www.czolemwklawiature.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#cdad7d]"
        >
          CWK
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
