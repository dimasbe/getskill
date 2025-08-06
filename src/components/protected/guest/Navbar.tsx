import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiSearch, HiMenu, HiX } from 'react-icons/hi';
import CategoryDropdown from '../../public/CategoryDropdown';

const navLinks = [
    { name: "Beranda", to: "/" },
    { name: "Kursus", to: "/kursus" },
    { name: "Event", to: "/event" },
    { name: "Kelas Industri", to: "/kelas-industri" },
    { name: "Berita", to: "/berita" },
    { name: "FAQ", to: "/faq" },
];


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white w-full">
            <div className="container mx-auto flex justify-between items-center px-25 h-20">
                {/* Logo & Nav Links */}
                <div className="flex items-center space-x-20">
                    <NavLink to="/">
                        <img src="/src/assets/logo/logo.png" alt="Logo" className="w-11 h-12" />
                    </NavLink>
                    <ul className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(({ name, to }) => (
                            <li key={name}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-purple-700 text-sm font-bold"
                                            : "text-black text-sm font-bold hover:text-purple-700"
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search & Icons */}
                <div className="flex h-20 items-center space-x-6">
                    {/* Search bar */}
                    <div className="hidden md:flex items-center border border-gray-300 rounded-full  bg-white px-3 py-2">

                        <CategoryDropdown />

                        <div className="h-6 border-l border-gray-200" />
                        <input
                            type="text"
                            placeholder="Pencarian kursus..."
                            className="py-2 px-4 w-48 text-sm font-bold bg-transparent focus:outline-none placeholder-gray-400"
                        />
                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white hover:opacity-90 transition">
                            <HiSearch size={20} />
                        </button>
                    </div>

                    {/* Login */}
                    <Link
                        to="#"
                        className="hidden sm:block bg-yellow-500 text-black text-xs font-medium px-5 py-2.5 rounded-full hover:bg-purple-700 hover:text-white transition"
                    >
                        Masuk
                    </Link>

                    {/* Mobile Menu */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-600">
                        {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
