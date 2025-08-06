import React from 'react';

// Interface untuk data berita
interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  summary: string;
}

// Komponen News Card
const NewsCard: React.FC<NewsCardProps> = ({ image, date, title, summary }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x200/8B5CF6/FFFFFF?text=News'; }} />
        <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Berita
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{summary}</p>
        <a href="#" className="text-purple-600 text-sm font-medium mt-3 inline-block hover:underline">Baca Selengkapnya &rarr;</a>
      </div>
    </div>
  );
};

// Komponen BeritaTerbaruPage
const BeritaTerbaruPage: React.FC = () => {
  // Dummy data untuk berita
  const newsArticles = [
    {
      image: 'https://placehold.co/400x200/8B5CF6/FFFFFF?text=Berita+1',
      date: '01 Juli 2025',
      title: 'GetSkill.id Resmi Diluncurkan, Hadirkan Platform Pembelajaran Digital Inovatif',
      summary: 'Malang, 9 Juli 2025 – Platform pembelajaran digital GetSkill.id resmi diluncurkan dengan tujuan merevolusi cara masyarakat Indonesia mengakses pendidikan dan pelatihan keterampilan. Acara peluncuran yang berlangsung meriah ini dihadiri oleh berbagai pihak, termasuk perwakilan pemerintah, akademisi, praktisi industri, serta calon pengguna yang antusias. GetSkill.id menawarkan berbagai kursus interaktif yang dirancang untuk memenuhi kebutuhan pasar kerja saat ini, mulai dari pemrograman, desain grafis, hingga pemasaran digital.',
    },
    {
      image: 'https://placehold.co/400x200/8B5CF6/FFFFFF?text=Berita+2',
      date: '15 Juni 2025',
      title: 'Workshop Desain UI/UX Gratis Bersama GetSkill.id Sukses Digelar',
      summary: 'GetSkill.id baru saja sukses menyelenggarakan workshop desain UI/UX gratis yang diikuti oleh ratusan peserta dari berbagai latar belakang. Acara ini bertujuan untuk memberikan pemahaman dasar tentang prinsip-prinsip desain antarmuka pengguna dan pengalaman pengguna, serta bagaimana menerapkannya dalam proyek nyata. Para peserta sangat antusias dan memberikan umpan balik positif, menunjukkan tingginya minat terhadap bidang desain digital.',
    },
    {
      image: 'https://placehold.co/400x200/8B5CF6/FFFFFF?text=Berita+3',
      date: '05 Juni 2025',
      title: 'GetSkill.id Berkolaborasi dengan Universitas Ternama untuk Program Magang',
      summary: 'Dalam upaya memperkuat ekosistem pendidikan dan industri, GetSkill.id mengumumkan kolaborasi strategis dengan beberapa universitas ternama di Indonesia. Kolaborasi ini akan membuka peluang magang bagi mahasiswa, memungkinkan mereka untuk menerapkan pengetahuan yang diperoleh dari kursus GetSkill.id dalam lingkungan kerja profesional. Program ini diharapkan dapat menjembatani kesenjangan antara teori dan praktik, serta mempersiapkan talenta muda untuk tantangan industri.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
      {/* Tailwind CSS dan style kustom diasumsikan diatur di konfigurasi proyek atau file CSS global */}
      <section className="py-16 bg-white rounded-lg mt-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Berita Terbaru</h1>
          <p className="text-lg text-gray-600 mb-10">Kumpulan berita terbaru dari getskill</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeritaTerbaruPage;
