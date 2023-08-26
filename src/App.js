import React from "react";
import Navbar from "./components/Navbar";
import AnalyticsCard from "./components/AnalyticsCard";
import NewsCard from "./components/NewsCard";
import SwapCard from "./components/SwapCard";
import News from "./components/News";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#F0DCB1] h-screen flex flex-col"> 
      <Navbar/>
      <div className="flex flex-grow">
        <div className="flex flex-col w-80 mr-7 bg-red-300">
          <SwapCard/>
          <AnalyticsCard/>
        </div>
        
          <News/>
        
      </div>
    </div>
  );
}

export default App;
