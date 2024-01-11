import Logo from './Navigation/Logo';
import Nav from './Navigation/Nav';

const Header = () => {
  const activeClassName = 'selected navlink';
  const activeStyleCallback = ({ isActive }) => (isActive ? activeClassName : 'navlink');

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border border-gray-100 rounded-b-xl bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Logo activeStyle={activeStyleCallback} />
      <Nav activeStyle={activeStyleCallback} />
    </header>
  );
};

export default Header;
