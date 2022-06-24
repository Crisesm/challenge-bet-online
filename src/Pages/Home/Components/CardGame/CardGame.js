import React from 'react'
import { IMAGES_HOST } from "../../../../constants"
import "./CardGame.css"
const CardGame = ({game}) => {
  return (
    <div className='container-card-game'>
        <div >
           <img className='container-image-card-game' src={IMAGES_HOST+game.ImageUrlGame} alt="img"></img>
        </div>
        <p className='title-card-game'>{game.GameName}</p>
    </div>
  )
}

export default CardGame