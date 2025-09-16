import DashboardLayout from "../../../components/public/auth/DashboardLayout";
import BackgroundShapes from "../../../components/public/BackgroundShapes";
const Dashboard_Profile = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="relative px-6 py-30 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
                <BackgroundShapes />
            </div>

            <div className="relative z-20 -mt-35 max-w-6xl mx-auto h-[200px] bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Banner */}
                <img
                    src="/src/assets/img/no-image/no-image.jpg"
                    alt="cover"
                    className="w-full h-60 object-cover"
                />

                {/* Overlay Konten */}
                <div className="absolute bottom-5 left-8 flex items-center space-x-4">
                    {/* Foto Profil */}
                    <img
                        src="/src/assets/img/no-image/no-profile.jpeg"
                        alt="profile"
                        className="w-25 h-25 rounded-full border-7 border-white shadow-md"
                    />
                    {/* Nama & Email */}
                    <div className="text-start">
                        <h3 className="text-zinc-500 font-bold text-lg drop-shadow-lg">
                            Moh Kosim
                        </h3>
                        <p className="text-zinc-500 text-sm drop-shadow-lg">
                            mn.kosim251@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="mt-7 max-w-6xl mx-auto pb-20 bg-white">
                <DashboardLayout />
            </div>
        </div>
    )
}

export default Dashboard_Profile