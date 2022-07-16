import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../Credentials';

function ProtectedRoute(props) {
  const token = React.useContext(AuthContext);
  console.log(token);
  if (!token) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
}

export default ProtectedRoute;
