import React from "react";
import { FaGoogle } from 'react-icons/fa';

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="SG.png" // Ganti dengan path gambar kamu
          alt="Salon"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Nice to see you again</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Login</label>
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </div>
            <a href="#" className="text-[13px] text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button className="bg-[#C89B6D] text-white w-full py-2 rounded-md font-semibold">
            Sign in
          </button>

          
<button className="flex items-center justify-center w-full border py-2 rounded-md bg-black text-white">
    <FaGoogle  className="w-5 h-5 mr-2" size={20} />
    Or sign in with Google
  </button>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#C89B6D] font-semibold">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
