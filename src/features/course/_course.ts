// =============================
// COURSE UTAMA
// =============================
export interface Course {
  id: string;
  title: string;
  sub_title: string;
  slug: string;
  photo: string;

  is_premium: number;
  is_ready: number;

  price: number;
  promotional_price: number | null;

  rating: string;
  modules_count: number;
  course_review_count: number;
  user_courses_count: number;

  sub_category: string | SubCategory;
}

// =============================
// RATING & REVIEW
// =============================
export interface RatingBreakdown {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

export interface CourseReview {
  id: number;
  user_id: string;
  course_id: string;
  rating: number;
  review: string;
  created_at: string;
  updated_at: string;

  // Relasi ke Course
  course: {
    id: string;
    sub_category_id: number;
    user_id: string;
    title: string;
    sub_title: string;
    slug: string;
    description: string;
    photo: string;

    is_premium: number;
    is_ready: number;
    price: number;
    promotional_price: number;

    created_at: string;
    updated_at: string;

    sub_category: {
      id: number;
      category_id: number;
      name: string;
      created_at: string;
      updated_at: string;

      category: {
        id: number;
        name: string;
        created_at: string;
        updated_at: string;
      };
    };
  };

  // Relasi ke User
  user: {
    id: string;
    name: string;
    email: string;
    email_verified_at: string | null;
    point: number;
    phone_number: string;
    gender: string;
    address: string;
    photo: string;
    banner: string;

    created_at: string;
    updated_at: string;
  };
}

// =============================
// MODULE & QUIZ
// =============================
export interface Quiz {
  module_slug: string;
  total_question: number;
}

export interface SubModule {
  id: string;
  title: string;
}

export interface Module {
  id: string;
  title: string;
  sub_title: string;
  course_id: string;

  quizzes: Quiz[];
  quizz_count: number;

  sub_modules: SubModule[];
  sub_module_count: number;

  module_task_count: number;
}

// =============================
// DETAIL COURSE
// =============================
export interface DetailCourse {
  id: string;
  slug: string;
  title: string;
  sub_title: string;
  description: string;
  photo: string;

  price: number;
  promotional_price: number | null;

  rating: string;
  ratings: RatingBreakdown;
  ratings_percentage: RatingBreakdown;

  modules: Module[];
  course_reviews: CourseReview[];
  course_review_count: number;
  user_courses_count: number;

  // Status user
  user_course: string | null;
  completed: string | null;
  course_test_id: string;
  is_admin: boolean;
  is_student: boolean;

  sub_category: string | SubCategory;

  created: string;
}

// =============================
// KATEGORI
// =============================
export interface SubCategory {
  id: number;
  name: string;
  course_count: number;
}

export interface Category {
  id: number;
  name: string;
  course_item_count: number;
  sub_category: SubCategory[];
}

export interface TopCourse {
  id: string;
  title: string;
  slug: string;
  photo: string;
  price: number;
  promotional_price: number | null;
  rating: number | null;
  sub_category: string;
  user: string;
  course_review_count: number;
  order?: number;
}

export interface TopRatingCourse {
  id: string;
  title: string;
  slug: string;
  photo: string;
  price: number;
  promotional_price: number | null;
  rating: number | null;
  sub_category: string;
  user: string;
  user_courses_count: number;
  order?: number;
}