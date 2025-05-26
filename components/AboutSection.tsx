import Image from 'next/image';
import authorImg from '../assets/author-img.jpg';
import Wrapper from '@/ui/Wrapper';

const AboutSection = () => {
  return (
    <section id='about' className='w-full h-fit bg-[#f8f6f4]'>
      <Wrapper>
        <div className='flex flex-col md:flex-row md:gap-x-10'>
          <div>
            <p className='mb-6 text-center'>Logo</p>
            <p className='mb-6 uppercase text-[#cdad7d] text-center sm:text-xl'>
              Martyna Brzezińska
            </p>
            <p className='mb-6 text-justify'>
              Jestem ekspertką ds. księgowości i podatków, mediatorką stałą przy
              Sądzie Okręgowym w Warszawie oraz negocjatorką.
            </p>
            <p className='mb-6 text-justify'>
              Specjalizuję się w zwrocie VAT i akcyzy, optymalizacji procesów
              księgowych oraz kompleksowej obsłudze podatkowej firm i osób
              prywatnych. Moje kilkuletnie doświadczenie w finansach i
              rachunkowości pozwala mi skutecznie minimalizować ryzyko błędów i
              zwiększać efektywność rozliczeń.
            </p>
            <p className='mb-6 text-justify'>
              W pracy stawiam na precyzję, terminowość i indywidualne podejście
              do każdego klienta. Analizuję przepisy podatkowe, poszukuję
              optymalnych rozwiązań i dbam o zgodność dokumentacji z
              obowiązującymi standardami. Prowadzę szczegółowe raporty
              finansowe, przygotowuję deklaracje podatkowe oraz wspieram
              klientów w procesach zwrotu VAT i akcyzy, również z transakcji
              zagranicznych.
            </p>
            <p className='text-justify'>
              Jako mediatorka i negocjatorka pomagam w rozwiązywaniu sporów
              rodzinnych, gospodarczych, pracowniczych, karnych oraz
              rówieśniczych. Wspieram strony w osiąganiu trwałych i
              satysfakcjonujących porozumień, dbając o atmosferę dialogu i
              wzajemnego zrozumienia.
            </p>
          </div>
          <div className='max-w-[440px] self-center md:self-start  mt-10'>
            <Image
              src={authorImg}
              alt='Martyna Brzezińska image'
              priority
              className='h-full object-cover w-fit'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default AboutSection;
