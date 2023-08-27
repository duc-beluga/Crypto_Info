import { ethers } from 'ethers'
import { getAbi, getPoolImmutables } from './helpers.js'


const { abi: IUniswapV3PoolABI } = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const { abi: QuoterABI } = require("@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json");

// const dotenv = require('dotenv');
// dotenv.config({path: '../.env'})

const INFURA_URL = process.env.REACT_APP_INFURA_TEST_URL

console.log(INFURA_URL)
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL)
const poolAddress = '0xcbcdf9626bc03e24f779434178a73a0b4bad62ed'

const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"

const getPrice = async (inputAmount, inputTok, outputTok) => {
    console.log(inputTok)
    console.log(outputTok)
  const tokMap = {
    'WBTC': {
        'ETH': '0xcbcdf9626bc03e24f779434178a73a0b4bad62ed'
    },
    'DAI': {
        'ETH': '0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8'
    },
    'USDC': {
        'ETH': '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8'
    },
  }

  const poolAddress = tokMap[inputTok][outputTok]

  const poolContract = new ethers.Contract(
    poolAddress,
    IUniswapV3PoolABI,
    provider
  )

  const tokenAddress0 = await poolContract.token0();
  const tokenAddress1 = await poolContract.token1();

  console.log(tokenAddress0)
  console.log(tokenAddress1)
  const tokenAbi0 = await getAbi(tokenAddress0)
  const tokenAbi1 = await getAbi(tokenAddress1)

  const tokenContract0 = new ethers.Contract(
    tokenAddress0,
    tokenAbi0,
    provider
  )
  const tokenContract1 = new ethers.Contract(
    tokenAddress1,
    tokenAbi1,
    provider
  )

  const tokenSymbol0 = await tokenContract0.symbol()
  const tokenSymbol1 = await tokenContract1.symbol()
  const tokenDecimals0 = await tokenContract0.decimals()
  const tokenDecimals1 = await tokenContract1.decimals()

  const quoterContract = new ethers.Contract(
    quoterAddress,
    QuoterABI,
    provider
  )

  const immutables = await getPoolImmutables(poolContract)

  const amountIn = ethers.utils.parseUnits(
    inputAmount.toString(),
    tokenDecimals0
  )

  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    immutables.token0,
    immutables.token1,
    immutables.fee,
    amountIn,
    0
  )

  const amountOut = ethers.utils.formatUnits(quotedAmountOut, tokenDecimals1)

  return amountOut
}

export default getPrice;

