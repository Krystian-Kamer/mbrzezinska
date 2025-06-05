const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-b from-black/95 to-blue-950 text-white gap-x-10'>
      <div className='flex justify-center items-center py-8 gap-x-20'>
        <div>Logo</div>
        <div>
          <div>Martyna Brzezińska</div>
          <div>brzezinskasm@gmail.com</div>
          <button className='border-2 border-amber-900 px-2 py-1'>
            Umów spotkanie
          </button>
        </div>
      </div>
      <div className='text-center text-sm pb-1'>C2025 Wszelkie prawa zastrzeżone. Martyna Brzezińska. Wykonanie strony CWK</div>
    </footer>
  );
};

export default Footer;
