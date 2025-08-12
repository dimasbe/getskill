import React from "react";
import clockImg from "../../assets/kelasindustri/Clock.png"; // Ganti sesuai lokasi file gambar

const IndustrialClassSection2: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-23 pb-4 grid md:grid-cols-2 gap-10 items-center pl-11">
      {/* Text */}
      <div className="text-left md:pl-4 -mt-15">
        <p className="text-xs text-gray-500">Ingin tahu lebih banyak?</p>
        <h2 className="text-xl font-bold text-gray-900 mt-1">
          Butuh informasi lebih banyak dan proposal lengkap dari kelas industri?
        </h2>
        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          Silahkan Hubungi kami pada nomor yang tertera dan undang kami ke sekolah
          anda untuk menjelaskan program kelas industri kami di sekolah anda,
          akan kami jelaskan secara detail.
        </p>
        <div className="mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-yellow-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
              Hubungi Sekarang
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </button>
          </div>
      </div>


      {/* Image */}
      <div className="flex justify-start pl-13">
        <img
          src={clockImg}
          alt="Ilustrasi Waktu"
          className="w-full max-w-sm scale-105"
        />
      </div>
    </section>
  );
};

export default IndustrialClassSection2;
