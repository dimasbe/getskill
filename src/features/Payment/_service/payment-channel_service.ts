import axios from "axios";
import type { PaymentChannelResponse } from "../../Payment/payment-channel";

// Pastikan di .env sudah ada: VITE_API_URL=https://core.getskill.id
const BASE_URL = import.meta.env.VITE_API_URL || "https://core.getskill.id";

export const getPaymentChannels = async (): Promise<PaymentChannelResponse> => {
    try {
        const response = await axios.get<PaymentChannelResponse>(
            `${BASE_URL}/api/payment-channels`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching payment channels:", error);
        throw error;
    }
};
