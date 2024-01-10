import { MdOutlineContacts } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <MdOutlineContacts style={{ width: '50px', height: '50px', color: '#ffffff ' }} />
    </NavLink>
  );
};

export default Logo;
