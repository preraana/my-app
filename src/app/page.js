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
      </div>
    </div>
  );
}
