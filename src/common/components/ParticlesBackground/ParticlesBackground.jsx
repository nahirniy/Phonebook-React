import { useState, useMemo, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

import particlesConfig from './config/particles-config';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({ ...particlesConfig }), []);

  if (init) {
    return <Particles options={options} />;
  }

  return <></>;
};
export default ParticleBackground;
