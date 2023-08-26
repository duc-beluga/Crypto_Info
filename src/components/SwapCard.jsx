import React from "react";

const SwapCard = () => {
  return (
    <div className="h-72 m-5 mb-3 border border-slate-300 rounded-lg shadow-xl flex flex-col p-2 bg-white">
      <div>Swap Icon</div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg p-2">
        <div className="flex justify-between">
          <div className="text-xs">You pay</div>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs"
          >
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
          </select>
        </div>
        <p className="text-2xl">0</p>
      </div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg p-2">
        <div className="flex justify-between">
          <div className="text-xs">You receive</div>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs"
          >
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">30</option>
          </select>
        </div>
        <p className="text-2xl">0</p>
      </div>
      <button className="h-1/5 border border-slate-300 rounded-lg ml-2 mr-2 bg-[#F0DCB1]">
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;
