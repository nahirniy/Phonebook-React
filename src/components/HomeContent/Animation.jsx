import Lottie from 'lottie-react';
import { memo, useMemo } from 'react';

import animationData from '../../data/phone-animation.json';

const Animation = () => {
  console.log('render');
  return (
    <Lottie
      animationData={animationData}
      className={`opacity-80 w-[440px] ml-auto mt-22 md:mt-28 mr-16`}
    />
  );
};

const MemorizedAnimation = memo(Animation);

export default MemorizedAnimation;
