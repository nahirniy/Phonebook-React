import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import ParticleBackground from 'components/ParticlesBackground/ParticlesBackground';
import Section from 'components/Section/Section';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              duration: 4000,
              background: '#3d8d1a',
              color: '#ffffff',
            },
          },
          error: {
            style: {
              duration: 4000,

              background: '#9a1524',
              color: '#ffffff',
            },
          },
        }}
      />
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
