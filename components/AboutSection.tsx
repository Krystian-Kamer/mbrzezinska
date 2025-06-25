import Image from 'next/image';
import authorImg from '../assets/author-img.jpg';
import Wrapper from '@/ui/Wrapper';
import Logo from '@/ui/Logo';

const AboutSection = () => {
  return (
    <section id="about" className="bg-light h-fit w-full scroll-mt-[72px]">
      <Wrapper>
        <div className="flex flex-col md:flex-row md:gap-x-10">
          <div>
            <div className="mx-auto mb-4 h-10 w-20">
              <Logo logoColor="black" />
            </div>
            <p className="text-accent mb-6 text-center uppercase sm:text-xl">Martyna Brzezińska</p>
            <p className="mb-6 text-justify">
              Jestem ekspertką ds. księgowości i podatków, mediatorką stałą przy Sądzie Okręgowym w
              Warszawie oraz negocjatorką.
            </p>
            <p className="mb-6 text-justify">
              Specjalizuję się w zwrocie VAT i akcyzy, optymalizacji procesów księgowych oraz
              kompleksowej obsłudze podatkowej firm i osób prywatnych. Moje kilkuletnie
              doświadczenie w finansach i rachunkowości pozwala mi skutecznie minimalizować ryzyko
              błędów i zwiększać efektywność rozliczeń.
            </p>
            <p className="mb-6 text-justify">
              W pracy stawiam na precyzję, terminowość i indywidualne podejście do każdego klienta.
              Analizuję przepisy podatkowe, poszukuję optymalnych rozwiązań i dbam o zgodność
              dokumentacji z obowiązującymi standardami. Prowadzę szczegółowe raporty finansowe,
              przygotowuję deklaracje podatkowe oraz wspieram klientów w procesach zwrotu VAT i
              akcyzy, również z transakcji zagranicznych.
            </p>
            <p className="text-justify">
              Jako mediatorka i negocjatorka pomagam w rozwiązywaniu sporów rodzinnych,
              gospodarczych, pracowniczych, karnych oraz rówieśniczych. Wspieram strony w osiąganiu
              trwałych i satysfakcjonujących porozumień, dbając o atmosferę dialogu i wzajemnego
              zrozumienia.
            </p>
          </div>
          <div className="mt-10 max-w-[440px] self-center md:self-start">
            <Image
              src={authorImg}
              alt="Martyna Brzezińska image"
              priority
              className="h-full w-fit object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default AboutSection;
