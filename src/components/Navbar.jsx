import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { setSearchNewsInput } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("")

  return (
    <div 
      className="py-0 m-0 sm:mb-4 mb-8 px-0 w-full flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-3 justify-between sm:mt-0 mt-4"
    >
      <div className="flex flex-row items-center sm:justify-normal justify-between sm:w-[50%] w-[100%] gap-12">
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
        className="bg-white sm:w-1/4 w-[100%] flex flex-row items-center rounded-lg border border-slate-300 gap-2 ml-0 shadow-sm"
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
