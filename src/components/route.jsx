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
import PrivateRoute from './privateRoute';


export default function Routers() {

  const {
    isLogged
  } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
              
         <Route element={<PrivateRoute islogged={isLogged} />}>
          <Route path='home' element={<Home />}/>
          </Route>

         <Route path="cadastro" element={<Cadastro />} />
         <Route path='login' element={<Login />} />
    
      </Routes>
    </BrowserRouter>
  )
}