import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from './GameProvider'

export const GameList = props => {
    const { games, getGames } = useContext(GameContext)

    useEffect(() => {
        getGames()
    }, [])

    const gameDetails = `/games/${games.id}`

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    props.history.push({ pathname: "/addGame" })
                }}
            >Register New Game</button>
            {
                games && games.results
                ? games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <Link to={gameDetails}>{game.title}</Link>
                        <div className="game__title">{game.title} by {game.designer}</div>
                        <div className="game__year_released">Year Released is {game.year_released}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__time_of_play">Estimated time of play is {game.estimated_time_play}</div>
                        <div className="game__players">the Age Recommendation for this game is {game.age_recommendation}</div>
                    </section>
                })
                : ''
            }
        </article>
    )
}