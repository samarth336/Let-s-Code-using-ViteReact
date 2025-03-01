import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import SignIn from '../SignIn/SignIn';
import LogIn from '../Login/Login';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignIn]=useState(false)

  return (
    <>
      <div className='flex items-center justify-between w-full h-[4rem] bg-[#060C2A]'>
        <div className='flex items-center justify-center ml-13 shadow-2xl'>
          <Link to='/'>
            <img className='w-35' src="/src/assets/main_logo.png" alt="logo" />
          </Link>
        </div>
        <div className='flex align-bottom justify-center items-center mr-13 h-full gap-10'>
          <ul className='flex justify-between items-center gap-10'>
            <li>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "text-white font-normal" : "text-gray-400"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactUs" className={({ isActive }) => `${isActive ? "text-white font-normal" : "text-gray-400"}`}>
                ContactUs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-white font-normal" : "text-gray-400"}`}>
                About
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-10">
            <button 
              onClick={() => setShowLogin(true)} 
              className='flex justify-center items-center text-white pt-0.4 pb-0.4 pl-2.5 pr-2.5 border border-white rounded-[5px] hover:bg-[#0f70e6] transition duration-300'>
              Login
            </button>
              <button
               onClick={() => setShowSignIn(true)} 
               className='flex justify-center items-center text-white pt-1 pb-1 pl-3 pr-3 bg-[#0f70e6] border-none rounded-[5px] hover:border-white hover:bg-transparent transition duration-300'>
                Sign In
              </button>

          </div>
        </div>
      </div>

      {/* Show Login Card When Login Button Clicked */}
      {showSignin && <SignIn onClose={() => setShowSignIn(false)} />}
      {showLogin && <LogIn onClose={() => setShowLogin(false)} />}
    </>
  );
}
