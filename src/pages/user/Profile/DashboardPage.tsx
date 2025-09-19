import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import DashboardLayout from "../../../components/public/auth/DashboardLayout";

const DashboardPage = () => {
    const navigate = useNavigate();

    const stats = [
        { label: "KURSUS DIMILIKI", value: 0 },
        { label: "KURSUS BELUM SELESAI", value: 0 },
        { label: "KURSUS SELESAI", value: 0 },
    ];

    return (
        <DashboardLayout slug="dashboard">
            {/* Konten */}
            <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200 ">
                {/* Bagian Statistik */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10  label">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-5 rounded-lg shadow-sm text-start"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-600 text-white text-xl">
                                <FaBookOpen />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{item.value}</p>
                                <p className="text-gray-600 text-xs">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Aktivitas Belajar */}
                <section className="mb-10 text-start">
                    <h2 className="text-xl font-bold mb-2">Aktivitas Belajar</h2>
                    <p className="text-gray-600 text-sm mb-4">Belum Ada Kursus</p>
                    <button 
                    onClick={() => navigate("/course")}
                    className="px-4 py-3 text-sm bg-purple-600 shadow-[5px_6px_0_#4c1d95] 
                   text-white rounded-full hover:shadow hover:bg-yellow-400 hover:text-gray-950 
                   transition-all duration-300  font-semibold active:translate-y-0.5 ">
                        Lihat Kursus Disini
                    </button>
                </section>

                {/* Aktivitas Event */}
                <section className="text-start">
                    <h2 className="text-xl font-bold mb-2">Aktivitas Event</h2>
                    <p className="text-gray-600 text-sm mb-4">Belum Ada Event</p>
                    <button
                    onClick={() => navigate("/event")} 
                    className="px-4 py-3 text-sm bg-purple-600 shadow-[5px_6px_0_#4c1d95] 
                   text-white rounded-full hover:shadow hover:bg-yellow-400 hover:text-gray-950 
                   transition-all duration-300  font-semibold active:translate-y-0.5">
                        Lihat Event Disini
                    </button>
                </section>
            </main>
        </DashboardLayout>
    )
};

export default DashboardPage