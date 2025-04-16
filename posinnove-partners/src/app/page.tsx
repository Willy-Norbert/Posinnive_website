// pages/index.tsx
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LogoSection from '@/components/LogoSection';
import HowItWorks from '@/components/HowItWorks';
import OurWork from '@/components/OurWork';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-600">
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <HowItWorks />
        <OurWork />
        <ComparisonSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
