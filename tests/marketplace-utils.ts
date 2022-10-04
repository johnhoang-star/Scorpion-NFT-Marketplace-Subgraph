import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  EV_NFT_Listed,
  EV_NFT_Minted,
  EV_NFT_Purchased,
  EV_NFT_Ready,
  OwnershipTransferred
} from "../generated/Marketplace/Marketplace"

export function createEV_NFT_ListedEvent(
  tokenId: BigInt,
  holder: Address,
  price: BigInt,
  listed: boolean,
  timeStamp: BigInt
): EV_NFT_Listed {
  let evNftListedEvent = changetype<EV_NFT_Listed>(newMockEvent())

  evNftListedEvent.parameters = new Array()

  evNftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  evNftListedEvent.parameters.push(
    new ethereum.EventParam("holder", ethereum.Value.fromAddress(holder))
  )
  evNftListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  evNftListedEvent.parameters.push(
    new ethereum.EventParam("listed", ethereum.Value.fromBoolean(listed))
  )
  evNftListedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return evNftListedEvent
}

export function createEV_NFT_MintedEvent(
  tokenId: BigInt,
  level: i32,
  price: BigInt,
  creator: Address,
  listed: boolean,
  timeStamp: BigInt
): EV_NFT_Minted {
  let evNftMintedEvent = changetype<EV_NFT_Minted>(newMockEvent())

  evNftMintedEvent.parameters = new Array()

  evNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  evNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(level))
    )
  )
  evNftMintedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  evNftMintedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  evNftMintedEvent.parameters.push(
    new ethereum.EventParam("listed", ethereum.Value.fromBoolean(listed))
  )
  evNftMintedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return evNftMintedEvent
}

export function createEV_NFT_PurchasedEvent(
  tokenId: BigInt,
  from: Address,
  to: Address,
  price: BigInt,
  timeStamp: BigInt
): EV_NFT_Purchased {
  let evNftPurchasedEvent = changetype<EV_NFT_Purchased>(newMockEvent())

  evNftPurchasedEvent.parameters = new Array()

  evNftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  evNftPurchasedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  evNftPurchasedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  evNftPurchasedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  evNftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "timeStamp",
      ethereum.Value.fromUnsignedBigInt(timeStamp)
    )
  )

  return evNftPurchasedEvent
}

export function createEV_NFT_ReadyEvent(
  tokenId: BigInt,
  price: BigInt,
  level: i32
): EV_NFT_Ready {
  let evNftReadyEvent = changetype<EV_NFT_Ready>(newMockEvent())

  evNftReadyEvent.parameters = new Array()

  evNftReadyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  evNftReadyEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  evNftReadyEvent.parameters.push(
    new ethereum.EventParam(
      "level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(level))
    )
  )

  return evNftReadyEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
