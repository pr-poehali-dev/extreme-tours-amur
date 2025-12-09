import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToursSection from '@/components/ToursSection';
import FooterSections from '@/components/FooterSections';

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ToursSection />
      <FooterSections />
    </div>
  );
}

export default Index;
