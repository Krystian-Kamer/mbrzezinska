import WrapperDark from '@/ui/WrapperDark';
import lawImg from '../assets/bg-law.png';
import Image from 'next/image';

const MediationSection = () => {
  const mediationsInfo = [
    {
      id: 1,
      title: 'Mediacje gospodarcze',
      description:
        'Wsparcie w rozwiązywaniu konfliktów biznesowych,sporów kontraktowych, odszkodowań, niewykonania lub nienależytegowykonania umów, a także konfliktów między wspólnikami lub partnerami biznesowym.',
    },
    {
      id: 2,
      title: 'Mediacje pracownicze',
      description:
        'Rozwiązywanie sporów pomiędzy pracownikami a pracodawcami, negocjacje dotyczące warunków pracy, wynagrodzeń czy zwolnień.',
    },
    {
      id: 3,
      title: 'Mediacje cywilne',
      description:
        'Prowadzenie mediacji w sprawach o zapłatę, zniesienie współwłasności, odszkodowania, zachowek, dział spadku czy spory sąsiedzkie.',
    },
    {
      id: 4,
      title: 'Mediacje karne',
      description:
        'Wsparcie w dialogu pomiędzy sprawcą a pokrzywdzonym w celu wypracowania ugody i zadośćuczynienia.',
    },
    {
      id: 5,
      title: 'Mediacje rówieśnicze',
      description: 'Pomoc w rozwiązywaniu konfliktów wśród młodzieży i dzieci.',
    },
  ];

  return (
    <section
      id='mediation'
      className='w-full h-fit bg-[#02081b]/85 text-white relative'
    >
      <Image
        src={lawImg}
        alt='tax background image'
        priority
        className='absolute h-full object-cover w-full -z-10'
      />
      <WrapperDark>
        <p className='text-2xl md:text-3xl uppercase mb-10 text-center underline text-[#cdad7d]'>
          Mediacje
        </p>
        <p className='text-base md:text-lg text-justify mb-8'>
          Jako stała mediatorka pomagam w rozwiązywaniu sporów rodzinnych,
          gospodarczych, pracowniczych, karnych i rówieśniczych. Wspieram strony
          w osiąganiu trwałych i satysfakcjonujących porozumień, dbając o
          atmosferę dialogu i wzajemnego zrozumienia. Mediacje prowadzone przeze
          mnie to gwarancja profesjonalizmu, poufności i skuteczności w
          łagodzeniu konfliktów.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {mediationsInfo.map((mediation) => (
            <div
              key={mediation.id}
              className='border-2 border-[#cdad7d] flex text-center  px-4 py-6  md:px-4 hover:scale-105 duration-300 flex-col'
            >
              <p className='mb-3 text-[#cdad7d] text-xl uppercase'>
                {mediation.title}
              </p>
              <p>{mediation.description}</p>
            </div>
          ))}
        </div>
      </WrapperDark>
    </section>
  );
};
export default MediationSection;
