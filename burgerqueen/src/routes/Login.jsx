import "../styles/Login.css";
import logoImg from "../assets/burger-queen-logo.png";

export function Login() {
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
          <input
            className="userEmail"
            type="email"
            placeholder="Correo electrónico"
            name="userEmail"
          ></input>
          <input
            className="userPass"
            type="password"
            placeholder="Contraseña"
            name="userPassword"
          ></input>
          <button className="signIn">Ingresar</button>
        </div>
      </section>
    </main>
  );
}
