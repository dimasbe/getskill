import FotoModel2 from '../assets/img/events/689021a8009ee.jpeg';

type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  quota: number;
  registered: number;
  daysLeft: number;
  image: string;
  category: string;
  isOnline: boolean;
  location?: string;
  platform?: string;
  price: number;
  speakerName: string;
  speakerImage: string;
  rundown: {
    time: string;
    session: string;
    speaker: { name: string; role: string };
  }[];
};

const events: Event[] = [
  {
    id: 1,
    title: 'Resolving Conflicts Between Designers',
    date: '5 September 2024',
    description:
      'Acara ini dipersembahkan QARIS dan akan diselenggarakan mulai 5 September 2024 pukul 13:00 - 15:40 WIB via live YouTube',
    quota: 123,
    registered: 45,
    daysLeft: 28,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: false,
    location: 'Ruang A, Gedung A, Universitas Indonesia',
    price: 50000,
    speakerName: 'David Miller',
    speakerImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    rundown: [
      {
        time: '13:00 - 13:30',
        session: 'Opening Dicoding Developer Coaching',
        speaker: { name: 'Arif Rachag', role: 'Curriculum Developer' },
      },
      {
        time: '13:30 - 15:20',
        session:
          'Pembahasan materi "Training dan Deployment Model Machine Learning dengan Google Cloud"',
        speaker: { name: 'Arif Rachag', role: 'Curriculum Developer' },
      },
      {
        time: '15:20 - 15:40',
        session: 'Q&A Session',
        speaker: { name: 'Arif Rachag', role: 'Curriculum Developer' },
      },
    ],
  },
  {
    id: 2,
    title: 'The Accessible Target Sizes Cheatsheet',
    date: '25 Juni 2024',
    description:
      'Acara ini dipersembahkan QARIS dan akan diselenggarakan mulai 25 Juni 2024 pukul 15:00 - 17:00 WIB via live YouTube.',
    quota: 150,
    registered: 45,
    daysLeft: 4,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: true,
    platform: 'Zoom',
    price: 75000,
    speakerName: 'Sarah Johnson',
    speakerImage: 'https://randomuser.me/api/portraits/women/45.jpg',
    rundown: [
      {
        time: '15:00 - 15:30',
        session: 'Pembukaan & Perkenalan Materi',
        speaker: { name: 'Sarah Johnson', role: 'UX Specialist' },
      },
      {
        time: '15:30 - 16:30',
        session: 'Membahas Target Size yang Efektif untuk Aksesibilitas',
        speaker: { name: 'Sarah Johnson', role: 'UX Specialist' },
      },
      {
        time: '16:30 - 17:00',
        session: 'Tanya Jawab dan Penutupan',
        speaker: { name: 'Sarah Johnson', role: 'UX Specialist' },
      },
    ],
  },
  {
    id: 3,
    title: 'Workshop: Introduction to React',
    date: '10 Juli 2024',
    description:
      'Pelatihan dasar untuk memahami React.js, JSX, state, props, dan komponen.',
    quota: 100,
    registered: 80,
    daysLeft: 12,
    image: FotoModel2,
    category: 'Workshop',
    isOnline: true,
    platform: 'Google Meet',
    price: 100000,
    speakerName: 'John Doe',
    speakerImage: 'https://randomuser.me/api/portraits/men/12.jpg',
    rundown: [
      {
        time: '09:00 - 09:30',
        session: 'Perkenalan React',
        speaker: { name: 'John Doe', role: 'Frontend Engineer' },
      },
      {
        time: '09:30 - 11:00',
        session: 'Membuat Komponen & Props',
        speaker: { name: 'John Doe', role: 'Frontend Engineer' },
      },
      {
        time: '11:00 - 12:00',
        session: 'State & Lifecycle',
        speaker: { name: 'John Doe', role: 'Frontend Engineer' },
      },
    ],
  },
  {
    id: 4,
    title: 'Tech Conference 2024',
    date: '20 Agustus 2024',
    description:
      'Konferensi teknologi terbesar yang menghadirkan berbagai pembicara dari industri global.',
    quota: 500,
    registered: 320,
    daysLeft: 25,
    image: FotoModel2,
    category: 'Conference',
    isOnline: false,
    location: 'Jakarta Convention Center',
    price: 250000,
    speakerName: 'Michael Stevens',
    speakerImage: 'https://randomuser.me/api/portraits/men/85.jpg',
    rundown: [
      {
        time: '08:00 - 09:00',
        session: 'Registrasi & Opening',
        speaker: { name: 'Panitia', role: 'Host' },
      },
      {
        time: '09:00 - 10:30',
        session: 'Keynote Speech',
        speaker: { name: 'Michael Stevens', role: 'Tech Influencer' },
      },
      {
        time: '10:30 - 12:00',
        session: 'Panel Diskusi: Masa Depan AI',
        speaker: { name: 'Panelis', role: 'Expert' },
      },
    ],
  },
  {
    id: 5,
    title: 'Design Sprint Workshop',
    date: '15 Juli 2024',
    description:
      'Pelatihan intensif 1 hari tentang bagaimana melakukan design sprint dari tahap ide hingga prototipe.',
    quota: 60,
    registered: 40,
    daysLeft: 6,
    image: FotoModel2,
    category: 'Workshop',
    isOnline: false,
    location: 'CoHive Coworking Space, Jakarta',
    price: 150000,
    speakerName: 'Emily Carter',
    speakerImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    rundown: [
      {
        time: '09:00 - 09:30',
        session: 'Pengantar Design Sprint',
        speaker: { name: 'Emily Carter', role: 'UX Designer' },
      },
      {
        time: '09:30 - 12:00',
        session: 'Define & Sketch',
        speaker: { name: 'Emily Carter', role: 'UX Designer' },
      },
      {
        time: '13:00 - 16:00',
        session: 'Prototyping & Testing',
        speaker: { name: 'Emily Carter', role: 'UX Designer' },
      },
    ],
  },
  {
    id: 6,
    title: 'AI for Everyone',
    date: '30 Juli 2024',
    description:
      'Webinar gratis untuk memperkenalkan kecerdasan buatan bagi pemula.',
    quota: 1000,
    registered: 900,
    daysLeft: 14,
    image: FotoModel2,
    category: 'Webinar',
    isOnline: true,
    platform: 'YouTube Live',
    price: 0,
    speakerName: 'Andrew Ng',
    speakerImage: 'https://randomuser.me/api/portraits/men/90.jpg',
    rundown: [
      {
        time: '10:00 - 11:00',
        session: 'Pengenalan AI',
        speaker: { name: 'Andrew Ng', role: 'AI Educator' },
      },
      {
        time: '11:00 - 12:00',
        session: 'Aplikasi AI di Kehidupan Sehari-hari',
        speaker: { name: 'Andrew Ng', role: 'AI Educator' },
      },
    ],
  },

  {
  id: 7,
  title: 'Fullstack Development Bootcamp',
  date: '5 September 2024',
  description:
    'Bootcamp intensif 3 hari untuk membangun aplikasi fullstack dengan React & Node.js.',
  quota: 80,
  registered: 65,
  daysLeft: 10,
  image: FotoModel2,
  category: 'Bootcamp',
  isOnline: false,
  location: 'Binus University, Jakarta',
  price: 300000,
  speakerName: 'Jessica Brown',
  speakerImage: 'https://randomuser.me/api/portraits/women/75.jpg',
  rundown: [
    {
      time: '09:00 - 10:00',
      session: 'Intro to Fullstack',
      speaker: { name: 'Jessica Brown', role: 'Software Engineer' },
    },
    {
      time: '10:00 - 12:00',
      session: 'Frontend with React',
      speaker: { name: 'Jessica Brown', role: 'Software Engineer' },
    },
    {
      time: '13:00 - 15:00',
      session: 'Backend with Node.js',
      speaker: { name: 'Jessica Brown', role: 'Software Engineer' },
    },
  ],
},
{
  id: 8,
  title: 'Cloud Computing Fundamentals',
  date: '12 September 2024',
  description:
    'Belajar dasar-dasar cloud computing dan implementasinya di AWS & GCP.',
  quota: 200,
  registered: 150,
  daysLeft: 18,
  image: FotoModel2,
  category: 'Seminar',
  isOnline: true,
  platform: 'Zoom',
  price: 120000,
  speakerName: 'Chris Evans',
  speakerImage: 'https://randomuser.me/api/portraits/men/47.jpg',
  rundown: [
    {
      time: '09:00 - 10:30',
      session: 'Intro Cloud',
      speaker: { name: 'Chris Evans', role: 'Cloud Specialist' },
    },
    {
      time: '10:30 - 12:00',
      session: 'AWS & GCP Overview',
      speaker: { name: 'Chris Evans', role: 'Cloud Specialist' },
    },
  ],
},
{
  id: 9,
  title: 'Mobile App Development with Flutter',
  date: '18 September 2024',
  description:
    'Workshop intensif membangun aplikasi mobile multiplatform dengan Flutter.',
  quota: 100,
  registered: 70,
  daysLeft: 24,
  image: FotoModel2,
  category: 'Workshop',
  isOnline: true,
  platform: 'Google Meet',
  price: 200000,
  speakerName: 'Lisa White',
  speakerImage: 'https://randomuser.me/api/portraits/women/22.jpg',
  rundown: [
    {
      time: '10:00 - 11:00',
      session: 'Intro Flutter',
      speaker: { name: 'Lisa White', role: 'Mobile Developer' },
    },
    {
      time: '11:00 - 13:00',
      session: 'Membuat Aplikasi Pertama',
      speaker: { name: 'Lisa White', role: 'Mobile Developer' },
    },
  ],
},
{
  id: 10,
  title: 'Data Science with Python',
  date: '22 September 2024',
  description:
    'Pelatihan untuk mempelajari analisis data, visualisasi, dan machine learning dasar dengan Python.',
  quota: 120,
  registered: 110,
  daysLeft: 28,
  image: FotoModel2,
  category: 'Training',
  isOnline: false,
  location: 'Gedung Dikti, Bandung',
  price: 180000,
  speakerName: 'Mark Lee',
  speakerImage: 'https://randomuser.me/api/portraits/men/33.jpg',
  rundown: [
    {
      time: '09:00 - 10:00',
      session: 'Python for Data Science',
      speaker: { name: 'Mark Lee', role: 'Data Scientist' },
    },
    {
      time: '10:00 - 12:00',
      session: 'Data Cleaning & Visualization',
      speaker: { name: 'Mark Lee', role: 'Data Scientist' },
    },
    {
      time: '13:00 - 15:00',
      session: 'Intro to Machine Learning',
      speaker: { name: 'Mark Lee', role: 'Data Scientist' },
    },
  ],
},
{
  id: 11,
  title: 'UI/UX Design Essentials',
  date: '28 September 2024',
  description:
    'Pelatihan dasar UI/UX design untuk pemula dengan studi kasus nyata.',
  quota: 60,
  registered: 55,
  daysLeft: 34,
  image: FotoModel2,
  category: 'Workshop',
  isOnline: true,
  platform: 'Zoom',
  price: 100000,
  speakerName: 'Anna Taylor',
  speakerImage: 'https://randomuser.me/api/portraits/women/33.jpg',
  rundown: [
    {
      time: '09:00 - 10:00',
      session: 'Intro UI/UX',
      speaker: { name: 'Anna Taylor', role: 'UI/UX Designer' },
    },
    {
      time: '10:00 - 12:00',
      session: 'Design Thinking',
      speaker: { name: 'Anna Taylor', role: 'UI/UX Designer' },
    },
  ],
},
{
  id: 12,
  title: 'Cybersecurity Awareness',
  date: '2 Oktober 2024',
  description:
    'Seminar untuk meningkatkan kesadaran tentang keamanan siber dan cara melindungi data pribadi.',
  quota: 300,
  registered: 260,
  daysLeft: 40,
  image: FotoModel2,
  category: 'Seminar',
  isOnline: false,
  location: 'Hotel Mulia, Jakarta',
  price: 50000,
  speakerName: 'Robert Smith',
  speakerImage: 'https://randomuser.me/api/portraits/men/66.jpg',
  rundown: [
    {
      time: '10:00 - 11:00',
      session: 'Intro Cybersecurity',
      speaker: { name: 'Robert Smith', role: 'Security Analyst' },
    },
    {
      time: '11:00 - 12:00',
      session: 'Case Studies',
      speaker: { name: 'Robert Smith', role: 'Security Analyst' },
    },
  ],
},
{
  id: 13,
  title: 'Digital Marketing Strategy 2024',
  date: '10 Oktober 2024',
  description:
    'Pelatihan strategi digital marketing terbaru untuk meningkatkan brand awareness.',
  quota: 150,
  registered: 130,
  daysLeft: 48,
  image: FotoModel2,
  category: 'Training',
  isOnline: true,
  platform: 'Zoom',
  price: 90000,
  speakerName: 'Sophia Green',
  speakerImage: 'https://randomuser.me/api/portraits/women/19.jpg',
  rundown: [
    {
      time: '09:00 - 10:00',
      session: 'Intro Digital Marketing',
      speaker: { name: 'Sophia Green', role: 'Digital Marketer' },
    },
    {
      time: '10:00 - 12:00',
      session: 'Campaign Strategy',
      speaker: { name: 'Sophia Green', role: 'Digital Marketer' },
    },
  ],
},
{
  id: 14,
  title: 'Advanced Machine Learning',
  date: '20 Oktober 2024',
  description:
    'Kelas lanjutan untuk mempelajari algoritma machine learning tingkat lanjut.',
  quota: 100,
  registered: 70,
  daysLeft: 58,
  image: FotoModel2,
  category: 'Class',
  isOnline: false,
  location: 'Universitas Gadjah Mada, Yogyakarta',
  price: 250000,
  speakerName: 'Daniel Harris',
  speakerImage: 'https://randomuser.me/api/portraits/men/55.jpg',
  rundown: [
    {
      time: '09:00 - 10:30',
      session: 'Advanced Regression',
      speaker: { name: 'Daniel Harris', role: 'AI Researcher' },
    },
    {
      time: '10:30 - 12:00',
      session: 'Deep Learning',
      speaker: { name: 'Daniel Harris', role: 'AI Researcher' },
    },
  ],
},
{
  id: 15,
  title: 'Startup Pitching Day',
  date: '1 November 2024',
  description:
    'Acara untuk mempertemukan startup dengan investor potensial.',
  quota: 50,
  registered: 45,
  daysLeft: 70,
  image: FotoModel2,
  category: 'Conference',
  isOnline: false,
  location: 'Jakarta Digital Valley',
  price: 1000,
  speakerName: 'Investor Panel',
  speakerImage: 'https://randomuser.me/api/portraits/men/88.jpg',
  rundown: [
    {
      time: '09:00 - 12:00',
      session: 'Startup Pitching',
      speaker: { name: 'Investor Panel', role: 'VCs' },
    },
  ],
},
{
  id: 16,
  title: 'Blockchain & Web3 Summit',
  date: '15 November 2024',
  description:
    'Konferensi membahas masa depan blockchain, crypto, dan Web3.',
  quota: 400,
  registered: 350,
  daysLeft: 84,
  image: FotoModel2,
  category: 'Conference',
  isOnline: true,
  platform: 'YouTube Live',
  price: 300000,
  speakerName: 'Vitalik Buterin',
  speakerImage: 'https://randomuser.me/api/portraits/men/77.jpg',
  rundown: [
    {
      time: '09:00 - 10:00',
      session: 'Keynote Blockchain',
      speaker: { name: 'Vitalik Buterin', role: 'Ethereum Founder' },
    },
    {
      time: '10:00 - 11:00',
      session: 'Web3 & The Future',
      speaker: { name: 'Vitalik Buterin', role: 'Ethereum Founder' },
    },
  ],
},

];

export default events;
