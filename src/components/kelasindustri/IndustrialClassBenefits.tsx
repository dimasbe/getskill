// src/components/BenefitsSection.tsx
import React from "react";
import lampImg from "../../assets/img/icons/lampid.png";
import searchImg from "../../assets/img/icons/searchid.png";
import loveImg from "../../assets/img/icons/loveid.png";
import boardImg from "../../assets/img/icons/blackboardid.png";
import fotofotoImg from "../../assets/img/others/fotofotoid.png";

const IndustrialClassBenefits: React.FC = () => {
  return (
    <section className="benefits-section py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-7/12 text-left lg:-ml-6"> 
            <span className="inline-block text-[11px] font-medium text-indigo-600 bg-indigo-100 px-3 py-2 rounded-full mb-3">
              Manfaat Sekolah
            </span>

            <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-snug text-left">
              Manfaat yang akan didapatkan sekolah ketika mengikuti kelas industri.{" "}
            </h2>

            <div className="space-y-5">
              {/* Item 1 */}
              <div className="flex items-start">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <img src={lampImg} alt="Mitra Industri" className="w-6 h-6" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-purple-700 text-white text-[10px] flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="ml-3 flex-1 text-left">
                  <h4 className="font-semibold text-base">Mitra Industri</h4>
                  <p className="text-gray-600 text-[11px]">
                    Memiliki kerjasama dengan CV. Hummatech Technology dan menjadikan mitra industri.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                  <img src={searchImg} alt="Business Center" className="w-6 h-6" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-teal-600 text-white text-[10px] flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="ml-3 flex-1 text-left">
                  <h4 className="font-semibold text-base">Business Center</h4>
                  <p className="text-gray-600 text-[11px]">
                    Mengaktifkan Business Center Sekolah dibidang pengembangan perangkat lunak.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                  <img src={loveImg} alt="Akreditasi" className="w-6 h-6" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-yellow-500 text-white text-[10px] flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="ml-3 flex-1 text-left">
                  <h4 className="font-semibold text-base">Akreditasi</h4>
                  <p className="text-gray-600 text-[11px]">Menambah poin akreditasi sekolah.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                  <img src={boardImg} alt="Kerja" className="w-6 h-6" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-green-600 text-white text-[10px] flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="ml-3 flex-1 text-left">
                  <h4 className="font-semibold text-base">Kerja</h4>
                  <p className="text-gray-600 text-[11px]">
                    Peningkatan keterserapan lulusan sesuai kebutuhan industri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-7/12 flex justify-center mt-12 lg:mt-0 relative">
            <img
              src={fotofotoImg}
              alt="Belajar Online"
              className="w-full h-auto object-contain rounded-xl transform translate-x-6 translate-y-6"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialClassBenefits;
