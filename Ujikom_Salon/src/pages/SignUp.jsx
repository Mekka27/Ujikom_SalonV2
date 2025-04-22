import React, { useState } from 'react';
import axios from 'axios';
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    no_telepon: '',
    password: '',
    password_confirmation: '',
    role: 'pelanggan', // default role kalau perlu dikirim
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Password dan konfirmasi tidak cocok!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        no_telepon: formData.no_telepon,
        role: formData.role, // bisa dikirim atau tidak tergantung backend
      });

      console.log(response.data);
      alert('Registrasi berhasil!');
      navigate('/login'); // arahkan ke login setelah daftar
    } catch (error) {
      console.error(error.response?.data);
      alert('Terjadi kesalahan saat registrasi.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img src="SG.png" alt="Salon Interior" className="w-full h-screen object-cover" />
      </div>

      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-6">
            Mari kita persiapkan semuanya agar Anda dapat mengakses akun pribadi Anda.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nama Lengkap</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Lengkap" className="w-full border rounded px-4 py-2 mt-1" required />
              </div>
              <div>
                <label className="text-sm text-gray-600">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full border rounded px-4 py-2 mt-1" required />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Pengguna" className="w-full border rounded px-4 py-2 mt-1" required />
              </div>
              <div>
                <label className="text-sm text-gray-600">Nomor Telepon</label>
                <input type="tel" name="no_telepon" value={formData.no_telepon} onChange={handleChange} placeholder="Nomor Telepon" className="w-full border rounded px-4 py-2 mt-1" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full border rounded px-4 py-2 mt-1" required />
            </div>

            <div>
              <label className="text-sm text-gray-600">Konfirmasi Password</label>
              <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Konfirmasi Password" className="w-full border rounded px-4 py-2 mt-1" required />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <span className="text-sm text-gray-600">
                I agree to all the <a className="text-blue-500 hover:underline">Terms</a> and <a className="text-blue-500 hover:underline">Privacy Policies</a>
              </span>
            </div>

            <button type="submit" className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition">
              Create Account
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-amber-500 hover:underline">
              Sign In
            </a>
          </p>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-sm text-gray-400">Or Sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button className="border p-3 rounded-md hover:bg-gray-100 text-blue-600"><FaFacebookF size={20} /></button>
            <button className="border p-3 rounded-md hover:bg-gray-100 text-red-500"><FaGoogle size={20} /></button>
            <button className="border p-3 rounded-md hover:bg-gray-100 text-black"><FaApple size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
