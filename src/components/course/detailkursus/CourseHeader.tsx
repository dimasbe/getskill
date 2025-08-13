import BackgroundShapes from "../../public/BackgroundShapes";

interface Props {
  title: string;
}

export default function CourseHeader({ title }: Props) {
  return (

    <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
      <BackgroundShapes />

      {/* Konten tengah */}
      <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-center sm:text-left relative z-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Kursus
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-800 flex flex-wrap items-center justify-center sm:justify-start">
          <a href="/" className="hover:underline">Beranda</a>
          <span className="mx-1">&gt;</span>
          <a href="/event" className="hover:underline">Kursus</a>
          <span className="mx-1">&gt;</span>
          <span className="text-purple-600">{title}</span>
        </p>
      </div>
    </div>
  );
}
