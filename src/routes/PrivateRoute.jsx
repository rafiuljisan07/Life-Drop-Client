import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) return <LoadingSpinner />
    if (user) return children;

    return <Navigate state={location?.pathname} to={'/login'} />;
};

export default PrivateRoute;