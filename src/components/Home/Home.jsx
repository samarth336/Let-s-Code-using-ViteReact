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
          <button className='self-start flex justify-center font-serif items-cente pt-2 pb-2 pl-8 pr-8 bg-[#0f70e6] border-[#ffffff00] border-1 rounded-[5px] hover:cursor-pointer hover:border-1 hover:border-white hover:rounded-[5px] hover:bg-transparent ease-out duration-300'>Get Started</button>
        </div>
      </div>

      {/* inforamtion section */}

      <div className="bg-gray-200 min-h-screen font-[Times New Roman] font-serif">
        {/* Subhero Section */}
        
        <div className="flex items-center justify-around py-12">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-bold">Level Up Your Coding Skills</h1>
            <h2 className="text-2xl mt-2">Practice, compete, and master programming</h2>
            <p className="mt-4 text-lg">Sharpen your coding expertise with thousands of practice problems. From beginner to expert, we’ve got challenges to fit your level.</p>
          </div>
          <img className="w-80 animate-fadeInRight" src="/src/assets/boy.png" alt="Coding Illustration" />
        </div>

        {/* Practice Section */}
        <div className="flex items-center justify-around bg-white py-12">
          <img className="w-72 animate-fadeInLeft" src="/src/assets/First_image.png" alt="Practice" />
          <div className="text-center max-w-lg">
            <h2 className="text-2xl font-bold">Practice Coding Anytime, Anywhere</h2>
            <p className="mt-4 text-lg">Solve a wide range of coding challenges across
              different <br />topics and difficulty levels. Whether
              you're preparing for interviews or improving your
              skills, our platform is tailored for you.</p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="flex items-center justify-around py-12">
          <div className="text-center max-w-lg">
            <h2 className="text-2xl font-bold">Track Your Progress</h2>
            <p className="mt-4 text-lg">Monitor your growth over time with detailed reports.
              <br />Identify your strengths and areas for improvement <br />to
              master every coding concept.</p>
          </div>
          <img className="w-72 animate-fadeInRight" src="/src/assets/progress.png" alt="Progress" />
        </div>

        {/* Compete Section */}
        <div className="flex items-center justify-around bg-white py-12">
          <img className="w-72 animate-fadeInLeft" src="/src/assets/compete.png" alt="Compete" />
          <div className="text-center max-w-lg">
            <h2 className="text-2xl font-bold">Compete with the Best</h2>
            <p className="mt-4 text-lg">Join coding contests and leaderboards. Test your
              skills against <br />peers and climb the ranks as you compete
              <br />globally or with friends.</p>
          </div>
        </div>

        {/* Multi-language Section */}
        <div className="flex items-center justify-around py-12">
          <div className="text-center max-w-lg">
            <h2 className="text-2xl font-bold">Multi-Language Support</h2>
            <p className="mt-4 text-lg">Practice coding in your favorite languages! From
              <br />Python, Java, C++, to JavaScript – we've got you
              <br />covered with support for 20+ programming languages.</p>
          </div>
          <img className="w-72 animate-fadeInRight" src="/src/assets/multi.png" alt="Multi-Language Support" />
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-12 flex flex-col items-center gap-8">
          <div className="flex gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold">3000+</h2>
              <h3 className="text-xl">Problems</h3>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold">20000+</h2>
              <h3 className="text-xl">Students Practicing</h3>
            </div>
          </div>
          <a href="sign_in.html" className="px-8 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700">Get Started</a>
        </div>
      </div>
    </>
  )
}
