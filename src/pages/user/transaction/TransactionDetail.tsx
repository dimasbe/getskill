import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiRefreshCw, FiCopy } from "react-icons/fi";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import PaymentStatusImg from "../../../assets/img/payment-status/7.png"

interface TransactionDetail {
    id: string;
    code: string;
    status: string;
    product_price: number;
    total_amount: number;
    payment_deadline: string;
    product: {
        name: string;
        description: string;
    };
    user: {
        id: string;
        name: string;
        email: string;
    };
    payment_method: string;
}

interface PaymentStatus {
    status: string;
    paid_at: string | null;
}

const PaymentPage: React.FC = () => {
    const { transactionCode } = useParams<{ transactionCode: string }>();
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState<TransactionDetail | null>(null);
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const formatCurrency = (amount: number): string =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    useEffect(() => {
        if (!transactionCode) return;

        setIsLoading(true);
        setTimeout(() => {
            setTransaction({
                id: "trx-001",
                code: "T3649726871932P5JUK",
                status: "pending",
                product_price: 250000,
                total_amount: 254250,
                payment_deadline: "2025-09-12T13:28:00Z",
                product: {
                    name: "Belajar Coding Untuk Anak",
                    description: "Menggunakan Scratch",
                },
                user: {
                    id: "usr-001",
                    name: "John Doe",
                    email: "john@example.com",
                },
                payment_method: "BRIVA",
            });

            setPaymentStatus({
                status: "Belum Terbayar",
                paid_at: null,
            });

            setIsLoading(false);
        }, 800);
    }, [transactionCode]);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Kode pembayaran disalin!");
    };

    const handlePayment = (): void => {
        alert("Mengarahkan ke proses pembayaran...");
    };

    const handleCheckStatus = (): void => {
        alert("Memeriksa status pembayaran...");
    };

    const handleBack = (): void => {
        navigate("/transaction");
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-8 px-8 md:px-26 lg:px-29 xl:px-29 2xl:px-34 animate-pulse">
                <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Kiri - Skeleton Rincian Pembayaran */}
                    <div className="col-span-2 bg-white border border-gray-300 rounded-md shadow-md p-3 space-y-4">
                        <div className="h-5 bg-gray-300 rounded w-1/3"></div>

                        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-6 bg-gray-300 rounded w-full"></div>

                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-6 bg-gray-300 rounded w-full"></div>

                        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                        <div className="h-6 bg-gray-300 rounded w-full"></div>

                        <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto"></div>
                    </div>

                    {/* Kanan - Skeleton Status & Instruksi */}
                    <div className="col-span-2 lg:col-span-1 space-y-6">

                        {/* Skeleton Status */}
                        <div className="bg-white border border-gray-300 rounded-md shadow-md p-3 space-y-3">
                            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
                            <div className="h-28 bg-gray-300 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
                            <div className="h-8 bg-gray-300 rounded w-2/3 mx-auto"></div>
                        </div>

                        {/* Skeleton Instruksi */}
                        <div className="bg-white border border-gray-300 rounded-md shadow-md p-3 space-y-3">
                            <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                            <div className="h-8 bg-gray-300 rounded w-full"></div>
                            <div className="h-8 bg-gray-300 rounded w-full"></div>
                            <div className="h-8 bg-gray-300 rounded w-full"></div>
                        </div>

                        {/* Skeleton Tombol Kembali */}
                        <div className="flex justify-center">
                            <div className="h-10 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-8 md:px-26 lg:px-29 xl:px-29 2xl:px-34">
            <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Kiri - Rincian */}
                <div className="col-span-2 bg-white border border-gray-300 rounded-md shadow-md p-3">
                    <h2 className="text-left text-sm md:text-md font-semibold text-gray-800 mb-4">
                        Rincian Pembayaran
                    </h2>

                    <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[10px] md:text-sm text-gray-600">Produk yang dibeli</p>
                        </div>
                        <h3 className="flex justify-between items-center text-sm md:text-lg font-semibold text-gray-600">
                            {transaction?.product.name}
                            <span className="text-purple-600 font-semibold text-xs md:text-md">
                                {formatCurrency(transaction?.product_price || 0)}
                            </span>
                        </h3>
                    </div>

                    <div className="flex justify-between items-center py-3 border-t border-gray-200">
                        <p className="text-[10px] md:text-sm text-gray-600">
                            Voucher Diskon
                        </p>
                        <h3 className="text-xs md:text-sm font-medium text-purple-600">
                            - Rp 0
                        </h3>
                    </div>

                    <div className="flex justify-between py-3 border-t border-b border-gray-200 mt-0 mb-4">
                        <p className="mt-1 text-[10px] md:text-sm text-gray-600">Total Pembayaran</p>
                        <h3 className="text-sm md:text-lg font-bold text-purple-600">
                            {formatCurrency(transaction?.total_amount ?? 0)}
                        </h3>
                    </div>

                    <div className="mb-4 border-b pb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-left text-[10px] md:text-sm text-gray-600 mb-2">Metode Pembayaran</p>
                            <img
                                src="https://seeklogo.com/images/B/bri-bank-rakyat-indonesia-logo-7E2C8BDA37-seeklogo.com.png"
                                alt="BRIVA"
                                className="h-6"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="flex justify-between items-center">
                            <p className="text-left text-[10px] md:text-sm text-gray-600">
                                Kode Pembayaran (1 × 24 Jam)
                            </p>
                            <div className="flex items-center gap-2">
                                <p className="text-xs md:text-xl font-mono text-purple-600 font-bold">
                                    150090045757209407
                                </p>
                                <button
                                    onClick={() => handleCopy("150090045757209407")}
                                    className="p-0.5 md:p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                                >
                                    <FiCopy />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-sm text-gray-600">Kode Transaksi</p>
                            <p className="text-xs md:text-sm font-mono text-gray-600">{transaction?.code}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-[10px] md:text-sm text-gray-600">Bayar Sebelum</p>
                            <p className="text-[10px] md:text-sm font-semibold text-gray-600">
                                {formatDate(transaction?.payment_deadline ?? new Date().toISOString())}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-18 md:mt-10 lg:mt-18 group bg-[#9425FE] text-white text-[10px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-md font-semibold py-2 px-3 md:py-3 lg:py-3 xl:py-4 2xl:py-4 md:px-4 lg:px-5 xl:px-6 2xl:px-7
                        rounded-full flex items-center justify-center mx-auto md:mx-0 gap-2
                        transition-all duration-500 ease-in-out
                        shadow-[4px_4px_0_#0A0082] 
                        hover:bg-yellow-400 hover:shadow-none
                        active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                        focus:outline-none cursor-pointer"
                    >
                        <span className="transition-colors duration-500 group-hover:text-[#0A0082]">
                            Lanjutkan Pembayaran
                        </span>
                    </button>
                </div>

                {/* Kanan - Status & Instruksi */}
                <div className="col-span-2 lg:col-span-1 space-y-6">
                    {/* Status */}
                    <div className="bg-white rounded-md shadow-md p-3 border border-gray-300">
                        <h2 className="text-left text-sm md:text-md font-semibold text-gray-800 mb-4">
                            Status Pembayaran
                        </h2>

                        <div className="flex flex-col items-center text-center">
                            <img src={PaymentStatusImg} alt="Payment Status" className="h-42" />
                            <h3
                                className={`text-xs md:text-sm font-semibold ${paymentStatus?.status === "Belum Terbayar"
                                    ? "text-red-600"
                                    : "text-green-600"
                                    }`}
                            >
                                {paymentStatus?.status}
                            </h3>
                            <button
                                onClick={handleCheckStatus}
                                className="mt-2 group bg-[#9425FE] text-white text-[8px] md:text-[10px] lg:text-xs xl:text-sm 2xl:text-md 
                                font-semibold py-2 px-3 md:py-2 lg:py-3 xl:py-3 2xl:py-4 md:px-5 lg:px-24 xl:px-26 2xl:px-36
                                rounded-md flex items-center justify-center mx-auto md:mx-0 gap-2
                                transition-all duration-500 ease-in-out
                                shadow-[4px_4px_0_#0A0082] 
                                hover:bg-yellow-400 hover:shadow-none
                                active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                focus:outline-none cursor-pointer"
                            >
                                <span className="flex items-center gap-2 transition-colors duration-500 group-hover:text-[#0A0082]">
                                    <FiRefreshCw />
                                    Cek Status
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Instruksi Pembayaran */}
                    <div className="bg-white rounded-md shadow-md p-3 border border-gray-300">
                        <h2 className="text-left text-sm md:text-md font-semibold text-gray-800 mb-4">
                            Instruksi Pembayaran
                        </h2>

                        <div className="flex flex-col gap-2">
                            {["Internet Banking", "Aplikasi BRImo", "ATM BRI"].map((item, idx) => (
                                <div key={idx}>
                                    <button
                                        onClick={() =>
                                            setOpenSection(openSection === item ? null : item)
                                        }
                                        className={`w-full flex justify-between items-center px-3 py-2 text-left font-medium text-xs md:text-sm transition ${openSection === item
                                            ? "bg-blue-50 text-blue-700"
                                            : "bg-white hover:bg-gray-50 hover:text-yellow-500"
                                            }`}
                                    >
                                        <span>{item}</span>
                                        <ChevronDownIcon
                                            className={`w-3 h-3 md:w-5 md:h-5 transition-transform duration-300 stroke-[1.5] ${openSection === item ? "rotate-180" : "rotate-0"
                                                }`}
                                        />
                                    </button>
                                    {openSection === item && (
                                        <div className="px-3 pb-3 text-sm text-gray-600">
                                            Langkah-langkah {item} untuk melakukan pembayaran akan ditampilkan
                                            di sini.
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Tombol Kembali */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleBack}
                            className="group bg-yellow-400 text-[#0A0082] text-[8px] md:text-[10px] lg:text-sm xl:text-sm 2xl:text-md 
                            font-semibold py-2 px-6 md:py-2 lg:py-3 xl:py-3 2xl:py-4 md:px-8 lg:px-32 xl:px-37 2xl:px-49
                            rounded-md flex items-center justify-center gap-2
                            transition-all duration-500 ease-in-out
                            shadow-[4px_4px_0_#0A0082] 
                            hover:bg-[#9425FE] hover:shadow-none
                            active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                            focus:outline-none cursor-pointer"
                        >
                            <span className="flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                                Kembali
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;

