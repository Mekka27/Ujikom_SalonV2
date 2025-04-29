import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const servicesByCategory = {
  Haircut: [
    { id: 1, name: 'Potong Rambut', duration: '1h', price: 110000 },
    { id: 2, name: 'Potong Rambut Anak', duration: '1h', price: 75000 },
  ],
  Styling: [],
  "Hair Colour": [],
  "Hair Texture": [],
  "Hair Treatment": [],
  "Skin Care": [],
  Nails: []
};

const Booking = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('Haircut');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [note, setNote] = useState('');

  const dates = ["Sun 18", "Mon 17", "Tue 18", "Wed 19", "Thu 20", "Fri 21", "Sat 22", "Sun 23", "Mon 24"];
  const times = ["9:00pm", "4:45pm", "5:00pm", "5:15pm", "5:30pm", "5:45pm", "6:00pm", "8:00pm"];

  const totalPrice = selectedService?.price || 0;

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <div className="text-sm text-gray-500 mb-2">Step {step} of 3</div>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Pilih Layanan</h2>
            <div className="flex gap-4 mb-6 flex-wrap">
              {Object.keys(servicesByCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1 rounded-full border ${
                    category === cat
                      ? 'bg-[#c69c6d] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {servicesByCategory[category].map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className={`w-5 h-5 rounded-full border ${
                      selectedService?.id === service.id
                        ? 'bg-[#c69c6d] text-white flex items-center justify-center'
                        : 'bg-white'
                    }`}>
                      {selectedService?.id === service.id && <Check size={14} className="text-white" />}
                    </div>
                    <div>
                      <div className="font-semibold">{service.name}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                  </div>
                  <div className="text-right font-medium">Rp {service.price.toLocaleString('id-ID')}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4 flex justify-between items-center">
              <div>
                {selectedService && (
                  <div>
                    <div className="font-medium">{selectedService.name}</div>
                    <div className="text-sm text-gray-500">{selectedService.duration}</div>
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="text-gray-500">Total</div>
                <div className="font-bold text-lg">Rp {totalPrice.toLocaleString('id-ID')}</div>
                <button
                  className="bg-[#c69c6d] text-white font-semibold px-4 py-2 mt-2 rounded-md"
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Pilih Tanggal dan Waktu</h2>
            <div className="flex gap-2 overflow-x-auto mb-6">
              {dates.map((date, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-md border ${
                    selectedDate === date
                      ? 'bg-[#c69c6d] text-white'
                      : 'bg-gray-100'
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {times.map((time, idx) => (
                <div
                  key={idx}
                  className={`flex justify-between items-center border rounded-md p-3 cursor-pointer ${
                    selectedTime === time ? 'bg-yellow-100 border-[#c69c6d]' : 'bg-white'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  <span>{time}</span>
                  <ArrowRight size={16} />
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4 flex justify-between items-center">
              <div>
                {selectedService && (
                  <div>
                    <div className="font-medium">{selectedService.name}</div>
                    <div className="text-sm text-gray-500">{selectedService.duration}</div>
                  </div>
                )}
              </div>
              <div className="text-right">
                <div className="text-gray-500">Total</div>
                <div className="font-bold text-lg">Rp {totalPrice.toLocaleString('id-ID')}</div>
                <button
                  className="bg-[#c69c6d] text-white font-semibold px-4 py-2 mt-2 rounded-md"
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Review dan lanjutkan</h2>
            <div className="mb-6">
              <label className="block font-medium mb-2">Tambah catatan</label>
              <p className="text-sm text-gray-500 mb-2">Tambah catatan atau request untuk jadwal booking anda</p>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border rounded-md p-3 min-h-[100px]"
                placeholder="Tambahkan catatan di sini..."
              />
            </div>

            <div className="border-t pt-4 flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-500">{selectedDate} at {selectedTime}</div>
                <div className="font-semibold mt-1">{selectedService?.name}</div>
                <div className="text-sm text-gray-500">{selectedService?.duration}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-500">Total</div>
                <div className="font-bold text-lg">Rp {totalPrice.toLocaleString('id-ID')}</div>
                <button
                  className="bg-[#c69c6d] text-white font-semibold px-4 py-2 mt-2 rounded-md"
                  onClick={() => setStep(4)}
                >
                  Book now
                </button>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="border rounded-lg p-6 shadow-lg">
              <div className="text-xl font-semibold mb-4">Sun 16 July 2025 at 5:00pm</div>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://via.placeholder.com/50" alt="Salon" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold">Salon A</div>
                  <div className="text-sm">Jl. Ket amine</div>
                  <div className="text-sm text-gray-500">Booking ref. #: 65742695</div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <div className="font-semibold">{selectedService?.name}</div>
                    <div className="text-sm text-gray-500">{selectedService?.duration}</div>
                  </div>
                  <div>Rp {totalPrice.toLocaleString('id-ID')}</div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div>Taxes</div>
                  <div>Rp 0</div>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <div>Total</div>
                  <div>Rp {totalPrice.toLocaleString('id-ID')}</div>
                </div>
              </div>
              <div className="flex justify-center">
  <button className="mt-6 bg-[#c69c6d] text-white px-6 py-2 rounded-md">
    Lihat Reservasi
  </button>
</div>
              {/* <button className="mt-6 bg-[#c69c6d] text-white px-6 py-2 rounded-md">Lihat Reservasi</button> */}
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
