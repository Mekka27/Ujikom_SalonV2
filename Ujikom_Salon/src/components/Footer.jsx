import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-[#c69c6d] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/30 pb-10">
        {/* Logo & Deskripsi */}
        <div className="md:col-span-1">
          <h2 className="font-pacifico text-lg mb-4">Verra Beauty</h2>
          <p className="text-sm text-white/80">
            Where beauty meets care. From haircuts and coloring to nails and facials, our expert team is here to help you look and feel your best. Step in, relax, and let us take care of you.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Reservation</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-4">Address</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="#">
                Jl. Darul Quran Jl. Kp. Loji No.236, RT.03/RW.10, Loji, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16117
              </a>
            </li>
          </ul>
        </div>

       
        {/* Map */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-4">Lokasi Kami</h3>
          <p className="text-sm text-white/80 mb-4">Kunjungi salon kami langsung atau reservasi online!</p>
          <div className="w-full h-[200px] md:h-[250px] rounded-md overflow-hidden shadow-md">
            <iframe
              title="Lokasi Salon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3621735250343!2d106.7870391!3d-6.219548299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11c5a1ff9c1%3A0xc3c47f4e2d396406!2sSalon%20Cantik!5e0!3m2!1sen!2sid!4v1713950100000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center text-sm text-white/70 gap-4">
  <div className="flex flex-wrap items-center gap-4">
    <span>©2025</span>
  </div>
</div>

    </footer>
  );
}
