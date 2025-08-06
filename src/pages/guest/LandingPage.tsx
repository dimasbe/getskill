import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutUsSection from './AboutUsSection';
import KursusTerpopuler from './KursusTerpopuler';
import BenefitPage from './BenefitPage';
import FiturUnggulanPage from './FiturUnggulanPage';
import KursusTerlarisPage from './KursusTerlarisPage';
import KelasIndustriPage from './KelasIndustriPage';
import MitraKamiPage from './MitraKamiPage';
import BeritaTerbaruPage from './BeritaTerbaruPage';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
            {/* Tailwind CSS CDN */}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
            </style>
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
