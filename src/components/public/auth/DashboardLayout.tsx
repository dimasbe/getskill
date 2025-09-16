import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SidebarDashboard from './SidebarDashboard';

const DashboardLayout = () => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="flex">
            {/* Sidebar */}
            <SidebarDashboard/>

            {/* Konten */}
            <main className="flex-1 bg-white ml-8 p-7 rounded-xl shadow-xl border-3 border-purple-200 ">
                <h4 className="text-start font-bold mb-6 border-b pb-4 border-b-gray-300">Profil Saya</h4>

                {/* Tab */}
                <div className="flex gap-6 border-b-3 border-purple-200 mb-6 mt-10 ">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`text-xs font-semibold pb-2 px-3 text-center ${activeTab === "profile"
                            ? "text-purple-600 border-b-3 border-purple-600 -mb-[2px]"
                            : "text-gray-500 hover:text-purple-600"
                            }`}
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`text-xs font-semibold pb-2 px-3 ${activeTab === "password"
                            ? "text-purple-600 border-b-3 border-purple-600 -mb-[2px]"
                            : "text-gray-500 hover:text-purple-600"
                            }`}
                    >
                        Password
                    </button>
                </div>

                {/* Content Profile */}
                <AnimatePresence mode="wait">
                    {activeTab === "profile" && (
                        <motion.div
                            key="profile"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                        >
                            {activeTab === "profile" && (
                                <div>
                                    {/* isi Profile */}
                                    <div className="relative h-45 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg mb-10 overflow-hidden">
                                        <img
                                            src="/src/assets/img/no-image/no-image.jpg"
                                            alt="cover"
                                            className="w-full h-60 object-cover"
                                        />
                                        <div className="absolute bottom-5 left-8 flex items-center space-x-4">
                                            {/* Foto Profil */}
                                            <img
                                                src="/src/assets/img/no-image/no-profile.jpeg"
                                                alt="profile"
                                                className="w-25 h-25 rounded-full border-7 border-white shadow-md"
                                            />

                                            {/* Tombol Kamera */}
                                            <a
                                                href="#"
                                                className="absolute bottom-1 right-4 bg-white p-2 rounded-full shadow-md hover:bg-purple-600 group"
                                                onClick={() => console.log("Ganti foto")}
                                            >
                                                <FaCamera
                                                    size={15}
                                                    className="text-purple-600 group-hover:text-white"
                                                />
                                            </a>
                                        </div>

                                        <a href="#" className="absolute transition-all duration-500 ease-out shadow-[3px_3px_0px_0px_#0B1367]
                       hover:shadow-none active:translate-y-0.5 bottom-5 right-7 bg-yellow-400 text-black font-bold text-xs px-6 py-3 border-2 rounded-full hover:text-white hover:bg-purple-600">
                                            Edit Cover Photo
                                        </a>
                                    </div>

                                    {/* Form */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start text-xs">
                                        <div>
                                            <label className="block text-gray-700 font-bold mb-2">Nama</label>
                                            <input
                                                type="text"
                                                className="w-full border-2 border-purple-200 hover:border-purple-500 
             focus:border-purple-600 focus:outline-none rounded-md p-3 "
                                                defaultValue="Moh Kosim"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-bold mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full border-2 border-purple-200 hover:border-purple-500 
             focus:border-purple-600 focus:outline-none rounded-md p-3"
                                                defaultValue="mohkosim251@gmail.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                                            <input type="text" className="w-full border-2 border-purple-200 hover:border-purple-500 
             focus:border-purple-600 focus:outline-none rounded-md p-3" />
                                        </div>
                                        {/* Alamat */}
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-700 font-bold mb-2">Alamat</label>
                                            <textarea
                                                rows={4}
                                                className="w-full border-2 border-purple-200 hover:border-purple-500 
                 focus:border-purple-600 focus:outline-none rounded-md p-3 resize-none"
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-start mt-6">
                                        <a href="#" className="transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
                       hover:shadow-none active:translate-y-0.5 bg-purple-500 text-white font-bold text-xs px-6 py-3 rounded-full hover:text-black hover:bg-yellow-400">
                                            Update Info
                                        </a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Password */}
                    <motion.div
                        key="password"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === "password" && (
                            <div>
                                {/* isi Password */}
                                <div className="grid grid-cols-1 gap-6 text-start text-xs">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Password Lama</label>
                                        <input
                                            type="password"
                                            placeholder="Password Lama"
                                            className="w-full border-2 border-purple-200 hover:border-purple-500 
                 focus:border-purple-600 focus:outline-none rounded-md p-3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Password Baru</label>
                                        <input
                                            type="password"
                                            placeholder="Password Baru"
                                            className="w-full border-2 border-purple-200 hover:border-purple-500 
                 focus:border-purple-600 focus:outline-none rounded-md p-3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Konfirmasi Password</label>
                                        <input
                                            type="password"
                                            placeholder="Re-Type New Password"
                                            className="w-full border-2 border-purple-200 hover:border-purple-500 
                 focus:border-purple-600 focus:outline-none rounded-md p-3"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-start mt-6">
                                    <a
                                        href="#"
                                        className="transition-all duration-500 ease-out shadow-[4px_4px_0px_0px_#0B1367]
               hover:shadow-none active:translate-y-0.5 bg-purple-500 text-white font-bold text-xs 
               px-6 py-3 rounded-full hover:text-black hover:bg-yellow-400"
                                    >
                                        Update Password
                                    </a>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default DashboardLayout;
