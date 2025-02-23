import React from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Image */}
      <div className='bg-[url(/src/assets/hero_bg.jpeg)] bg-cover h-[90vh] flex items-center'>
        <div className=' font-[Times New Roman] text-white flex items-center justify-evenly h-[65%] w-[60vw] ml-[10rem] flex-col text-left mb-20 gap-1'>
          <h2 className='text-[1.2rem] self-start font-medium font-serif'>Welcome to Let's Code</h2>
          <h1 className='text-[4rem] font-bold leading-18 font-serif'>Unlock Your Coding Potential</h1>
          <h3 className='text-[1.4rem] font-medium font-serif self-start'>Explore a world of coding challenges and weekly contests <br /> designed to hone your programming skills and unlock your <br /> full potential
          </h3>
          <button className='self-start  flex justify-center items-cente pt-2 pb-2 pl-8 pr-8 bg-[#0f70e6] border-[#ffffff00] border-1 rounded-[5px] hover:cursor-pointer hover:border-1 hover:border-white hover:rounded-[5px] hover:bg-transparent ease-out duration-300'>Get Started</button>
        </div>
      </div>
    </>
  )
}
