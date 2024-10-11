import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import './perfil.css'

const Perfil = () => {

    const user = useContext(UserContext);

    return (
        <div className="perfil-main">
            <h1>Hola soy el perfil de {user.name}</h1>
            <label htmlFor="">Último acceso: { user.registered }</label>
        </div>
    )
}

export default Perfil;