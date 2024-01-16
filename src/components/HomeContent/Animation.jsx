import Lottie from 'lottie-react';

import animationData from '../../common/data/phone-animation.json';

const Animation = () => {
  return <Lottie animationData={animationData} className={`opacity-80 w-[440px]`} />;
};

export default Animation;
