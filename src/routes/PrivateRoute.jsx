import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, status, loading, roleLoading } = use(AuthContext);
    if (loading || roleLoading) return <LoadingSpinner />
    if (user || status == 'active') return children;

    return <Navigate state={location?.pathname} to={'/login'} />;
};

export default PrivateRoute;