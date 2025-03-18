import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const ProtectedRoute = ({ children }) => {
    const { admin } = useContext(BlogContext);

    if (!admin) {
        return <Navigate to="/login"/>;
    }

    return children;
};

export default ProtectedRoute;
