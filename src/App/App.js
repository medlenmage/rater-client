import React from 'react';
// import { NavBar } from '../components/NavBar/NavBar'
import { LandingPage } from '../components/LandingPage/LandingPage'
import { Route } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"

export const App = () => (
  <>
    <Route path="/" render={LandingPage} />
    <Route path="/login" render={Login} />
    <Route path="/register" render={Register} />
  </>
)
