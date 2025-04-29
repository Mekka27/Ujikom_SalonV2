import React, { useState } from 'react';
import { FaTachometerAlt, FaUsers, FaLayerGroup, FaClock, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavbarAdmin() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button for small screens */}
      <div className="md:hidden bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Verra Beauty</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } md:block bg-gray-900 text-white h-screen w-64 py-8 px-4 fixed top-0 left-0 z-10`}
      >
        <h1 className="text-2xl font-bold text-center mb-8 hidden md:block">Verra Beauty</h1>
        <nav className="flex flex-col gap-6">
          <Link to="/Admin" className="flex items-center px-4 py-2 hover:text-gray-300">
            <FaTachometerAlt className="mr-3" /> Dashboard
          </Link>
          <Link to="/Admin/AllSv" className="flex items-center px-4 py-2 hover:text-gray-300">
            <FaLayerGroup className="mr-3" /> Service
          </Link>
          <Link to="/Admin/AllUser" className="flex items-center px-4 py-2 hover:text-gray-300">
            <FaUsers className="mr-3" /> Users
          </Link>
          <Link to="/Admin/AllCategory" className="flex items-center px-4 py-2 hover:text-gray-300">
            <FaLayerGroup className="mr-3" /> Category
          </Link>
          <Link to="/Admin/AllBookingS" className="flex items-center px-4 py-2 hover:text-gray-300">
            <FaClock className="mr-3" /> Schedules
          </Link>
        </nav>
      </div>
    </>
  );
}
