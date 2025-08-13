import BackgroundShapes from "../public/BackgroundShapes";

export default function FaqHeader() {
  return (
    <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto px-4 sm:px-18 text-center sm:text-left relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">FAQ</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-800">
            <a href="/" className="hover:underline">
              Beranda
            </a>
            <span className="mx-1">&gt;</span>
            <span className="text-purple-600">FAQ</span>
          </p>
        </div>
      </div>
  );
}
