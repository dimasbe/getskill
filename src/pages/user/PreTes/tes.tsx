const Tes = () => {
  return (
    <div className="min-h-screen bg-gray-100 mb-15">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 py-6 px-6">
        <h1 className="text-white font-semibold text-left ml-51">
          Ujian - Resolving Conflicts Between Designers And Engineers
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-8">
        {/* Card Intro */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow p-6 mb-6 flex items-center justify-between relative">
          <div className="text-left px-5">
            <h2 className="text-xl font-bold text-white">
              Test Sebelum Masuk Kursus
            </h2>
            <p className="text-white mt-1">
              Sebelum Memasuki Kursus Anda Diperkenankan Mengerjakan test
            </p>
          </div>
          <img
            src="/src/assets/img/book.png"
            alt="Ilustrasi Ujian"
            className="w-50 mx-8 absolute right-0"
          />
        </div>

        {/* Card Aturan */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Aturan</h3>
          <div className="text-gray-600 space-y-6 text-justify px-4">
            <p>
              Anda akan menemui ujian (quiz, exam, atau ujian akhir) seperti ini
              untuk memastikan Anda sudah mengerti dan memahami materi
              pembelajaran yang telah diberikan. Pada ujian akan tersedia
              beberapa pertanyaan dengan opsi jawaban pilihan ganda.
            </p>
            <p>
              Ujian memiliki standar minimum kelulusan. Jika tidak memenuhi nilai
              minimum, maka Anda wajib mengulang kembali sampai memenuhi standar
              tersebut. Perhatikan bahwa jika Anda mau mengulang ujian, akan ada
              waktu tunggu / jeda yang harus lewat. Setelahnya, Anda dapat
              mengambil kembali ujian yang baru. Waktu tunggu ini berbeda-beda,
              mulai dari hitungan menit hingga berhari-hari. Jadi agar waktu
              lebih efisien pastikan Anda sudah siap secara materi, sebelum
              mengambil ujian.
            </p>
            <p>
              Setiap ujian juga memiliki durasi waktu yang berbeda. Anda wajib
              menyelesaikan seluruh pertanyaan pada durasi waktu yang telah
              diberikan. Jika waktu yang diberikan habis, maka ujian akan
              otomatis selesai. Sistem hanya akan menilai pertanyaan yang sudah
              terjawab. Jadi, usahakan Anda telah menjawab sebanyak mungkin
              pertanyaan hingga tuntas, sebelum durasi waktu habis.
            </p>
            <p>
              Mari kita coba fitur ujian pada Getskill. Jika sudah siap
              mencoba, klik tombol Ambil di bawah. Anda hanya bisa lanjut ke
              modul pelajaran berikutnya jika telah lulus dari ujian ini.
            </p>
          </div>

          {/* Detail Aturan */}
          <ul className="mt-6 text-gray-700 space-y-1 text-left px-5">
            <li>• Jumlah Soal: 5</li>
            <li>• Syarat Nilai Kelulusan: 80</li>
            <li>• Durasi Ujian: 5 Menit</li>
            <li>• Waktu tunggu ujian ulang: 1 menit</li>
          </ul>

          {/* Button */}
          <div className="text-center mt-8 mb-10">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
              Mulai Ujian
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tes;
