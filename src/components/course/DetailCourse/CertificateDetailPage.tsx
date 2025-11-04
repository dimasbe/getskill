import { useParams } from "react-router-dom";

const CertificateDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-4">Sertifikat Pelatihan</h1>
        <p className="text-gray-600 mb-6">
          Ini adalah halaman sertifikat dengan ID: <b>{id}</b>
        </p>

        <div className="border-2 border-blue-500 p-10 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Nama Peserta: John Doe
          </h2>
          <p className="text-gray-700 mb-1">Telah menyelesaikan event:</p>
          <p className="text-lg font-medium text-gray-800">"Pelatihan React Dasar"</p>
          <p className="text-gray-600 mt-4">Tanggal: 4 November 2025</p>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Cetak Sertifikat
        </button>
      </div>
    </div>
  );
};

export default CertificateDetailPage;
