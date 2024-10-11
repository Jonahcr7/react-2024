import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {

    const URL_API = import.meta.env.VITE_API_URL;

    const [data, setData] = useState();
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        axios.get(`${URL_API}${endpoint}`)
        .then(data => {
            setData(data.data.data);
            setCargando(false)
        })
        .catch(e => {
            setCargando(false);
            console.error(e);
        });
    }, []);
    return [data, cargando];
}

export default usePetition;