
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const [singleUser]=useRole()
    const location = useLocation()
    
    if (loading) {

        return <div className=' flex justify-center items-center h-screen'>
            <progress className="progress w-80 "></progress>
        </div>
    }
    if (user) {
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;