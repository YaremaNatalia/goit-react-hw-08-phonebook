import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectAuthentificated } from 'redux/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isAuthentificated = useSelector(selectAuthentificated);
  return isAuthentificated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
