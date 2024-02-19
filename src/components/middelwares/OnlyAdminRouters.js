import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import { Navigate, Outlet, useNavigate } from "react-router-dom"


export const OnlyAdminRouter = () => {

    const navigate=useNavigate();

    const {user}=useContext(AuthContext)

    if(user?.userType=="admin") return <Outlet/>

    alert("only for entreprise !")

    return <Navigate to="/"  />


}