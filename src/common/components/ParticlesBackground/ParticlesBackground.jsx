import { useState, useMemo, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

import particlesConfig from './config/particles-config';
import particlesConfigLight from './config/particles-config-light';
import { useSelector } from 'react-redux';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);
  const theme = useSelector(state => state.userData.theme.value);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    if (theme === 'dark') {
      return { ...particlesConfig };
    }

    return { ...particlesConfigLight };
  }, [theme]);

  if (init) {
    return <Particles options={options} />;
  }

  return <></>;
};
export default ParticleBackground;
