import { Link } from 'react-router-dom';
import './Cripto.css'

const Criptos = ({id, name, precio, simbolo, last24Hr }) => {
    if (parseFloat(last24Hr).toFixed(4) >= 0) {
        return (
            <Link to={`/criptomonedas/${id}`}>
                <div className='cripto'>
                    <h2>{name}</h2>
                    <div className="info">
                        <p><span className="label">Precio: </span>{parseFloat(precio).toFixed(4)}</p>
                        <p><span className="label">Siglas: </span>{simbolo}</p>
                        <p className='label-green'><span className="label">Variación últimas 24hr: </span>{parseFloat(last24Hr).toFixed(4)}%</p>
                    </div>
                </div>
            </Link>
        );             
    } else {
        return (
            <Link to={`/criptomonedas/${id}`}>
                <div className="marg"></div>
                <div className='cripto'>
                    <h2>{name}</h2>
                    <div className="info">
                        <p><span className="label">Precio: </span>{parseFloat(precio).toFixed(4)}</p>
                        <p><span className="label">Siglas: </span>{simbolo}</p>
                        <p className='label-red'><span className="label">Variación últimas 24hr: </span>{parseFloat(last24Hr).toFixed(4)}%</p>
                    </div>
                </div>
            </Link>
            
        );
    }
    
}

export default Criptos;