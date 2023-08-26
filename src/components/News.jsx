import React from "react";
import NewsCard from "./NewsCard";

const News = ({ newsData }) => {
  return (
    // set w so that it doesn't take up space of swap
    <div className="flex flex-col p-4 border flex-grow w-72 border-slate-300 rounded-lg shadow-xl mt-4 mb-4 bg-white ">
      <div className="ml-3">News</div>
      <div className="flex flex-wrap flex-grow">
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;
