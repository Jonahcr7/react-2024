import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import P404 from './components/404.jsx';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuadricula from './components/Cuadricula.jsx';
import Home from './home.jsx';
import CriptoPage from './components/cripto/CriptoPage.jsx';
import {UserContextProvider} from './components/context/UserContext.jsx';
import Perfil from './components/usuarios/Perfil.jsx';
import Login from './components/usuarios/Login.jsx';

createRoot(document.getElementById('root')).render(
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>
                        <Route index element={<Home/>}/>
                        <Route path='perfil' element={<Perfil/>}/>
                    </Route>
                    <Route path='/criptomonedas' element={<App/>}>
                        <Route index element={<Cuadricula/>}/>
                        <Route path=':id' element={<CriptoPage/>}></Route>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/*' element={<P404/>}/>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
)
