import BackgroundShapes from "../public/BackgroundShapes";

export default function FaqHeader() {
  return (
    <div className="relative px-6 py-14 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden shadow-sm">
      <BackgroundShapes />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:text-left relative z-10 animate-fadeIn">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
          FAQ
        </h1>
        <p className="mt-3 text-sm sm:text-base text-gray-700">
          <a
            href="/"
            className="hover:underline hover:text-indigo-600 transition-colors duration-200"
          >
            Beranda
          </a>
          <span className="mx-1">&gt;</span>
          <span className="text-purple-600 font-medium">FAQ</span>
        </p>
      </div>
    </div>
  );
}
