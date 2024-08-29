import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} // Apply the inline style here
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="bg-red-500 w-10 h-10 rounded-full">R</button>
          <button onClick={() => setColor("blue")} className="bg-blue-500 w-10 h-10 rounded-full">B</button>
          <button onClick={() => setColor("green")} className="bg-green-500 w-10 h-10 rounded-full">G</button>
          <button onClick={() => setColor("yellow")} className="bg-yellow-500 w-10 h-10 rounded-full">Y</button>
          <button onClick={() => setColor("purple")} className="bg-purple-500 w-10 h-10 rounded-full">P</button>
          <button onClick={() => setColor("indigo")} className="bg-indigo-500 w-10 h-10 rounded-full">I</button>
          <button onClick={() => setColor("pink")} className="bg-pink-500 w-10 h-10 rounded-full">P</button>
          <button onClick={() => setColor("gray")} className="bg-gray-500 w-10 h-10 rounded-full">G</button>
          <button onClick={() => setColor("black")} className="bg-black w-10 h-10 text-white rounded-full">B</button>
          <button onClick={() => setColor("white")} className="bg-white w-10 h-10 rounded-full">W</button>
        </div>
      </div>
    </div>
  );
}

export default App;
