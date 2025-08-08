import React from 'react';
import MitraCarousel from '../../../../components/beranda/MitraCarousel';

// Import gambar-gambar mitra dari folder assets
import logosmk1 from '../../../../assets/landingpage/beranda/17muncar.png';
import logosmk2 from '../../../../assets/landingpage/beranda/alazhar.jpeg';
import logosmk3 from '../../../../assets/landingpage/beranda/antartika.png';
import logosmk4 from '../../../../assets/landingpage/beranda/kraksakan.png';
import logosmk5 from '../../../../assets/landingpage/beranda/muhi.png';
import logosmk6 from '../../../../assets/landingpage/beranda/pamekasan.jpg';
import logosmk7 from '../../../../assets/landingpage/beranda/smk6jember.jpeg';
import logosmk8 from '../../../../assets/landingpage/beranda/smk8jember.png';
import logosmk9 from '../../../../assets/landingpage/beranda/smk9malang.jpeg';
import logosmk10 from '../../../../assets/landingpage/beranda/smuhero.jpeg';
import logosmk11 from '../../../../assets/landingpage/beranda/widyagama.png';

const MitraKamiPage: React.FC = () => {
  // --- Perbaikan di sini: Tambahkan ": string[]" ---
  const mitraImages: string[] = [
    logosmk1,
    logosmk2,
    logosmk3,
    logosmk4,
    logosmk5,
    logosmk6,
    logosmk7,
    logosmk8,
    logosmk9,
    logosmk10,
    logosmk11,
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased p-4">
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">MITRA KAMI</h1>
          <p className="text-lg text-gray-600 mb-10">Kolaborasi menuju kesuksesan</p>

          <div className="w-full mx-auto">
            <MitraCarousel images={mitraImages} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MitraKamiPage;