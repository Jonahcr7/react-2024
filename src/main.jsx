import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import Saludo from './components/Saludo.jsx';
import P404 from './components/404.jsx';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuadricula from './components/Cuadricula.jsx';

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Cuadricula/>}/>
                    <Route path='/saludo' element={<Saludo/>}/>
                </Route>
                <Route path='/*' element={<P404/>}/>
            </Routes>
        </BrowserRouter>
)
