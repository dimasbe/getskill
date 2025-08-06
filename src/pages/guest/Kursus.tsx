import React from 'react';

const Kursus: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
            <div className="container mx-auto text-center py-16">
                <h1 className="text-4xl font-bold text-gray-800">Selamat Datang di Halaman Kursus!</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Di sini Anda akan menemukan berbagai kursus menarik untuk meningkatkan kemampuan Anda.
                </p>
                {/* Tambahkan konten kursus yang sebenarnya di sini */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Kursus Web Development</h3>
                        <p className="text-gray-600">Pelajari HTML, CSS, JavaScript, dan framework modern.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Kursus Data Science</h3>
                        <p className="text-gray-600">Selami dunia data dengan Python dan R.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Kursus Desain Grafis</h3>
                        <p className="text-gray-600">Kuasai tools desain seperti Photoshop dan Illustrator.</p>
                    </div>
                </div>
                <button className="mt-10 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    Lihat Semua Kursus
                </button>
            </div>
        </div>
    );
};

export default Kursus;
