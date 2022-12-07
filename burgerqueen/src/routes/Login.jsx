import "../styles/Login.css";

import logoImg from "../assets/burger-queen-logo.png";
import { useNavigate } from "react-router";
import { loginUsers } from "../helpers/axios";
import { useForm } from 'react-hook-form';
import { useState } from "react"


export function Login() {
  const navigate = useNavigate();
  const { handleSubmit } = useForm()
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')

  const handleInputChangeEmail = (e) => {
    const text = e.target.value
    setInputEmail(text);
  }

  const handleInputChangePassword = (e) => {
    const text = e.target.value
    setInputPassword(text);
  }

  const validateUser = () => {
    loginUsers(inputEmail, inputPassword)
    .then(res => {
        if (res.data.user.role === 'admin') {
            navigate('/admin')
        } else if (res.data.user.role === 'mesero') {
            navigate('/menuOptions')
        } else if (res.data.user.role === 'chef') {
            navigate('/orderStateChef')
        }
    })
        .catch((error) => {

            if (error.response.data === 'Email and password are required') {
                setErrorLogin('Ingresa email y contraseña ')
            }
            else if (error.response.data === 'Cannot find user') {
                setErrorLogin('Usuario no encontrado')
            }
            else if (error.response.data === 'Email format is invalid') {
                setErrorLogin('Intruduce email valido')
            }
            else if (error.response.data === 'Incorrect password') {
                setErrorLogin('Contraseña invalida')
            }
            else if (error.response.data === 'Password is too short') {
                setErrorLogin('Introduce contraseña valida')
            }
        })
}


  return (
    <main>
      <div className="welcomeHeader">
        <img src={logoImg} alt="Logoimg"/>
        <h5 className="welcome">
          Bienvenid@ al portal del restaurante BurgerQueen
        </h5>
      </div>

      <section className="loginForm">
        <div className="loginBox">
          <h4 className="bqApp">Burger Queen App</h4>
          <p className="authUser">Usuario BQ autorizado</p>
          <form typeof='submit' className='formLogin' autoComplete="on" onSubmit={handleSubmit(validateUser)}>
          <input
            onChange={handleInputChangeEmail}
            required
            className="userEmail"
            type="email"
            placeholder="Correo electrónico"
            name="userEmail"

          ></input>
          <input
            className="userPass"
            type="password"
            onChange={handleInputChangePassword}
            required
            placeholder="Contraseña"
            name="userPassword"            
          ></input>
          <button className="signIn">Ingresar</button>
          <p>{errorLogin}</p>
          </form>
        </div>
        
      </section>
    </main>
  );
}
