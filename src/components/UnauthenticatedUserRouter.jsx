import { useContext } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "./auth/authContext";



export const UnauthenticatedRouter = () => {

    /*const navigate = useNavigate();
    const location = useLocation();*/

    const { user } = useContext(AuthContext);

    if (user) {

        return <Outlet />;
    }
    alert("you are not logged in !")
    return <Navigate to="/" /> 
    

}