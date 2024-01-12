import React from 'react';
import { Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from './auth';


export const ProtectedRoute = () => {
    let location = useLocation();

    if(!auth.isAuthenticated()){
        return <Navigate to="/" state={{from: location}} />;

    }
    return <Outlet/>;
}

