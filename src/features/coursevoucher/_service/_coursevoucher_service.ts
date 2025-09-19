import api from "../../../services/api";
import type {
    CourseVoucherResponse,
    CourseVoucherCheckResponse,
} from "../_coursevoucher";

// Ambil list voucher untuk 1 course
export async function fetchCourseVouchers(
    slug: string
): Promise<CourseVoucherResponse | null> {
    try {
        const response = await api.get<CourseVoucherResponse>(
            `/api/course-vouchers/${slug}`
        );
        return response.data || null;
    } catch (error: any) {
        console.error("Error fetchCourseVouchers:", error.response?.data || error);
        return null;
    }
}

// Cek kode voucher langsung ke endpoint /check
export async function checkVoucherCode(
    slug: string,
    code: string
): Promise<{ valid: boolean; discount?: number; reason?: string }> {
    try {
        const response = await api.get<CourseVoucherCheckResponse>(
            `/api/course-vouchers/${slug}/check`,
            { params: { voucher_code: code } }
        );

        if (response.data.success && response.data.data.valid) {
            return {
                valid: true,
                discount: response.data.data.discount,
            };
        }

        return {
            valid: false,
            reason: response.data.data.reason || response.data.meta.message,
        };
    } catch (error: any) {
        console.error("Error checkVoucherCode:", error.response?.data || error);
        return { valid: false, reason: "Terjadi kesalahan internal" };
    }
}
