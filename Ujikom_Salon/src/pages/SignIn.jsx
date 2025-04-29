import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

export default function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', formData);
      console.log("Login berhasil:", response.data);

      const { user, permissions, token } = response.data;

      // Simpan token ke localStorage
      localStorage.setItem("token", token.access_token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("permissions", JSON.stringify(permissions));

      // Redirect berdasarkan permissions
      if (permissions["create-user"] && permissions["delete-user"]) {
        navigate("/user");
      } else {
        navigate("/admin");
      }

    } catch (error) {
      console.error("Login gagal:", error.response?.data || error.message);
      alert("Login gagal. Silakan periksa kembali email dan password.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image */}
      <div className="w-1/2 hidden md:block">
        <img
          src="SG.png"
          alt="Salon"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold">Nice to see you again</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Login</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email or phone number"
                className="w-full border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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

          <button
            type="submit"
            className="bg-[#C89B6D] text-white w-full py-2 rounded-md font-semibold"
          >
            Sign in
          </button>

          <p className="text-sm text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#C89B6D] font-semibold">
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
