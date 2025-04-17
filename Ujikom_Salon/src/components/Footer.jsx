import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  return (
    <footer className="bg-[#c69c6d] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-white/30 pb-10">
        {/* LOGO & Deskripsi */}
        <div>
          <h2 className="font-bold text-lg mb-4">LOGO</h2>
          <p className="text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur. Tellus tortor arcu quis cras vel elementum. 
            Mollis scelerisque est quis dui cras cursus a.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides & tutorials</a></li>
            <li><a href="#">Help center</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Media kit</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4">Try It Today</h3>
          <p className="text-sm text-white/80 mb-4">Get started for free. Add your whole team as your needs grow.</p>
          <button className="bg-white text-[#c69c6d] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
            Start today →
          </button>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70 gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <span>🌐 English</span>
          <span>Terms & privacy</span>
          <span>Security</span>
          <span>Status</span>
          <span>©2021 Whitepace LLC.</span>
        </div>
        <div className="flex gap-4">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}
