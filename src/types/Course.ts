export interface SyllabusItem {
  title: string
  description?: string
  quizzes: number
  tasks: number
  // BARIS BARU DITAMBAHKAN
  subtopics?: string[]
  quiz_questions?: number
}

export interface Course {
  id: string
  image: string
  category: string
  title: string
  author: string
  price: string
  rating: number
  isFree?: boolean
  date?: string
  description?: string
  syllabus?: SyllabusItem[]
  students?: number
}