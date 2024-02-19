import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../auth/authContext";


export const OnlyEntrepriseRouter = () => {

    const [isLoading, setIsLoading] = useState(true);


    

    const {user}=useContext(AuthContext)




    useEffect(() => {
        // Check if the user context is set
        if (user !== undefined) {
            setIsLoading(false); // Set isLoading to false once the user context is set
        }
    }, [user]);

    // If still loading, return null or a loading indicator
    if (isLoading) {
        return null; // Or return a loading indicator here
    }

    // If the user is logged in, render the child routes
    if (user) {
        return <Outlet />;
    }


    if(user?.userType === "entreprise") return <Outlet/>


    console.log(user+"from only entreprise router");

    alert("only for entreprise !")

    return <Navigate to="/"  />


}