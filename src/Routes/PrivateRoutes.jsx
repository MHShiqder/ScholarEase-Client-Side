
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import loadingImage from '../assets/navLogoNew2.png'
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [singleUser] = useRole()
    const location = useLocation()

    if (loading) {

        return <div className=' flex justify-center items-center h-[calc(100vh-100px)]'>
            {/* <progress className="progress md:w-80 w-48 "></progress> */}
            <img src={loadingImage} alt="Loading" className='animate-pulse duration-200 w-[300px]' />
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;