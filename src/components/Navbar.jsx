import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { setSearchNewsInput } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("")

  return (
    <div 
      className="py-0 m-0 mb-4 px-0 w-full flex flex-row items-center justify-between"
    >
      <div className="flex flex-row items-center gap-12">
        <p className="font-extrabold text-2xl">CryptoInfo</p>
        <div className="flex items-center gap-6">
          <a href="/" className="font-semibold text-[#EC8E00]">
            Home
          </a>
          <a href="/team" className="font-semibold">
            Team
          </a>
        </div>
      </div>
      <div 
        className="bg-white w-1/4 flex flex-row items-center rounded-lg border border-slate-300 gap-2 ml-0 shadow-sm"
        style={{
          padding: ".6rem .8rem",
        }}
      >
        <div 
          className="h-full"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm text-slate-400" />
        </div>
        <input
          type="search"
          placeholder="Search news..."
          className="focus:outline-none text-sm m-0 p-0 w-full bg-transparent"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onMouseEnter={() => setSearchNewsInput(searchInput)}
        />
        <span 
          className="text-[.8rem] text-[#A3A3A3] font-bold cursor-pointer"
          onClick={() => setSearchNewsInput(searchInput)}
        >Enter</span>
      </div>
    </div>
  );
};

export default Navbar;
