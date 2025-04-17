// pages/Index.jsx
import React, { useState } from "react";

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 8;

  const services = [
    { id: 1, name: "Potong Rambut", price: 110000, image: "/LD.png", isFavorite: true },
    { id: 2, name: "Creambath", price: 75000, image: "/LD.png", isFavorite: true },
    { id: 3, name: "Hairstyling", price: 75000, image: "/LD.png", isFavorite: true },
    { id: 4, name: "Pewarnaan Rambut", price: 130000, image: "/LD.png", isFavorite: true },
    { id: 5, name: "Lulur", price: 80000, image: "/LD.png", isFavorite: false },
    { id: 6, name: "Manicure", price: 60000, image: "/LD.png", isFavorite: false },
    { id: 7, name: "Pedicure", price: 65000, image: "/LD.png", isFavorite: false },
    { id: 8, name: "Facial", price: 90000, image: "/LD.png", isFavorite: false },
  ];

  const favoriteServices = services.filter(service => service.isFavorite);
  const paginatedServices = services.slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage);

  return (
    <div className="bg-[#c69c6d] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            {[...Array(10)].map((_, i) => (
              <path
                key={i}
                fill="none"
                stroke="#ffffff22"
                strokeWidth="1"
                d={`M0,${160 + i * 10}L48,${165.3 + i * 10}C96,${171 + i * 10},192,${181 + i * 10},288,${176 + i * 10}C384,${171 + i * 10},480,${149 + i * 10},576,${144 + i * 10}C672,${139 + i * 10},768,${149 + i * 10},864,${149.3 + i * 10}C960,${149 + i * 10},1056,${139 + i * 10},1152,${122.7 + i * 10}C1248,${107 + i * 10},1344,${85 + i * 10},1392,${74.7 + i * 10}L1440,${64 + i * 10}`}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10">
         

          <main className="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-24 py-20">
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang </h2>
              <p className="mb-6 text-sm md:text-base">Kepuasaan Anda Adalah Kenikmatan Kami</p>
              <a href="#layanan">
                <button className="bg-white text-[#c69c6d] font-medium px-5 py-3 rounded-md shadow-md hover:bg-gray-100 transition inline-flex items-center">
                  Lihat Layanan Yang Tersedia
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
            </div>

            <div className="mt-10 lg:mt-0 lg:ml-10 max-w-xl">
              <img
                src="/LD.png"
                alt="Salon Example"
                className="rounded-md shadow-lg w-full object-cover"
              />
            </div>
          </main>
        </div>
      </section>

      {/* Halaman Kedua - ServiceList */}
      <section id="layanan" className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-6">Layanan Favorit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {favoriteServices.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <h2 className="text-center text-2xl font-bold mb-6">Semua Layanan</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {paginatedServices.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <Pagination
            total={Math.ceil(services.length / servicesPerPage)}
            current={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </div>
  );
}

// Komponen Kartu Layanan
const ServiceCard = ({ name, price, image }) => (
  <div className="text-center">
    <img src={image} alt={name} className="rounded-lg w-full h-36 object-cover mb-2" />
    <p className="font-medium">{name}</p>
    <p className="text-sm text-gray-600">Rp {price.toLocaleString()}</p>
  </div>
);

// Komponen Pagination
const Pagination = ({ total, current, onPageChange }) => (
  <div className="flex justify-center space-x-2 mt-4">
    {[...Array(total)].map((_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-3 py-1 border rounded ${current === i + 1 ? 'bg-gray-700 text-white' : 'bg-white'}`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);
