import React from "react";
import NewsCard from "./NewsCard";

const dummyData = [
  {
    title: "Kia revealed yet another dd awesome-looking ele...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
    title: "Kia revealed yet another dd awesome-looking el1...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
    title: "Kia revealed yet another dd awesome-looking el2...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
    title: "Kia revealed yet another dd awesome-looking el3...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
    title: "Kia revealed yet another dd awesome-looking el4...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
  {
    title: "Kia revealed yet another dd awesome-looking ele...",
    description: "Lorem ipsum dolor sit amet dfdfdf consectetur. Habitasse vivamu...",
    author: "Fred Lambert",
    link: "",
    image: "https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80"
  },
]

const News = () => {
  
  return (
    <div className="flex flex-col p-4 border flex-grow border-slate-300 rounded-lg shadow-xl mt-4 mb-4 bg-white w-2/3">
      <div className="py-4 pt-0 flex flex-row align-middle gap-4">
        <h1 className="text-2xl font-bold">News</h1>
        <p className="flex flex-row align-middle">{`showing results for ""`}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-y-auto h-full no-scrollbar">
        {
          dummyData.map((news) => {
            return (
              <NewsCard 
                key={news.title}
                newsTitle={news.title}
                newsDescription={news.description}
                newsAuthor={news.author}
                newsLink={news.link}
                newsImage={news.image}
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default News;
