import Logo from './Logo/Logo';
import Nav from './NavBar/Nav';
import ThemeToggle from './ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center  bg-slate-900 border border-slate-400  shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 rounded-b-xl p-[2em] font-sans uppercase dark:bg-opacity-30">
      <Logo />
      <ThemeToggle />
      <Nav />
    </header>
  );
};

export default Header;
