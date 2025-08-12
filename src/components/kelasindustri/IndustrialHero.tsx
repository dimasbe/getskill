import React from "react";
import bg1 from "../../assets/landingpage/beranda/layer1.png";
import bg2 from "../../assets/landingpage/beranda/Layer 2.png";

const IndustrialHero: React.FC = () => {
    return (
        <section
            className="relative py-30 text-center bg-white"
            style={{
                backgroundImage: `url(${bg1}), url(${bg2})`,
                backgroundPosition: "left center, right center",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "auto, auto",
            }}
        >
            {/* Konten */}
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <p className="text-xs font-medium text-gray-500 tracking-widest">
                    KELAS INDUSTRI HUMMATECH
                </p>
                <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                    Upgrade Materi dan Skill Di Industri untuk meningkatkan Persentase kerja anak didik anda Sejatinya Teknologi IT Terus Berkembang.
                </h1>
            </div>
        </section>
    );
};

export default IndustrialHero;
