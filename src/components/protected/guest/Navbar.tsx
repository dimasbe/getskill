import { useState, useEffect } from 'react';
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
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah
        setScrollDirection("down");
        setShowNavbar(true); // akan muncul dengan animasi
      } else {
        // Scroll ke atas atau di atas sekali
        setScrollDirection("up");
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
          fixed top-0 left-0 w-full z-50
          bg-white/80 backdrop-blur-md shadow-md
          transition-all duration-500 ease-in-out
          ${showNavbar
          ? scrollDirection === 'down'
            ? 'animate-slideDown'
            : 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
        }
        `}
    >
      <div className="w-full px-6 md:px-20 h-20 flex justify-between items-center">
        {/* Logo & Links */}
        <div className="flex items-center space-x-8">
          <NavLink to="/">
            <img src="/src/assets/logo/logo.png" alt="Logo" className="w-11 h-12" />
          </NavLink>
          <ul className="hidden lg:flex items-center space-x-6">
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

        {/* Search & Login */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center border border-gray-300 rounded-full bg-white px-2 py-1.5">
            <CategoryDropdown />
            <div className="h-6 border-l border-gray-200 mx-2" />
            <input
              type="text"
              placeholder="Pencarian kursus..."
              className="py-1 px-2 w-40 lg:w-52 text-sm font-bold bg-transparent focus:outline-none placeholder-gray-400"
            />
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white hover:opacity-90 transition">
              <HiSearch size={18} />
            </button>
          </div>

          <Link
            to="#"
            className="hidden sm:block bg-yellow-500 text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-purple-700 hover:text-white transition"
          >
            Masuk
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 md:px-20 pt-2 pb-4 space-y-2 bg-white border-t">
          {navLinks.map(({ name, to }) => (
            <NavLink
              key={name}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-purple-700 font-semibold text-sm"
                  : "block text-gray-800 font-semibold text-sm hover:text-purple-700"
              }
            >
              {name}
            </NavLink>
          ))}
          <Link
            to="#"
            className="block text-center bg-yellow-500 text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-purple-700 hover:text-white transition"
          >
            Masuk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;