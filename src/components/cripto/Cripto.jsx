import './Cripto.css'

const Criptos = ({name, precio, simbolo, last24Hr }) => {
    if (parseFloat(last24Hr).toFixed(4) >= 0) {
        return (
            <div className='cripto'>
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{parseFloat(precio).toFixed(4)}</p>
                    <p><span className="label">Siglas: </span>{simbolo}</p>
                    <p className='label-green'><span className="label">Variación últimas 24hr: </span>{parseFloat(last24Hr).toFixed(4)}%</p>
                </div>
            </div>
        );             
    } else {
        return (
            <div className='cripto'>
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{parseFloat(precio).toFixed(4)}</p>
                    <p><span className="label">Siglas: </span>{simbolo}</p>
                    <p className='label-red'><span className="label">Variación últimas 24hr: </span>{parseFloat(last24Hr).toFixed(4)}%</p>
                </div>
            </div>
        );
    }
    
}

export default Criptos;