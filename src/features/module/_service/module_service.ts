import api from "../../../services/api";
import type { ModuleType, SubModuleDetailType } from "../_module";

// Ambil semua module dari course
export async function fetchModules(courseSlug: string): Promise<ModuleType[]> {
  try {
    const response = await api.get(`/api/list-module/${courseSlug}`);
    return response.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil data module:", error);
    throw error;
  }
}

// Ambil detail submodule
export async function fetchSubModule(slug: string): Promise<SubModuleDetailType> {
  try {
    const response = await api.get(`/api/sub-modules/detail/${slug}`);
    return response.data?.data;
  } catch (error) {
    console.error(`Gagal mengambil detail submodule ${slug}:`, error);
    throw error;
  }
}
