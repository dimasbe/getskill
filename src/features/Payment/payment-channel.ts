// src/types/payment-channel.ts

export interface Fee {
    flat: number;
    percent: number | string;
}

export interface PaymentChannel {
    group: string;
    code: string;
    name: string;
    type: string;
    fee_merchant: Fee;
    fee_customer: Fee;
    total_fee: Fee;
    minimum_fee: number | null;
    maximum_fee: number | null;
    minimum_amount: number;
    maximum_amount: number;
    icon_url: string;
    active: boolean;
}

export interface PaymentChannelResponse {
    meta: {
        code: number;
        status: string;
        message: string;
    };
    data: {
        virtual_account: PaymentChannel[];
        convenience_store: PaymentChannel[];
        e_wallet: PaymentChannel[];
    };
    success: boolean;
}
