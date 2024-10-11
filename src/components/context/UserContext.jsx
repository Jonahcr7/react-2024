import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    useEffect(() => {
        setUser({
            name: "Jonás Custodio",
            registered: "18/11/2023"
        })
    }, [])

    return (
        <UserContext.Provider value={user}>
            { children }
        </UserContext.Provider>
    )
}

export  {UserContext, UserContextProvider}