import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6 shadow-md bg-[#c69c6d]">
      <h1 className="text-xl font-bold text-white">LOGO</h1>
      <nav className="flex items-center gap-6 text-sm text-gray-700">
        <a href="#" className="hover:underline hover:text-[#c69c6d] transition">
          Beranda
        </a>
        <a href="#" className="hover:underline hover:text-[#c69c6d] transition">
          Layanan
        </a>
        <a href="#" className="hover:underline hover:text-[#c69c6d] transition">
          Reservasi
        </a>
        <button className="bg-white text-[#c69c6d] border border-[#c69c6d] font-semibold px-4 py-1.5 rounded-md hover:bg-[#f7f3ef] transition">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
