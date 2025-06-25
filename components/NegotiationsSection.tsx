import WrapperDark from '@/ui/WrapperDark';
import negotiationImg from '../assets/bg-negotiation.jpg';
import Image from 'next/image';
import { negotiationsList } from '@/data';

const NegotiationsSection = () => {
  return (
    <section id="negotiations" className="bg-dark text-light relative h-fit w-full">
      <Image
        src={negotiationImg}
        alt="tax background image"
        priority
        className="absolute -z-10 h-full w-full object-cover"
      />
      <WrapperDark>
        <p className="text-accent mb-10 text-center text-xl uppercase underline md:text-2xl">
          Negocjacje
        </p>
        <p className="mb-8 text-justify text-base md:text-lg">
          W negocjacjach łączę wiedzę prawniczą i doświadczenie biznesowe, aby wypracowywać
          rozwiązania korzystne dla wszystkich stron. Pomagam klientom w osiąganiu celów
          biznesowych, rozstrzyganiu sporów kontraktowych oraz budowaniu trwałych relacji opartych
          na zaufaniu i partnerstwie. Moje podejście opiera się na rzetelnej analizie sytuacji,
          skutecznej komunikacji i dążeniu do kompromisu, który przynosi realne korzyści.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          {negotiationsList.map((negotiation) => (
            <div
              key={negotiation.id}
              className="border-accent flex flex-col border-2 px-6 py-8 text-center duration-300 hover:scale-105 md:px-4"
            >
              <p className="text-accent mb-3 text-lg uppercase sm:text-xl">{negotiation.title}</p>
              <p>{negotiation.description}</p>
            </div>
          ))}
        </div>
      </WrapperDark>
    </section>
  );
};
export default NegotiationsSection;
