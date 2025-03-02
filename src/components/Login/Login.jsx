import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router"; 
import SignIn from "../SignIn/SignIn";

export default function LogIn({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignin, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Check if user exists in localStorage
    const userData = localStorage.getItem(email);
    if (!userData) {
      setError("User not found. Please sign up.");
      return;
    }

    const storedUser = JSON.parse(userData);
    if (storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      setError("");
      onClose(); // Close modal
      navigate("/mainpage"); // Redirect
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#fcfcfc29] bg-opacity-50 backdrop-blur-sm font-serif">
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
          <button onClick={handleLogin} className="w-full bg-blue-600 py-2 rounded text-white hover:bg-blue-500 transition">
            Log In
          </button>
        </div>

        <div className="my-4 flex items-center justify-center text-gray-400 text-sm">OR</div>

        <p className="text-center mt-4 text-sm">
          Don't have an account? <span onClick={() => setShowSignIn(true)} className="text-blue-400 cursor-pointer">Sign In</span>
        </p>
      </motion.div>
      {showSignin && <SignIn onClose={() => setShowSignIn(false)} />}
    </div>
  );
}
