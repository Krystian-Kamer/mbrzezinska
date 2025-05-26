const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-10 md:px-10 lg:px-20 pt-20 pb-10'>
      {children}
    </div>
  );
};
export default Wrapper;
