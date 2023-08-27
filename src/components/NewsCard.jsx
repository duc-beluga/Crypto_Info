import React from "react";

const NewsCard = ({ news, index }) => {
  console.log(news.title);
  return (
    <div className="flex flex-col h-1/2 w-1/3 border border-slate-300 rounded-lg p-2">
      <img
        src={news.urlToImage}
        alt="Pic"
        className="rounded-md object-fill h-1/2 mb-4"
      />

      <div className="text-xs h-1/2">
        <p className="line-clamp-3 ">{news.title}</p>
      </div>
      {/* <div className="overflow-hidden text-xs h-1/4"></div> */}
      <div className="flex justify-between">
        <p className="text-xs">{news.author}</p>
        <a href={news.url} className="text-xs text-blue-500">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
