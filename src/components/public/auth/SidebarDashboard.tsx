import { NavLink } from "react-router-dom";
import { FaHome, FaAward, FaRegUser } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TbFileStar, TbLogout } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";

const SidebarDashboard = () => {
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

  return (
    <aside className="w-65 h-118 top-0 bg-white shadow-xl border-3 border-purple-200 rounded-xl p-7 ">
      <h2 className="text-xs text-start font-bold text-neutral-400 mb-6">
        Selamat Datang, Moh Kosim
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
        <button className="flex items-center gap-2 text-purple-600 hover:text-yellow-400">
          <TbLogout size={18} /> Logout
        </button>
      </div>
    </aside>
  );
};

export default SidebarDashboard;
