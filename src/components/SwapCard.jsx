/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import getPrice from "../swap2";
import { AppContext } from "../context/AppContext";
import { BarLoader } from "react-spinners";

const SwapCard = () => {
  const [output, setOutput] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputTok, setInputTok] = useState("WBTC");
  const [outputTok, setOutputTok] = useState("ETH");
  const [loadingOutput, setLoadingOutput] = useState(false)

  const {setSearchNewsInput, searchNewsInput} = useContext(AppContext)

  const handleChange = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const fetchPrice = async () => {
      setLoadingOutput(true)
      const res = await getPrice(inputAmount, inputTok, outputTok);
      setOutput(Math.round(res * 100000) / 100000);
      setLoadingOutput(false)
    };
    if (inputAmount > 0) {
      fetchPrice();
    } else {
      setLoadingOutput(false)
      setOutput(0)
    }
    if (searchNewsInput.trim().length === 0) {
      setSearchNewsInput(inputTok)
    }
  }, [inputAmount, inputTok, outputTok, searchNewsInput, setSearchNewsInput]);
  return (
    <div className="h-[70%] border border-slate-300 rounded-2xl shadow-xl flex flex-col bg-white p-4 gap-4">
      <h2 className="text-lg font-bold">Swap Icon</h2>
      <div className="bg-[#F2F2F2] h-2/5 rounded-xl p-3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#A3A3A3]">You pay</h3>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs"
            value={inputTok}
            onChange={(e) => setInputTok(e.target.value)}
          >
            <option value="WBTC">WBTC</option>
            {/* <option value="USDC">USDC</option> */}
            <option value="DAI">DAI</option>
          </select>
        </div>
        <input
          className="text-4xl mt-1 w-full rounded-md focus:outline-none bg-transparent"
          placeholder="0"
          onChange={handleChange}
        />
      </div>
      <div className="bg-[#F2F2F2] h-2/5 rounded-xl p-3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#A3A3A3]">You receive</h3>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs"
          >
            <option value="1">ETH</option>
          </select>
        </div>
        <p className="text-4xl mt-1 w-full rounded-md focus:outline-none bg-transparent">{
          loadingOutput ? <BarLoader 
            color="#EC8E00" 
            className="mt-6 w-full"
          /> : output
        }</p>
      </div>
      <button className="h-1/5 border-none rounded-lg bg-[#FFECCF] text-[#EC8E00] font-bold">
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;
