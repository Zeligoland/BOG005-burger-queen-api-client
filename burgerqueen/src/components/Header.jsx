import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/BQ-lado.png";
import TittleOrders from "./TitleOrders";
import ButtonAll from "./Button";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <section className="getInto-container">
      <figure className="BQLogo-container">
      <img src={logo} className="burger-queen-logo" alt="logo" />
      <TittleOrders />
      </figure>

      <ButtonAll className="buttonLogout" type="button" onClick={logOut}>
        <FontAwesomeIcon className="iconSignOut" icon={faRightFromBracket} />
      </ButtonAll>
    </section>
  );
};

export default Header;

