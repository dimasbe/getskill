import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/public/auth/DashboardLayout";

const CoursePage = () => {
    const navigate = useNavigate();

    return (
        <DashboardLayout slug="course">
            {/* Konten */}
            <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200 ">
                {/* Aktivitas Belajar */}
                <section className="text-start">
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
            </main>
        </DashboardLayout>
    )
}

export default CoursePage