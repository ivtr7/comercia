import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ProblemsSection from '@/components/sections/ProblemsSection';
import CRMSection from '@/components/sections/CRMSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import SegmentsSection from '@/components/sections/SegmentsSection';
import StatsSection from '@/components/sections/StatsSection';
import FounderSection from '@/components/sections/FounderSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <HowItWorksSection />
        <ProblemsSection />
        <CRMSection />
        <IntegrationsSection />
        <SegmentsSection />
        <StatsSection />
        <FounderSection />
        <ComparisonSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Index;
