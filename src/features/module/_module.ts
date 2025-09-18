// ========================
// QUIZ
// ========================
export interface QuizType {
  id: string;
  module_id: string;
  sub_module_slug_prev: string | null;
  sub_module_slug_next: string | null;
  course_slug: string;
  rules: string;
  module_slug: string;
  total_question: number;
  retry_delay: number;
  user_latest_quiz: unknown | null;
  user_quiz_me: unknown | null;
}

// ========================
// SUBMODULE LIST
// ========================
export interface SubModuleType {
  id: string;
  step: number;
  title: string;
  slug: string;
  sub_title: string;
  is_section?: boolean; // ⬅️ tambahkan ini
}


// ========================
// MODULE TASK
// ========================
export interface ModuleTaskType {
  id: string;
  point: number;
  is_finish: boolean;
}

// ========================
// COURSE SUMMARY
// ========================
export interface CourseSummaryType {
  id: string;
  title: string;
  slug: string;
  course_test_id: string;
}

// ========================
// MODULE
// ========================
export interface ModuleType {
  id: string;
  title: string;
  step: number;
  slug: string;
  sub_title: string;
  course: CourseSummaryType;
  quizzes: QuizType[];
  quizz_count: number;
  module_question_count: number;
  sub_modules: SubModuleType[];
  sub_module_count: number;
  module_tasks: ModuleTaskType[];
  module_task_count: number;
  is_done: boolean | null;
}

// ========================
// EDITOR.JS CONTENT
// ========================
export interface ParagraphBlock {
  id: string;
  type: "paragraph";
  data: { text: string };
}

export interface ListBlock {
  id: string;
  type: "list";
  data: { style: "ordered" | "unordered"; items: string[] };
}

export interface ImageBlock {
  id: string;
  type: "image";
  data: { file: { url: string }; caption?: string };
}

export type ContentBlock = ParagraphBlock | ListBlock | ImageBlock;

export interface ContentType {
  time: number;
  blocks: ContentBlock[];
  version: string;
}
// ========================
// SUBMODULE DETAIL
// ========================
export interface SubModuleDetailType {
  id: string;
  module_id: string;
  course_slug: string;
  module: string;
  step: number;
  last_step: number;
  title: string;
  slug: string;
  sub_title: string;
  content: string; // JSON string
  url_youtube: string | null;
  course_id: string;
  course_title: string;
  course_sub_title: string;
  course_sub_category: string;
  prev: string | null;
  next: string | null;
}
