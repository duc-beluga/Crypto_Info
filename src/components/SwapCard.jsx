/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import getPrice from "../swap2";
import { AppContext } from "../context/AppContext";
import { BarLoader } from "react-spinners";
import { onAuthStateChanged } from "@firebase/auth";
import { auth, db, dbCheckIfNotExists } from "../firebase/firebase";
import { doc, updateDoc } from "@firebase/firestore";

const SwapCard = () => {
  const [output, setOutput] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputTok, setInputTok] = useState("WBTC");
  const [outputTok, setOutputTok] = useState("ETH");
  const [loadingOutput, setLoadingOutput] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleConnetWallet = async () => {
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        /*
         * Accounts returns an array of accounts i.e. ["ac1", "ac1"]
         */
        onAuthStateChanged(auth, async (user) => {
          const exists = await dbCheckIfNotExists(user.uid)
          if (exists) {
            const updateRef = doc(db, "users", user.uid)
            updateDoc(updateRef, {
              connectedToWallet: true,
              walletDetails: {
                wallet: accounts[0]
              }
            }).then(() => { 
              console.log("Updated successfully")
            }).catch((err) => {
              console.log("Error:", err)
            })
          }
        })
      } catch (err) {
        console.log("Error connecting");
      }
    } else {
      setModalVisible(true);
    }
  };

  const { setSearchNewsInput, searchNewsInput } = useContext(AppContext);

  const handleChange = (e) => {
    setInputAmount(e.target.value);
  };

  useEffect(() => {
    const fetchPrice = async () => {
      setLoadingOutput(true);
      const res = await getPrice(inputAmount, inputTok, outputTok);
      setOutput(Math.round(res * 100000) / 100000);
      setLoadingOutput(false);
    };
    if (inputAmount > 0) {
      fetchPrice();
    } else {
      setLoadingOutput(false);
      setOutput(0);
    }
    if (searchNewsInput.trim().length === 0) {
      setSearchNewsInput(inputTok);
    }
  }, [inputAmount, inputTok, outputTok, searchNewsInput, setSearchNewsInput]);

  return (
    <div className="sm:h-[70%] h-[100%] border border-slate-300 rounded-2xl shadow-lg flex flex-col bg-white p-4 gap-4">
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed z-50  w-44 p-4 "
      >
        {isModalVisible && (
          <div class="relative w-full max-w-2xl max-h-full pl-1">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 ">
                  Please Install MetaMask
                </p>
                <button
                  data-modal-hide="staticModal"
                  type="button"
                  class="text-white bg-[#F0DCB1] hover:bg-[#D7C49E] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => setModalVisible(false)}
                >
                  I accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-lg font-bold">Swap Icon</h2>
      <div className="bg-[#F2F2F2] h-2/5 rounded-xl p-3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#A3A3A3]">You pay</h3>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs p-1"
            value={inputTok}
            onChange={(e) => setInputTok(e.target.value)}
          >
            <option value="WBTC">WBTC</option>
            <option value="DAI">DAI</option>
          </select>
        </div>
        <input
          className="text-4xl w-full rounded-md focus:outline-none bg-transparent"
          placeholder="0"
          onChange={handleChange}
        />
      </div>
      <div className="bg-[#F2F2F2] h-2/5 rounded-xl p-3">
        <div className="flex justify-between">
          <h3 className="text-sm text-[#A3A3A3]">You receive</h3>
          <select
            name="Coin"
            className="bg-[#F0DCB1] rounded-md focus:outline-none text-xs p-1"
          >
            <option value="1">ETH</option>
          </select>
        </div>
        <p className="text-4xl w-full rounded-md focus:outline-none bg-transparent">
          {loadingOutput ? (
            <BarLoader color="#EC8E00" className="mt-6 w-full" />
          ) : (
            output
          )}
        </p>
      </div>
      <button
        className="h-1/5 border-none rounded-lg bg-[#FFECCF] text-[#EC8E00] font-bold sm:py-0 py-4 cursor-pointer"
        onClick={handleConnetWallet}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapCard;
