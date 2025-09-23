import api from "../../services/api";
import axios from "axios";
import { AxiosError } from "axios";
import type { User, LoginPayload, RegisterPayload, ProfilData, ProfileData  } from "./models";


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


export async function fetchProfileById(id: string): Promise<ProfileData | null> {
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


export const authService = { login, register };
