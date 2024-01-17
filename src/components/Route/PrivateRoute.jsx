import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuth = useSelector(state => state.userData.auth.token);

  return isAuth ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
