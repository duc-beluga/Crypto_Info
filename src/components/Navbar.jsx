import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {searchNewsInput, setSearchNewsInput} = useContext(AppContext)

  return (
    <div className="h-11 flex justify-between p-3 pr-24 mb-2">
      <div className="flex">
        <p className="font-extrabold mr-3">CryptoLogo</p>
        <a href="/" className="ml-8 mr-8 font-semibold">
          Home
        </a>
        <a href="/team" className="ml-8 mr-8 font-semibold">
          Team members
        </a>
      </div>
      <div className="bg-white flex w-72 h-8 p-1 align-middle justify-center rounded-md">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="pt-1 pl-2 pr-2" />
        <input
          type="search"
          placeholder="Search news..."
          className="p-1 pr-4 m-0 focus:outline-none text-xs w-5/6"
          value={searchNewsInput}
          onChange={(e) => setSearchNewsInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
