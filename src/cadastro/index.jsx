import React, {useState} from "react";

import {createUserWithEmailAndPassword, signOut } from "firebase/auth";

import Firebase from "../components/firebase.jsx";

import { AuthContext } from "../components/AuthConext.jsx";
import { useContext } from "react";

export default function Cadastro() {

    //const auth = getAuth(Firebase);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const {auth} = useContext(AuthContext);


    function handle(){
        console.log(email, password);

    }

    async function Cadastrar() {

        
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Cadastrado com Sucesso!', user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });

            return;
    }

    return (
        <div className='login'>

            <h1> LOGIN </h1>
            <div className='input'>

                <label>Login</label>
                <input 
                placeholder='email' 
                onChange={(e) => setEmail(e.target.value)}
                />
                
            </div>


            <div className='input'>

                <label>Senha</label>
                <input placeholder='passoword'
                type='password' 
                onChange={(e) => setPassword(e.target.value)}
                />



            </div>

            <button onClick={() => Cadastrar()}>Cadastro</button>
            <button onClick={() => console.log(auth)}>TESTE</button>
            <button onClick={() => signOut(auth)}>Sair</button>

        </div>
    )

}