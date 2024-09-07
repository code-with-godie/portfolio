/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Container = styled(motion.div)`
  background-color: var(--bg_primary);
  border-radius: 0.5rem;
  position: relative;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  flex: 1;
  min-height: 150px;
  /* &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1px;
    background-image: conic-gradient(
      from var(--a),
      transparent 70%,
      #c20b3f,
      var(--color_primary)
    );
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    animation: spin 6s linear infinite;
  }
  &::after {
    background-image: conic-gradient(
      from var(--a),
      transparent 70%,
      #c20b3f,
      var(--color_primary)
    );
    animation: spin 6s linear infinite;
    animation-delay: 3s;
  } */
`;
const variants = {
  initial: index => ({
    x: index % 2 === 0 ? -200 : 200,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const Card = ({ children, center, index }) => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <Container
      ref={ref}
      variants={variants}
      className={center && 'center'}
      initial='initial'
      custom={index}
      animate={inView ? 'animate' : 'initial'}
    >
      {' '}
      {children}{' '}
    </Container>
  );
};

export default Card;
