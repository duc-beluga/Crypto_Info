import React from "react";
import Navbar from "./components/Navbar";
import AnalyticsCard from "./components/AnalyticsCard";
import NewsCard from "./components/NewsCard";
import SwapCard from "./components/SwapCard";
import News from "./components/News";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#F0DCB1] h-screen"> 
      <Navbar/>
      <div className="flex  ">
        <div className="flex flex-col   w-96 mr-10">
          <SwapCard/>
          <AnalyticsCard/>
        </div>
        <div className="">
          <News/>
        </div>
      </div>
    </div>
  );
}

export default App;
