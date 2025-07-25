
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if (isAdminLoading) {
        return <div className='text-center py-40'>Loading...</div>
    }
    if (isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;