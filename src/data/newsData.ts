// src/data/newsData.ts

// Import semua file gambar dari folder assets
import berita1 from '../assets/landingpage/beranda/berita1.png';
import berita2 from '../assets/landingpage/beranda/berita2.png';
import berita3 from '../assets/landingpage/beranda/berita3.png';
import berita4 from '../assets/landingpage/beranda/berita4.png';
import berita5 from '../assets/landingpage/beranda/berita5.jpeg';

// Interface untuk data berita (tidak ada perubahan)
export interface NewsArticle {
  image: string;
  date: string;
  title: string;
  summary: string;
}

// Data dummy untuk 5 berita
export const newsArticles: NewsArticle[] = [
  {
    // Gunakan variabel yang sudah diimpor
    image: berita1,
    date: '01 Juli 2025',
    title: 'GetSkill.id Resmi Diluncurkan, Hadirkan Platform Pembelajaran Digital Inovatif',
    summary: 'Malang, 9 Juli 2025 – Platform pembelajaran digital GetSkill.id resmi diluncurkan dengan tujuan merevolusi cara masyarakat Indonesia mengakses pendidikan dan pelatihan keterampilan. Acara peluncuran yang berlangsung meriah ini dihadiri oleh berbagai pihak, termasuk perwakilan pemerintah, akademisi, praktisi industri, serta calon pengguna yang antusias. GetSkill.id menawarkan berbagai kursus interaktif yang dirancang untuk memenuhi kebutuhan pasar kerja saat ini, mulai dari pemrograman, desain grafis, hingga pemasaran digital.',
  },
  {
    image: berita2,
    date: '15 Juni 2025',
    title: 'Workshop Desain UI/UX Gratis Bersama GetSkill.id Sukses Digelar',
    summary: 'GetSkill.id baru saja sukses menyelenggarakan workshop desain UI/UX gratis yang diikuti oleh ratusan peserta dari berbagai latar belakang. Acara ini bertujuan untuk memberikan pemahaman dasar tentang prinsip-prinsip desain antarmuka pengguna dan pengalaman pengguna, serta bagaimana menerapkannya dalam proyek nyata. Para peserta sangat antusias dan memberikan umpan balik positif, menunjukkan tingginya minat terhadap bidang desain digital.',
  },
  {
    image: berita3,
    date: '05 Juni 2025',
    title: 'GetSkill.id Berkolaborasi dengan Universitas Ternama untuk Program Magang',
    summary: 'Dalam upaya memperkuat ekosistem pendidikan dan industri, GetSkill.id mengumumkan kolaborasi strategis dengan beberapa universitas ternama di Indonesia. Kolaborasi ini akan membuka peluang magang bagi mahasiswa, memungkinkan mereka untuk menerapkan pengetahuan yang diperoleh dari kursus GetSkill.id dalam lingkungan kerja profesional. Program ini diharapkan dapat menjembatani kesenjangan antara teori dan praktik, serta mempersiapkan talenta muda untuk tantangan industri.',
  },
  {
    image: berita4,
    date: '28 Mei 2025',
    title: 'Sukses Menggelar Pelatihan Pemasaran Digital, GetSkill.id Raih Penghargaan',
    summary: 'GetSkill.id kembali menunjukkan komitmennya dalam meningkatkan literasi digital masyarakat dengan sukses menggelar pelatihan pemasaran digital. Berkat kesuksesan ini, GetSkill.id menerima penghargaan sebagai "Platform Edutech Terinovatif" dalam ajang tahunan yang bergengsi. Penghargaan ini menjadi motivasi bagi tim GetSkill.id untuk terus berinovasi dan memberikan yang terbaik bagi para penggunanya.',
  },
  {
    image: berita5,
    date: '10 Mei 2025',
    title: 'Pembaruan Fitur: GetSkill.id Luncurkan Forum Komunitas Pembelajar',
    summary: 'Untuk menciptakan pengalaman belajar yang lebih interaktif dan kolaboratif, GetSkill.id meluncurkan fitur baru berupa forum komunitas. Melalui forum ini, para pengguna dapat berdiskusi, berbagi pengetahuan, dan membangun jaringan dengan sesama pembelajar. Fitur ini diharapkan dapat meningkatkan motivasi belajar dan memberikan dukungan bagi para pengguna dalam perjalanan mereka menguasai keterampilan baru.',
  },
];