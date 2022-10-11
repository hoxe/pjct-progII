import React from "react";

import { Outlet, useLocation } from 'react-router-dom';

export default function PrivateRoute({ islogged }) {
    const location = useLocation()
    return(

        islogged ? <Outlet/> : <Navigate to= '/login' state={{ from: location }} replace />

    )
}