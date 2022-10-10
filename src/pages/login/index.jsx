import './login.css'

import React, {
  useState,
  useContext
} from 'react'

import { Link } from 'react-router-dom';

import { AuthContext } from '../../components/authConext'


import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {

  const { isLogged, auth } = useContext(AuthContext)

  const navigate = useNavigate()

  if (isLogged) {
    navigate('/home')
    return (
      <div>
        Loading...
      </div>
    )
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function Login(auth, email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate('/home')
      }).catch((error) => {
        window.alert(error.message)
      })

  }

  return (
    <div className="login">
      <h1>Login</h1>

      <div className="input">
        <label>Login</label>
        <input
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />

      </div>

      <div className='input'  >
        <label>Senha</label>
        <input
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>


      <button
        onClick={() => Login(auth, email, password)}

      >Logar</button>

    </div>
  )
}