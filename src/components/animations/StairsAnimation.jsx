import styled from 'styled-components';
import { motion } from 'framer-motion';
const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  pointer-events: none;
  left: 0;
  z-index: 10000000000000000000000000;
  display: flex;
`;

const Stairs = styled(motion.div)`
  flex: 1;
  height: 100%;
  background-color: black;
  position: relative;
  top: 0;
`;
const variants = {
  initial: {
    top: 0,
  },
  enter: index => ({
    top: '100%',
    transition: {
      duration: 0.8,
      delay: 0.05 * index,
    },
    transitionEnd: {
      top: 0,
      height: 0,
    },
  }),
  exit: index => ({
    height: '100%',
    transition: {
      duration: 0.8,
      delay: 0.05 * index,
    },
  }),
};
// eslint-disable-next-line react/prop-types
const StairsAnimation = () => {
  const stairs = [1, 2, 3, 4, 5, 6, 7, 8];
  const anim = (variants, custom) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom,
  });
  return (
    <Container
    // variants={variants}
    // initial='initial'
    // animate='enter'
    // exit='exit'
    >
      {stairs.map((item, index) => (
        <Stairs
          key={index}
          {...anim(variants, stairs.length - index)}
        />
      ))}
    </Container>
  );
};

export default StairsAnimation;
