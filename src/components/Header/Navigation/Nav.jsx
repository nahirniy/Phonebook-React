import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

import MobileNav from './MobileNav';

const Nav = ({ activeStyle }) => {
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
          <NavLink to="/register" className={activeStyle}>
            Register
          </NavLink>

          <NavLink to="/login-in" className={activeStyle}>
            Login in
          </NavLink>
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && <MobileNav activeStyle={activeStyle} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;