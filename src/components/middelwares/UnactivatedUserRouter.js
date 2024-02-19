import { useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate, Outlet } from "react-router-dom"


export const UnactivatedAccountRouter = () => {

   // const navigate=useNavigate();
    const {user}=useContext(AuthContext)

    if(user?.status) return <Outlet/>

    alert("your account isn't activated yet !")

    return <Navigate to="/"  />


}