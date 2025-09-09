// Type untuk user
export interface User {
  id: string;
  name: string;
  email: string;
  email_verified_at: string | null;
  point: number;
  phone_number: string;
  gender: string;
  address: string;
  photo: string | null;
  banner: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}

// Type untuk request login
export interface LoginPayload {
  email: string;
  password: string;
}

// Type untuk request register
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}
