import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaAward, FaRegUser } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TbFileStar, TbLogout } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";

import type { ProfileData } from "../../../features/user/models";
import { fetchProfile, fetchProfileById } from "../../../features/user/user_service";

interface SidebarDashboardProps {
  slug?: string;
  refreshKey?: number;
}

const SidebarDashboard: React.FC<SidebarDashboardProps> = ({ slug, refreshKey = 0 }) => {
  const [user, setUser] = useState<ProfileData | null>(null);
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
    <aside className="w-65 h-118 top-0 bg-white shadow-xl border-3 border-purple-200 rounded-xl p-7 ">
      <h2 className="text-[10px] text-start font-bold text-neutral-400 mb-6 uppercase">
        Selamat Datang, {loading ? "Loading..." : user?.name || "Guest"}
      </h2>

      <nav className="space-y-3 font-semibold text-xs">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/dashboard/user"}
            className={({ isActive }) =>
              `flex items-center gap-2 border-b-2 pb-2 ${
                isActive
                  ? "text-purple-600 border-purple-600"
                  : "text-gray-600 border-gray-200 hover:text-purple-600"
              }`
            }
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-7 text-start text-xs">
        <h3 className="text-gray-400 font-semibold mb-3">USER</h3>
        <button 
        onClick={handleLogout}
        className="flex items-center gap-2 text-purple-600 hover:text-yellow-400">
          <TbLogout size={18} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
