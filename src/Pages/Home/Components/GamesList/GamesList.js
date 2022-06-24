import React from 'react'
import { useSelector } from "react-redux"
import CardGame from '../CardGame/CardGame';
import "./GamesList.css"
const GamesList = () => {
  const gamesData = useSelector(state => state.reducer.gamesData);
  return (
    <div className='games-list'>
        <p className='title-games-list'>Populate Games</p>
        <div className='container-games-list'>
            {gamesData.CategoryGames[0].Popular.map(game => 
            (<CardGame game={game}/>)
            )}
        </div>
    </div>
  )
}

export default GamesList