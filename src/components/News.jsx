import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="flex flex-col p-4 border flex-grow border-slate-300 rounded-lg shadow-xl mt-4 mb-4 bg-blue-300 ">
      <div className="ml-3">News</div>
      <div className="flex flex-wrap flex-grow bg-slate-400">
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
