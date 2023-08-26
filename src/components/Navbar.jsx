import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="h-11 flex justify-between p-3 pr-0 mb-2">
      <div className="flex">
        <p className="font-extrabold mr-3">CryptoLogo</p>
        <a href="/" className="ml-8 mr-8 font-semibold">
          Home
        </a>
        <a href="#" className="ml-8 mr-8 font-semibold">
          Team
        </a>
      </div>
      <div className="bg-white flex h-8 p-1 align-middle justify-center rounded-md">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="pt-1 pl-2 pr-2" />
        <input
          type="search"
          placeholder="Search news..."
          className="p-1 pr-24 m-0 focus:outline-none text-xs"
        />
      </div>
    </div>
  );
};

export default Navbar;