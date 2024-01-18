import Tilt from 'react-parallax-tilt';

import Button from 'common/components/Buttons/Button';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <Tilt transitionSpeed={3500} tiltMaxAngleX={12} tiltMaxAngleY={12}>
      <div className="max-w-[550px] md:h-[440px] flex flex-col items-center justify-center bg-slate-900 border border-slate-400 rounded-tl-[15px] rounded-tr-[70px] rounded-br-[15px] rounded-bl-[70px] p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 dark:bg-opacity-30">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Phonebook</h1>
        <p className="uppercase text-center tracking-wide shadow-md opacity-80">
          Explore our website for easy input and organization of your contact book.
          Effortlessly manage and access your contacts in one centralized platform,
          simplifying both personal and professional connections. Join us today for a more
          efficient and connected experience!
        </p>

        <Button type="button">
          <Link to="/register" className="w-full h-full flex items-center justify-center">
            Join now
          </Link>
        </Button>
      </div>
    </Tilt>
  );
};

export default Introduction;
