import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const isAuth = useSelector(state => state.userData.auth.token);

  return !isAuth ? element : <Navigate to="/contacts" />;
};

export default PublicRoute;
