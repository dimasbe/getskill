import BackgroundShapes from "../../public/BackgroundShapes";
import { FiChevronRight } from "react-icons/fi";

interface Props {
  title?: string; // opsional, default "Kursus"
}

export default function CourseHeader({ title = "Kursus" }: Props) {
  return (
    <div className="relative px-4 sm:px-6 md:px-8 py-10 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
  <BackgroundShapes />

  <div className="max-w-6xl mx-auto text-center sm:text-left relative z-10">
    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
      Kursus
    </h1>

    <p className="mt-2 flex flex-wrap items-center justify-center sm:justify-start text-gray-800 text-xs sm:text-sm">
      <a href="/" className="hover:underline">Beranda</a>
      <FiChevronRight className="mx-1 text-gray-500" />
      <a href="/kursus" className="hover:underline">Kursus</a>
      {title !== "Kursus" && (
        <>
          <FiChevronRight className="mx-1 text-gray-500" />
          <span className="text-purple-600">{title}</span>
        </>
      )}
    </p>
  </div>
</div>

  );
}
