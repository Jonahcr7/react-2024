import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () => (
    <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
        </ul>
    </nav>
);

export default Menu;