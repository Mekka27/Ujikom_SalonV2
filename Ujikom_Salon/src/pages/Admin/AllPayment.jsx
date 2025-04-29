// src/pages/AllPayment.jsx
import React from "react";
import { FaEye, FaEdit, FaTrash, FaFileImport, FaFileExport } from "react-icons/fa";
import { PiCheckFatLight } from "react-icons/pi"; 

const services = [  {
    id: 1,
    title: "Potong Rambut",
    category: "Hair",
    description: "Deskripsi potong rambut",
    price: "Rp. 35.000",
    createdAt: "2025-04-16 08:52:34",
    status: "Pending",
  },

];

export default function AllPayment() {
  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden"> {/* updated */}
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full"> {/* updated */}
        <h1 className="text-3xl font-bold mb-6 text-center">All Payment</h1>



        {/* Filter Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0"> {/* updated */}
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
                <th className="py-3 px-6">Id Payment</th>
                <th className="py-3 px-6">UserName</th>
                <th className="py-3 px-6">Service</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Schedule</th>
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
                  <td className="py-3 px-6">{service.status}</td>
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
