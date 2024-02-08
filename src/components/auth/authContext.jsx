

// create context 

import { createContext, useState } from "react";

export const AuthContext = createContext({})






// create context provider 

export const AuthContextProvider = ({ children }) => {


    // state
    const [user, setUser] = useState();

 

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
