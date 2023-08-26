import React from "react";

const SwapCard = () => {
  return (
    <div className="bg-blue-300 h-72 m-5 mb-3 border border-slate-300 rounded-lg shadow-xl flex flex-col p-2">
      <div>Swap Icon</div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg">
        You pay
      </div>
      <div className="border border-slate-300 m-2 h-2/5 rounded-lg">
        You Receive
      </div>
      <button className="h-1/5 border border-slate-300 rounded-lg ml-2 mr-2">
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;
