import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import ParticleBackground from '../../common/components/ParticlesBackground/ParticlesBackground';
import Section from 'common/components/Wrappers/Section';
import ToasterMessage from 'common/components/Feedbacks/Toaster';
import Loader from 'common/components/Feedbacks/Loader';

const SharedLayout = () => {
  return (
    <>
      <ToasterMessage />
      <Header />
      <ParticleBackground />
      <Section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default SharedLayout;
