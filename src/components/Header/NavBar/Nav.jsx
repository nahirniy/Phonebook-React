import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

import MobileNav from './MobileNav';
import UserMenu from './UserMenu';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector(state => state.userData.auth.token);
  const location = useLocation();

  const activeClassName = 'selected navlink';
  const activeStyle = ({ isActive }) => (isActive ? activeClassName : 'navlink');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          {!isAuth && (
            <>
              <NavLink to="/register" className={activeStyle}>
                Register
              </NavLink>
              <NavLink to="/login" className={activeStyle}>
                Login in
              </NavLink>
            </>
          )}

          {isAuth && (
            <>
              <NavLink to="/contacts" className={activeStyle}>
                Contacts
              </NavLink>
              <UserMenu />
            </>
          )}
        </div>
        <div className="flex w-[40px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && <MobileNav activeStyle={activeStyle} isAuth={isAuth} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
