
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import loadingImage from '../assets/navLogoNew2.png'

const AdminRoute = ({ children }) => {
    const [singleUser, , isLoading] = useRole()
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading || isLoading) {

        return <div className=' flex justify-center items-center h-[calc(100vh-100px)]'>
            {/* <progress className="progress md:w-80 w-48 "></progress> */}
            <img src={loadingImage} alt="Loading" className='animate-pulse duration-200 w-[300px]' />
        </div>
    }
    if (user && singleUser.role == "Admin") {
        return children;
    }

    // if the login route disturbs then make it to home page route 
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;