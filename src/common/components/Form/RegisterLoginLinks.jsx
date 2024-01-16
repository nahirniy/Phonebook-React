import { Link } from 'react-router-dom';

const TITLE = {
  LOGIN: 'Login',
  REGISTER: 'Register',
};

const RegisterLoginLinks = ({ title }) => {
  return (
    <div>
      <span className="m-4 text-xs md:text-base whitespace-no-wrap">
        {title === TITLE.LOGIN && (
          <div className="flex justify-between">
            New Here?
            <Link to="/register" className="text-blue-500 ml-3">
              Create an Account
            </Link>
          </div>
        )}
        {title === TITLE.REGISTER && (
          <div className="flex justify-between">
            Already Created an Account?
            <Link to="/login" className="text-blue-500 ml-3">
              Login
            </Link>
          </div>
        )}
      </span>
    </div>
  );
};

export default RegisterLoginLinks;
