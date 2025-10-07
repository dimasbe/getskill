export interface TransactionMeta {
    code: number;
    status: string;
    message: string;
}

export interface TransactionData {
    id: number;
    reference: string;
    user_id: string;
    event_id?: string;
    course_id?: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface TransactionResponse {
    meta: TransactionMeta;
    data: TransactionData;
    success: boolean;
}
