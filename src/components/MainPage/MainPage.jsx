"use client"

import { useState } from "react"

export default function App() {
  const categories = [
    { name: "Basic Programming", problems: 300, solved: 50 },
    { name: "Data Structure", problems: 500, solved: 65 },
    { name: "Algorithms", problems: 450, solved: 22 },
    { name: "Object-Oriented Programming (OOP)", problems: 250, solved: 66 },
    { name: "Dynamic Programming", problems: 150, solved: 40 },
    { name: "Machine Learning", problems: 340, solved: 12 },
  ]

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-gray-200 p-6">
      {/* **Video Section** */}
      <div className="w-full max-w-5xl mx-auto mb-6">
        <img src="/src/assets/banner1.png" alt="banner" />
      </div>

      {/* **Header** */}
      <h1 className="text-3xl font-bold text-white mb-6">Welcome ABC! Ready to practice?</h1>

      {/* **Today's Challenge Section** */}
      <div className="mb-6">
        <div className="inline-block bg-yellow-500 text-black font-bold px-3 py-1 rounded mb-2">
          Today's Challenge:
        </div>

        <div className="bg-[#12172b] rounded-lg p-4 flex items-center justify-between border border-gray-700 shadow-lg">
          <div className="text-lg font-medium">Problem: <span className="text-blue-400">Find the Missing Number</span></div>
          <div className="text-lg">Level: <span className="text-yellow-400">Medium</span></div>
          <div className="text-lg">Attempted By: <span className="text-green-400">220</span></div>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold transition">
            Solve
          </button>
        </div>
      </div>

      {/* **Categories Grid** */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#12172b] rounded-lg p-5 border border-gray-700 shadow-md hover:shadow-xl hover:bg-[#192243] transition"
          >
            <h3 className="text-xl font-semibold text-blue-400">{category.name}</h3>
            <div className="flex justify-between mt-4 text-gray-400">
              <div>Problems: <span className="text-white">{category.problems}</span></div>
              <div>Solved: <span className="text-green-400">{category.solved}</span></div>
            </div>
          </div>
        ))}
      </div>

      {/* **Right Sidebar / Updates Section** */}
      <div className="bg-[#12172b] rounded-lg p-6 border border-gray-700 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Weekly Coding Challenges Are Here!</h2>

        <div className="space-y-6">
          <p className="text-gray-400">
            <span className="text-blue-400 font-semibold">Platform Update:</span> Faster Compiler Speeds
          </p>
          <p className="text-gray-400">
            <span className="text-yellow-400 font-semibold">Bug Fixes & Performance Enhancements</span>
          </p>
          <p className="text-gray-400">
            <span className="text-green-400 font-semibold">New Feature Launch:</span> Integrated Debugging Tool
          </p>
        </div>
      </div>
    </div>
  )
}
