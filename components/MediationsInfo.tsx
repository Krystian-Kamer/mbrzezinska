import Wrapper from '@/ui/Wrapper';

const MediationsInfo = () => {
  return (
    <section
      id='mediations'
      className='w-full h-fit bg-[#f8f6f4] scroll-mt-[72px]'
    >
      <Wrapper>
        <div className='flex flex-col md:flex-row md:gap-x-5 lg:gap-x-30 scroll-mt-[72px]'>
          <div>
            <p className='mb-6 uppercase text-center sm:text-xl'>
              Kim jestem jako mediatorka?
            </p>
            <p className='mb-6 text-justify'>
              Jako mediatorka jestem bezstronną i neutralną osobą, która pomaga
              stronom konfliktu znaleźć wspólne rozwiązanie w atmosferze
              zaufania i szacunku. Moim zadaniem jest stworzenie bezpiecznej
              przestrzeni do rozmowy, w której każdy może swobodnie wyrazić
              swoje potrzeby i oczekiwania. Nie oceniam, nie narzucam gotowych
              rozwiązań – wspieram w poszukiwaniu porozumienia, które będzie
              satysfakcjonujące dla wszystkich uczestników mediacji.
            </p>
            <p className='mb-6 text-justify'>
              W swojej pracy kieruję się zasadami poufności, neutralności i
              bezstronności. Gwarantuję, że wszystkie informacje przekazane
              podczas mediacji pozostaną wyłącznie między nami. Zawsze dbam o
              komfort psychiczny każdej osoby biorącej udział w rozmowie,
              wykazując się empatią, cierpliwością i zrozumieniem. Dzięki temu
              buduję atmosferę, w której łatwiej jest otwarcie mówić o swoich
              potrzebach i emocjach.
            </p>
            <p className='mb-6 text-justify'>
              Mam doświadczenie w prowadzeniu mediacji rodzinnych, cywilnych,
              gospodarczych oraz pracowniczych. Stale rozwijam swoje
              umiejętności, by jak najlepiej wspierać osoby, które mi zaufały.
              Wierzę, że mediacja to skuteczna i bezpieczna droga do rozwiązania
              nawet najtrudniejszych sporów – bez stresu, długotrwałych procesów
              sądowych i niepotrzebnych kosztów.
            </p>
            <p className='text-justify'>
              Powierzając mi swoją sprawę, możesz być pewna/pewien, że
              zostaniesz wysłuchana/y, a Twoje interesy będą dla mnie
              priorytetem. Zapewniam pełną dyskrecję, zrozumienie i
              profesjonalne wsparcie na każdym etapie mediacji.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default MediationsInfo;
