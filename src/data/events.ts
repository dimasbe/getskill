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
        session:
          'Pembahasan materi "Training dan Deployment Model Machine Learning dengan Google Cloud"',
        speaker: { name: 'Arif Rachag', role: 'Curriculum Developer' },
      },
    ],
  },
  {
    id: 2,
    title: 'The Accessible Target Sizes Cheatsheet',
    date: '25 Juni 2024',
    description:
      'Acara ini dipersembahkan QARIS dan akan diselenggarakan mulai 25 Juni 2024 pukul 15:00 - 17:00 WIB via live YouTube oijosdogjpdsjgoijgpoodjgdr fogjdfpnbisfdgopnspodgjipodisjbipnd dfogdponosfjgpofngo;jds;ofngvfdvpodjgpondvmdfjpodfnidf gdfnogn;odjgsgjpd gjfo g osg;od',
    quota: 150,
    registered: 45,
    daysLeft: 4,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: true,
    platform: 'zoom',
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
];



export default events;
