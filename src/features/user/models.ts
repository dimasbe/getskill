// Type untuk user
export interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
}

// Type untuk request login
export interface LoginPayload {
  email: string;
  password: string;
}

// Type untuk request register
export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
}
