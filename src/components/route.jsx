import Login from '../pages/login'
import Home from '../pages/home'
import Cadastro from '../pages/cadastro'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { useContext } from 'react'

import { AuthContext } from './authConext'


export default function Routers() {

  const {
    isLogged
  } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        {
          isLogged ? (
            <Route path='home' element={<Home />} />
          ) : (
            <>
              <Route path="cadastro" element={<Cadastro />} />
              <Route path='login' element={<Login />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  )
}