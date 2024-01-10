import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from '../../services/animationConfig';
import { NavLink, useLocation } from 'react-router-dom';

const activeClassName = 'selected navlink';
const activeStyleCallback = ({ isActive }) => (isActive ? activeClassName : 'navlink');

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>

      <NavLink to="/blog" className={activeStyleCallback}>
        Blog
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {/* <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/blog" className={activeStyleCallback}>
                Blog
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default Nav;
