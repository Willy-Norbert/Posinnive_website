import Navbar from '@/components/Navbar';
import Explore from '@/components/Explore';
import LogoSection from '@/components/LogoSection';
import HowItWorks from '@/components/HowItWorks';
import OurWork from '@/components/OurWork';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import { GlobalStateProvider } from '@/Context/GlobalStateContext'; // Import the provider
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const HomePage: React.FC = () => {
  return (
    <GlobalStateProvider> {/* Wrap the entire page with GlobalStateProvider */}
      <div className="min-h-screen font-sans text-lg">
        <Navbar />
        <main>
          <Explore />
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
    </GlobalStateProvider>
  );
};

export default HomePage;
