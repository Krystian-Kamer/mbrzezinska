import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import MediationSection from '@/components/MediationSection';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';
import NegotiationSection from '@/components/NegotiationSection';
import MediationsInfo from '@/components/MediationsInfo';
import NegotiationsInfo from '@/components/NegotiationsInfo';

export default function Home() {
  return (
    <div className='font-serif'>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MediationsInfo />
      <MediationSection />
      <NegotiationsInfo />
      <NegotiationSection />
      <Contact />
      <Footer />
    </div>
  );
}
