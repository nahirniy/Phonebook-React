import { motion } from 'framer-motion';
import { containerVariants } from 'services/animationConfig';

const Wrapper = ({ children }) => {
  return (
    <motion.div
      {...containerVariants}
      className="flex flex-wrap items-start justify-center gap-28"
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
