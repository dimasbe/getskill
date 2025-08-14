import React, { useEffect } from 'react';
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

    useEffect(() => {

        const savedScrollY = localStorage.getItem('scrollPosition');
        if (savedScrollY) {
            window.scrollTo(0, parseInt(savedScrollY));
        }

        const handleBeforeUnload = () => {
            localStorage.setItem('scrollPosition', window.scrollY.toString());
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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