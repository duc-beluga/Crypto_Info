import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AnalyticsCard from "../components/AnalyticsCard";
import SwapCard from "../components/SwapCard";
import News from "../components/News";
import useFetch from "../hooks/useFetch";
import axios from "axios";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7af7686e42144af4bae62b5a7afce8a5"
      )
      .then((res) => {
        setNewsData(res.data.articles.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  console.log("asdsad", newsData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gradient-to-b from-[#F0DCB1] h-screen flex flex-col pr-4">
      <Navbar />
      <div className="flex flex-grow">
        <div className="flex flex-col w-80 mr-7 ">
          <SwapCard />
          <AnalyticsCard />
        </div>

        <News newsData={newsData} />
      </div>
    </div>
  );
}

export default App;
