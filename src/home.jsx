import { Link, NavLink } from "react-router-dom";
import "./home.css"

const Home = () => (
    <div className="home-main">
        <h1>Bienvenidos al CriptoMarket</h1>
        <p className="p-main">Conoce las 100 criptmonedas más concurridas</p>
        <NavLink to="/criptomonedas" className="link-main">Ver Criptos</NavLink>
    </div>
);

export default Home;