import React from 'react'
import { Route } from 'react-router-dom'

import { NavBar } from './components/NavBar/NavBar'

import { GameProvider } from './components/game/GameProvider'
import { GameList } from './components/game/GameList'
import { GameForm } from './components/game/GameForm'
import { GameDetails } from './components/game/GameDetails'

export const ApplicationsViews = () => {
    return <>

        <main style={{
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route render={props => <NavBar {...props} />} />
                <Route exact path="/games" render={props => <GameList {...props}/>} />
                <Route exact path="/addGame" render={props => <GameForm {...props}/>} />
                <Route exact path="/games/:gameId(\d+)" render={props => <GameDetails {...props}/>} />
            </GameProvider>
        </main>
    </>
}