import axios from 'axios'

// const dotenv = require('dotenv');
// dotenv.config({path: '../.env'})
const ETHERSCAN_API_KEY = process.env.REACT_APP_ETHERSCAN_API_KEY

const getAbi = async (address) => {
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${ETHERSCAN_API_KEY}`
  const res = await axios.get(url)

  if (res.data.message && res.data.message === "NOTOK") {
    
  }
  else {
    const abi = JSON.parse(res.data.result)
    return abi
  }
}

const getPoolImmutables = async (poolContract) => {
  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ])

  const immutables = {
    token0: token0,
    token1: token1,
    fee: fee
  }

  return immutables
}

export { getAbi, getPoolImmutables};