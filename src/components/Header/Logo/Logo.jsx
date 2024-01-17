import Lottie from 'lottie-react';
import { NavLink } from 'react-router-dom';

import animationData from '../../../common/data/logo-animation.json';

const Logo = () => {
  const activeClassName = 'selected navlink logo';
  const activeStyle = ({ isActive }) => (isActive ? activeClassName : 'navlink logo');

  return (
    <NavLink to="/" className={activeStyle}>
      <Lottie
        animationData={animationData}
        className="min-w-[60px] max-w-[60px] opacity-80"
      />
      <span className="text-normal">book</span>
    </NavLink>
  );
};

export default Logo;
