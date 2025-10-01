import api from "../../../services/api";
import type { TransactionResponse } from "../_transaction-create";

/**
 * Create Transaction API
 * @param productType
 * @param id
 * @param course_price
 * @param payment_method
 * @param voucher_code
 */
export async function createTransaction(
    productType: string,
    id: string,
    course_price: number,
    payment_method: string,
    voucher_code?: string
): Promise<TransactionResponse> {
    const url = `/api/transaction-create/${productType}/${id}`;

    // 🔥 bikin params dinamis
    const params: Record<string, any> = {
        course_price,
        payment_method,
    };
    if (voucher_code && voucher_code.trim() !== "") {
        params.voucher_code = voucher_code;
    }

    // 🔥 ambil token dari localStorage
    const token = localStorage.getItem("token");

    try {
        const { data } = await api.get<TransactionResponse>(url, {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        });
        return data;
    } catch (error: any) {
        console.error("createTransaction error:", error);

        // balikin error dari backend biar keliatan jelas
        return (
            error.response?.data || {
                success: false,
                meta: { code: 500, status: "error", message: "Request failed" },
            }
        );
    }
}
