// File utama yang menggabungkan semua komponen

import HeroSection from '../../../components/kelasindustri/HeroSection';
import FeaturesSection from '../../../components/kelasindustri/FeaturesSection';
import IndustrialClassSection from '../../../components/kelasindustri/IndustrialClassSection';
import IndustrialClassBenefits from '../../../components/kelasindustri/IndustrialClassBenefits';
import TechnologySection from '../../../components/kelasindustri/TechnologySection';
import ContactSection from '../../../components/kelasindustri/ContactSection';
import IndustrialHero from '../../../components/kelasindustri/IndustrialHero'; 

const KelasIndustri = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <HeroSection />
      <FeaturesSection />
      <IndustrialClassSection />
      <IndustrialClassBenefits />
      <TechnologySection />
      <ContactSection />
      <IndustrialHero />
    </div>
  );
};

export default KelasIndustri;