import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../components/public/auth/DashboardLayout";

import type { CourseActivity } from "../../../features/user/models";
import { fetchUserCourses } from "../../../features/user/user_service";
import CardCourses from "../../../components/public/auth/CardCourses/CardCourses";

const CoursePage = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState<CourseActivity[]>([]);
    const [loading, setLoading] = useState(true);

    const [filter, setFilter] = useState<"progress" | "done">("progress");

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const userCourses = await fetchUserCourses(1);
                setCourses(userCourses);
            } catch (err) {
                console.error("Gagal ambil profile:", err);
            } finally {
                setLoading(false);
            }
        };
        loadProfile();
    }, []);

    if (loading) {
        return (
            <DashboardLayout slug="dashboard">
                <main className="flex-1 flex items-center justify-center p-7">
                    <p className="text-xl font-semibold text-gray-700">
                        Memuat profil...
                    </p>
                </main>
            </DashboardLayout>
        );
    }

    const filteredCourses =
        filter === "progress"
            ? courses.filter((c) => c.study_percentage < 100)
            : courses.filter((c) => c.study_percentage === 100);

    return (
        <DashboardLayout slug="course">
            <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200 ">
                {/* Aktivitas Belajar */}
                <section className="text-start">
                    <h2 className="text-xl font-bold mb-4">Aktivitas Belajar</h2>

                    <div className="flex gap-3 mb-6">
                        <button
                            onClick={() => setFilter("progress")}
                            className={`px-5 py-3 rounded-full font-bold transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                                    hover:shadow-none active:translate-y-0.5 ${filter === "progress"
                                    ? "bg-yellow-400 text-black text-sm"
                                    : "bg-gray-200 text-sm text-gray-600"
                                }`}

                        >
                            Dalam Pengerjaan
                        </button>
                        <button
                            onClick={() => setFilter("done")}
                            className={`px-5 py-3 rounded-full font-bold transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                                        hover:shadow-none active:translate-y-0.5 ${filter === "done"
                                    ? "bg-purple-600 text-white text-sm"
                                    : "bg-gray-200 text-sm text-gray-600"
                                }`}
                        >
                            Selesai
                        </button>
                    </div>

                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCourses.map((course) => (
                                <CardCourses
                                    key={course.course.id}
                                    slug={course.course.slug}
                                    title={course.course.title}
                                    category={course.course.sub_category.name}
                                    photo={course.course.photo}
                                    study_percentage={course.study_percentage}
                                    rating={course.course.rating}
                                    total_module={course.total_module}
                                    total_user={course.total_user}
                                    study_time={course.study_time}
                                    user={course.course.user.name}
                                    photo_user={`https://api-getskill.mijurnal.com/storage/${course.course.user.photo}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <>
                            {filter === "progress" ? (
                                <div className="flex flex-col items-center justify-center py-10">
                                <img
                                        src="/src/assets/img/no-data/empty.svg"
                                        alt="Belum ada kursus selesai"
                                        className="w-auto h-56 object-contain "
                                    />
                                    <p className="text-gray-600 text-lg font-bold mb-5">
                                        Belum Ada Kursus Berjalan
                                    </p>
                                    <button
                                        onClick={() => navigate("/course")}
                                        className="px-4 py-3 text-sm bg-purple-600 shadow-[5px_6px_0_#4c1d95] 
                                                text-white rounded-full hover:shadow hover:bg-yellow-400 hover:text-gray-950 
                                                transition-all duration-300 font-semibold active:translate-y-0.5"
                                    >
                                        Lihat Kursus Disini
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-10">
                                    <img
                                        src="/src/assets/img/no-data/empty.svg"
                                        alt="Belum ada kursus selesai"
                                        className="w-auto h-56 object-contain "
                                    />
                                    <p className="text-gray-600 font-bold text-lg mb-5">
                                        Kamu belum menyelesaikan kursus apapun.
                                    </p>

                                    <button
                                        onClick={() => navigate("/course")}
                                        className="px-4 py-3 text-sm bg-purple-600 shadow-[5px_6px_0_#4c1d95] 
                                                text-white rounded-full hover:shadow hover:bg-yellow-400 hover:text-gray-950 
                                                transition-all duration-300 font-semibold active:translate-y-0.5"
                                    >
                                        Lihat Kursus Disini
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </section>
            </main>
        </DashboardLayout>
    );
};

export default CoursePage;
