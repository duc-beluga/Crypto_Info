import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { AppContext } from "../context/AppContext";

const News = ({ newsData }) => {
  const {searchNewsInput} = useContext(AppContext)

  return (
    // set w so that it doesn't take up space of swap
    <div className="flex flex-col p-4 border flex-grow w-full h-full border-slate-300 rounded-2xl shadow-xl mb-4 bg-white ">
      <div 
        className="gap-4 mb-5"
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <h1 className="text-xl font-black">News</h1>
        <p className="text-sm font-semibold text-slate-400">{`showing results for "${searchNewsInput}"`}</p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 h-full sm:overflow-y-clip overflow-y-scroll sm:mb-0 mb-4">
        {newsData.map((news, index) => <NewsCard key={index} news={news} />)}
      </div>
    </div>
  );
};

export default News;