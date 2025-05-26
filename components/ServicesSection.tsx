import WrapperDark from '@/ui/WrapperDark';
import taxImg from '../assets/bg-tax.jpg';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      description:
        'Prowadzenie pełnej księgowości oraz uproszczonej księgi przychodów i rozchodów(KPiR).',
    },
    {
      id: 2,
      description: 'Sporządzanie deklaracji podatkowych, w tym VAT i akcyzy.',
    },
    {
      id: 3,
      description:
        'Kompleksowa obsługa zwrotu VAT i akcyzy, w tym kwalifikacja dokumentów i współpraca z klientami.',
    },
    {
      id: 4,
      description:
        'Rejestracja i analiza operacji bankowych oraz uzgadnianie sald rachunków.',
    },
    {
      id: 5,
      description:
        'Weryfikacja i analiza faktur, w tym faktur korygujących, pod kątem optymalizacji podatkowej',
    },
    {
      id: 6,
      description:
        'Przygotowywanie i aktualizacja rejestrów VAT zgodnie z obowiązującymi przepisami.',
    },
    {
      id: 7,
      description:
        'Analiza przepisów podatkowych oraz poszukiwanie optymalnych rozwiązań podatkowych',
    },
    {
      id: 8,
      description:
        'Tworzenie szczegółowych raportów finansowych, budżetów i prognoz.',
    },
    {
      id: 9,
      description:
        'Kompleksowa weryfikacja księgowań i zapewnienie zgodności dokumentacji finansowej z przepisami',
    },
    {
      id: 10,
      description:
        'Automatyzacja i optymalizacja procesów księgowych oraz raportowania.',
    },
    {
      id: 11,
      description:
        'Stała komunikacja z klientem i bieżące wsparcie w zakresie księgowości i podatków.',
    },
    {
      id: 12,
      description:
        'Szkolenie nowych pracowników księgowości i wdrażanie nowych systemów księgowych.',
    },
  ];

  return (
    <section
      id='services'
      className='w-full h-fit bg-[#02081b]/85 text-white relative'
    >
      <Image
        src={taxImg}
        alt='tax background image'
        priority
        className='absolute h-full object-cover w-full -z-10'
      />
      <WrapperDark>
        <p className='text-2xl md:text-3xl uppercase mb-10 text-center underline text-[#cdad7d]'>
          Podatki i księgowość
        </p>
        <p className='text-base md:text-lg text-justify mb-8'>
          Oferuję kompleksową obsługę podatkową i księgową opartą na wieloletnim
          doświadczeniu w branży finansowej. Specjalizuję się w zwrocie VAT i
          Akcyzy, optymalizacji procesów księgowych oraz analizie przepisów
          podatkowych, dzięki czemu minimalizuję ryzyko błędów i zwiększam
          efektywność rozliczeń. Dbam o terminowość deklaracji, precyzję
          rozliczeń oraz indywidualne podejście do każdego klienta, zapewniając
          wsparcie zarówno dla firm, jak i osób prywatnych.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10'>
          {services.map((service) => (
            <div
              key={service.id}
              className='border-2 border-[#cdad7d] flex justify-center text-center  px-5 py-5  md:px-4 hover:scale-105 duration-300'
            >
              {service.description}
            </div>
          ))}
        </div>
      </WrapperDark>
    </section>
  );
};
export default ServicesSection;
