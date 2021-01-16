import React, {  useState } from 'react'

export const GameContext = React.createContext()

export const GameProvider = props => {
    const [ games, setGames ] = useState([])
    const [ game, setGame ] = useState({})

    const getGames = () => {
        return fetch('https://localhost:8000/games',{
            headers:{
                "Authorization": `Token ${localStorage.getItem("r_token")}`
            }
        })
        .then(res => res.json())
        .then(setGames)
    }

    const createGame = game => {
        return fetch('http://localhost:8000/games', {
            method: 'POST',
            headers: {
            "Authorization": `Token ${localStorage.getItem("r_token")}`,
            'Content-Type': 'application/json',
            "Accept": "application/json",
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(getGames)
    }

    const getGameById = id => {
        return fetch(`https://localhost:8000/games/${id}`)
            .then(res => res.json())
    }

    return (
        <GameContext.Provider value={{
            games,
            game,
            getGames,
            createGame
        }} >
            {props.children}
        </GameContext.Provider>
    )
}