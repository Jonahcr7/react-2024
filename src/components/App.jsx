import { Outlet } from "react-router-dom";
import Menu from "./menu/menu";

const App = () => (
    <>
    <Menu/>
    <Outlet/>
    </>
);

export default App;