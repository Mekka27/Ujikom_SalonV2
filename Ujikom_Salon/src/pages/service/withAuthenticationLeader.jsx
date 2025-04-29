import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthenticationUser = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const token = localStorage.getItem('token');
    const permissions = JSON.parse(localStorage.getItem('permissions'));

    console.log('Token:', token);
    console.log('Permissions:', permissions);

    if (!token || token === "") {
      return <Navigate to="/login" />;
    }

    // Contoh validasi: hanya izinkan jika user punya akses tertentu
    if (!permissions || !permissions["get-user"]) {
      return <Navigate to="/" />; // Atau rute lain untuk user biasa
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuthenticationUser;
