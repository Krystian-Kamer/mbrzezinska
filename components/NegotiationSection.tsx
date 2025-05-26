import WrapperDark from '@/ui/WrapperDark';
import negotiationImg from '../assets/bg-negotiation.jpg';
import Image from 'next/image';

const NegotiationSection = () => {
  const mediationsInfo = [
    {
      id: 1,
      title: 'Negocjacje biznesowe i handlowe',
      description:
        'Prowadzenie rozmów w imieniu firm lub osób prywatnych w zakresie warunków umów, cen, zakupów, sprzedaży, współpracy handlowej czy kontraktów partnerskich.',
    },
    {
      id: 2,
      title: 'Negocjacje gospodarcze',
      description:
        'Wsparcie w rozwiązywaniu sporów biznesowych, negocjowanie warunków współpracy, fuzji, przejęć oraz rozstrzyganie konfliktów między przedsiębiorstwami.',
    },
    {
      id: 3,
      title: 'Negocjacje pracownicze i płacowe',
      description:
        'Reprezentowanie stron w rozmowach dotyczących wynagrodzeń, warunków pracy, sporów pracowniczych i układów zbiorowych.',
    },
    {
      id: 4,
      title: 'Negocjacje w sprawach cywilnych i rodzinnych',
      description:
        'Pomoc w uzgadnianiu warunków podziału majątku, rozwodów, opieki nad dziećmi, spadków czy innych konfliktów rodzinnych.',
    },
    {
      id: 5,
      title: 'Negocjacje nieruchomości',
      description:
        'Wsparcie przy zakupie, sprzedaży lub wynajmie nieruchomości, negocjowanie cen i warunków umów z deweloperami lub na rynku wtórnym.',
    },
    {
      id: 6,
      title: 'Negocjacje międzynarodowe:',
      description:
        'Prowadzenie rozmów z partnerami zagranicznymi, firmami i instytucjami na rynku międzynarodowym.',
    },
    {
      id: 7,
      title: 'Doradztwo negocjacyjne:',
      description:
        'przygotowanie strategii negocjacyjnej, analiza interesów stron, opracowanie scenariuszy rozmów oraz konsultacje przed i w trakcie negocjacji.',
    },
    {
      id: 8,
      title: 'Finalizacja umów i sporządzanie dokumentacji',
      description:
        'Doprowadzanie negocjacji do formalnego zakończenia, sporządzanie i weryfikacja dokumentów oraz umów.',
    },
  ];

  return (
    <section
      id='negotiations'
      className='w-full h-fit bg-[#02081b]/85 text-white relative'
    >
      <Image
        src={negotiationImg}
        alt='tax background image'
        priority
        className='absolute h-full object-cover w-full -z-10'
      />
      <WrapperDark>
        <p className='text-2xl md:text-3xl uppercase mb-10 text-center underline text-[#cdad7d]'>
          Negocjacje
        </p>
        <p className='text-base md:text-lg text-justify mb-8'>
          W negocjacjach łączę wiedzę prawniczą i doświadczenie biznesowe, aby
          wypracowywać rozwiązania korzystne dla wszystkich stron. Pomagam
          klientom w osiąganiu celów biznesowych, rozstrzyganiu sporów
          kontraktowych oraz budowaniu trwałych relacji opartych na zaufaniu i
          partnerstwie. Moje podejście opiera się na rzetelnej analizie
          sytuacji, skutecznej komunikacji i dążeniu do kompromisu, który
          przynosi realne korzyści.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {mediationsInfo.map((mediation) => (
            <div
              key={mediation.id}
              className='border-2 border-[#cdad7d] flex text-center  px-6 py-8  md:px-4 hover:scale-105 duration-300 flex-col'
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
export default NegotiationSection;
