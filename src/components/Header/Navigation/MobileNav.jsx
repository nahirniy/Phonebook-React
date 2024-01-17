import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from '../../../services/animationConfig';
import UserMenu from '../UserMenu/UserMenu';

const MobileNav = ({ activeStyle, isAuth }) => {
  return (
    <motion.div
      layout="position"
      key="nav-links"
      variants={mobileNavContainerVariant}
      initial="hidden"
      animate="show"
      className="mt-4 basis-full md:hidden"
    >
      {isAuth && (
        <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
          <NavLink to="/contacts" className={activeStyle}>
            Contacts
          </NavLink>
          <UserMenu />
        </motion.div>
      )}
      {!isAuth && (
        <>
          <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
            <NavLink to="/register" className={activeStyle}>
              Register
            </NavLink>

            <NavLink to="/login" className={activeStyle}>
              Login in
            </NavLink>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default MobileNav;
