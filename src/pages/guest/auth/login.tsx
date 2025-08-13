import LoginForm from '../../../forms/LoginForm';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row font-sans">
            {/* Bagian Kiri */}
            <div className="relative hidden md:flex md:w-1/2 overflow-hidden bg-gradient-to-br from-purple-300 to-purple-500 p-6 lg:p-10 items-center justify-center">
                {/* Background Shape */}
                <div className="absolute w-40 h-40 lg:w-[230px] lg:h-[230px] bg-purple-400 rounded-full top-[-80px] left-[-80px] opacity-30"></div>
                <div className="absolute w-40 h-40 lg:w-[230px] lg:h-[230px] bg-purple-400 rounded-full top-[-120px] left-[50px] opacity-30"></div>

                <div className="absolute w-40 h-40 lg:w-[220px] lg:h-[220px] bg-fuchsia-300 rounded-full bottom-[-100px] right-[70px] opacity-20"></div>
                <div className="absolute w-40 h-40 lg:w-[220px] lg:h-[220px] bg-fuchsia-300 rounded-full bottom-[-40px] right-[-30px] opacity-20"></div>

                <div className="absolute w-40 h-40 lg:w-[230px] lg:h-[230px] bg-fuchsia-300 rounded-full bottom-[350px] right-[-10px] opacity-20"></div>
                <div className="absolute w-20 h-20 lg:w-[100px] lg:h-[100px] bg-fuchsia-300 rounded-full bottom-[500px] right-[120px] opacity-20"></div>

                <div className="absolute w-20 h-20 lg:w-[90px] lg:h-[90px] bg-fuchsia-300 rounded-full bottom-[200px] right-[500px] opacity-30"></div>
                <div className="absolute w-20 h-20 lg:w-[90px] lg:h-[90px] bg-fuchsia-300 rounded-full bottom-[160px] right-[540px] opacity-30"></div>

                <div className="absolute w-40 h-40 lg:w-[200px] lg:h-[200px] bg-fuchsia-300 rounded-full bottom-[-70px] right-[500px] opacity-20"></div>
                <div className="absolute w-32 h-32 lg:w-[130px] lg:h-[130px] bg-fuchsia-300 rounded-full bottom-[-10px] right-[450px] opacity-20"></div>

                {/* Konten Kiri */}
                <div className="relative bg-purple-300 px-16 lg:px-65 py-10 lg:py-65 rounded-3xl overflow-hidden">
                    <div className="absolute top-5 left-5 lg:top-6 lg:left-6 p-4 lg:p-6 z-10">
                        <h1 className="text-2xl lg:text-3xl text-white font-bold text-left leading-normal">
                            Tingkatkan <br />
                            Kemampuanmu Di <br />
                            <span className="text-purple-600 text-3xl lg:text-5xl font-bold mt-4 inline-block">GetSkill</span>
                            <div className="w-20 lg:w-32 h-1 bg-purple-600 mt-2"></div>
                        </h1>
                    </div>

                    <div className="absolute top-48 lg:top-75 left-0 z-10">
                        <img
                            src="/src/assets/auth/fotomodel.png"
                            alt="fotomodel"
                            className="w-40 lg:w-55 h-auto"
                        />
                    </div>

                    {/* Shape */}
                    <div className="absolute w-[400px] h-[300px] lg:w-[450px] lg:h-[350px] bg-purple-600 rounded-[100%] bottom-[-350px] lg:bottom-[-100px] right-[-350px] lg:right-[-120px] rotate-[50deg] opacity-50"></div>
                    <div className="absolute w-[400px] h-[300px] lg:w-[450px] lg:h-[350px] bg-purple-600 rounded-[100%] bottom-[-350px] lg:bottom-[-100px] right-[-330px] lg:right-[-110px] rotate-[40deg] opacity-50"></div>

                    <div className="absolute top-60 lg:top-82 left-50 lg:left-67 max-w-xs">
                        <p className="text-white text-left font-medium z-10 text-sm lg:text-sm">
                            Selamat Datang di GetSkill.id. <br />
                            Silakan masuk untuk <br />
                            mengakses kursus dan mulai <br />
                            tingkatkan keterampilan Anda <br />
                            hari ini!
                        </p>
                    </div>
                </div>
            </div>

            {/* Bagian Kanan */}
            <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
                <div className="w-full max-w-md sm:max-w-md lg:max-w-md text-left">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start mb-6">
                        <img
                            src="/src/assets/logo/landscape.png"
                            alt="GetSkill Logo"
                            className="h-8 lg:h-10 w-auto"
                        />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        Selamat Datang <span className="wave">👋</span>
                    </h2>
                    <p className="text-gray-500 mb-6 text-xs sm:text-sm">
                        Halo! Selamat datang di halaman pendaftaran akun GetSkill. Lengkapi formulir di bawah ini dengan data yang valid untuk memulai pengalaman Anda bersama kami.
                    </p>

                    <LoginForm />

                    {/* Link daftar */}
                    <p className="mt-4 text-center text-xs sm:text-sm text-gray-600">
                        Belum punya akun?{" "}
                        <a href="/register" className="text-purple-500 font-medium">
                            Daftar
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
