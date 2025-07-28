import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';


interface ProtectedRouteProps {
    children: React.ReactNode;
    requireAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAuth = true }) => {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('token') !== null;
    // neu route yeu au auth va chua dang nhap
    if (requireAuth && !isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    //neu da dang nhap va co truy cap login
    if (!requireAuth && isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return (<>{children}</>)
}

export default ProtectedRoute
