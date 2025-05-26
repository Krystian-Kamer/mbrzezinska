import heroImg from '../assets/hero-img.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      id='hero'
      className='w-full h-[500px] sm:h-[700px] lg:h-[800px] 2xl:h-[900px] overflow-hidden min-w-[1600px]:h-[1200px] relative'
    >
      <Image
        src={heroImg}
        alt='Martyna Brzezińska image'
        priority
        className='h-[150%] object-cover  object-[30%_center] 2xl:object-top 2xl:h-[120%] -z-10 absolute'
      />
      <div className='absolute text-white top-[37%] left-4 sm:left-10 w-52 sm:w-fit md:left-40'>
        <p className='text-xl sm:text-4xl mb-4 text-orange-200 relative text-shadow-black/80 text-shadow-lg max-w-[370px]'>
          Twoje podatki. Twoje bezpieczeństwo. Twoje porozumienie.
        </p>
        <p className='text-sm sm:text-xl max-w-[550px] text-shadow-black/80 text-shadow-lg'>
          Podatek VAT i mediacje to moje pasje – uwielbiam analizować przepisy
          oraz znajdować najlepsze rozwiązania dla firm i osób prywatnych.
          Zapraszam do kontaktu i współpracy.
        </p>
        <button className='border-1 px-6 md:px-14 py-2 text-sm text-orange-200 mt-4 hover:bg-[#182036] sm:text-lg cursor-pointer'>
          Umów spotkanie
        </button>
      </div>
    </div>
  );
};
export default Hero;
