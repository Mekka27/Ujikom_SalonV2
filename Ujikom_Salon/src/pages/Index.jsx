import React from "react";

export default function Index() {
  return (
    <div className="bg-[#c69c6d] text-white">
      {/* Halaman Pertama */}
      <section id="beranda" className="relative min-h-screen overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang</h2>
              <p className="mb-6 text-sm md:text-base">Kepuasan Anda Adalah Kenikmatan Kami</p>
              <button className="bg-white text-[#c69c6d] font-medium px-5 py-3 rounded-md shadow-md hover:bg-gray-100 transition inline-flex items-center">
                Lihat Layanan Yang Tersedia
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="mt-10 lg:mt-0 lg:ml-10 max-w-xl">
              <img
                src="LD.png"
                alt="Salon Example"
                className="rounded-md shadow-lg w-full object-cover"
              />
            </div>
          </main>
        </div>
      </section>

      {/* Halaman Kedua */}
      <section id="tentang" className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Tentang Salon Kami</h1>
            <p className="text-gray-700">
            Salon kami menyediakan berbagai layanan kecantikan dan perawatan rambut dengan suasana nyaman dan pelayanan profesional. Mulai dari potong rambut, styling, creambath, hingga perawatan wajah – semua tersedia untuk membuat Anda tampil percaya diri setiap hari.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="TsA.png"
              alt="Salon"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
