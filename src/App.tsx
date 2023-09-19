import React from "react";
import "./App.css";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="text-center p-16 w-full mx-auto md:w-4/5 ">
      <h1 className="text-5xl font-bold mb-8">Todos App</h1>
      <div className="px-4 pt-8 pb-4 bg-gray-500/30 rounded-xl">
        <Todos />
      </div>
    </div>
  );
}

export default App;
