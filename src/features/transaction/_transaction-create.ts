// services/_transaction-create.ts

// Struktur response sesuai contoh JSON dari backend
export interface TransactionMeta {
    code: number;
    status: string;
    message: string;
}

export interface TransactionData {
    id: number;
    user_id: string;
    event_id?: string;
    course_id?: string;
    status: string;
    created_at: string;
    updated_at: string;
    reference: string;   
}


export interface TransactionResponse {
    meta: TransactionMeta;
    data: TransactionData;
    success: boolean;
}
