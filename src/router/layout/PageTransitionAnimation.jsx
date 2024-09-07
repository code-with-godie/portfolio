import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const PageTransitionAnimation = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        // initial={{ opacity: 0, x: -100 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: 100 }}
        // transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionAnimation;
