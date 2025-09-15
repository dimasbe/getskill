const Exam = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 py-6 px-6">
                <h1 className="text-white font-semibold text-left ml-13 2xl:ml-51 xl:ml-38 lg:ml-23 md:ml-32 sm:ml-15">
                    Ujian - Resolving Conflicts Between Designers And Engineers
                </h1>
            </div>

            {/* Main Content */}
            <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-md mx-auto mt-8">
                {/* Card Intro */}
                <div className="relative min-h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow p-6 mb-6 flex justify-between">
                    <div className="text-left px-5 mt-1">
                        <h2 className="text-xl font-bold text-white">
                            1 Dikerjakan dari 5 soal
                        </h2>
                    </div>
                    <div className="text-left px-5">
                        <p className="text-purple-700 bg-white py-2 px-4 rounded-lg font-semibold">02.30.00 Sisa waktu</p>
                    </div>
                </div>

                {/* Card Exam */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Kolom kiri (Soal Ujian) */}
                    <div className="md:col-span-3 bg-white rounded-lg shadow p-8">
                        <h2 className="text-gray-800 text-start font-semibold mb-4">
                            2. Fungsi yang dapat digunakan untuk menampilkan luaran program di Java adalah
                        </h2>

                        {/* Opsi Jawaban */}
                        <div className="space-y-5 md-5 px-5">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="q2"
                                    className="w-5 h-5 accent-purple-600"
                                />
                                <span>"hello world!"</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="q2"
                                    className="w-5 h-5 accent-purple-600"
                                />
                                <span>Public static void main(String[] args)</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="q2"
                                    className="w-5 h-5 accent-purple-600"
                                />
                                <span>System.out.print()</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="q2"
                                    className="w-5 h-5 accent-purple-600"
                                />
                                <span>Import java.io.File</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="q2"
                                    className="w-5 h-5 accent-purple-600"
                                />
                                <span>Int umur = 16;</span>
                            </label>
                        </div>

                        <div className="border-t-3 border-gray-200 mt-8"></div>

                        {/* Navigasi */}
                        <div className="flex justify-between mt-6 ">
                            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                                ← Kembali
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                                Selanjutnya →
                            </button>
                        </div>
                    </div>

                    {/* Kolom kanan (Sidebar) */}
                    <div className="bg-white rounded-lg shadow p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg text-start font-semibold text-gray-800 mb-3">Soal Ujian</h3>
                            {/* <p className="text-yellow-400 bg-yellow-100 py-2 px-4 rounded-lg font-semibold mb-6">02.30.00 Sisa waktu</p> */}

                            {/* Nomor soal */}
                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <button
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg border-3 font-semibold text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700"
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm text-start text-gray-600 mb-5">
                                    Anda bisa menyelesaikan ujian ketika waktu ujian sisa 5 menit
                                </p>
                            </div>
                        </div>

                        {/* Tombol selesai ujian */}
                        <button className="w-full py-2 rounded-lg text-white bg-yellow-400 shadow-[4px_4px_0px_0px_#0B1367] font-semibold hover:shadow-none active:translate-y-0.5 transition-all duration-200 ease-out">
                            Selesai Ujian
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Exam;
