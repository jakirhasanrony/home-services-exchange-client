import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center h-[60vh]">
            <span className="text-red-700 loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;