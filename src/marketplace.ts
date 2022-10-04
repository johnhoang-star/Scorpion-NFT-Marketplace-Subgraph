import { BigInt } from "@graphprotocol/graph-ts"
import {
  Marketplace,
  EV_NFT_Listed,
  EV_NFT_Minted,
  EV_NFT_Purchased,
  EV_NFT_Ready,
  OwnershipTransferred
} from "../generated/Marketplace/Marketplace"
import { NFTItem } from "../generated/schema"

let metadata = [
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Raptor_01_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Raptor_01_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Raptor_02_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Raptor_02_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Raptor_03_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Spider_01_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Spider_01_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Spider_02_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Spider_02_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbbFbG5Cp9ALwE1bQCbYpMidhi4zvry645bC5WR1m8JWq/Spider_03_02.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Island 02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Island 03.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Island 04.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Island 05.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Island 06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Raptor_01_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Raptor_01_18.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Raptor_02_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Raptor_02_18.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Raptor_03_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Spider_01_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Spider_01_18.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/Spider_03_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/spider_02_02.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmV7qf3ca4g1roEfobCM94YTnXixFmcvogMBpyFpMLhGwy/spider_02_18.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_01_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_02_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_03_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_03_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_03_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_03_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Raptor_03_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_01_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_02_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_03_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_03_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_03_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_03_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmcQ4pqeMqjxP3vL9SGanfgGSX3sNSKniPnFp5U5UYpbtF/Spider_03_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_10.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_14.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_22.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_26.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_30.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_34.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_01_38.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_10.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_14.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_46.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_50.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_54.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_02_58.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_03_22.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_03_26.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_03_30.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_03_34.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Raptor_03_38.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_10.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_14.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_22.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_26.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_30.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_34.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_01_38.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_03_22.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_03_26.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_03_30.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_03_34.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/Spider_03_38.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_10.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_14.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_46.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_50.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_54.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmSa6CQdv7GnVk7KrcDNdZ64JyBkt6q8DFyPd5kxZw5Ptb/spider_02_58.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_62.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_66.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_70.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_74.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_01_78.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_62.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_66.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_70.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_74.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_02_78.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_62.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_66.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_70.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_74.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Raptor_03_78.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_01_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_01_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_01_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_01_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_02_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_02_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_02_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_02_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_02_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_03_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_03_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_03_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Spider_03_18.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmWsoT6botkCEbLRrnqe2jKfwpe8ozzCtWEKYmRpcXUBt2/Sprider_01_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZ1cU9QLZZptQX4fUPFznp1hkzshpJFkxDCu13svPyhpn/Raptor_02_63.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZ1cU9QLZZptQX4fUPFznp1hkzshpJFkxDCu13svPyhpn/Raptor_02_67.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZ1cU9QLZZptQX4fUPFznp1hkzshpJFkxDCu13svPyhpn/Raptor_02_71.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZ1cU9QLZZptQX4fUPFznp1hkzshpJFkxDCu13svPyhpn/Raptor_02_75.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_01.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_04.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_05.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_08.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_09.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_12.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_13.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_16.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_17.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_20.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_21.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_24.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_25.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_28.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_29.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_32.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_33.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_36.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_37.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_01_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_06.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_10.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_14.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_42.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_46.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_50.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_54.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_58.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_63.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_67.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_71.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_75.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_02_79.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_22.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_26.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_30.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_34.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_38.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_43.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_47.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_51.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_55.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_59.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_63.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_67.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_71.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_75.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Raptor_03_79.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_02_63.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_02_67.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_02_71.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_02_75.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_02_79.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_43.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_47.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_51.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_55.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_59.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_63.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_67.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_71.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_75.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmY5P5r1dXB8fhnnxkmxw6aVBDQ3qqWihH3D5Xgz2NFQFQ/Spider_03_79.png",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_46.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_50.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_54.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_58.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_62.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_66.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_70.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_74.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_01_78.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_22.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_26.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_30.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_34.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_38.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_62.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_66.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_70.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_74.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_02_78.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_06.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_10.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_14.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_18.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_46.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_50.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_54.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_58.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_62.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_66.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_70.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_74.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Raptor_03_78.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Spider_01_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmbnUHZG2DPF1AhFL45cUHdq3N6qiEyCY4nZ2WEmZW7ypP/Spider_03_42.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmVbzKjVh4qbrXxswda3BjdZrbQvznURRdS7w2y1uWX8ww/Island%2001.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmVbzKjVh4qbrXxswda3BjdZrbQvznURRdS7w2y1uWX8ww/Island%2003.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmVbzKjVh4qbrXxswda3BjdZrbQvznURRdS7w2y1uWX8ww/Island%2008.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmVbzKjVh4qbrXxswda3BjdZrbQvznURRdS7w2y1uWX8ww/Island%2013.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2015.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2018.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2019.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2044.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2050.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2064.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2071.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/Island%2091.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/island%2022.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/island%2027.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmZYkcep7fJVyX2JX3EiDSHCV7ar5ucZoo2qhdEJNxKrus/island%2068.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2002.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2004.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2005.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2006.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2002.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2009.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2010.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2011.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2012.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2072.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2073.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2074.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2075.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2077.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/Island%2078.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2028.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2029.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2030.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2031.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2036.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2037.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2038.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2039.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2040.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/QmXAsq6QmUERh3MwfLtMzFpA7Qov2XMFAhmxPndBzhYRQE/island%2076.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%20100.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2014.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2016.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2017.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2024.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2025.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2043.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2045.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2046.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2047.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2048.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2049.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2057.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2058.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2059.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2060.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2061.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2062.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2063.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2065.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2066.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2067.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2069.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2070.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2079.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2080.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2081.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2084.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2085.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2086.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2087.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2089.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2090.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2092.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2093.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2094.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2095.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2098.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/Island%2099.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2020.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2021.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2023.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2026.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2032.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2033.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2034.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2035.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2041.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2042.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2051.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2052.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2053.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2054.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2055.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2056.m4v",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2082.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2083.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2088.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2096.mp4",
  "https://scorpion-finance.mypinata.cloud/ipfs/Qmev5cdMMsAyh5Mxv1GsT5XqoWmjP3FjqdFfN5oQSf19B5/island%2097.mp4"
];

export function handleEV_NFT_Listed(event: EV_NFT_Listed): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = NFTItem.load(event.params.tokenId.toString());
  if(!entity){
    entity = new NFTItem(event.params.tokenId.toI32().toString());
  }
  entity.status = event.params.listed ? "listed" : "notlisted";
  entity.price = event.params.price.toString();
  entity.updatedate = event.params.timeStamp.toString();
  entity.save();
  /*let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.holder = event.params.holder

  // Entities can be written to the store with `.save()`
  entity.save()
  */
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.Count_Listed(...)
  // - contract.Count_Minted(...)
  // - contract.ScorpionNFTAddr(...)
  // - contract.balanceOf(...)
  // - contract.check_minted(...)
  // - contract.fetchMyNFTs(...)
  // - contract.getPriceById(...)
  // - contract.getTokenURI(...)
  // - contract.itemIds(...)
  // - contract.itemsbyholder(...)
  // - contract.marketItembyId(...)
  // - contract.marketingWallet(...)
  // - contract.nftprice(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.royalties(...)
}

export function handleEV_NFT_Minted(event: EV_NFT_Minted): void {
  let entity = NFTItem.load(event.params.tokenId.toI32().toString());
  if(!entity){
    entity = new NFTItem(event.params.tokenId.toI32().toString());
  }
  entity.status = event.params.listed ? "listed" : "notlisted";
  entity.price = event.params.price.toString();
  entity.creator = event.params.creator;
  entity.holder = event.params.creator;
  entity.updatedate = event.params.timeStamp.toString();
  entity.save();
}

export function handleEV_NFT_Purchased(event: EV_NFT_Purchased): void {
  let entity = NFTItem.load(event.params.tokenId.toI32().toString());
  if(!entity){
    entity = new NFTItem(event.params.tokenId.toI32().toString());
  }
  entity.status = "notlisted";
  entity.price = event.params.price.toString();
  entity.holder = event.params.to;
  entity.updatedate = event.params.timeStamp.toString();
  entity.save();
}

export function handleEV_NFT_Ready(event: EV_NFT_Ready): void {
  let entity = new NFTItem(event.params.tokenId.toI32().toString());
  entity.tokenId = event.params.tokenId.toI32();
  entity.level = event.params.level;
  entity.price = event.params.price.toString();
  entity.status = "notmint";
  let baseipfsurl = "https://scorpion-finance.mypinata.cloud/ipfs/QmWPP3ZSPcaFCuG7on8YHrEbRa3QdjRgB4j9UYvpqdWJ3E/";
  entity.BaseUrl = baseipfsurl + (event.params.tokenId.toI32()-1).toString() + ".json";
  let _id = event.params.tokenId.toI32();
  let type = "image";
  if(_id < 11){
    type = "image"
  }else if(_id < 26){
    type = "video"
  }else if(_id < 74){
    type = "image"
  }else if(_id < 116){
    type = "video"
  }else if(_id < 164){
    type = "image"
  }else if(_id < 168){
    type = "video"
  }else if(_id < 238){
    type = "image"
  }else if(_id < 273){
    type = "video"
  }else{
    type = "video"
  }
  entity.type = type;
  entity.ImgUrl = metadata[_id - 1]
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
