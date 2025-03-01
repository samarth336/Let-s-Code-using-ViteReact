import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Footer() {
  return (
    <>
      <footer className='flex flex-col items-center justify-center bg-[#060C2A] font-[Times New Roman] font-serif'>
        <div className="h-64 w-full  text-white flex justify-evenly items-center leading-[2]">
          <NavLink
          to="/"
          >
            <img src="/src/assets/main_logo.png" alt="img" className="w-[10rem]" />
          </NavLink>
          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>Courses</p>
            <p>Certificates</p>
            <p>About Us</p>
          </div>

          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>Courses</p>
            <p>Certificates</p>
            <p>About Us</p>
          </div>
          <div>
            <p>Quick Links</p>
            <p>Home</p>
            <p>Courses</p>
            <p>Certificates</p>
            <p>About Us</p>
          </div>
          <div className="media">
            <p>connect with us</p>
            <div className="mainmedia">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
        <hr className='border-b-0.5 w-full text-white' />
        <p className="text-white mt-1.5 mb-1.5">© 2025 Let's Code. All rights reserved.</p>
      </footer>
    </>
  )
}
