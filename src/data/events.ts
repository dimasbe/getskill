import FotoModel2 from '../assets/landingpage/beranda/WhatsApp Image 2025-07-15 at 18.25.41_4c5a94b6.jpg';

const events = [
  {
    id: 1,
    title: 'Resolving Conflicts Between Designers',
    date: '5 September, 2024',
    description:
      'Acara ini dipersembahkan QARIS dan akan diselenggarakan mulai 5 September 2024 pukul 13:00 - 15:40 WIB via live YouTube',
    quota: 123,
    daysLeft: 28,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: false,
    price: 50000, // harga tiket dalam rupiah
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
    date: '25 June, 2024',
    description:
      'Acara ini dipersembahkan QARIS dan akan diselenggarakan mulai 25 Juni 2024 pukul 15:00 - 17:00 WIB via live YouTube oijosdogjpdsjgoijgpoodjgdr fogjdfpnbisfdgopnspodgjipodisjbipnd dfogdponosfjgpofngo;jds;ofngvfdvpodjgpondvmdfjpodfnidf gdfnogn;odjgsgjpd gjfo g osg;od',
    quota: 150,
    daysLeft: 4,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: true,
    price: 75000, // harga tiket dalam rupiah
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

// tambahkan dummy supaya total 20
for (let i = events.length + 1; i <= 20; i++) {
  events.push({
    id: i,
    title: `Event Dummy ${i}`,
    date: '1 Desember, 2024',
    description:
      'Deskripsi singkat event dummy untuk pengujian tampilan halaman Event.',
    quota: 100 + i,
    daysLeft: i % 10,
    image: FotoModel2,
    category: 'Seminar',
    isOnline: i % 2 === 0,
    price: 20000 + i * 1000, // harga bervariasi sedikit biar beda-beda
    speakerName: `Pembicara Dummy ${i}`,
    speakerImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    rundown: [
      {
        time: '09:00 - 09:30',
        session: 'Pembukaan Acara',
        speaker: { name: `Pembicara Dummy ${i}`, role: 'Pembicara' },
      },
      {
        time: '09:30 - 10:30',
        session: 'Sesi Utama',
        speaker: { name: `Pembicara Dummy ${i}`, role: 'Pembicara' },
      },
    ],
  });
}

export default events;
