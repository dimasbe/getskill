import { useEffect, useState } from "react";
import { fetchProfile, fetchProfileById } from "../../../features/user/user_service";
import type { ProfileData } from "../../../features/user/models";

import BackgroundShapes from "../../../components/public/BackgroundShapes";
import SidebarDashboard from "./SidebarDashboard";


type DashboardLayoutProps = React.PropsWithChildren<{ slug: string; refreshKey?: number }>;

const DashboardLayout = ({ children, slug, refreshKey = 0 }: DashboardLayoutProps) => {
    const [user, setUser] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const baseProfile = await fetchProfile();
                if (baseProfile?.id) {
                    const detailProfile = await fetchProfileById(baseProfile.id);
                    setUser(detailProfile || baseProfile);
                }
            } catch (error) {
                console.error("Gagal memuat profil:", error);
            } finally {
                setLoading(false);
            }
        };

        
        loadProfile();
    },[slug, refreshKey]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative px-6 py-30 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />
            </div>

            <div className="relative z-20 -mt-35 max-w-6xl mx-auto h-[200px] bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Banner */}
                <img
                    src={
                        user?.banner
                            ? user.banner.startsWith("http")
                                ? user.banner
                                : `${import.meta.env.VITE_API_URL}/storage/${user.banner}`
                            : "/src/assets/img/no-image/no-image.jpg"
                    }
                    alt="cover"
                    className="w-full h-60 object-cover"
                />

                {/* Overlay Konten */}
                <div className="absolute bottom-5 left-8 flex items-center space-x-4">
                    {/* Foto Profil */}
                    <img
                        src={
                            user?.photo
                                ? user.photo.startsWith("http")
                                    ? user.photo
                                    : `${import.meta.env.VITE_API_URL}/storage/${user.photo}`
                                : "/src/assets/img/no-image/no-profile.jpeg"
                        }
                        alt="profile"
                        className="w-25 h-25 rounded-full border-7 border-white shadow-md object-cover bg-white"
                    />
                    {/* Nama & Email */}
                    <div className="text-start">
                        <h3 className="text-white font-bold text-lg drop-shadow-lg bg-black/50 px-2 py-1 rounded">
                            {loading ? "Loading..." : user?.name || "Guest"}
                        </h3>
                        <p className="text-white text-sm drop-shadow-lg bg-black/50 px-2 py-0.5 rounded mt-1">
                            {loading ? "" : user?.email || "-"}
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="mt-7 max-w-6xl mx-auto pb-20 bg-white flex">
                {/* Sidebar */}
                <SidebarDashboard />

                {/* Konten */}
                <div className="flex-1">{children}</div>
            </div>

        </div>
    )
};

export default DashboardLayout;
