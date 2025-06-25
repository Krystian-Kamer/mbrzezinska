import WrapperDark from '@/ui/WrapperDark';
import lawImg from '../assets/bg-law.jpg';
import Image from 'next/image';
import { mediationsList } from '@/data';

const MediationsSection = () => {
  return (
    <section id="mediation" className="bg-dark text-light relative h-fit w-full">
      <Image
        src={lawImg}
        alt="tax background image"
        priority
        className="absolute -z-10 h-full w-full object-cover"
      />
      <WrapperDark>
        <p className="text-accent mb-10 text-center text-xl uppercase underline md:text-2xl">
          Mediacje
        </p>
        <p className="mb-8 text-justify text-base md:text-lg">
          Jako stała mediatorka pomagam w rozwiązywaniu sporów rodzinnych, gospodarczych,
          pracowniczych, karnych i rówieśniczych. Wspieram strony w osiąganiu trwałych i
          satysfakcjonujących porozumień, dbając o atmosferę dialogu i wzajemnego zrozumienia.
          Mediacje prowadzone przeze mnie to gwarancja profesjonalizmu, poufności i skuteczności w
          łagodzeniu konfliktów.
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          {mediationsList.map((mediation) => (
            <div
              key={mediation.id}
              className="border-accent flex flex-col border-2 px-4 py-6 text-center duration-300 hover:scale-105 md:px-4"
            >
              <p className="text-accent mb-3 text-lg uppercase sm:text-xl">{mediation.title}</p>
              <p>{mediation.description}</p>
            </div>
          ))}
        </div>
      </WrapperDark>
    </section>
  );
};
export default MediationsSection;
