import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.token);

  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
