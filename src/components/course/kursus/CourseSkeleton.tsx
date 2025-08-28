export default function CourseSkeleton() {
  return (
    <div className="animate-pulse w-full h-full flex flex-col bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden min-h-[300px]">
      {/* Gambar */}
      <div className="w-full aspect-video bg-gray-200" />

      {/* Konten */}
      <div className="flex-1 px-4 py-3 flex flex-col">
        {/* kategori + rating */}
        <div className="flex justify-between mb-3">
          <div className="w-16 h-4 bg-gray-200 rounded-full" />
          <div className="w-20 h-4 bg-gray-200 rounded-full" />
        </div>

        {/* judul */}
        <div className="w-full h-4 bg-gray-200 rounded mb-2" />
        <div className="w-2/3 h-4 bg-gray-200 rounded mb-4" />

        {/* author */}
        <div className="w-24 h-3 bg-gray-200 rounded mb-4" />

        {/* footer */}
        <div className="flex justify-between items-center mt-auto">
          <div className="w-24 h-8 bg-gray-200 rounded-full" />
          <div className="w-12 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
