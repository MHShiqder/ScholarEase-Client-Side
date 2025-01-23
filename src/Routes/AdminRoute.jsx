
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const AdminRoute = ({children}) => {
    const [singleUser,,isLoading]=useRole()
    const {user,loading}=useAuth()
    const location = useLocation()
    
    if (loading||isLoading) {

        return <div className=' flex justify-center items-center h-screen'>
            <progress className="progress w-80 "></progress>
        </div>
    }
    if (user&&singleUser.role=="Admin") {
        return children;
    }

    // if the login route disturbs then make it to home page route 
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;