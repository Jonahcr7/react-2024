import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Menu.css";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Menu = () => {

    const navigation = useNavigate();

    const user = useContext(UserContext);

    return (
    <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
            <li><NavLink to="/perfil">Perfil de {user.name}</NavLink></li>
            <li><a onClick={() => {
                localStorage.removeItem("tokenCriptomarket");
                navigation("/login");
            }} >Cerrar sesión</a></li>
        </ul>
    </nav>
);
}

export default Menu;