import BackgroundShapes from "../../public/BackgroundShapes";

interface Props {
  title: string;
}

export default function CourseHeader({ title }: Props) {
  return (
    <div className="relative px-6 py-10 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 overflow-hidden">
      <BackgroundShapes />
      <div className="max-w-6xl mx-auto relative z-10 text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">Kursus</h1>
        <p className="mt-2 text-sm text-gray-600">
          <a href="/" className="hover:underline">Beranda</a> &gt;{" "}
          <a href="/kursus" className="hover:underline">Kursus</a> &gt;{" "}
          <span className="text-indigo-900 font-medium">{title}</span>
        </p>
      </div>
    </div>
  );
}
