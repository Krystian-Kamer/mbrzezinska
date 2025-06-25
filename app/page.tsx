import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import MediationsSection from '@/components/MediationsSection';
import ServicesSection from '@/components/ServicesSection';
import Contact from '@/components/Contact';
import NegotiationsSection from '@/components/NegotiationsSection';
import MediationsInfo from '@/components/MediationsInfo';
import NegotiationsInfo from '@/components/NegotiationsInfo';

export default function Home() {
  return (
    <div className="font-serif">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <MediationsInfo />
      <MediationsSection />
      <NegotiationsInfo />
      <NegotiationsSection />
      <Contact />
      <Footer />
    </div>
  );
}
