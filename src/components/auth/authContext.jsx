

// create context 

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({})






// create context provider 

export const AuthContextProvider = ({ children }) => {


    // state
    const [user, setUser] = useState();

    // TTL time to live

    const [TTL,setTTL]=useState();
 

    return (
        <AuthContext.Provider value={{ user, setUser ,TTL,setTTL}}>
            {children}
        </AuthContext.Provider>
    );
}
