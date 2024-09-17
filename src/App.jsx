import { useEffect, useState } from "react";
import axios from "axios";

function App() {

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
    <h1>Lista de criptmonedas</h1>
    <ol>
      {criptos.map(({id, name, priceUsd}) => (
        <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
      ))}
    </ol>
    </>
  );
}

export default App
