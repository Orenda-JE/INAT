import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext";

export const UnauthenticatedRouter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

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

    // If the user is not logged in, redirect to the login page
    alert("You are not logged in!");
    return <Navigate to="/login" />;
}
