import Lottie from 'lottie-react';
import { memo } from 'react';

import animationData from '../../data/phone-animation.json';

const Animation = () => {
  return (
    <Lottie
      animationData={animationData}
      className={`opacity-80 w-[440px]`}
    />
  );
};

const MemorizedAnimation = memo(Animation);

export default MemorizedAnimation;
