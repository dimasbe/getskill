import api from "../../../services/api";
import type { TransactionResponse } from "../_transaction-create";
import { AxiosError } from "axios";

export async function createTransactionCourse(
    courseId: string,
    coursePrice: number,
    paymentMethod: string,
    voucherCode: string = ""
): Promise<TransactionResponse | null> {
    try {
        const response = await api.get<TransactionResponse>(
            `/api/transaction-create/course/${courseId}`,
            {
                params: {
                    voucher_code: voucherCode,
                    payment_method: paymentMethod,
                    course_price: coursePrice,
                },
            }
        );

        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            console.error(
                "Gagal membuat transaksi:",
                error.response?.data || error.message
            );
        } else {
            console.error("Unexpected error:", error);
        }
        return null;
    }
}
