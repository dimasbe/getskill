import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiSearch, HiMenu, HiX } from 'react-icons/hi';
import CategoryDropdown from '../../public/CategoryDropdown';


type Course = {
  id: number;
  name: string;
  url: string;
};

const navLinks = [
  { name: "Beranda", to: "/" },
  { name: "Kursus", to: "/kursus" },
  { name: "Event", to: "/event" },
  { name: "Kelas Industri", to: "/kelas-industri" },
  { name: "Berita", to: "/berita" },
  { name: "FAQ", to: "/faq" },
];

// Dummy data untuk search
const dummyCourses: Course[] = [
  { id: 1, name: "Belajar React JS", url: "/kursus/react" },
  { id: 2, name: "Belajar Tailwind CSS", url: "/kursus/tailwind" },
  { id: 3, name: "Kursus UI/UX Design", url: "/kursus/uiux" },
  { id: 4, name: "Pelatihan Machine Learning", url: "/kursus/ml" },
  { id: 5, name: "Workshop Digital Marketing", url: "/kursus/marketing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // State untuk search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Course[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
        setShowNavbar(true);
      } else {
        setScrollDirection("up");
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Search filter
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = dummyCourses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchTerm]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md transition-all duration-500 ease-in-out
        ${showNavbar
          ? scrollDirection === 'down'
            ? 'animate-slideDown'
            : 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
        }`}
    >
      <div className="w-full px-9 md:px-25 h-20 flex justify-between items-center">
        {/* Logo & Links */}
        <div className="flex items-center space-x-10">
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
        <div className="flex items-center space-x-4 relative">
          <div className="hidden md:flex items-center border border-gray-300 rounded-full bg-white px-2 py-2 relative">
            <CategoryDropdown />
            <div className="h-6 border-l border-gray-200 mx-2" />
            <input
              type="text"
              placeholder="Pencarian kursus..."
              className="py-1 px-2 w-40 text-sm font-semibold bg-transparent focus:outline-none placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white hover:opacity-90 transition">
              <HiSearch size={18} />
            </button>

            {/* Dropdown hasil search */}
            {searchResults.length > 0 && (
              <div className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                {searchResults.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="block px-4 py-2 text-sm hover:bg-purple-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="hidden sm:block bg-yellow-500 text-black text-xs font-medium px-5 py-3 rounded-full hover:bg-purple-700 hover:text-white transition"
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
        <div className="lg:hidden px-6 md:px-20 pt-2 pb-4 space-y-2 bg-white">
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
            to="/login"
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