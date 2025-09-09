import api from "../../../services/api";
import type { Course, Category, SubCategory, DetailCourse, TopCourse } from "../_course";

// Ambil semua course
export async function fetchCourses(): Promise<Course[]> {
  try {
    const response = await api.get("/api/courses");
    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data courses:", error);
    throw error;
  }
}

export async function fetchCourseDetail(slug: string): Promise<DetailCourse | null> {
  try {
    const response = await api.get(`/api/courses/${slug}`);
    return response.data?.data || null;
  } catch (error) {
    console.error("Gagal mengambil data course:", error);
    throw error;
  }
}

// Ambil kategori flat (tanpa nested)
export async function fetchSubCategories(): Promise<SubCategory[]> {
  try {
    const response = await api.get("/api/sub-categories");
    return response.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data subkategori:", error);
    throw error;
  }
}

// Ambil kategori utama (dengan nested sub_category)
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await api.get("/api/categories");
    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data kategori:", error);
    throw error;
  }
}

// Utility untuk mendapatkan nama subkategori
export function getSubCategoryName(sub: string | SubCategory): string {
  return typeof sub === "string" ? sub : sub?.name ?? "";
}

// fetch khusus top course
export async function fetchTopCourses(): Promise<TopCourse[]> {
  try {
    const response = await api.get("/api/top-courses");
    return response.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data top courses:", error);
    throw error;
  }
}