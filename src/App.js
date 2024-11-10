import React from "react";
import EarthquakeMap from "./components/EarthquakeMap";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="p-4 bg-blue-600 w-full text-white text-center text-xl font-bold">
        Earthquake Visualizer
      </header>
      <EarthquakeMap />
    </div>
  );
}

export default App;
