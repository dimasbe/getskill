import DashboardLayout from "../../../../components/public/auth/DashboardLayout";
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaCheckCircle, FaTimesCircle, FaClock, FaInfoCircle, FaChevronDown } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

import paid from "../../../../assets/img/payment-status/paid.png";
import unpaid from "../../../../assets/img/payment-status/unpaid.png";
import logoBca from "../../../../../public/images/payments/bca.png";

const Payment = ({ status = "lunas" }) => {
    const isPaid = status === "belum";
    const [nominal, setNominal] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DashboardLayout slug="payment">
            <main className="flex-1 ml-0 2xl:ml-8 xl:ml-8 lg:ml-8 pb-10">
                <section className="text-start">
                    {/* Header */}
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">Pembayaran</h2>
                        <p className="text-gray-600 text-sm font-medium dark:text-white">
                            Pembayaran Semester
                        </p>
                    </div>

                    {/* ====== 3 CARD RINGKASAN ====== */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
                        {/* === Kartu 1: Tagihan Semester Ini === */}
                        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 dark:bg-[#0D0D1A]">
                            {/* Header */}
                            <div className="bg-yellow-500 text-white px-4 py-2">
                                <h3 className="font-semibold text-sm">Tagihan Semester Ini</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-yellow-500 mb-3">Rp 250.000</p>
                                <p className="text-xs text-gray-600 leading-snug dark:text-white">
                                    Kamu Harus Melunasi Tagihan Anda, Untuk Bisa Melanjutkan Materi
                                </p>
                            </div>
                        </div>

                        {/* === Kartu 2: Tagihan Semester Sebelumnya === */}
                        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 dark:bg-[#0D0D1A]">
                            <div className="bg-red-500 text-white px-4 py-2">
                                <h3 className="font-semibold text-sm">Tagihan Semester Sebelumnya</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-red-500 mb-3">Rp 200.000</p>
                                <p className="text-xs text-gray-600 leading-snug dark:text-white">
                                    Segera Melunasi Tagihan Anda, Untuk Bisa Melanjutkan Materi
                                </p>
                            </div>
                        </div>

                        {/* === Kartu 3: Tagihan Sudah Dibayar === */}
                        <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 dark:bg-[#0D0D1A]">
                            <div className="bg-purple-600 text-white px-4 py-2">
                                <h3 className="font-semibold text-sm">Tagihan Sudah Dibayar</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-purple-600 mb-3">Rp 1.250.000</p>
                                <div className="flex justify-between items-center text-xs text-gray-600 leading-snug mb-2 dark:text-white">
                                    <p>Tagihan Yang Sudah Dibayar</p>
                                    <p className="text-[10px]">88%</p>
                                </div>

                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                    <div className="bg-purple-600 h-2 rounded-full w-[88%]" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ====== FORM TAGIHAN CICILAN ====== */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Tagihan Cicilan Semester</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[0.9fr_0.7fr] gap-4 mb-8">
                        {/* Input Nominal */}
                        <div className="p-5 border rounded-xl bg-white shadow-sm dark:bg-[#0D0D1A] dark:border-white">
                            <label className="block text-md font-semibold mb-3 text-black dark:text-white">
                                Masukkan Nominal
                            </label>

                            <div className="flex items-center space-x-2">
                                <div className="bg-purple-100 p-3 rounded-lg dark:bg-purple-950">
                                    <GiWallet size={24} className="text-purple-500" />
                                </div>

                                <div className="flex items-center flex-1 border border-purple-600 rounded-lg bg-purple-50 
                                    focus-within:ring-1 focus-within:ring-purple-600 focus-within:border-purple-600 
                                    transition-all duration-150 dark:bg-purple-950">
                                    <span className="text-purple-500 font-semibold pl-3">Rp.</span>
                                    <input
                                        type="number"
                                        min="0"
                                        value={nominal}
                                        placeholder="0"
                                        onChange={(e) => setNominal(e.target.value)}
                                        className="flex-1 p-3 text-purple-500 font-semibold outline-none"
                                    />
                                </div>
                            </div>

                            <hr className="my-3 border-gray-200" />

                            <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-500 dark:text-white">
                                    Mohon lunasi tagihan anda semester ini
                                </p>
                                <button className="bg-yellow-400 hover:bg-purple-600 text-white font-semibold px-3 py-2 text-sm rounded-lg transition">
                                    Bayar Tagihan
                                </button>
                            </div>
                        </div>

                        {/* Informasi Tagihan */}
                        <div className="p-5 border rounded-xl bg-white dark:bg-[#0D0D1A] dark:border-white shadow-sm">
                            <label className="block text-md font-semibold mb-2 text-black dark:text-white">
                                Informasi Tagihan Semester
                            </label>
                            <div className="flex items-center gap-4 px-5">
                                <img
                                    src={isPaid ? paid : unpaid}
                                    alt={isPaid ? "Sudah Lunas" : "Belum Lunas"}
                                    className="w-25 h-auto mt-2"
                                />

                                <div>
                                    <h3
                                        className={`font-semibold text-lg ${isPaid ? "text-green-600" : "text-gray-800 dark:text-white"
                                            }`}
                                    >
                                        {isPaid ? "Sudah Lunas" : "Belum Lunas"}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-white">
                                        {isPaid
                                            ? "Sekolah anda sudah membayar tagihan bulan ini"
                                            : "Kamu belum membayar tagihan bulan ini"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ====== INFORMASI TAMBAHAN ====== */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-4">Informasi Tambahan</h3>

                        <div className="grid md:grid-cols-[1.0fr_0.7fr] gap-4">
                            {/* === Kartu Informasi === */}
                            <div className="bg-white rounded-xl shadow p-6 relative overflow-hidden border border-gray-100 dark:bg-[#0D0D1A] dark:border-white">
                                <div className="absolute flex items-center top-4.5 left-0 px-6 py-1.5 rounded-r-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-poppins font-semibold mb-4">
                                    <FaInfoCircle className="text-lg" />
                                    <span className="ml-2">Informasi</span>
                                </div>
                                <ul className="space-y-3 text-gray-800 text-xs leading-relaxed mt-10 dark:text-white">
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1 text-lg">•</span>
                                        <span>
                                            Kalau kamu masih bingung untuk pembayarannya, bisa langsung transfer aja ke
                                            <span className="font-semibold"> rekening Hummatech </span>
                                            yang ada di samping.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-purple-600 mt-1 text-lg">•</span>
                                        <span>
                                            Sudah transfer? yuk hubungi Admin Hummatech untuk konfirmasi pembayaran kamu!
                                        </span>
                                    </li>
                                </ul>

                                <a
                                    href="https://wa.me/6285176777785"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-purple-600 text-white rounded-md font-semibold text-xs hover:bg-purple-700 transition"
                                >
                                    <IoLogoWhatsapp size={20} />
                                    Kontak Admin Hummatech: <span className="underline">+62 851-7677-7785</span>
                                </a>

                                <div className="absolute bottom-0 right-0">
                                    <div className="w-23 h-23 bg-purple-400  opacity-60 rounded-full absolute -bottom-9 right-2"></div>
                                    <div className="w-23 h-23 bg-purple-400  opacity-60 rounded-full absolute -bottom-1 -right-10"></div>
                                </div>
                            </div>


                            {/* === Kartu Rekening Hummatech === */}
                            <div className="bg-white rounded-xl shadow p-6 relative overflow-hidden border border-gray-100 dark:bg-[#0D0D1A] dark:border-white">
                                <div className="absolute flex items-center top-4.5 left-0 px-6 py-1.5 rounded-r-md bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white font-poppins font-semibold mb-4">
                                    <FaInfoCircle className="text-lg" />
                                    <span className="ml-2">Rekening Hummatech</span>
                                </div>


                                <div className="text-sm text-gray-700 mt-10 dark:text-white">
                                    <p>
                                        <span className="font-medium">Rekening atas nama:</span> <br />
                                        <span className="font-bold text-gray-900 text-base dark:text-white">
                                            Humma Teknologi Indonesia PT
                                        </span>
                                    </p>

                                    <div className="flex flex-col">
                                        {/* Baris 1: Bank */}
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="font-medium">Bank:</span>
                                            <img
                                                src={logoBca}
                                                alt="BCA Logo"
                                                className="w-14 h-auto"
                                            />
                                        </div>

                                        {/* Baris 2: Nomor Rekening */}
                                        <div className="flex items-center gap-2 -mt-5">
                                            <span className="font-medium">No Rek:</span>
                                            <span className="text-blue-700 font-bold flex items-center gap-2">
                                                0241520047
                                                <HiOutlineDocumentDuplicate
                                                    size={22}
                                                    className="bg-blue-700 text-white p-1 rounded-sm cursor-pointer hover:bg-blue-800 transition"
                                                />
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="absolute bottom-0 right-0">
                                    <div className="w-23 h-23 bg-purple-400  opacity-60 rounded-full absolute -bottom-9 right-2"></div>
                                    <div className="w-23 h-23 bg-purple-400  opacity-60 rounded-full absolute -bottom-1 -right-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ====== HISTORY PEMBAYARAN ====== */}
                    <div className="bg-white border border-gray-100 shadow-sm rounded-lg p-5 dark:bg-[#0D0D1A] dark:border-white">
                        <h3 className="font-bold text-lg mb-4">History Pembayaran</h3>

                        {/* Filter */}
                        <div className="flex flex-wrap items-end gap-6 mb-5">
                            {/* From */}
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-1">From</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        placeholder="dd/mm/yyyy"
                                        className="w-40 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            {/* To */}
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-1">To</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        placeholder="dd/mm/yyyy"
                                        className="w-40 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            {/* Status */}
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-1">Status</label>
                                <div className="relative">
                                    <select
                                        onFocus={() => setIsOpen(true)}
                                        onBlur={() => setIsOpen(false)}
                                        className="appearance-none w-40 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <option>All</option>
                                        <option>Lunas</option>
                                        <option>Gagal</option>
                                        <option>Kedaluwarsa</option>
                                    </select>
                                    <FaChevronDown
                                        className={`absolute right-3 top-3 text-gray-400 text-xs pointer-events-none transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Tombol Reset */}
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-purple-700 transition">
                                Reset Filter
                            </button>
                        </div>


                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead className="bg-purple-600 text-white text-sm">
                                    <tr>
                                        <th className="p-2 text-left">No</th>
                                        <th className="p-2 text-left">Tanggal Bayar</th>
                                        <th className="p-2 text-left">Nominal</th>
                                        <th className="p-2 text-left">Metode Pembayaran</th>
                                        <th className="p-2 text-left">Status</th>
                                        <th className="p-2 text-center">Detail</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm bg-white dark:bg-[#0D0D1A] dark:text-white">
                                    {[
                                        { id: 1, date: "3 Maret 2025", amount: "Rp 100.000", method: "BCA", status: "Lunas" },
                                        { id: 2, date: "3 Maret 2025", amount: "Rp 80.000", method: "Transfer", status: "Gagal" },
                                        { id: 3, date: "3 Maret 2025", amount: "Rp 100.000", method: "BCA", status: "Kedaluwarsa" },
                                    ].map((item, idx) => (
                                        <tr key={item.id} className="border-b border-gray-200">
                                            <td className="p-2">{idx + 1}</td>
                                            <td className="p-2">{item.date}</td>
                                            <td className="p-2">{item.amount}</td>
                                            <td className="p-2">{item.method}</td>
                                            <td className="p-2">
                                                {item.status === "Lunas" && (
                                                    <span className="text-green-500 font-semibold flex items-center gap-1">
                                                        <FaCheckCircle /> Lunas
                                                    </span>
                                                )}
                                                {item.status === "Gagal" && (
                                                    <span className="text-red-500 font-semibold flex items-center gap-1">
                                                        <FaTimesCircle /> Gagal
                                                    </span>
                                                )}
                                                {item.status === "Kedaluwarsa" && (
                                                    <span className="text-gray-500 font-semibold flex items-center gap-1">
                                                        <FaClock /> Kedaluwarsa
                                                    </span>
                                                )}
                                            </td>
                                            <td className="p-2 text-center">
                                                <button className="bg-purple-600 text-white px-2 py-1 rounded-md hover:bg-purple-700 transition">
                                                    <FiHome size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-end items-center mt-4 gap-2">
                            {[1, 2, 3, 4].map((num) => (
                                <button
                                    key={num}
                                    className={`w-7 h-7 rounded-full text-sm font-semibold ${num === 1
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </DashboardLayout>
    );
};

export default Payment;
