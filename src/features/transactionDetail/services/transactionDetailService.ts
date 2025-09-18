import api from "../../../services/api";
import type { TransactionDetail } from "../transactionDetail";

export async function getTransactionDetail(reference: string): Promise<TransactionDetail> {
  try {
    const response = await api.get(`/api/check-status/${reference}`);
    return response.data?.data;
  } catch (error) {
    console.error("Gagal mengambil detail transaksi:", error);
    throw error;
  }
}
