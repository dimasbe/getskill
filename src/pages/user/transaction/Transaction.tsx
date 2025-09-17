import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import bniLogo from "/public/images/payments/bni.png";
import briLogo from "/public/images/payments/bri.png";
import mandiriLogo from "/public/images/payments/mandiri.png";
import bcaLogo from "/public/images/payments/bca.png";
import gopayLogo from "/public/images/payments/gopay.png";
import ovoLogo from "/public/images/payments/ovo.png";
import alfamartLogo from "/public/images/payments/alfamart.jpg";
import indomaretLogo from "/public/images/payments/indomaret.jpg";
import defaultimg from "../../../assets/Default-Img.png";

import type { DetailCourse } from "../../../features/course/_course";
import { fetchCourseDetail } from "../../../features/course/_service/course_service";

const MySwal = withReactContent(Swal);

const paymentMethods = {
    virtualAccount: [
        { id: "bni", logo: bniLogo },
        { id: "bca", logo: bcaLogo },
        { id: "mandiri", logo: mandiriLogo },
        { id: "bri", logo: briLogo },
    ],
    eWallet: [
        { id: "gopay", logo: gopayLogo },
        { id: "ovo", logo: ovoLogo },
    ],
    convenienceStore: [
        { id: "alfamart", logo: alfamartLogo },
        { id: "indomaret", logo: indomaretLogo },
    ],
};

const TransactionPage: React.FC = () => {
    const navigate = useNavigate();
    const { slug } = useParams<{ slug: string }>();

    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState<DetailCourse | null>(null);
    const [voucher, setVoucher] = useState("");
    const [orderAmount, setOrderAmount] = useState(0);
    const [feeService, setFeeService] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [openSection, setOpenSection] = useState<string | null>(null);

    useEffect(() => {
        const loadCourse = async () => {
            try {
                setLoading(true);
                if (!slug) return;

                const data = await fetchCourseDetail(slug);
                if (!data) return;

                setCourse(data);
                const price = data.promotional_price ?? data.price;
                setOrderAmount(price);
                setFeeService(0);
                setTotalAmount(price);
            } catch (error) {
                console.error("Gagal mengambil detail course:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCourse();
    }, [slug]);

    const handleVoucherCheck = (e: React.FormEvent) => {
        e.preventDefault();
        if (voucher === "DISKON50") {
            setTotalAmount(orderAmount / 2);
            MySwal.fire({
                title: "Berhasil!",
                text: "Voucher berhasil digunakan.",
                icon: "success",
                showCancelButton: false,
                confirmButtonText: "OK",
                buttonsStyling: false, // penting biar custom CSS kepakai
                customClass: {
                    popup: "my-swal-popup",
                    title: "my-swal-title",
                    htmlContainer: "my-swal-text",
                    icon: "my-swal-icon",
                    confirmButton: "my-swal-confirm",
                },
            });
        } else {
            MySwal.fire({
                title: "Oops!",
                text: "Voucher tidak valid.",
                icon: "error",
                showCancelButton: false,
                confirmButtonText: "Coba Lagi",
                buttonsStyling: false,
                customClass: {
                    popup: "my-swal-popup",
                    title: "my-swal-title",
                    htmlContainer: "my-swal-text",
                    icon: "my-swal-icon",
                    confirmButton: "my-swal-confirm",
                },
            });
        }
    };


    const handleBuyNow = () => {
        if (!course) return;
        MySwal.fire({
            title: "Apakah Anda yakin ingin membeli kursus ini?",
            text: course.title,
            icon: "warning",
            width: "420px",

            customClass: {
                popup: "my-swal-popup",
                title: "my-swal-title",
                icon: "my-swal-icon",
                htmlContainer: "my-swal-text",
                confirmButton: "my-swal-confirm",
                cancelButton: "my-swal-cancel",
            },

            showCancelButton: true,
            confirmButtonText: "Ya",
            cancelButtonText: "Batal",
            buttonsStyling: false, // supaya CSS custom tombol jalan
        }).then((result) => {
            if (result.isConfirmed) {
                const transactionCode = `TX-${Date.now()}-${Math.floor(
                    Math.random() * 1000
                )}`;
                navigate(`/transaction/detail/${transactionCode}`);
            }
        });
    };



    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto p-4 px-5 md:px-25 grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
                {/* Course Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-4 text-left border border-gray-300 transition-all duration-500 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.25)]">
                        {loading ? (
                            <div className="animate-pulse space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-45 md:h-45 bg-gray-300 rounded-lg"></div>
                                    <div className="flex-1 space-y-3">
                                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                                    </div>
                                </div>
                                {/* Skeleton deskripsi */}
                                <div className="space-y-3">
                                    <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                                </div>
                            </div>
                        ) : (
                            course && (
                                <>
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <Link to={`/course/${course.slug}`}>
                                            <div className="relative aspect-[3/2] w-82 sm:w-48 md:w-56 rounded-lg overflow-hidden bg-gray-100 cursor-pointer">
                                                <img
                                                    src={course.photo || defaultimg}
                                                    alt={course.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </Link>

                                        <div className="text-left -pl-1 sm:pl-6">
                                            <span className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full transition-colors duration-300 hover:bg-purple-600 hover:text-white">
                                                {typeof course.sub_category === "string"
                                                    ? course.sub_category
                                                    : course.sub_category?.name}
                                            </span>
                                            <h2 className="text-sm font-semibold mt-2">{course.title}</h2>
                                            <p className="text-gray-500 text-xs mt-2 mb-2">By GetSkill</p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <p className="text-purple-600 font-semibold text-xs">
                                                    Rp {orderAmount.toLocaleString("id-ID")}
                                                </p>
                                                <span className="text-gray-500 text-xs">
                                                        ({parseFloat(course.rating).toFixed(1)} Reviews)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-justify border-t border-gray-300 pt-4">
                                        <h3 className="font-bold text-gray-800 text-base mb-5">Deskripsi:</h3>
                                        <div
                                            className="text-gray-600 text-sm sm:text-xs leading-7 space-y-4 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:mb-1 [&_strong]:font-semibold [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-gray-800 [&_h3]:mb-3"
                                            dangerouslySetInnerHTML={{ __html: course.description }}
                                        />
                                    </div>
                                </>
                            )
                        )}
                    </div>
                </div>

                {/* Payment Section */}
                <div className="lg:col-span-1 space-y-4 text-left">
                    {loading ? (
                        // Skeleton Payment Section
                        <>
                            <div className="bg-white shadow rounded-xl p-4 border border-gray-300 animate-pulse space-y-4">
                                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                                <div className="space-y-3">
                                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                                </div>
                            </div>

                            <div className="bg-white shadow rounded-xl p-6 border border-gray-300 animate-pulse space-y-4">
                                <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                                <div className="space-y-3 pt-4">
                                    <div className="flex justify-between">
                                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                    </div>
                                </div>
                                <div className="h-12 bg-gray-200 rounded w-full mt-6"></div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Payment methods */}
                            <div className="bg-white shadow rounded-xl p-4 border border-gray-300">
                                <h3 className="text-lg font-semibold mb-4 ml-2">Pilih Metode Pembayaran</h3>

                                {/* Virtual Account */}
                                <div className="border-b border-gray-200">
                                    <button
                                        onClick={() => setOpenSection(openSection === "va" ? null : "va")}
                                        className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "va"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-white hover:bg-gray-50 hover:text-yellow-500"
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
                                                            <label
                                                                key={method.id}
                                                                className="flex flex-col items-center gap-1 cursor-pointer"
                                                            >
                                                                <input type="radio" name="va" className="accent-blue-600" />
                                                                <img
                                                                    src={method.logo}
                                                                    alt="Bank Logo"
                                                                    className="w-13 h-13 object-contain"
                                                                />
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
                                        className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "ewallet"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-white hover:bg-gray-50 hover:text-yellow-500"
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
                                                            <label
                                                                key={method.id}
                                                                className="flex flex-col items-center gap-1 cursor-pointer"
                                                            >
                                                                <input type="radio" name="ewallet" className="accent-blue-600" />
                                                                <img
                                                                    src={method.logo}
                                                                    alt="E-Wallet Logo"
                                                                    className="w-12 h-12 object-contain"
                                                                />
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
                                        onClick={() =>
                                            setOpenSection(openSection === "minimarket" ? null : "minimarket")
                                        }
                                        className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-sm transition ${openSection === "minimarket"
                                                ? "bg-blue-50 text-blue-700"
                                                : "bg-white hover:bg-gray-50 hover:text-yellow-500"
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
                                                            <label
                                                                key={method.id}
                                                                className="flex flex-col items-center gap-1 cursor-pointer"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="convenienceStore"
                                                                    className="accent-blue-600"
                                                                />
                                                                <img
                                                                    src={method.logo}
                                                                    alt="Mini Market Logo"
                                                                    className="w-12 h-12 object-contain"
                                                                />
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
                                <div className="lg:col-span-1 space-y-4 text-left">
                                    {/* Ringkasan pembayaran */}
                                    {!loading && (
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
                                                    className="group bg-purple-600 text-white font-semibold text-sm py-2 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-500 ease-in-out shadow-[3px_3px_0px_black] hover:bg-yellow-400 hover:text-black hover:shadow-none"
                                                >
                                                    <span className="transition-colors duration-500 group-hover:text-black">
                                                        Cek
                                                    </span>
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
                                                    <span className="text-lg">
                                                        Rp {totalAmount.toLocaleString("id-ID")}
                                                    </span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleBuyNow}
                                                className="group mt-6 w-full rounded-full bg-yellow-400 text-black font-semibold py-3 shadow-[3px_3px_0px_black] transition-all duration-500 ease-in-out hover:bg-purple-600 hover:text-white"
                                            >
                                                <span className="transition-colors duration-500 group-hover:text-white">
                                                    Beli Sekarang
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;
