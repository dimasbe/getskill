import React, { useState } from "react";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
import NewsCard from "../../../components/public/CardNews/NewsCard";
import { newsArticles } from "../../../data/newsData";

const Berita: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [sortOrder, setSortOrder] = useState("Terbaru");

    // Ambil kategori unik
    const categories = ["Semua", ...new Set(newsArticles.map((item) => item.category))];

    // Filter + Sort
    const filteredArticles = newsArticles
        .filter((article) => {
            const matchSearch = article.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const matchCategory =
                selectedCategory === "Semua" || article.category === selectedCategory;
            return matchSearch && matchCategory;
        })
        .sort((a, b) => {
            const dateA = new Date(a.dateISO);
            const dateB = new Date(b.dateISO);
            return sortOrder === "Terbaru"
                ? dateB.getTime() - dateA.getTime()
                : dateA.getTime() - dateB.getTime();
        });

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:text-left relative z-10">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                        Berita
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-gray-800">
                        <a href="/" className="hover:underline">
                            Beranda
                        </a>
                        <span className="mx-1">&gt;</span>
                        <span className="text-purple-600">Berita</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center items-center mt-6">
                {/* Search */}
                <div className="relative w-90">
                    <input
                        type="text"
                        placeholder="Cari Berita"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400 absolute right-3 top-2.5"
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

                {/* Filter Kategori */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-30 border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 bg-white"
                >
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Sort */}
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-30 border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 bg-white"
                >
                    <option value="Terbaru">Terbaru</option>
                    <option value="Terlama">Terlama</option>
                </select>
            </div>

            {/* Isi Halaman */}
            <section className="py-10 bg-white rounded-lg">
                <div className="container mx-auto px-5 md:px-20 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article, index) => (
                                <NewsCard key={index} {...article} />
                            ))
                        ) : (
                            <p className="col-span-full text-gray-500">
                                Tidak ada berita yang cocok.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Berita;
