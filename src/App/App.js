import React from 'react';
// import { NavBar } from '../components/NavBar/NavBar'
import { ApplicationsViews } from '../ApplicationViews'
import { Route, Redirect } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const App = () => (
  <>
     <Route render={() => {
            if (localStorage.getItem("r_token")) {
                return <>
                    <Route render={props => <ApplicationsViews { ...props } />} />
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />
    <Route path="/login" render={Login} />
    <Route path="/register" render={Register} />
  </>
)
