import WrapperDark from '@/ui/WrapperDark';
import taxImg from '../assets/bg-tax.jpg';
import Image from 'next/image';
import { servicesList } from '@/data';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-dark text-light relative h-fit w-full scroll-mt-[72px]">
      <Image
        src={taxImg}
        alt="tax background image"
        priority
        className="absolute -z-10 h-full w-full object-cover"
      />
      <WrapperDark>
        <p className="text-accent mb-10 text-center text-xl uppercase underline md:text-2xl">
          Podatki i księgowość
        </p>
        <p className="mb-8 text-justify text-base md:text-lg">
          Oferuję kompleksową obsługę podatkową i księgową opartą na wieloletnim doświadczeniu w
          branży finansowej. Specjalizuję się w zwrocie VAT i Akcyzy, optymalizacji procesów
          księgowych oraz analizie przepisów podatkowych, dzięki czemu minimalizuję ryzyko błędów i
          zwiększam efektywność rozliczeń. Dbam o terminowość deklaracji, precyzję rozliczeń oraz
          indywidualne podejście do każdego klienta, zapewniając wsparcie zarówno dla firm, jak i
          osób prywatnych.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="border-accent flex justify-center border-2 px-5 py-5 text-center duration-300 hover:scale-105 md:px-4"
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
