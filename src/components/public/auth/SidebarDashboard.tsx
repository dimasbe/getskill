import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaAward, FaRegUser } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TbFileStar, TbLogout } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { classindustry } from "../../../assets/img/logo/logo_class_industri1.png";

import type { ProfilData } from "../../../features/user/models";
import { fetchProfile, fetchProfileById } from "../../../features/user/user_service";

import noProfile from "../../../assets/img/no-image/no-profile.jpeg";

interface SidebarDashboardProps {
  slug?: string;
  refreshKey?: number;
}

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({ slug, refreshKey = 0 }) => {
  const [user, setUser] = useState<ProfilData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
  }, [slug, refreshKey]);

  const menuItems = [
    { to: "/dashboard/user", label: "Dashboard", icon: <FaHome size={18} /> },
    { to: "/dashboard/user/course", label: "Kursus Saya", icon: <HiOutlineBookOpen size={18} /> },
    { to: "/dashboard/user/event", label: "Event Saya", icon: <IoBookmarkOutline size={18} /> },
    { to: "/dashboard/user/certificate", label: "Sertifikat", icon: <FaAward size={18} /> },
    { to: "/dashboard/user/reviews", label: "Reviews", icon: <TbFileStar size={18} /> },
    { to: "/dashboard/user/transaction", label: "Riwayat Transaksi", icon: <FiShoppingBag size={18} /> },
    { to: "/dashboard/user/exchange", label: "Penukaran Hadiah", icon: <FaArrowRightArrowLeft size={18} /> },
    { to: "/dashboard/user/profile", label: "Profil Saya", icon: <FaRegUser size={18} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <aside className="w-full h-full 2xl:w-64 xl:w-64 lg:w-60 top-0 bg-transparent flex flex-col gap-5 transition-colors duration-500">
      {/* CARD PROFIL */}
      <div className="bg-white border-3 border-purple-200 shadow-md rounded-xl p-4 dark:bg-[#0D0D1A] dark:border-white transition-all duration-500">
        {loading ? (
          <div className="animate-pulse flex items-center">
            <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-[#1E1E2D]" />
            <div className="ml-3 flex-1 space-y-2">
              <div className="h-3 w-3/4 bg-gray-200 rounded dark:bg-[#1E1E2D]" />
              <div className="h-2 w-1/2 bg-gray-200 rounded dark:bg-[#1E1E2D]" />
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <img
              src={
                user?.photo
                  ? user.photo.startsWith("http")
                    ? user.photo
                    : `${import.meta.env.VITE_API_URL}/storage/${user.photo}`
                  : noProfile
              }
              alt="profile"
              className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover dark:bg-[#141427] dark:border-white"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src = noProfile;
              }}
            />
            <div className="ml-3 text-start">
              <h3 className="font-semibold text-sm text-gray-800 dark:text-white">
                {user?.name || "Guest"}
              </h3>
              <p className="text-gray-500 text-[11px] truncate max-w-[120px] dark:text-gray-300">
                {user?.email || "-"}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border-3 border-purple-200 shadow-md rounded-xl p-4 dark:bg-[#0D0D1A] dark:border-white transition-all duration-500 flex-1 flex flex-col justify-between">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-3 w-20 bg-gray-200 rounded dark:bg-[#1E1E2D]" />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded dark:bg-[#1E1E2D]" />
            ))}
          </div>
        ) : (
          <>
            {/* Menu */}
            <nav className="space-y-3 font-semibold text-xs">
              <h3 className="text-gray-400 text-start text-[10px] font-semibold mb-3 dark:text-white">
                DASHBOARD
              </h3>
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/dashboard/user"}
                  className={({ isActive }) =>
                    `flex items-center gap-2 border-b-2 pb-2 ${isActive
                      ? "text-purple-600 border-purple-600 dark:text-purple-400 dark:border-purple-400"
                      : "text-gray-600 border-gray-200 hover:text-purple-600 dark:text-white dark:border-white dark:hover:text-purple-400"
                    }`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Logout */}
            <div className="mt-7 text-start text-xs">
              <h3 className="text-gray-400 font-semibold text-[10px] mb-3 dark:text-white">USER</h3>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-purple-600 hover:text-yellow-400 dark:text-purple-400"
              >
                <TbLogout size={18} /> Logout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default SidebarDashboard;
