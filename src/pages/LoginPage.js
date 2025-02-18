import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#660000]">
      <div className="bg-[#1E1E2E] p-8 rounded-2xl shadow-lg w-96 flex flex-col items-center">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="Logo"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-white text-2xl font-semibold mb-6">Login</h2>
        
        <div className="w-full mb-4">
          <label className="text-gray-400 text-sm mb-1 block">Email</label>
          <div className="flex items-center bg-[#2C2C3A] p-2 rounded-lg">
            <span className="text-gray-400 pr-2">📧</span>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-white flex-1"
            />
          </div>
        </div>

        <div className="w-full mb-6">
          <label className="text-gray-400 text-sm mb-1 block">Password</label>
          <div className="flex items-center bg-[#2C2C3A] p-2 rounded-lg">
            <span className="text-gray-400 pr-2">🔒</span>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white flex-1"
            />
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
