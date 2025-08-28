// src/pages/public/news/DetailBerita.tsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
import { newsArticles } from "../../../data/newsData";
import RelatedNews from "../../../components/public/CardNews/RelatedNews";
import logoGetskill from "../../../assets/img/logo/get-skill/landscape.png";

// --- Komponen Skeleton Detail Berita ---
const SkeletonDetailBerita: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8 animate-pulse">
      {/* Skeleton untuk Konten utama */}
      <div className="lg:col-span-3">
        <div className="bg-gray-200 h-[350px] w-full rounded-lg shadow-md mb-4"></div>
        <div className="flex items-center gap-2 mt-4 text-sm">
          <div className="bg-gray-200 h-5 w-5 rounded-full"></div>
          <div className="bg-gray-200 h-4 w-24 rounded"></div>
        </div>
        <div className="bg-gray-200 h-8 w-3/4 mt-2 mb-4 rounded"></div>
        <div className="space-y-3">
          <div className="bg-gray-200 h-4 w-full rounded"></div>
          <div className="bg-gray-200 h-4 w-full rounded"></div>
          <div className="bg-gray-200 h-4 w-11/12 rounded"></div>
          <div className="bg-gray-200 h-4 w-full rounded"></div>
          <div className="bg-gray-200 h-4 w-10/12 rounded"></div>
        </div>
      </div>

      {/* Skeleton Sidebar */}
      <div className="lg:col-span-1">
        <div className="relative mb-6">
          <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
        </div>
        <div className="mt-8 text-center">
          <div className="bg-gray-200 h-6 w-2/3 mb-4 rounded mx-auto"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="block rounded-lg border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="relative h-32 bg-gray-200 w-full"></div>
                <div className="p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-200 h-3 w-3 rounded"></div>
                    <div className="bg-gray-200 h-3 w-16 rounded"></div>
                  </div>
                  <div className="bg-gray-200 h-3 w-3/4 rounded"></div>
                  <div className="bg-gray-200 h-3 w-1/2 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// --- Akhir Skeleton Detail Berita ---

const DetailBerita: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [berita, setBerita] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const foundBerita = newsArticles.find((item) => item.id === id);
      setBerita(foundBerita);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const savedScrollY = localStorage.getItem("detailBeritaScrollPosition");
    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
    }
    const handleBeforeUnload = () => {
      localStorage.setItem(
        "detailBeritaScrollPosition",
        window.scrollY.toString()
      );
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!isLoading && !berita) {
    return (
      <div className="text-center py-20 text-gray-500">
        Berita tidak ditemukan.
      </div>
    );
  }

  if (isLoading || !berita) {
    return (
      <div className="min-h-screen bg-white pb-20">
        {/* Header tetap muncul */}
        <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
          <BackgroundShapes />
          <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-left relative z-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Detail Berita
            </h1>
            <p className="mt-2 text-xs sm:text-xs text-gray-800">
              <Link to="/">
                Beranda
              </Link>
              <span className="mx-1">&gt;</span>
              <Link to="/berita">
                Berita
              </Link>
            </p>
          </div>
        </div>

        <SkeletonDetailBerita />
      </div>
    );
  }

  const beritaTerkait = newsArticles
    .filter((item) => item.category === berita.category && item.id !== id)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-left relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Detail Berita
          </h1>
          <p className="mt-2 text-xs sm:text-xs text-gray-800">
            <Link to="/">
              Beranda
            </Link>
            <span className="mx-1">&gt;</span>
            <Link to="/berita">
              Berita
            </Link>
            <span className="mx-1">&gt;</span>
            <span className="text-purple-600">{berita.title}</span>
          </p>
        </div>
      </div>

      {/* Konten utama & sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4 grid grid-cols-1 lg:grid-cols-4 gap-2">
        {/* Konten utama */}
        <div className="lg:col-span-3">
          <div className="relative rounded-lg overflow-hidden shadow-md max-h-[350px] w-full cursor-pointer">
            <img
              src={berita.image}
              alt={berita.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-t from-purple-900/80 via-purple-700/10 to-transparent" />
            <div className="absolute bottom-0 left-2 right-2 flex items-center justify-between rounded-lg px-6 py-1 select-none pointer-events-none text-white text-sm font-semibold">
              <div className="flex space-x-3 text-white">@getskill</div>
              <div className="bg-white rounded-full p-1 shadow-md inline-block -translate-x-9">
                <img
                  src={logoGetskill}
                  alt="GetSkill Logo"
                  className="w-18 h-4 object-contain rounded-full"
                />
              </div>
              <div>getskill.id</div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-500 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="leading-none">{berita.date}</span>
          </div>

          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 text-left">
            {berita.title}
          </h2>

          <div className="-mt-4 text-gray-700 leading-relaxed whitespace-pre-line text-justify">
            {berita.content}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Cari Berita"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-500 absolute right-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>
          <RelatedNews relatedArticles={beritaTerkait} />
        </div>
      </div>
    </div>
  );
};

export default DetailBerita;
