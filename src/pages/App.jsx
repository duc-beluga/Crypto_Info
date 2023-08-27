import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import AnalyticsCard from "../components/AnalyticsCard";
import SwapCard from "../components/SwapCard";
import News from "../components/News";
import axios from "axios";
import { AppContext } from "../context/AppContext";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {searchNewsInput} = useContext(AppContext)

  useEffect(() => {
    if (searchNewsInput.trim().length > 0) {
      axios.get(`https://newsapi.org/v2/everything?q=${searchNewsInput}&language=en&apiKey=7af7686e42144af4bae62b5a7afce8a5`)
      .then((res) => {
        setNewsData(res.data.articles.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    } else {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=cryptocurrency&language=en&apiKey=7af7686e42144af4bae62b5a7afce8a5"
        )
        .then((res) => {
          setNewsData(res.data.articles.slice(0, 5));
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [searchNewsInput]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gradient-to-b from-[#FFECCF] h-screen flex flex-col p-4">
      <Navbar />
      <div className="flex w-full h-full gap-8">
        <div className="flex flex-col w-[30%] h-full gap-8">
          <SwapCard />
          <AnalyticsCard />
        </div>
        <div className="w-[70%] h-full">
          <News newsData={newsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
