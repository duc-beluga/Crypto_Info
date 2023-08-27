import React, { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import AnalyticsCard from "../components/AnalyticsCard";
import SwapCard from "../components/SwapCard";
import News from "../components/News";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { PacmanLoader } from "react-spinners";

function App() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {searchNewsInput} = useContext(AppContext)

  useEffect(() => {
    const API_KEY = "ada5cba1dd594c7e9e255f9e21388972";
    
    if (searchNewsInput.trim().length > 0) {
      axios.get(`https://newsapi.org/v2/everything?q=${searchNewsInput}&language=en&apiKey=${API_KEY}`)
      .then((res) => {
        setNewsData(res.data.articles.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    } else {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&language=en&apiKey=${API_KEY}`
        )
        .then((res) => {
          setNewsData(res.data.articles.slice(0, 4));
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [searchNewsInput]);

  if (loading) return <div className="bg-gradient-to-b from-[#FFECCF] h-screen w-screen flex items-center justify-center"><PacmanLoader color="#EC8E00" /></div>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-gradient-to-b from-[#FFECCF] h-screen w-screen flex flex-col p-4">
      <Navbar />
      <div className="flex w-full h-full gap-8 sm:flex-row flex-col">
        <div className="flex flex-col sm:w-[40%] lg:[30%] w-[100%] h-full gap-8">
          <SwapCard />
          <AnalyticsCard />
        </div>
        <div className="sm:w-[60%] lg:w-[70%] w-[100%] h-full">
          <News newsData={newsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
