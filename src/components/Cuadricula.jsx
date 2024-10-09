import { useEffect, useState } from "react";
import axios from "axios";
import Criptos from "./cripto/Cripto";
import './Cuadricula.css'

function Cuadricula() {

  const URL_API = import.meta.env.VITE_API_URL;
  const [criptos, setCriptos] = useState();

  useEffect(() => {
    //fetch(`${URL_API}assets`)
    //.then((resp) => resp.json())
    axios.get(`${URL_API}assets`)
    .then((data) => {
      setCriptos(data.data.data);
    })
    .catch(() => {
      console.error("La petición ha fallado");
    })
  }, [])
  
  if (!criptos) return <span>Cargando...</span>

  return (
    <>
    <div className="app-container">
      <h1>Lista de criptmonedas</h1>
      <div className="cripto-container">
        {
        criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Criptos 
            key={id} 
            name={name} 
            precio={priceUsd} 
            simbolo={symbol} 
            last24Hr={changePercent24Hr}
            id = {id}
          />
        ))
        }
      </div>
    </div>
    </>
  );
}

export default Cuadricula;
