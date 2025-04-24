import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true jika token ada
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-[#c69c6dd9] backdrop-blur-md shadow-md"
          : "bg-[#c69c6d]"
      }`}
    >
      <h1 className="text-xl font-pacifico text-white">Verra Beauty</h1>
      <nav className="hidden md:flex items-center gap-6 text-sm text-white">
        <a href="#beranda" className="hover:underline hover:text-white transition">
          Beranda
        </a>
        <a href="#tentang" className="hover:underline hover:text-white transition">
          Layanan
        </a>
        <a href="#" className="hover:underline hover:text-white transition">
          Reservasi
        </a>
        {!isLoggedIn && (
          <Link to="/SignIn">
            <button className="bg-white text-[#c69c6d] border border-[#c69c6d] font-semibold px-4 py-1.5 rounded-md hover:bg-[#f7f3ef] transition">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
