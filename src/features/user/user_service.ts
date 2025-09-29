import api from "../../services/api";
import axios from "axios";
import { AxiosError } from "axios";
import type { User, LoginPayload, RegisterPayload, ProfilData, UpdatePasswordPayload, DashboardDataCourse, CourseActivity, EventActivity  } from "./models";


export async function login(payload: LoginPayload): Promise<User | null> {
  try {
    const response = await api.post("/api/login", payload);

    if (response.data?.data?.user) {

      if (response.data.data.token) {
        localStorage.setItem("authToken", response.data.data.token);
      }

      return response.data.data.user as User;
    }

    return null;
  } catch (error) {
    console.error("Login gagal:", error);
    return null;
  }
}

export async function register(payload: RegisterPayload) {
  try {
    const response = await api.post("/api/register", payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Pendaftaran gagal:", error.response?.data || error);
    } else {
      console.error("Pendaftaran gagal:", error);
    }
    return null;
  }
}

export async function UpdatePassword(payload: UpdatePasswordPayload) {
  try {
    const response = await api.patch("/api/password/update", payload);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Pendaftaran gagal:", error.response?.data || error);
    } else {
      console.error("Pendaftaran gagal:", error);
    }
    return null;
  }
}

export async function DataCourse(): Promise<DashboardDataCourse | null> {
  try {
    const response = await api.get("/api/user/stats");
    return response.data?.data || null;
  } catch (error) {
    console.error("Gagal mengambil data dashboard:", error);
    return null;
  }
}



// Profile
export async function fetchProfile(): Promise<ProfilData | null> {
  try {
    const response = await api.get(`/api/user`);
    return response.data?.data || null;
  } catch (error) {
    console.error("Gagal mengambil data profile:", error);
    return null;
  }
}


export async function updateProfile(payload: FormData | ProfilData): Promise<ProfilData | null> {
  try {
    const response = await api.post(`/api/profile-update`, payload, {
      headers: payload instanceof FormData
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" },
    });
    return response.data?.data || null;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Gagal mengambil data profile:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
}


export async function fetchProfileById(id: string): Promise<ProfilData | null> {
  try {
    const response = await api.get(`/api/users/${id}`);
    return response.data?.data || null;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Gagal mengambil profile:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
}

//Kursus User

export async function fetchUserCourses(page: number = 1): Promise<CourseActivity[]> {
  try {
    const response = await api.get(`/api/user-courses?page=${page}`);
    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil user courses:", error);
    return [];
  }
}

export async function fetchUserEvent(page: number = 1): Promise<EventActivity[]> {
  try {
    const response = await api.get(`/api/user-events?page=${page}`);
    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Gagal mengambil user events:", error);
    return [];
  }
}

export const authService = { login, register };
