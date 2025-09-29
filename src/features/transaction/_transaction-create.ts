// features/transaction/_transaction-create.ts
export interface TransactionData {
    user_id: string;
    event_id?: string | null;
    course_id?: string | null;
    status: string;
    updated_at: string;
    created_at: string;
    id: number;
}

export interface TransactionResponse {
    meta: {
        code: number;
        status: string;
        message: string;
    };
    data: TransactionData;
    success: boolean;
}
