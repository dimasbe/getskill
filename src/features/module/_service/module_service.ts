import api from "../../../services/api";
import type { ModuleType, SubModuleDetailType, QuizType, ModuleTaskType, CoursePostTestResponse,UserCourseActivitiesResponse,SubModule, QuizResponse } from "../_module";

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

export async function fetchQuizDetail(slug: string): Promise<QuizType> {
  try {
    const response = await api.get<QuizResponse>(`/api/quizzes/${slug}`);
    // kembalikan objek quiz langsung
    return response.data.data;
  } catch (error) {
    console.error(`❌ Gagal mengambil detail quiz ${slug}:`, error);
    throw error;
  }
}

// Ambil semua task berdasarkan module_id
export async function fetchModuleTasks(moduleId: string): Promise<ModuleTaskType[]> {
  try {
    const response = await api.get(`/api/module-tasks/${moduleId}`); 
    return response.data?.data || [];
  } catch (error) {
    console.error(`Gagal mengambil tugas modul ${moduleId}:`, error);
    throw error;
  }
}

// Ambil Final Audit / Course Post Test berdasarkan course_test_id
export async function fetchCoursePostTest(courseTestId: string): Promise<CoursePostTestResponse> {
  try {
    const response = await api.get(`/api/course-post-test/${courseTestId}`);
    return response.data;
  } catch (error) {
    console.error(`Gagal mengambil course post test ${courseTestId}:`, error);
    throw error;
  }
}

// Ambil daftar aktivitas user per course
export async function fetchUserCourseActivities(): Promise<UserCourseActivitiesResponse> {
  try {
    const response = await api.get(`/api/user-course-activities`);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil user course activities:", error);
    throw error;
  }
}

// Ambil progress belajar user di satu submodule
export async function fetchUserProgres(
  slug: string,
  subModuleId: string // ini sebaiknya id dari submodule
): Promise<SubModule> {
  try {
    const response = await api.put<SubModule>(
      `/api/user-courses/${slug}/${subModuleId}`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching user course:", error);
    throw error;
  }
}
