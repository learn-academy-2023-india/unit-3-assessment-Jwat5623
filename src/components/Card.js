import React from "react"

const Card = ({ hand }) => {
  return (
    <div className="handStyles">
      {hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}

export default Card