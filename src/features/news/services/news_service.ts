import api from "../../../services/api";
import type { News } from "../news";

// Fetch list berita
export async function fetchNews(): Promise<News[]> {
    try {
        const response = await api.get("/api/blogs");
        return response.data?.data?.data || []; // sesuai struktur API kamu
    } catch (error) {
        console.error("Gagal mengambil data berita:", error);
        throw error;
    }
}

// Fetch detail berita by slug
export async function fetchNewsDetail(slug: string): Promise<News> {
    try {
        const response = await api.get(`/api/blogs/${slug}`);
        return response.data?.data;
    } catch (error) {
        console.error(`Gagal mengambil detail berita slug ${slug}:`, error);
        throw error;
    }
}
