import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";
import CriptoInfo from "../info/CriptoInfo";
import CriptoHistorial from "../info/CriptoHistorial";

const CriptoPage = () => {

    const parametro = useParams();

    const [cripto, cargandoCripto] = usePetition(`assets/${parametro.id}`);
    const [historial, cargandoHistorial] = usePetition(`assets/${parametro.id}/history?interval=d1`);

    if (cargandoCripto || cargandoHistorial) return <span>Cargando...</span>
    

    return (
        <>
        { cripto && <CriptoInfo cripto={cripto}></CriptoInfo> }
        { historial && <CriptoHistorial historial={historial}></CriptoHistorial>}
        </>       
    );
}

export default CriptoPage;