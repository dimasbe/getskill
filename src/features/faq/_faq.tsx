// src/features/faq/_faq.ts

export interface Faq {
  id: number;
  question: string;
  answer: string;
  faq_category?: FaqCategory | null;
}

export interface FaqCategory {
  id: number;
  name: string;
  faqs: Faq[];
}

// ===== Response API =====
export interface FaqResponse {
  data: Faq[];
  success: boolean;
}

export interface FaqDetailResponse {
  data: Faq;
  success: boolean;
}

export interface FaqCategoryResponse {
  data: FaqCategory[];
  success: boolean;
}

export interface FaqCategoryDetailResponse {
  data: FaqCategory;
  success: boolean;
}
