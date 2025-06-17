
const Logo = ({logoColor} : {logoColor: string}) => {

    return (
        <div className={`relative font-logo text-3xl md:text-4xl ${logoColor === 'white' ? 'text-white hover:text-[#cdad7d]' : 'text-black'}`}>
            <p className='absolute'>M</p>
            <p className='absolute left-8 md:left-10 -bottom-9 md:-bottom-12'>B</p>
        </div>
    );
};
export default Logo;
