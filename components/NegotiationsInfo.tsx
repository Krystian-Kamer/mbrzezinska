import Wrapper from '@/ui/Wrapper';

const NegotiationsInfo = () => {
  return (
    <section id="negotiations" className="bg-light h-fit w-full scroll-mt-[72px]">
      <Wrapper>
        <div className="flex flex-col md:flex-row md:gap-x-5 lg:gap-x-30">
          <div>
            <p className="mb-6 text-center uppercase underline sm:text-2xl">
              Kim jestem jako negocjatorka?
            </p>
            <p className="mb-6 text-justify">
              Jako negocjatorka specjalizuję się w skutecznym prowadzeniu rozmów, których celem jest
              osiągnięcie jak najkorzystniejszych warunków dla strony, którą reprezentuję. W swojej
              pracy wykorzystuję zaawansowane techniki komunikacji, perswazji oraz wiedzę z zakresu
              psychologii i retoryki, dzięki czemu potrafię nie tylko przekonywać do swoich racji,
              ale także budować atmosferę zaufania i szacunku podczas negocjacji.
            </p>
            <p className="mb-6 text-justify">
              Moim zadaniem jest dokładna analiza potrzeb i interesów obu stron, przygotowanie
              strategii negocjacyjnej oraz prowadzenie rozmów w taki sposób, by wypracować
              satysfakcjonujące porozumienie. Zawsze dbam o profesjonalizm, elastyczność i
              opanowanie emocji, nawet w sytuacjach stresowych czy konfliktowych. Stawiam na jasną
              komunikację, asertywność i umiejętność słuchania, co pozwala mi skutecznie łagodzić
              napięcia i znajdować rozwiązania korzystne dla wszystkich uczestników procesu
              negocjacyjnego.
            </p>
            <p className="mb-6 text-justify">
              Negocjacje prowadzę zarówno w środowisku biznesowym, jak i w sytuacjach wymagających
              szczególnej delikatności, takich jak konflikty rodzinne czy spory pracownicze. Każde
              spotkanie traktuję indywidualnie, dopasowując styl i strategię do specyfiki sprawy
              oraz oczekiwań moich klientów.
            </p>
            <p className="text-justify">
              Powierzając mi prowadzenie negocjacji, możesz być pewna, że Twoje interesy będą
              skutecznie reprezentowane, a cały proces przebiegnie w atmosferze profesjonalizmu,
              zrozumienia i pełnego zaangażowania.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default NegotiationsInfo;
