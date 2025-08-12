// File utama yang menggabungkan semua komponen

import HeroSection from '../../../components/kelasindustri/HeroSection'; // Ganti dengan path yang sesuai
import FeaturesSection from '../../../components/kelasindustri/FeaturesSection'; // Ganti dengan path yang sesuai
import IndustrialClassSection from '../../../components/kelasindustri/IndustrialClassSection'; // Ganti dengan path yang sesuai
import IndustrialClassBenefits from '../../../components/kelasindustri/IndustrialClassBenefits';
import IndustrialClassSection1 from '../../../components/kelasindustri/IndustrialClassSection1';
import IndustrialClassSection2 from '../../../components/kelasindustri/IndustrialClassSection2';
import IndustrialHero from '../../../components/kelasindustri/IndustrialHero'; 

const KelasIndustri = () => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <HeroSection />
      <FeaturesSection />
      <IndustrialClassSection />
      <IndustrialClassBenefits />
      <IndustrialClassSection1 />
      <IndustrialClassSection2 />
      <IndustrialHero />
    </div>
  );
};

export default KelasIndustri;
