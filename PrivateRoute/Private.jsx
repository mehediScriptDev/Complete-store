import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user} =useContext(AuthContext);
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/login'}></Navigate>
        </div>
    );
};

export default Private;