import { Link } from "react-router-dom";

const Home = () => (
    <>
        <h1>Bienvenidos a EdMarket</h1>
        <p>Conoce las 100 criptmonedas más concurridas</p>
        <Link to="/criptomonedas">Ver Criptos</Link>
    </>
);

export default Home;