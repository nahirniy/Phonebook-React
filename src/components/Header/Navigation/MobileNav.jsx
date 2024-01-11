import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from '../../../services/animationConfig';

const MobileNav = ({ activeStyle }) => {
  return (
    <motion.div
      layout="position"
      key="nav-links"
      variants={mobileNavContainerVariant}
      initial="hidden"
      animate="show"
      className="mt-4 basis-full md:hidden"
    >
      <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <NavLink to="/register" className={activeStyle}>
          Register
        </NavLink>
      </motion.div>
      <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
        <NavLink to="/login-in" className={activeStyle}>
          Login in
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
