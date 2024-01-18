import Lottie from 'lottie-react';

import animationData from '../../common/data/phone-animation.json';

const Animation = () => {
  return (
    <div className="flex border rounded-2xl items-center justify-center bg-slate-900 border-slate-400  p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 dark:bg-opacity-30">
      <Lottie animationData={animationData} className={`opacity-80 max-w-[440px]`} />
    </div>
  );
};

export default Animation;
