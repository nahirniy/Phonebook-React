import MemorizedAnimation from 'components/HomeContent/Animation';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count}</button>
      <MemorizedAnimation />;
    </>
  );
};

export default Home;
