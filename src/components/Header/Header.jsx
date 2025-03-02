import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import SignIn from "../SignIn/SignIn";
import LogIn from "../Login/Login";

export default function Header() {
  const navigate = useNavigate();

  // ✅ Ensure state updates correctly
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check login state on mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Handle Login Success
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setShowLogin(false);
    navigate("/MainPage"); // Redirect to MainPage after login
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowDropdown(false);
    navigate("/"); // Redirect to home after logout
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-[4rem] bg-[#060C2A] px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img className="w-35" src="/src/assets/main_logo.png" alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <ul className="flex justify-between items-center gap-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white font-normal" : "text-gray-400"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive ? "text-white font-normal" : "text-gray-400"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-white font-normal" : "text-gray-400"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Conditional Rendering: Profile Icon OR Login/Sign In Buttons */}
          <div className="flex items-center gap-10">
            {isLoggedIn ? (
              // ✅ Profile Icon with Dropdown
              <div className="relative">
                <FaUserCircle
                  size={30}
                  className="text-white cursor-pointer hover:text-blue-400 transition"
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 bg-[#12172b] text-white w-48 rounded-lg shadow-lg border border-gray-700">
                    <ul className="flex flex-col">
                      <li className="p-3 hover:bg-blue-500 cursor-pointer">
                        Profile
                      </li>
                      <li className="p-3 hover:bg-blue-500 cursor-pointer">
                        Settings
                      </li>
                      <li
                        className="p-3 hover:bg-red-500 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // ✅ Login & Sign In Buttons (If Not Logged In)
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
        </div>
      </div>

      {/* Show Login/Sign In Modal */}
      {showSignin && <SignIn onClose={() => setShowSignIn(false)} />}
      {showLogin && <LogIn onClose={handleLoginSuccess} />}
    </>
  );
}
