const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full h-[700px] bg-[#f8f6f4] flex items-center justify-center'
    >
      <form className=' flex flex-col w-full px-10 sm:w-[600px] xl:w-[700px]'>
        <label htmlFor='name'>Twoje imię</label>
        <input
          className='bg-[#e3d9c9] px-2 py-2 mb-4 rounded-sm focus:outline focus:outline-[#bf9757]'
          type='text'
        />
        <label htmlFor='email'>Twój adres email</label>
        <input
          className='bg-[#e3d9c9] px-2 py-2 mb-4 rounded-sm focus:outline focus:outline-[#bf9757]'
          type='text'
        />
        <label htmlFor='name'>Temat</label>
        <input
          className='bg-[#e3d9c9] px-2 py-2 mb-4 rounded-sm focus:outline focus:outline-[#bf9757]'
          type='text'
        />
        <label htmlFor='name'>Twoja wiadomość</label>
        <textarea className='bg-[#e3d9c9] px-2 py-2 mb-4 h-50 max-h-50 min-h-50 rounded-sm focus:outline focus:outline-[#bf9757]' />
        <button className='border-[#dec193] border-2 w-50 self-center text-[#bf9757]  uppercase py-3 cursor-pointer hover:text-black hover:bg-[#dec193] duration-200'>
          wyślij
        </button>
      </form>
    </section>
  );
};
export default Contact;
