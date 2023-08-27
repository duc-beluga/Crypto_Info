import React from "react";

const NewsCard = ({ news, index }) => {
  return (
    <div className="flex flex-col sm:h-full h-96 w-full rounded-lg">
      <div
        className="w-full h-1/2 rounded-lg"
        style={{
          backgroundImage: `url('${news.urlToImage}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="pt-2">
        <h2 className="line-clamp-2 text-lg leading-6 font-bold mb-1">{news.title}</h2>
        <p className="line-clamp-2 text-sm leading-5 mb-4">{news.description}</p>
        <div className="flex flex-row align-middle justify-between">
          <span className="text-xs flex align-middle justify-center">{news.author}</span>
          <a 
            href={news.url} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm font-bold text-orange-600"
          >Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
