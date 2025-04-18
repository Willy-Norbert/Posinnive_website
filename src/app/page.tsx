
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
import Partners from '@/components/Partners';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-lg" >
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <HowItWorks />
        <OurWork />
        <ComparisonSection />
        <TestimonialsSection />
        <Partners />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
