import { Navigate, Outlet } from "react-router-dom";
import Menu from "./menu/Menu";
import "./usuarios/Login.css"

const App = () => {

    if (!localStorage.getItem("tokenCriptomarket")) return <Navigate to="/login"/>

    return (    
            <>
            <Menu/>
            <Outlet/>
            </>
    );
}

export default App;