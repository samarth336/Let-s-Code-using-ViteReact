import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import SignIn from "../SignIn/SignIn";
import LogIn from "../Login/Login";

export default function Header() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in when the page loads
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  // Handle user login
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setShowLogin(false);
    navigate("/MainPage");
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <>
      <header className="flex items-center justify-between w-full h-16 bg-[#060C2A] px-10">
        {/* Logo */}
        <Link to="/">
          <img src="/src/assets/main_logo.png" alt="Logo" className="w-35" />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-10">
          <ul className="flex gap-10">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-white font-normal" : "text-gray-400")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className={({ isActive }) => (isActive ? "text-white font-normal" : "text-gray-400")}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "text-white font-normal" : "text-gray-400")}>
                About
              </NavLink>
            </li>
          </ul>

          {/* Authentication & Profile Section */}
          <div className="flex items-center gap-10">
            {isLoggedIn ? (
              // Show profile icon if logged in
              <div className="relative">
                <FaUserCircle
                  size={30}
                  className="text-white cursor-pointer hover:text-blue-400 transition"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-3 bg-[#12172b] text-white w-48 rounded-lg shadow-lg border border-gray-700">
                    <ul className="flex flex-col">
                      <li className="p-3 hover:bg-blue-500 cursor-pointer">Profile</li>
                      <li className="p-3 hover:bg-blue-500 cursor-pointer">Settings</li>
                      <li className="p-3 hover:bg-red-500 cursor-pointer" onClick={handleLogout}>
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Show Login & Sign In buttons if not logged in
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-white border border-white px-3 py-1 rounded-lg hover:bg-blue-500 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="text-white bg-blue-500 px-4 py-1 rounded-lg hover:border-white hover:bg-transparent transition"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Modals for Login & Sign In */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showLogin && <LogIn onClose={handleLoginSuccess} />}
    </>
  );
}
