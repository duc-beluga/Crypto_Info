import React, { useEffect, useState } from "react";
import {FcGoogle} from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, dbCheckIfNotExists } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import {AiOutlineMail} from "react-icons/ai"

const AnalyticsCard = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    numberOfSwaps: 0,
    connectedToWallet: false,
    walletDetails: {}
  })

  const authenticate = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then(async (res) => {
      setUserData({...userData, name: res.user.displayName, email: res.user.email})
      setAuthenticated(true)

      // Check if the user exists
      const exists = await dbCheckIfNotExists(res.user.uid)
      if (!exists) {
        const userRef = doc(db, "users", `${res.user.uid}`)
        setDoc(userRef, userData).then(() => {
          console.log("User created")
        }).catch((err) => {
          console.log("Error:", err)
        })
      }
    }).catch((error) => {
      console.log("Error:", error)
      setAuthenticated(false)
    })
  }

  const logout = () => {
    signOut(auth).then(() => {
      setAuthenticated(false)
    }).catch((err) => {
      console.log("Error:", err)
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true)
        setUserData({...userData, name: user.displayName, email: user.email})
        return
      } 
      setAuthenticated(false)
    })
  }, [userData])

  return (
    <>
      {
        authenticated ?
        <div className="flex flex-col sm:h-[30%] h-[100%] border border-slate-300 rounded-2xl shadow-xl bg-white p-3">
          <span 
            onClick={logout}
            className="bg-red-200 cursor-pointer p-2 text-xs rounded-md font-bold flex items-center justify-center w-[20%] mb-4 text-red-600"
          >Logout</span>
          <div className="flex gap-2 justify-between sm:flex-col lg:flex-row">
            <div className="">
              <h2 className="text-xl lg:text-xl font-bold sm:text-lg">{`Hello, ${userData.name}`}</h2>
              <div className="flex items-center gap-2 mb-2">
                <AiOutlineMail className="text-base lg:text-base sm:text-sm text-[#EC8E00]" />
                <p className="text-sm lg:text-sm sm:text-xs text-[#7e7e7e]">{userData.email}</p>
              </div>
              <div className="flex">
                <div className="flex flex-col w-full">
                  <h1 className="text-base lg:text-base sm:text-sm font-bold">Wallet</h1>
                  {
                    userData.connectedToWallet ? <div>

                    </div> : <p className="text-xs">Connect to your wallet</p>
                  }
                </div>
              </div>
            </div>
            <div className="bg-[#F0DCB1] w-[35%] lg:w-[35%] sm:w-[100%] rounded-lg p-2 flex flex-col sm:flex-row lg:flex-col sm:items-center sm:justify-center lg:items-start lg:justify-start">
              <span className="text-sm font-bold text-[#646464]">#Swaps</span>
              <div className="h-[70%] w-full sm:w-[20%] lg:w-full flex items-center justify-center">
                <span className="text-5xl lg:text-5xl sm:text-lg text-[#EC8E00] font-bold">{userData.numberOfSwaps}</span>
              </div>
            </div>
          </div>
        </div> : 
        <div className="flex flex-col h-[30%] items-center justify-end border border-slate-300 rounded-2xl shadow-xl bg-white py-2 px-4 pb-6">
          <h2 className="mb-4 text-lg font-bold text-[#A3A3A3]">You are not authenticated</h2>
          <button 
            className="bg-[#F0DCB1] w-full flex flex-row items-center justify-center gap-2 border-none rounded-lg py-3 cursor-pointer"
            onClick={authenticate}
          >
            <FcGoogle className="text-xl" />
            <span className="text-sm text-black font-bold">Authenticate with Google</span>
          </button>
        </div>
      }
    </>
  );
};

export default AnalyticsCard;
