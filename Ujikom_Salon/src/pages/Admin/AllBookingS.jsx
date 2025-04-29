// src/pages/AllBookingS.jsx
import React, { useState, useEffect } from "react";
import { FaFileImport, FaFileExport } from "react-icons/fa"; 
import { PiCheckFatLight} from "react-icons/pi"; 
import { format, startOfWeek, addDays } from "date-fns";

const services = [  {
  id: 1,
  title: "Testing",
  category: "10.30",
  description: "Deskripsi potong rambut",
  price: "Child Haircut",
  createdAt: "Open",
}
];
export default function AllBookingS() {
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    const monday = startOfWeek(new Date(), { weekStartsOn: 1 }); // Mulai dari Senin
    const days = [];
    for (let i = 0; i < 5; i++) {
      const date = addDays(monday, i);
      days.push({
        day: format(date, "EEEE", { locale: undefined }), // Senin, Selasa, dll
        date: format(date, "dd/MM/yyyy"), // Tanggal real time
      });
    }
    setWeekDays(days);
  }, []);

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">All Booking Schedules</h1>

        {/* Tombol Hari + Tanggal */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 flex-wrap">
            {weekDays.map((item) => (
              <button
                key={item.day}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex flex-col items-center"
              >
                <span>{item.day}</span>
                <span className="text-xs">{item.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <label htmlFor="entries" className="text-sm font-medium">
              Entries per page
            </label>
            <select
              id="entries"
              className="border border-gray-300 rounded-lg p-2 text-sm focus:ring focus:ring-indigo-300"
            >
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <button className="flex items-center bg-white border px-4 py-2 rounded-lg shadow hover:shadow-md transition space-x-2">
              <FaFileImport />
              <span>Import</span>
            </button>
            <button className="flex items-center bg-white border px-4 py-2 rounded-lg shadow hover:shadow-md transition space-x-2">
              <FaFileExport />
              <span>Export</span>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-lg shadow hover:shadow-md transition text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow bg-white">
          <table className="min-w-full text-sm text-center">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Time</th>
                <th className="py-3 px-6">Sevice</th>
                <th className="py-3 px-6">Notes</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{service.title}</td>
                  <td className="py-3 px-6">{service.category}</td>
                  <td className="py-3 px-6 text-blue-600 hover:underline cursor-pointer">{service.description}</td>
                  <td className="py-3 px-6">{service.price}</td>
                  <td className="py-3 px-6">{service.createdAt}</td>
                  <td className="py-3 px-6 flex justify-center space-x-2">
                    <button className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition">
                      <PiCheckFatLight />
                    </button>
              
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <p className="text-sm mb-2 sm:mb-0">Showing 1 to 10 of 30 entries</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-md border ${
                  page === 1 ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-200"
                } transition`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
