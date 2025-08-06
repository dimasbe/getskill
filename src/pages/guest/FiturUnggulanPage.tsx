import React from 'react';

// Komponen Feature Item
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, bgColor }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg text-center flex flex-col items-center ${bgColor}`}>
      <div className="text-white mb-4 text-5xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Komponen FiturUnggulanPage
const FiturUnggulanPage: React.FC = () => {
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
        `}
      </style>
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold text-purple-600 mb-2">Fitur Unggulan Kami</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Upgrade Kemampuan Anda Bersama Getskill.id
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            belajar dari instruktur terbaik di kelas langsung terlibat, berinteraksi dan menyelesaikan keraguan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>}
              title="Mentor Terpercaya"
              description="Mentor Kami ramah dan ahli dalam domain untuk membuat Anda belajar dengan mudah"
              bgColor="bg-purple-200"
            />
            <FeatureItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18.75c.305 0 .609.028.91.086a8.967 8.967 0 0 0 6-3.75c1.052 0 2.062-.18 3-.512v-14.25c-.305 0-.609-.028-.91-.086a8.967 8.967 0 0 0-6 3.75Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042V3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 12 18.75m-6 0A8.967 8.967 0 0 1 6 18.75c-.305 0-.609-.028-.91-.086M12 18.75V21m-6-3.75V21m0 0h12" /></svg>}
              title="Kursus Terbaik"
              description="Semua kursus kami dibuat dan untuk membuat Anda menikmati mempelajari hal-hal baru"
              bgColor="bg-blue-200"
            />
            <FeatureItem
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 21l-3.279-3.279A3.375 3.375 0 0 1 3 14.25V5.25a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 5.25v13.5a2.25 2.25 0 0 1-2.25 2.25H15" /></svg>}
              title="Tugas Kompetensi"
              description="Bergabunglah dengan kelas kami dengan alat interaktif dan dukungan keraguan"
              bgColor="bg-orange-200"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiturUnggulanPage;
