"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-2xl mb-5">Simple Counter App</h1>

      <div>
        <h2 className="text-xl font-medium mb-4">Count: {count}</h2>
      </div>

      <div>
        <button
          className="px-3 py-2 m-2 bg-green-500 rounded-full text-white hover:bg-green-400"
          onClick={increaseCount}
        >
          Increase Count
        </button>

        <button
          className="px-3 py-2 m-2 bg-red-500 rounded-full text-white hover:bg-red-400"
          onClick={decreaseCount}
        >
          Decrease Count
        </button>

        <button
          className="px-3 py-2 m-2 bg-blue-500 rounded-full text-white hover:bg-blue-400"
          onClick={resetCount}
        >
          Reset Count
        </button>

        <button className="flex items-center gap-3 px-6 py-3 text-black bg-gradient-to-r from-teal-400 to-amber-400 rounded-full hover:text-black transition duration-300 shadow-lg group">
          <span className="font-medium">Become</span>
          <span className="flex items-center justify-center w-6 h-6 text-black bg-green-500 rounded-full bg-gradient-to-r from-teal-300 to-amber-300 transition duration-300 group-hover:translate-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>

        <button className="flex items-center m-4 gap-3 px-6 py-3 text-black bg-white rounded-full hover:text-black transition duration-300 shadow-lg group">
          <span className="font-medium">Monkey</span>
          <span className="flex items-center justify-center w-6 h-6 text-black bg-green-500  hover: bg-green-500 rounded-full  group-hover:translate-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </button>


      </div>
    </div>
  );
}
