import api from "../../services/api";
import axios from "axios";
import type { User, LoginPayload, RegisterPayload } from "./models";


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


export const authService = { login, register };
