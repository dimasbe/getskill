import React from 'react';
import HeroSection from '../../../components/beranda/HeroSection';
import FeaturesSection from '../../../components/beranda/FeaturesSection';
import AboutUsSection from '../../../components/beranda/AboutUsSection';
import KursusTerpopuler from '../../../components/beranda/KursusTerpopuler';
import BenefitPage from '../../../components/beranda/BenefitPage';
import FiturUnggulanPage from '../../../components/beranda/FiturUnggulanPage';
import KursusTerlarisPage from '../../../components/beranda/KursusTerlarisPage';
import KelasIndustriPage from '../../../components/beranda/KelasIndustriPage';
import MitraKamiPage from '../../../components/beranda/MitraKamiPage';
import BeritaTerbaruPage from '../../../components/beranda/BeritaTerbaruPage';

const LandingPage: React.FC = () => {
    return (
        <div className="font-sans antialiased">
            <HeroSection />
            <FeaturesSection />
            <AboutUsSection />
            <KursusTerpopuler />
            <BenefitPage />
            <FiturUnggulanPage />
            <KursusTerlarisPage />
            <KelasIndustriPage />
            <MitraKamiPage />
            <BeritaTerbaruPage />
        </div>
    );
};

export default LandingPage;