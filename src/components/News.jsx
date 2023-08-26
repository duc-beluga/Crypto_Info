import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="p-4 border border-slate-300 rounded-lg shadow-xl mt-4">
      <div className="ml-3">News</div>
      <div className="flex flex-wrap ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
