import React, { useState } from "react";
import { motion } from "framer-motion";
import LogIn from "../Login/Login";

export default function SignIn({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Check if user already exists
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setError("User already registered. Try logging in.");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    alert("Sign-up successful! You can now log in.");
    setShowLogin(true);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#fcfcfc29] bg-opacity-50 backdrop-blur-sm font-serif">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#060C2A] p-8 rounded-lg shadow-lg w-full max-w-md text-white"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-gray-400 text-xl">
          ✖
        </button>

        <h1 className="text-2xl font-semibold text-center mb-6">Get Started Now</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full p-2 bg-gray-800 rounded focus:ring focus:ring-blue-500"
              type="text" placeholder="Enter your name"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full p-2 bg-gray-800 rounded focus:ring focus:ring-blue-500"
              type="email" placeholder="Enter your email"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input className="w-full p-2 bg-gray-800 rounded focus:ring focus:ring-blue-500"
              type="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={handleSignUp} className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-500 transition">
            Sign In
          </button>
        </div>

        <div className="my-4 flex items-center justify-center text-gray-400 text-sm">OR</div>

        <p className="text-center mt-4 text-sm">
          Have an account? <span onClick={() => setShowLogin(true)} className="text-blue-400 cursor-pointer">Login</span>
        </p>
      </motion.div>
      {showLogin && <LogIn onClose={() => setShowLogin(false)} />}
    </div>
  );
}
