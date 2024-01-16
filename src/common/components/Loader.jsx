import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ size = 50 }) => {
  return (
    <ThreeDots
      height={size}
      width={size}
      radius="9"
      color="#212121"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: '0 auto' }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
