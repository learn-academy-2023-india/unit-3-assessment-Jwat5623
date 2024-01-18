import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Creating the drawCard function
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) Randomizing the card pulled
    if (hand.indexOf(draw) === -1) {
      // 3) For each card pulled thats 1 less in the deck
      setHand([...hand, draw])
      // 4) Update numbers of cards in Hand
    } else if (hand.length !== 52) {
      // 5) Still cards left to be dealt
      drawCard()
      // 6) Pull card from deck to hand
    } else {
      // 7) Alert that appears after all in deck have been dealt out
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }
  

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
