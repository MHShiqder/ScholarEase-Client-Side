
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";


const ModeratorRoute = ({children}) => {
    const [singleUser, ,isLoading]=useRole()
    const {user,loading}=useAuth()
    const location = useLocation()
    console.log("isLoading",isLoading)
    console.log("loading",loading)
    if (loading||isLoading) {

        return <div className=' flex justify-center items-center h-screen'>
            <progress className="progress w-80 "></progress>
        </div>
    }
    if (user&&(singleUser.role=="Admin"||singleUser.role=="Moderator")) {
        return children;
    }

    // if the login route disturbs then make it to home page route 
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default ModeratorRoute;