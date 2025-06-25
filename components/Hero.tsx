import heroImg from '../assets/hero-img.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-w-[1600px]:h-[1200px] relative h-[500px] w-full overflow-hidden sm:h-[700px] lg:h-[800px] 2xl:h-[900px]"
    >
      <Image
        src={heroImg}
        alt="Martyna Brzezińska image"
        priority
        className="absolute -z-10 h-[150%] object-cover object-[30%_center] 2xl:h-[120%] 2xl:object-top"
      />
      <div className="absolute top-[37%] left-4 w-52 text-white sm:left-10 sm:w-fit md:left-40">
        <p className="relative mb-4 max-w-[370px] text-xl text-[#E1C188FC] text-shadow-black/80 text-shadow-lg sm:text-4xl">
          Twoje podatki. Twoje bezpieczeństwo. Twoje porozumienie.
        </p>
        <p className="max-w-[550px] text-sm text-shadow-black/80 text-shadow-lg sm:text-xl">
          Podatek VAT i mediacje to moje pasje – uwielbiam analizować przepisy oraz znajdować
          najlepsze rozwiązania dla firm i osób prywatnych. Zapraszam do kontaktu i współpracy.
        </p>
        <a
          className="mt-4 inline-block cursor-pointer border-1 bg-black/50 px-6 py-2 text-sm text-[#E1C188FC] hover:bg-[#CDAD7DFC] hover:text-black/80 sm:text-lg md:px-14"
          href="https://www.linkedin.com/in/martynabrzezinska/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          Umów spotkanie
        </a>
      </div>
    </div>
  );
};
export default Hero;
