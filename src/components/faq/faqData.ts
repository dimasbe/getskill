export interface FaqItem {
  category: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    category: "Umum",
    question: "Apa itu GetSkill?",
    answer:
      "GetSkill adalah platform pembelajaran online yang menyediakan berbagai modul dan kursus interaktif dari berbagai bidang. Pengguna dapat membeli atau mengakses kursus gratis, belajar kapan saja, dan mendapatkan sertifikat resmi.",
  },
  {
    category: "Pendaftaran",
    question: "Bagaimana cara mendaftar di GetSkill?",
    answer:
      "Klik tombol 'Daftar' di pojok kanan atas, isi data diri, dan verifikasi email. Setelah itu, akun Anda siap digunakan.",
  },
  {
    category: "Pembelian",
    question: "Bagaimana cara membeli kursus di GetSkill?",
    answer:
      "Pilih kursus yang diinginkan, klik tombol 'Beli Sekarang', pilih metode pembayaran, lalu selesaikan transaksi.",
  },
  {
    category: "Pembelian",
    question: "Apakah ada kursus gratis di GetSkill?",
    answer: "Ya. Kami menyediakan berbagai kursus gratis yang bisa diakses tanpa biaya.",
  },
  {
    category: "Akses Kursus",
    question: "Berapa lama akses saya ke kursus yang dibeli?",
    answer:
      "Akses kursus berlaku seumur hidup, jadi Anda bisa belajar kapan saja tanpa batas waktu.",
  },
  {
    category: "Sertifikat",
    question: "Apakah GetSkill menyediakan sertifikat?",
    answer:
      "Ya. Setelah menyelesaikan kursus dan memenuhi persyaratan, Anda akan mendapatkan sertifikat digital resmi.",
  },
];
