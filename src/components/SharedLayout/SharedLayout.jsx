import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import ParticleBackground from 'components/ParticlesBackground/ParticlesBackground';
import Section from 'components/Section/Section';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <ParticleBackground />
      <Section>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
