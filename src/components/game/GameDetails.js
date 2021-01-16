import React, { useContext, useEffect } from 'react'
import { GameContext } from './GameProvider'

export const GameDetails = props => {
    const { game, getGameById } = useContext(GameContext)

    useEffect(() => {
        getGameById()
    }, [])

    return (
        <div className="single-main-container">
        <div className="single-game-container">
            <div className="single-heading">
                <h3>{game.title}</h3>
                <div className="single-designer">
                    <h4>{game.designer}</h4>
                </div>
            </div>
            <div className="post-content">
                <p>{game.year_released}</p>
                <p>{game.number_of_players}</p>
                <p>{game.estimated_time_play}</p>
                <p>{game.age_recommendation}</p>
            </div>
            <div classNAme="game-categories">
                {
                    game && game.category
                    ? <h6 className="cat-label">{game.category.label}</h6>
                    : ''
                }
            </div>
        </div>
        <div className="single-tag-container mt-0">
        </div>
    </div>
  )
}