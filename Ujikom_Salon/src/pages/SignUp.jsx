import React from 'react';
import { FaFacebookF, FaGoogle, FaApple } from 'react-icons/fa';

export default function SignUp() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Image */}
      <div className="hidden md:block">
        <img
          src="SG.png" 
          alt="Salon Interior"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-6">
            Mari kita persiapkan semuanya agar Anda dapat mengakses akun pribadi Anda.
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Nama Lengkap</label>
                <input type="text" placeholder="Nama Lengkap" className="w-full border rounded px-4 py-2 mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Username</label>
                <input type="text" placeholder="Username" className="w-full border rounded px-4 py-2 mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input type="email" placeholder="Email Pengguna" className="w-full border rounded px-4 py-2 mt-1" />
              </div>
              <div>
                <label className="text-sm text-gray-600">Nomor Telepon</label>
                <input type="tel" placeholder="Nomor Telepon" className="w-full border rounded px-4 py-2 mt-1" />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input type="password" placeholder="Password" className="w-full border rounded px-4 py-2 mt-1" />
            </div>

            <div>
              <label className="text-sm text-gray-600">Konfirmasi Password</label>
              <input type="password" placeholder="Konfirmasi Password" className="w-full border rounded px-4 py-2 mt-1" />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm text-gray-600">
                I agree to all the <a className="text-blue-500 hover:underline">Terms</a> and <a className="text-blue-500 hover:underline">Privacy Policies</a>
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="#" className="text-amber-500 hover:underline">
              Sign In
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-sm text-gray-400">Or Sign up with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mt-4">
  <button className="border p-3 rounded-md hover:bg-gray-100 text-blue-600">
    <FaFacebookF size={20} />
  </button>
  <button className="border p-3 rounded-md hover:bg-gray-100 text-red-500">
    <FaGoogle size={20} />
  </button>
  <button className="border p-3 rounded-md hover:bg-gray-100 text-black">
    <FaApple size={20} />
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
