const { ethers } = require('ethers')
const JSBI = require('jsbi')
const { TickMath, FullMath } = require('@uniswap/v3-sdk')

const dotenv = require('dotenv');
dotenv.config({path: '../.env'})

const INFURA_TEST_URL = process.env.INFURA_TEST_URL
const baseToken = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' // WETH
const quoteToken = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599' // WBTC

const provider = new ethers.providers.JsonRpcProvider(INFURA_TEST_URL)

async function main(
  
  baseToken,
  quoteToken,
  inputAmount,
  currentTick,
  baseTokenDecimals,
  quoteTokenDecimals
) {
    console.log(INFURA_TEST_URL)
  const sqrtRatioX96 = TickMath.getSqrtRatioAtTick(currentTick)
  const ratioX192 = JSBI.multiply(sqrtRatioX96, sqrtRatioX96)

  const baseAmount = JSBI.BigInt( inputAmount * (10 ** baseTokenDecimals))

  const shift = JSBI.leftShift( JSBI.BigInt(1), JSBI.BigInt(192))

  const quoteAmount = FullMath.mulDivRoundingUp(ratioX192, baseAmount, shift)
  console.log('quoteAmount', quoteAmount.toString() / (10**quoteTokenDecimals))

  return quoteAmount
}

main(
  baseToken,
  quoteToken,
  1,
  257878,
  8,
  18,
)