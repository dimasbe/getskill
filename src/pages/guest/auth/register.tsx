
import RegisterForm from '../../../forms/RegisterForm';
const Register = () => {

    


    return (
        <div className="min-h-screen flex font-sans">
            {/* Bagian Kiri */}
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden bg-gradient-to-br from-purple-300 to-purple-500 p-10 items-center justify-center">
                {/* Background Shape */}
                <div className="absolute w-[230px] h-[230px] bg-purple-400 rounded-full top-[-100px] left-[-100px] opacity-30"></div>
                <div className="absolute w-[230px] h-[230px] bg-purple-400 rounded-full top-[-140px] left-[60px] opacity-30"></div>

                <div className="absolute w-[220px] h-[220px] bg-fuchsia-300 rounded-full bottom-[-130px] right-[90px] opacity-20"></div>
                <div className="absolute w-[220px] h-[220px] bg-fuchsia-300 rounded-full bottom-[-50px] right-[-40px] opacity-20"></div>

                <div className="absolute w-[230px] h-[230px] bg-fuchsia-300 rounded-full bottom-[450px] right-[-10px] opacity-20"></div>
                <div className="absolute w-[100px] h-[100px] bg-fuchsia-300 rounded-full bottom-[590px] right-[140px] opacity-20"></div>

                <div className="absolute w-[90px] h-[90px] bg-fuchsia-300 rounded-full bottom-[240px] right-[640px] opacity-30"></div>
                <div className="absolute w-[90px] h-[90px] bg-fuchsia-300 rounded-full bottom-[200px] right-[680px] opacity-30"></div>

                <div className="absolute w-[200px] h-[200px] bg-fuchsia-300 rounded-full bottom-[-90px] right-[630px] opacity-20"></div>
                <div className="absolute w-[130px] h-[130px] bg-fuchsia-300 rounded-full bottom-[-20px] right-[550px] opacity-20"></div>

                {/* Konten Kiri */}
                <div className="relative bg-purple-300 px-80 py-75 rounded-3xl overflow-hidden">
                    <div className="absolute top-7 left-7 p-6 z-10">
                        <h1 className="text-4xl text-white font-bold text-left leading-normal">
                            Tingkatkan <br />
                            Kemampuanmu Di <br />
                            <span className="text-purple-600 text-5xl font-bold mt-4 inline-block">GetSkill</span>
                            <div className="w-32 h-1 bg-purple-600 mt-2"></div>
                        </h1>

                    </div>

                    <div className="absolute top-80 left-0 z-10">
                        <img src="/src/assets/auth/fotomodel.png" alt="fotomodel" className="w-70 h-auto" />
                    </div>

                    {/* Wrapper untuk shape & teks */}
                    <div className="relative">
                        {/* Shape */}
                        <div className="absolute w-[600px] h-[450px] bg-purple-600 rounded-[100%] bottom-[-460px] right-[-500px] rotate-[50deg] opacity-50"></div>
                        <div className="absolute w-[600px] h-[450px] bg-purple-600 rounded-[100%] bottom-[-450px] right-[-480px] rotate-[40deg] opacity-50"></div>
                    </div>
                    <div className="absolute top-95 left-85">
                        <p className=" text-white text-left font-medium z-10 text-1xl max-w-xs">
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
            <div className="relative flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-xl text-left">
                    {/* Logo */}
                    <div className="flex-1 items-center justify-center mb-6">
                        <img
                            src="/src/assets/logo/landscape.png"
                            alt="GetSkill Logo"
                            className="h-8 w-auto"
                        />
                    </div>

                    <h2 className="text-2xl font-bold mb-2">
                        Buat Akun Baru
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm">
                        Just enter your username and password below and you'll be back in action in no time. Let's go!
                    </p>

                    <RegisterForm/>
                    
                    {/* Link daftar */}
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Sudah punya akun?{" "}
                        <a href="/login" className="text-purple-500">
                            Masuk
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
