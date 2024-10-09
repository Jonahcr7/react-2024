import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";
import CriptoInfo from "../info/CriptoInfo";
import CriptoHistorial from "../info/CriptoHistorial";

const CriptoPage = () => {

    const parametro = useParams();

    const cripto = usePetition(`assets/${parametro.id}`);
    const historial = usePetition(`assets/${parametro.id}/history?interval=d1`);


    return (
        <>
        { cripto && <CriptoInfo cripto={cripto}></CriptoInfo> }
        { historial && <CriptoHistorial historial={historial}></CriptoHistorial>}
        </>       
    );
}

export default CriptoPage;