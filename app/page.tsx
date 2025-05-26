import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import MediationSection from '@/components/MediationSection';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';
import SomethingSection from '@/components/SomethingSection';
import NegotiationSection from '@/components/NegotiationSection';

export default function Home() {
  return (
    <div className='font-serif'>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SomethingSection />
      <MediationSection />
      <Contact />
      <NegotiationSection />
      <Contact />
      <Footer />
    </div>
  );
}
