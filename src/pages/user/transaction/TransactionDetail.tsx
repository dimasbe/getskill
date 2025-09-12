import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiRefreshCw, FiCopy } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
    const [transaction, setTransaction] = useState<TransactionDetail | null>(null);
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
        window.history.back();
    };

    if (isLoading || !transaction) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {/* Kiri - Rincian */}
                <div className="col-span-2 bg-white border border-gray-300 rounded-md shadow-md p-6">
                    <h2 className="text-left text-lg font-semibold text-gray-800 mb-4">
                        Rincian Pembayaran
                    </h2>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <p className="text-sm text-gray-600">Produk yang dibeli</p>
                            <span className="text-purple-600 font-semibold text-sm">
                                {formatCurrency(transaction.product_price)}
                            </span>
                        </div>
                        <h3 className="text-left text-lg font-medium text-gray-900">
                            {transaction.product.name}
                        </h3>
                        <p className="text-left text-sm text-gray-600">
                            {transaction.product.description}
                        </p>
                    </div>

                    <div className="flex justify-between py-2 border-t border-gray-200">
                        <p className="text-sm text-gray-600">Voucher Diskon</p>
                        <p className="text-sm text-gray-600">- Rp 0</p>
                    </div>

                    <div className="flex justify-between py-4 border-t border-b border-gray-200 mt-4 mb-4">
                        <p className="text-sm text-gray-600">Total Pembayaran</p>
                        <h3 className="text-lg font-bold text-purple-600">
                            {formatCurrency(transaction.total_amount)}
                        </h3>
                    </div>

                    <div className="mb-4 border-b pb-4">
                        <p className="text-left text-sm text-gray-600 mb-2">Metode Pembayaran</p>
                        <div className="flex items-center justify-end">
                            <img
                                src="https://seeklogo.com/images/B/bri-bank-rakyat-indonesia-logo-7E2C8BDA37-seeklogo.com.png"
                                alt="BRIVA"
                                className="h-6"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-left text-xs text-gray-500 mb-1">
                            Kode Pembayaran (1 × 24 Jam)
                        </p>
                        <div className="flex justify-end items-center gap-2">
                            <p className="text-xl font-mono text-purple-600 font-bold">
                                150090045757209407
                            </p>
                            <button
                                onClick={() => handleCopy("150090045757209407")}
                                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
                            >
                                <FiCopy />
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-xs text-gray-500">Kode Transaksi</p>
                            <p className="text-sm font-mono">{transaction.code}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <p className="text-xs text-gray-500">Bayar Sebelum</p>
                            <p className="text-sm font-semibold text-gray-700">
                                {formatDate(transaction.payment_deadline)}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handlePayment}
                        className="mt-15 group bg-[#9425FE] text-white text-[10px] md:text-[10px] lg:text-xs xl:text-xs 2xl:text-md font-semibold py-2 px-1 md:py-2 lg:py-3 xl:py-3 md:px-1 lg:px-6 xl:px-5 2xl:py-4 2xl:px-8
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
                <div className="col-span-1 space-y-6">
                    {/* Status */}
                    <div className="bg-white rounded-md shadow-md p-6 border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Status Pembayaran
                        </h2>

                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
                                alt="status"
                                className="h-32 mb-4"
                            />
                            <h3
                                className={`text-lg font-semibold ${paymentStatus?.status === "Belum Terbayar"
                                    ? "text-red-600"
                                    : "text-green-600"
                                    }`}
                            >
                                {paymentStatus?.status}
                            </h3>
                            <button
                                onClick={handleCheckStatus}
                                className="mt-5 group bg-[#9425FE] text-white text-[10px] md:text-[10px] lg:text-sm xl:text-sm 2xl:text-md 
                                font-semibold py-2 px-1 md:py-2 lg:py-3 xl:py-3 md:px-1 lg:px-6 xl:px-27 2xl:py-4 2xl:px-8
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

                    {/* Instruksi */}
                    <div className="bg-white rounded-md shadow-md p-6 border border-gray-300">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Instruksi Pembayaran
                        </h2>
                        {["Internet Banking", "Aplikasi BRImo", "ATM BRI"].map(
                            (item, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border-b last:border-none">
                                            <Disclosure.Button className="w-full flex justify-between items-center py-3 text-sm font-medium text-gray-700">
                                                {item}
                                                <ChevronDownIcon
                                                    className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="pb-3 text-sm text-gray-600">
                                                Langkah-langkah {item} untuk melakukan pembayaran akan
                                                ditampilkan di sini.
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            )
                        )}
                    </div>

                    {/* Tombol Kembali */}
                    <div className="flex justify-center">
                        <button
                            onClick={handleBack}
                            className="group bg-yellow-400 text-[#0A0082] text-[10px] md:text-[10px] lg:text-sm xl:text-sm 2xl:text-md 
                            font-semibold py-2 px-1 md:py-2 lg:py-3 xl:py-3 md:px-1 lg:px-6 xl:px-38 2xl:py-4 2xl:px-8
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

