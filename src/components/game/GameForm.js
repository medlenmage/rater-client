import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"


export const GameForm = props => {
    const { createGame } = useContext(GameContext)
    const [currentGame, setCurrentGame] = useState({
        skillLevel: 1,
        numberOfPlayers: 0,
        title: "",
        maker: "",
        gameTypeId: 0
    })

    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="text" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.number_of_players}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimated_time_play">Estimated Play Time: </label>
                    <input type="text" name="estimated_time_play"
                        value={currentGame.estimated_time_play}
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age Recommendation: </label>
                    <input type="text" name="age_recommendation"
                        value={currentGame.age_recommendation}
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createGame({
                        title: currentGame.title,
                        designer: currentGame.designer,
                        year_released: parseInt(currentGame.year_released),
                        number_of_players: parseInt(currentGame.number_of_players),
                        estimated_time_play: parseInt(currentGame.estimated_time_play),
                        age_recommendation: parseInt(currentGame.age_recommendation)
                    })
                }}
                className="btn btn-primary">
                    Create
            </button>
        </form>
    )
}