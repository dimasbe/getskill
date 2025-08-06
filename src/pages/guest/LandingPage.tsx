import React from 'react';
//import Navbar from '../../components/protected/guest/Navbar';//
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutUsSection from './AboutUsSection';

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
            <div className="relative z-10 -mt-20 md:-mt-32 lg:-mt-30"> 
                <FeaturesSection />
            </div>
            <AboutUsSection />
        </div>
    );
};

export default LandingPage;
