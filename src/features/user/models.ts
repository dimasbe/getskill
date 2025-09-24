// Type untuk user
export interface LoginResponse {
  user: User;
  token: string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  email_verified_at: string | null;
  point: number;
  phone_number: string;
  gender: Gender;
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

export interface UpdatePasswordPayload {
  old_password: string;
  password: string;
  password_confirmation: string;
}

export interface DashboardDataCourse {
  courses_count: number;
  completed_courses: number;
  incomplete_courses: number;
}

// =======================
// User Profile Interfaces
// =======================

export interface ProfilData {
  id: string;
  photo: string;
  name: string;
  email: string;
  points: number;
  phone_number: string;
  user_courses: [];
  total_courses: number;
  total_reviews: number;
  course_reviews: [];
  total_certificate: number;
  total_course_certificate: number;
  total_all_certificates: number;
  course_activities: [];
  event_activities: EventActivity[];
  address: string;
  banner: string | null;
  gender: Gender;
  created: string;
  is_not_guest: boolean;
  role: string;
}

export type Gender = "laki-laki" | "perempuan";


export interface EventActivity {
  user: EventUser;
  event: EventData;
  status: string; 
  reason: string | null;
}

export interface EventUser {
  id: string;
  name: string;
  email: string;
  email_verified_at: string;
  point: number;
  phone_number: string;
  gender: Gender;
  address: string;
  photo: string;
  created_at: string;
  updated_at: string;
  banner: string | null;
  deleted_at: string | null;
}

export interface EventData {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  location: string | null;
  map_link: string | null;
  capacity: number;
  capacity_left: number;
  has_certificate: number;
  is_online: number;
  is_auto_approve: number;
  email_content: string;
  start_date_raw: string;
  start_date: string;
  start_hour: string;
  end_date_raw: string;
  end_date: string;
  end_hour: string;
  eventAttendance: EventAttendance;
  image: string;
  event_details: EventDetail[];
  start_in: string;
  created_at: string;
  event_sub_category_id: string | null;
  event_category_id: string | null;
}

export interface EventAttendance {
  id: number;
  event_id: string;
  attendance_date: string;
  attendance_link: string;
  created_at: string;
  updated_at: string;
}

export interface EventDetail {
  id: number;
  event_id: string;
  user: string;
  start: string;
  end: string;
  session: string;
  created_at: string;
  updated_at: string;
  event_date: string;
}


export interface ProfileData {
  id: string;
  photo: string | null;
  name: string;
  email: string;
  points: number;
  phone_number: string;
  user_courses: UserCourse[];
  total_courses: number;
  total_reviews: number;
  course_reviews: CourseReview[];
  total_certificate: number;
  total_course_certificate: number;
  total_all_certificates: number;
  course_activities: CourseActivity[];
  event_activities: EventActivity[];
  address: string;
  banner: string | null;
  gender: Gender;
  created: string; // contoh: "08 September 2025"
  is_not_guest: boolean;
  role: string; // contoh: "guest"
}

export interface Teacher {
  id: string;
  name: string;
  // tambahkan field lain sesuai data real API
}

export interface UserCourse {
  id: string;
  title: string;
  // tambahkan field lain sesuai struktur API
}

export interface CourseReview {
  id: string;
  content: string;
  rating: number;
  // tambahkan field lain sesuai struktur API
}

export interface CourseActivity {
  id: string;
  activity_type: string;
  description: string;
  created_at: string;
  // tambahkan field lain sesuai struktur API
}

export interface EventActivity {
  id: string;
  status: string;
  reason: string | null;
  // tambahkan field lain sesuai struktur API
}
