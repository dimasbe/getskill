// Tipe data untuk list voucher
export interface CourseVoucher {
    id: string;
    course: string;
    usage_limit: number;
    discount: number;
    code: string;
    start: string; // format: "2025-05-16 00:00:00"
    end: string;   // format: "2025-05-19 00:00:00"
    transactions_count: number;
}

export interface CourseVoucherResponse {
    meta: {
        code: number;
        status: string;
        message: string;
    };
    data: CourseVoucher[];
    success: boolean;
}

// Tipe data untuk hasil cek voucher
export interface CourseVoucherCheckResponse {
    meta: {
        code: number;
        status: string;
        message: string;
    };
    data: {
        valid: boolean;
        discount?: number;
        reason?: string;
    };
    success: boolean;
}
