import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';
import Load from '../pages/Shared/Load/Load';

const PrivateRouter = ({ children }) => {
    const loacation = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Load></Load>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: loacation }} replace> </Navigate >
};

export default PrivateRouter;