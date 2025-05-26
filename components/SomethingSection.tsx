import Wrapper from '@/ui/Wrapper';

const SomethingSection = () => {
  return (
    <section id='something' className='w-full h-fit bg-[#f8f6f4]'>
      <Wrapper>
        <div className='flex flex-col md:flex-row md:gap-x-5 lg:gap-x-30'>
          <div>
            <p className='mb-6 text-center'>Logo</p>
            <p className='mb-6 uppercase text-center sm:text-xl'>
              Specjalistka ds. zwrotu VAT i mediacji
            </p>
            <p className='mb-6 uppercase text-[#cdad7d] text-center sm:text-xl'>
              Martyna Brzezińska
            </p>
            <p className='mb-6 text-justify'>
              Posiadam kilkuletnie doświadczeniem w księgowości i finansach.
              Moja praca pokazuje, że bycie ekspertem w dziedzinie podatków to
              nie tylko znajomość przepisów, ale przede wszystkim umiejętność
              ich właściwej interpretacji i zastosowania.
            </p>
            <p className='mb-6 text-justify'>
              Zajmuję się również mediacjami i negocjacjami – pomagam w
              rozwiązywaniu konfliktów i znajdowaniu satysfakcjonujących
              porozumień.
            </p>
            <p className='text-justify'>
              Podatek VAT i mediacje to moje pasje – uwielbiam analizować
              przepisy oraz znajdować najlepsze rozwiązania dla firm i osób
              prywatnych.
            </p>
          </div>
          <div className='max-w-[440px] self-center mt-10 h-full bg-red-500 w-[440px]'>j</div>
        </div>
      </Wrapper>
    </section>
  );
};
export default SomethingSection;
