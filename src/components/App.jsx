import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<PrivateRoute element={<Contacts />} />} />
        <Route path="register" element={<PublicRoute element={<Register />} />} />
        <Route path="login" element={<PublicRoute element={<Login />} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
