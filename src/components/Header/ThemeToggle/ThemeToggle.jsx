import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../..//redux/themeSlice';
import { useEffect } from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const ThemeToggle = () => {
  const theme = useSelector(state => state.userData.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
  };

  return (
    <div className="switch" data-theme={theme} onClick={toggleTheme}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

export default ThemeToggle;
