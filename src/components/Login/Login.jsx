import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
export default function LogIn({ onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#fcfcfc29] bg-opacity-50 backdrop-blur-sm font-[Times New Roman] font-serif">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-[#060C2A] p-8 rounded-lg shadow-lg w-full max-w-md text-white relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-gray-400">
          ✖
        </button>
        <h1 className="text-2xl font-semibold text-center mb-6">Welcome Back</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full p-2 bg-gray-800 rounded focus:ring focus:ring-blue-500" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input className="w-full p-2 bg-gray-800 rounded focus:ring focus:ring-blue-500" type="password" placeholder="Password" required />
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
          </div>
          <button className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-500 transition">Log In</button>
        </div>
        <div className="my-4 flex items-center justify-center text-gray-400 text-sm">OR</div>
        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 p-2 rounded hover:bg-gray-600">
            <img src="/src/assets/google.png" alt="Google" className="w-5" />
            Log in with Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 p-2 rounded hover:bg-gray-600">
            <img src="/src/assets/apple (1).png" alt="Apple" className="w-5" />
            Log in with Apple
          </button>
        </div>
        <p className="text-center mt-4 text-sm">Don't have an account? <Link onClick={() => setShowSignIn(true)} className="text-blue-400 hover:underline">Sign In</Link></p>
      </motion.div>
    </div>
  );
}
