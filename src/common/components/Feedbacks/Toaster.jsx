import { Toaster } from 'react-hot-toast';

const ToasterMessage = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        success: {
          style: {
            background: '#3d8d1a',
            color: '#ffffff',
          },
        },
        error: {
          style: {
            background: '#9a1524',
            color: '#ffffff',
          },
        },
      }}
    />
  );
};

export default ToasterMessage;
