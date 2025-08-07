import type { Course } from '../types/Course'

const dummyCourses: Course[] = [
  {
    id: 'scratch',
    image: 'scratch.png',
    category: 'Scratch',
    title: 'Belajar Coding Untuk Anak Menggunakan Scratch',
    author: 'Get Skill',
    price: '250.000',
    rating: 4.5,
    date: '25 Jul 2025',
    description: `Kursus ini mengajak anak-anak untuk mengenal dunia coding sejak dini melalui cara yang seru dan mudah dipahami. Dengan menggunakan Scratch—platform pemrograman visual yang dirancang khusus untuk anak-anak, peserta akan belajar menyusun logika, mengenali pola, dan membuat proyek digital seperti animasi dan game sederhana.
    
    Melalui pendekatan berbasis bermain sambil belajar, anak-anak akan mengembangkan keterampilan berpikir logis, kreativitas, dan pemecahan masalah. Kursus ini cocok untuk pemula yang belum memiliki pengalaman, dan dirancang agar setiap anak bisa belajar dengan menyenangkan, mandiri, dan penuh rasa ingin tahu.`,
    students: 100,
    syllabus: [
      {
        title: 'Pengenalan',
        description: 'Pengenalan Coding untuk Anak',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Apa itu Coding?',
          'Mengapa Belajar Coding Sejak Dini?',
          'Alat yang digunakan',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Computational Thinking',
        description: 'Berpikir Logis untuk Menyelesaikan Masalah',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Apa Itu Computational Thinking?',
          'Decomposition',
          'Pattern Recognition',
          'Abstraction',
          'Algoritma',
          'Proyek Mini',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Mengenal Dasar-dasar Coding',
        description: 'Dasar-dasar coding',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Apa Itu Perintah (Instruksi)?',
          'Mengenal Aplikasi Scratch',
          'Mengenal Antarmuka Scratch (Stage, Sprite, Block)',
          'Menyusun Blok Kode Pertamaku',
          'Tantangan Mini: Membuat Sprite Bergerak',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Alur Logika dan Urutan Langkah',
        description: 'Susun Logika Seperti Merangkai Puzzle',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Apa Itu Urutan Langkah (Sequencing)?',
          'Membuat Gerakan Berurutan',
          'Tantangan Mini: Tari Gerakan Sprite',
          'Bermain dengan Suara dan Gerak',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Pengambilan Keputusan (If-Then)',
        description: 'Pengambilan keputusan',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Memahami Konsep "Jika Maka"',
          'Mengenal Blok If dan If-Else di Scratch',
          'Membuat Interaksi Sederhana (Misal: Jika tombol ditekan, sprite meloncat)',
          'Tantangan Mini: Buat Karakter Menyapa Jika Dipencet',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Pengulangan (Looping)',
        description: 'Melakukan Hal yang Sama Berulang Kali',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Apa Itu Looping?',
          'Loop "Ulangi X Kali" vs "Ulangi Selamanya"',
          'Tantangan Mini: Membuat Bola Bergerak Bolak-Balik',
          'Proyek Kecil: Animasi Bintang Menari',
        ],
        quiz_questions: 3,
      },
      {
        title: 'Proyek Mini Game Sederhana',
        description: 'Gabungkan Semua yang Sudah Dipelajari',
        quizzes: 1,
        tasks: 1,
        subtopics: [
          'Ide Dasar Game: Tangkap Buah Apel',
          'Membuat Stage',
          'Menggerakkan Bowl',
          'Mengatur Dasar Sprite',
          'Menjatuhkan Apel Secara Acak',
          'Menambahkan Skor',
        ],
        quiz_questions: 3,
      },
    ]
  },
  // dst...
]

export default dummyCourses