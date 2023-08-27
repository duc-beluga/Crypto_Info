import React, { useState, useEffect, useRef } from "react";
import getPrice from "../swap2";

const SwapCard = () => {
  const [output, setOutput] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputTok, setInputTok] = useState("WBTC");
  const [outputTok, setOutputTok] = useState("ETH");

  const handleChange = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const fetchPrice = async () => {
      const res = await getPrice(inputAmount, inputTok, outputTok);
      setOutput(Math.round(res * 100000) / 100000);
    };
    if (inputAmount) {
      fetchPrice();
    }
  }, [inputAmount, inputTok]);
  return (
    <div className="h-72 m-5 mb-3 border border-slate-300 rounded-lg shadow-xl flex flex-col p-2 bg-white">
      <div>Swap Icon</div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg p-2">
        <div className="flex justify-between">
          <div className="text-xs">You pay</div>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs p-1"
            value={inputTok}
            onChange={(e) => setInputTok(e.target.value)}
          >
            <option value="WBTC">WBTC</option>
            {/* <option value="USDC">USDC</option> */}
            <option value="DAI">DAI</option>
          </select>
        </div>
        <input
          className="text-2xl  w-full rounded-md focus:outline-none"
          placeholder="0"
          onChange={handleChange}
        />
      </div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg p-2">
        <div className="flex justify-between">
          <div className="text-xs">You receive</div>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs p-1"
          >
            <option value="1">ETH</option>
          </select>
        </div>
        <p className="text-2xl">{output}</p>
      </div>
      <button className="h-1/5 border border-slate-300 rounded-lg ml-2 mr-2 bg-[#F0DCB1]">
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;
