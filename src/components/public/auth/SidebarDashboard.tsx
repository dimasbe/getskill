import { FaHome, FaAward, FaRegUser  } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TbFileStar, TbLogout } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";

const SidebarDashboard = () => {
    return (
        <aside className="w-65 h-118 top-0 bg-white shadow-xl border-3 border-purple-200 rounded-xl p-7 ">
            <h2 className="text-xs text-start font-bold text-neutral-400 mb-6">Selamat Datang, Moh Kosim</h2>
            <nav className="space-y-3 font-semibold text-xs">
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><FaHome size={18}/></span> Dashboard
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><HiOutlineBookOpen size={18}/></span> Kursus Saya
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><IoBookmarkOutline size={18}/></span> Event Saya
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><FaAward size={18}/></span> Sertifikat
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><TbFileStar size={18}/></span> Reviews
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><FiShoppingBag size={18}/></span> Riwayat Transaksi
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><FaArrowRightArrowLeft size={18}/></span> Penukaran Hadiah
                </a>
                <a href="#" className=" text-gray-600 hover:text-purple-600 flex items-center gap-2 border-b-2 pb-2 border-gray-200">
                    <span><FaRegUser size={18}/></span> Profil Saya
                </a>
            </nav>

            <div className="mt-7 text-start text-xs">
                <h3 className="text-gray-400 font-semibold mb-3">USER</h3>
                <button className="flex items-center gap-2 text-purple-600 hover:text-yellow-400">
                    <span><TbLogout size={18}/></span> Logout
                </button>
            </div>
        </aside>
    )
}

export default SidebarDashboard