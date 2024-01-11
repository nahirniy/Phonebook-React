import { MdOutlineContacts } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Logo = ({ activeStyle }) => {
  return (
    <NavLink to="/" className={activeStyle}>
      <MdOutlineContacts style={{ width: '40px', height: '40px', color: '#ffffff ' }} />
      Home
    </NavLink>
  );
};

export default Logo;
