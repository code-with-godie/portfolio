import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Container = styled(motion.div)`
  overflow: hidden;
`;

const MySvg = styled(motion.svg)`
  width: 100vw;
  height: calc(100vh + 600px);
  top: -300px;
  left: 0;
  position: fixed;
  pointer-events: none;
  z-index: 10000000000000000000000000;
  /* fill: red;
  stroke: yellow; */
`;
const slide = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition: {
      duration: 1.2,
      delay: 0.03,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      top: '100vh',
    },
  },
  exit: {
    top: '-300vh',
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const anim = (variants, custom) => ({
  initial: 'initial',
  animate: 'enter',
  exit: 'exit',
  variants,
  custom,
});
// eslint-disable-next-line react/prop-types
const SVG = ({ width, height }) => {
  const initialPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height + 300}
  Q${width / 2} ${height + 600} 0 ${height + 300}
  L0 300
  `;
  const enterPath = `
  M0 300
  Q${width / 2} 0 ${width} 300
  L${width} ${height}
  Q${width / 2} ${height} 0 ${height}
  L0 300
  `;
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: enterPath,
      transition: {
        duration: 1.2,
        delay: 0.03,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <MySvg {...anim(slide)}>
      <motion.path {...anim(curve)}></motion.path>
    </MySvg>
  );
};
const CurveAnimation = () => {
  const [dimentions, setDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const resize = () => {
    setDimentions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <Container>
      <SVG {...dimentions} />
    </Container>
  );
};

export default CurveAnimation;
