import React from "react";

const NewsCard = ({newsTitle, newsDescription, newsAuthor, newsLink, newsImage}) => {
  return (
    <div className="h-full w-full  border border-slate-300 rounded-lg">
      <div 
        className="h-1/2 border border-b-slate-300"
        style={{
          backgroundImage: `url("${newsImage}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "0.5rem 0.5rem 0 0"
        }}
      ></div>
      <div className="p-2">
        <h3 className="text-lg font-bold leading-5 mb-1">{newsTitle}</h3>
        <p className="text-sm leading-4 mb-4">{newsDescription}</p>
        <div className="flex flex-row align-middle justify-between">
          <div className="flex flex-row align-middle">
            <span className="text-xs">{newsAuthor}</span>
          </div>
          <a href={newsLink} className="text-sm font-bold text-orange-600">Read more</a>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
