import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {

    const URL_API = import.meta.env.VITE_API_URL;

    const [data, setData] = useState();
    useEffect(() => {
        axios.get(`${URL_API}${endpoint}`)
        .then(data => {
            setData(data.data.data);
        })
        .catch(e => console.error(e));
    }, []);
    return data;
}

export default usePetition;