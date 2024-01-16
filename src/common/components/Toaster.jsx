import { Toaster } from 'react-hot-toast';

const ToasterMessage = () => {
  return (
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
  );
};

export default ToasterMessage;
