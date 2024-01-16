import Logo from './HeaderContent/Logo';
import Nav from './HeaderContent/Nav';

const Header = () => {
  const activeClassName = 'selected navlink';
  const activeStyleCallback = ({ isActive }) => (isActive ? activeClassName : 'navlink');

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between bg-slate-800 border border-slate-400  shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-b-xl p-[2em] font-sans uppercase text-text-primary dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Logo activeStyle={activeStyleCallback} />
      <Nav activeStyle={activeStyleCallback} />
    </header>
  );
};

export default Header;
