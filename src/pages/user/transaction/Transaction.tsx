import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

// Interface untuk data transaksi
interface Transaction {
    id: string;
    code: string;
    product_name: string;
    total_amount: number;
    created_at: string;
    status: "pending" | "paid" | "failed";
}

// Mock data yang mensimulasikan data dari API
const TransactionData: Transaction[] = [
    {
        id: "trx-001",
        code: "T3649726871932P5JUK",
        product_name: "Belajar Coding Untuk Anak",
        total_amount: 254250,
        created_at: "2025-09-12T08:55:44Z",
        status: "pending",
    },
    {
        id: "trx-002",
        code: "T3649726871932Q6LMN",
        product_name: "Kursus Web Development",
        total_amount: 550000,
        created_at: "2025-09-10T12:00:00Z",
        status: "paid",
    },
    {
        id: "trx-003",
        code: "T3649726871932R7OPQ",
        product_name: "Panduan Data Science",
        total_amount: 150000,
        created_at: "2025-09-08T18:30:00Z",
        status: "failed",
    },
];

const TransactionPage: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    // Fungsi untuk format mata uang IDR
    const formatCurrency = (amount: number): string =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount);

    // Fungsi untuk format tanggal
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
        // Mensimulasikan pemanggilan API
        setIsLoading(true);
        setTimeout(() => {
            setTransactions(TransactionData);
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleTransactionClick = (code: string) => {
        navigate(`/payment/${code}`);
    };

    const getStatusClasses = (status: "pending" | "paid" | "failed") => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "paid":
                return "bg-green-100 text-green-800";
            case "failed":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Memuat daftar transaksi...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                    Riwayat Transaksi
                </h1>

                <div className="space-y-4">
                    {transactions.length > 0 ? (
                        transactions.map((trx) => (
                            <div
                                key={trx.id}
                                className="bg-white rounded-md shadow-md p-6 border border-gray-200 cursor-pointer transition-transform transform hover:scale-[1.01] hover:shadow-lg"
                                onClick={() => handleTransactionClick(trx.code)}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusClasses(trx.status)}`}
                                    >
                                        {trx.status.charAt(0).toUpperCase() + trx.status.slice(1)}
                                    </span>
                                    <p className="text-sm font-semibold text-gray-700">
                                        {formatCurrency(trx.total_amount)}
                                    </p>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 truncate">
                                    {trx.product_name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {formatDate(trx.created_at)}
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
                                    <span>Kode Transaksi: {trx.code}</span>
                                    <FiArrowRight className="text-gray-400" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-8 text-gray-500">
                            <p>Tidak ada riwayat transaksi.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;