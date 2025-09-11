// src/features/faq/_service/faq_service.ts
import api from "../../../services/api";
import type {
  Faq,
  FaqCategory,
  FaqResponse,
  FaqDetailResponse,
  FaqCategoryResponse,
  FaqCategoryDetailResponse,
} from "../_faq";

// Ambil semua kategori FAQ
export async function fetchFaqCategories(): Promise<FaqCategory[]> {
  const response = await api.get<FaqCategoryResponse>("/api/faq-categories");
  return response.data?.data || [];
}

// Ambil detail kategori FAQ
export async function fetchFaqCategoryDetail(id: number): Promise<FaqCategory> {
  const response = await api.get<FaqCategoryDetailResponse>(
    `/api/faq-categories/${id}`
  );
  return response.data?.data;
}

// Ambil semua FAQ untuk landing page
export async function fetchFaqs(): Promise<Faq[]> {
  const response = await api.get<FaqResponse>("/api/faqs");
  return response.data?.data || [];
}

// Ambil detail FAQ
export async function fetchFaqDetail(id: number): Promise<Faq> {
  const response = await api.get<FaqDetailResponse>(`/api/faqs/${id}`);
  return response.data?.data;
}
