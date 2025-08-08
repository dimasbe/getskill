import React from 'react';
import HeroSection from './berandasection/HeroSection';
import FeaturesSection from './berandasection/FeaturesSection';
import AboutUsSection from './berandasection/AboutUsSection';
import KursusTerpopuler from './berandasection/KursusTerpopuler';
import BenefitPage from './berandasection/BenefitPage';
import FiturUnggulanPage from './berandasection/FiturUnggulanPage';
import KursusTerlarisPage from './berandasection/KursusTerlarisPage';
import KelasIndustriPage from './berandasection/KelasIndustriPage';
import MitraKamiPage from './berandasection/MitraKamiPage';
import BeritaTerbaruPage from './berandasection/BeritaTerbaruPage';

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