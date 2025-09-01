import React, { useEffect } from 'react';
import HeroSection from '../../../components/dashboard/HeroSection';
import FeaturesSection from '../../../components/dashboard/FeaturesSection';
import AboutUsSection from '../../../components/dashboard/AboutUsSection';
import KursusTerpopuler from '../../../components/dashboard/PopularCourses';
import BenefitPage from '../../../components/dashboard/BenefitSection';
import FiturUnggulanPage from '../../../components/dashboard/KeyFeaturesSection';
import KursusTerlarisPage from '../../../components/dashboard/BestSellingCourses';
import KelasIndustriPage from '../../../components/dashboard/IndustryClassSection';
import MitraKamiPage from '../../../components/dashboard/PartnersSection';
import BeritaTerbaruPage from '../../../components/dashboard/LatestNewsSection';

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