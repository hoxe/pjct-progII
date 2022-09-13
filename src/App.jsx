
import './App.css'
import Login from './login'
import Home from './home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cadastro from './cadastro';
import AuthContextProvider from './components/AuthConext';
function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>

  )
}

export default App
