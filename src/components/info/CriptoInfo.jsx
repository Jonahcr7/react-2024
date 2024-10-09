
const CriptoInfo = ({cripto}) => {
    //<h1>HOLA SOY UNA CRIPTOMONEDA {parametro.id}</h1>
    <>
    <div className="info">
        <ul>
            <li><span className="label">Nombre: </span> {cripto.name}</li>
            <li><span className="label">Siglas: </span> {cripto.symbol}</li>
            <li><span className="label">24LastHrs: </span> {cripto.changePercent24Hr}</li>
        </ul>
    </div>
    </>
}

export default CriptoInfo;