import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bniLogo from "/public/images/payments/bni.png";
import briLogo from "/public/images/payments/bri.png";
import mandiriLogo from "/public/images/payments/mandiri.png";
import bcaLogo from "/public/images/payments/bca.png";
import gopayLogo from "/public/images/payments/gopay.png";
import ovoLogo from "/public/images/payments/ovo.png";
import alfamartLogo from "/public/images/payments/alfamart.jpg";
import indomaretLogo from "/public/images/payments/indomaret.jpg";
import defaultimg from "../../../assets/Default-Img.png";

interface Course {
    title: string;
    description: string;
    price: number;
    image: string;
}

const paymentMethods = {
    virtualAccount: [
        { id: "bni", name: "BNI", logo: bniLogo },
        { id: "bca", name: "BCA", logo: bcaLogo },
        { id: "mandiri", name: "Mandiri", logo: mandiriLogo },
        { id: "bri", name: "BRI", logo: briLogo },
    ],
    eWallet: [
        { id: "gopay", name: "GoPay", logo: gopayLogo },
        { id: "ovo", name: "OVO", logo: ovoLogo },
    ],
    convenienceStore: [
        { id: "alfamart", name: "Alfamart", logo: alfamartLogo },
        { id: "indomaret", name: "Indomaret", logo: indomaretLogo },
    ],
};

const TransactionPage: React.FC = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState<Course | null>(null);
    const [voucher, setVoucher] = useState("");
    const [orderAmount, setOrderAmount] = useState(0);
    const [feeService, setFeeService] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [openSection, setOpenSection] = useState<string | null>(null);

    useEffect(() => {
        const dummyCourse: Course = {
            title: "Belajar Coding Untuk Anak Menggunakan Scratch",
            description:
                "Kursus ini mengajak anak-anak untuk mengenal dunia coding sejak dini melalui cara yang seru dan mudah dipahami. Dengan menggunakan Scratch — platform pemrograman visual yang dirancang khusus untuk anak-anak. Peserta akan belajar menyusun logika, mengenali pola, dan membuat proyek digital seperti animasi dan game sederhana.\n\nMelalui pendekatan berbasis bermain sambil belajar, anak-anak akan mengembangkan keterampilan berpikir logis, kreativitas, dan pemecahan masalah. Kursus ini cocok untuk pemula yang belum memiliki pengalaman, dan dirancang agar setiap anak bisa belajar dengan menyenangkan, mandiri, dan penuh rasa ingin tahu..",
            price: 250000,
            image: "/images/default-course.png",
        };

        setTimeout(() => {
            setCourse(dummyCourse);
            setOrderAmount(dummyCourse.price);
            setFeeService(0);
            setTotalAmount(dummyCourse.price);
            setLoading(false);
        }, 1000);
    }, []);

    const handleVoucherCheck = (e: React.FormEvent) => {
        e.preventDefault();
        if (voucher === "DISKON50") {
            setTotalAmount(orderAmount / 2);
            alert("Voucher berhasil digunakan!");
        } else {
            alert("Voucher tidak valid.");
        }
    };

    const handleBuyNow = () => {
        const transactionCode = `TX-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        navigate(`/transaction/${transactionCode}`);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto p-4 px-5 md:px-10 xl:px-22 grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
                {/* Course Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-4 text-left border border-gray-300 transition-all duration-500 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.25)] group">
                        {loading ? (
                            <div className="flex items-start gap-4 animate-pulse">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-45 md:h-45 bg-gray-300 rounded-lg"></div>
                                <div className="flex-1 space-y-3">
                                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        ) : (
                            course && (
                                <>
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="relative w-81 h-40 sm:w-32 sm:h-32 md:w-50 md:h-45 rounded-lg overflow-hidden">
                                            <img
                                                src={defaultimg}
                                                alt={course.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer shine__animate"
                                            />

                                            {/* Efek Shine */}

                                        </div>

                                        <div className="text-left pl-2 sm:pl-6">
                                            <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full transition-colors duration-300 hover:bg-purple-600 hover:text-white">
                                                Game Development
                                            </span>
                                            <h2 className="text-sm font-semibold mt-2">{course.title}</h2>
                                            <p className="text-gray-500 text-xs mt-2 mb-2">By GetSkill</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <p className="text-purple-600 font-semibold text-xs">
                                                    Rp {course.price.toLocaleString("id-ID")}
                                                </p>
                                                <span className="text-gray-500 text-xs">/ (0.0 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-justify border-t border-gray-300 pt-4">
                                        <h3 className="font-bold text-gray-800 text-base mb-2">Deskripsi:</h3>
                                        <p className="text-gray-600 whitespace-pre-line text-xs leading-relaxed">
                                            {course.description}
                                        </p>
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>


                {/* Payment Section */}
                <div className="lg:col-span-1 space-y-4 text-left">
                    <div className="bg-white shadow rounded-xl p-4 border border-gray-300">
                        <h3 className="text-lg font-semibold mb-4">Pilih Metode Pembayaran</h3>
                        {/* Virtual Account */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => setOpenSection(openSection === "va" ? null : "va")}
                                className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "va" ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50 hover:text-yellow-500"
                                    }`}
                            >
                                <span>Virtual Account</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 stroke-[1.5] ${openSection === "va" ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openSection === "va" && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-3 space-y-3 text-xs text-gray-600 border-t border-gray-200">
                                            <p>Pembayaran terhubung langsung dengan akun bank kamu</p>
                                            <div className="flex items-center gap-6 flex-wrap">
                                                {paymentMethods.virtualAccount.map((method) => (
                                                    <label key={method.id} className="flex flex-col items-center gap-1 cursor-pointer">
                                                        <input type="radio" name="va" className="accent-blue-600" />
                                                        <img src={method.logo} alt={method.name} className="w-12 h-12 object-contain" />
                                                        <span className="text-xs">{method.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* E-Wallet */}
                        <div className="border-b border-gray-200">
                            <button
                                onClick={() => setOpenSection(openSection === "ewallet" ? null : "ewallet")}
                                className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "ewallet" ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50 hover:text-yellow-500"
                                    }`}
                            >
                                <span>E-Wallet</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 stroke-[1.5] ${openSection === "ewallet" ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openSection === "ewallet" && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-3 space-y-3 text-xs text-gray-600 border-t border-gray-200">
                                            <p>Pembayaran terhubung langsung dengan akun e-wallet kamu</p>
                                            <div className="flex items-center gap-6 flex-wrap">
                                                {paymentMethods.eWallet.map((method) => (
                                                    <label key={method.id} className="flex flex-col items-center gap-1 cursor-pointer">
                                                        <input type="radio" name="ewallet" className="accent-blue-600" />
                                                        <img src={method.logo} alt={method.name} className="w-12 h-12 object-contain" />
                                                        <span className="text-xs">{method.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mini Market */}
                        <div>
                            <button
                                onClick={() => setOpenSection(openSection === "minimarket" ? null : "minimarket")}
                                className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "minimarket" ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50 hover:text-yellow-500"
                                    }`}
                            >
                                <span>Mini Market</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 stroke-[1.5] ${openSection === "minimarket" ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openSection === "minimarket" && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-3 space-y-3 text-xs text-gray-600 border-t border-gray-200">
                                            <p>Pembayaran bisa lewat mini market terdekat</p>
                                            <div className="flex items-center gap-6 flex-wrap">
                                                {paymentMethods.convenienceStore.map((method) => (
                                                    <label key={method.id} className="flex flex-col items-center gap-1 cursor-pointer">
                                                        <input type="radio" name="convenienceStore" className="accent-blue-600" />
                                                        <img src={method.logo} alt={method.name} className="w-12 h-12 object-contain" />
                                                        <span className="text-xs">{method.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Ringkasan pembayaran */}
                    <div className="bg-white shadow rounded-xl p-6 text-left border border-gray-300">
                        <h3 className="text-lg font-semibold mb-5">Pembayaran</h3>
                        <form onSubmit={handleVoucherCheck} className="flex gap-3 mb-6">
                            <input
                                type="text"
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                placeholder="Kode Voucher"
                                value={voucher}
                                onChange={(e) => setVoucher(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="group bg-purple-600 text-white font-semibold text-sm py-2 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-in-out shadow-[3px_3px_0px_black] hover:bg-yellow-400 hover:text-black hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none"
                            >
                                <span className="transition-colors duration-500 group-hover:text-black">Cek</span>
                            </button>
                        </form>

                        <div className="border-t border-gray-300 pt-7 mt-7 space-y-4 text-left text-gray-500 text-sm">
                            <div className="flex justify-between">
                                <span>Harga Pesanan</span>
                                <span>Rp {orderAmount.toLocaleString("id-ID")}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Biaya Layanan</span>
                                <span>Rp {feeService.toLocaleString("id-ID")}</span>
                            </div>
                            <div className="border-t border-gray-300 pt-7 mt-10 flex justify-between font-semibold text-gray-500">
                                <span>Total Pesanan</span>
                                <span className="text-lg">Rp {totalAmount.toLocaleString("id-ID")}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleBuyNow}
                            className="group mt-6 w-full rounded-full bg-yellow-400 text-black font-semibold py-3 shadow-[3px_3px_0px_black] transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-white hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] active:shadow-none focus:outline-none"
                        >
                            <span className="transition-colors duration-500 group-hover:text-white">Beli Sekarang</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;
