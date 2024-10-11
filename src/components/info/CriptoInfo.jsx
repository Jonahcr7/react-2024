
const CriptoInfo = ({cripto}) => {
    return (
        <div className="info">
            <h1>HOLA SOY UNA CRIPTOMONEDA {cripto.id}</h1>
        <ul>
            <li><span className="label">Nombre: </span> {cripto.name}</li>
            <li><span className="label">Siglas: </span> {cripto.symbol}</li>
            <li><span className="label">24LastHrs: </span> {cripto.changePercent24Hr}</li>
        </ul>
    </div>
    )
}

export default CriptoInfo;