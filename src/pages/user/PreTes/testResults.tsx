import { useNavigate, useParams } from "react-router-dom";

const TesResults = () => {
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className="min-h-screen bg-gray-100 mb-15">
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 py-6 px-6">
                <h1 className="text-white font-semibold text-left ml-13 2xl:ml-51 xl:ml-38 lg:ml-23 md:ml-32 sm:ml-15">
                    Pre Test - {slug}
                </h1>
            </div>

            <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-md mx-auto mt-8">
                {/* Card Intro */}
                <div className="relative min-h-37 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow p-6 mb-6 flex flex-col md:flex-row items-center md:items-center justify-between">
                    <div className="text-left px-5 mb-4 md:mb-0 md:flex-1">
                        <h3 className="text-xl font-semibold text-white">
                            Test selesai
                        </h3>
                        <h2 className="text-2xl font-bold text-white">
                            Selamat anda telah menyelesaikan test
                        </h2>
                        <p className=" text-white mt-1 sm:text-base md:text-base">
                            Hasil test anda akan tampilan dibawah ini
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <img
                            src="/src/assets/img/book.png"
                            alt="Ilustrasi Ujian"
                            className="w-80 sm:w-80 md:w-60 mx-8 mt-6 md:mt-0 2xl:absolute xl:absolute lg:absolute 2xl:right-2 2xl:-bottom-0 xl:right-2 xl:-bottom-0 lg:right-2 lg:-bottom-0"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl max-w-md mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card Aturan (Kiri) */}
                    <div className="bg-white rounded-lg shadow p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-start">Hasil Test</h2>

                        <div className="text-sm text-black space-y-4">
                            <div className="text-start">
                                <span className="font-semibold mb-2 block">Tanggal Ujian</span>
                                <p className="text-purple-600">Senin 12 September 2023</p>
                                <p className="text-purple-600">12:28:30</p>
                            </div>
                            <div className="grid grid-cols-[150px_20px_1fr] gap-x-2">
                                <span className="text-black font-semibold text-start">Jumlah Soal</span>
                                <span>:</span>
                                <span className="text-gray-600 text-end">20 Soal</span>
                            </div>

                            <div className="grid grid-cols-[150px_20px_1fr] gap-x-2">
                                <span className="text-black font-semibold text-start">Soal Benar</span>
                                <span>:</span>
                                <span className="text-gray-600 text-end">10 Soal</span>
                            </div>

                            <div className="grid grid-cols-[150px_20px_1fr] gap-x-2">
                                <span className="text-black font-semibold text-start">Soal Salah</span>
                                <span>:</span>
                                <span className="text-gray-600 text-end">7 Soal</span>
                            </div>
                        </div>

                        {/* Nilai Ujian */}
                        <div className="text-center my-6">
                            <p className="text-black font-semibold mb-3">Nilai Ujian</p>
                            <p className="text-7xl font-semibold text-purple-600 border-b-2 pb-3 border-purple-200">80</p>
                        </div>

                        {/* Hasil */}
                        <div className="text-center">
                            <p className="text-gray-600">Hasil</p>
                            <p className="bg-green-100 text-green-600 font-semibold rounded-lg py-2 mt-2">
                                Selamat Anda Lulus
                            </p>
                        </div>
                    </div>



                    {/* Card Hasil Soal (Kanan) */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Contoh soal benar */}
                        <div className="bg-white rounded-lg shadow p-7">
                            <span className="bg-purple-100 rounded-lg py-1 px-2 text-sm text-purple-600 font-semibold block ml-auto w-fit mb-4">
                                ✔ Benar
                            </span>

                            <div className="flex justify-between items-start text-start">
                                <h3 className="font-semibold">
                                    1. Fungsi yang dapat digunakan untuk menampilkan luaran program di java adalah
                                </h3>
                            </div>
                            <div className="mt-4 space-y-2 text-sm">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        name="q2"
                                        disabled
                                        className="w-5 h-5 accent-purple-600"
                                    />
                                    <span>"hello world!"</span>
                                </label>

                                <label className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        name="q2"
                                        disabled
                                        className="w-5 h-5 accent-purple-600"
                                    />
                                    <span>Public static void main(String[] args)</span>
                                </label>

                                <label className="flex items-center space-x-3 font-semibold text-purple-600">
                                    <input
                                        type="radio"
                                        name="q2"
                                        checked
                                        disabled
                                        className="w-5 h-5 accent-purple-600"
                                    />
                                    <span>System.out.print()</span>
                                </label>

                                <label className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        name="q2"
                                        disabled
                                        className="w-5 h-5 accent-purple-600"
                                    />
                                    <span>Import java.io.File</span>
                                </label>

                                <label className="flex items-center space-x-3">
                                    <input
                                        type="radio"
                                        name="q2"
                                        disabled
                                        className="w-5 h-5 accent-purple-600"
                                    />
                                    <span>Int umur = 16;</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-yellow-400 shadow-[4px_4px_0px_0px_#0B1367] hover:bg-purple-600 hover:shadow-none active:translate-y-0.5 transition-all duration-200 ease-out text-white font-semibold py-2 rounded-lg">
                            Selesai
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TesResults;
