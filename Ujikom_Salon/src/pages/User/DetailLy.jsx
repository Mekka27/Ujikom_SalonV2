const DetailLy = () => {
    const gallery = ["/LD.png", "/LD.png", "/LD.png", "/LD.png"];
    const mainImage = "/LD.png";
  
    return (
      <div className="max-w-6xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col gap-4">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} className="w-20 h-20 object-cover rounded-md" />
          ))}
        </div>
  
        <img src={mainImage} alt="Main" className="w-full md:w-1/2 object-cover rounded-lg" />
  
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Potong Rambut</h2>
          <p className="text-lg text-brown-700 mb-4">Rp 35.000</p>
          <p className="text-sm text-gray-600 mb-6">
            Di Salon kami, anda dapat dengan nyaman mengkonsultasikan gaya tatanan rambut yg diinginkan. Hairstylist kami yang terampil dan berpengalaman dijamin mengerti betul bagaimana membuat gaya tatanan rambut sesuai harapan pelanggan.
          </p>
          <button className="bg-[#b28b68] text-white py-2 px-4 rounded-md">Booking Sekarang</button>
        </div>
      </div>
    );
  };
  
  export default DetailLy;
  