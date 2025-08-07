import React from 'react';
import HeroSection from './landingpage/HeroSection';
import FeaturesSection from './landingpage/FeaturesSection';
import AboutUsSection from './landingpage/AboutUsSection';
import KursusTerpopuler from './landingpage/KursusTerpopuler';
import BenefitPage from './landingpage/BenefitPage';
import FiturUnggulanPage from './landingpage/FiturUnggulanPage';
import KursusTerlarisPage from './landingpage/KursusTerlarisPage';
import KelasIndustriPage from './landingpage/KelasIndustriPage';
import MitraKamiPage from './landingpage/MitraKamiPage';
import BeritaTerbaruPage from './landingpage/BeritaTerbaruPage';

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