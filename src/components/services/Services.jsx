import styled from 'styled-components';
import { services } from '../../data/data';
import Service from './Service';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Container = styled(motion.section)`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  align-items: center;
`;
const Title = styled(motion.h1)`
  padding: 1rem;
  font-size: 3rem;
`;
const Description = styled(motion.p)`
  text-align: justify;
  align-items: stretch;
  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 70%;
  }
`;
const Wrapper = styled(motion.div)`
  width: 100%;
  padding: 0.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (min-width: 768px) {
    padding: 0.5rem 4rem;
  }
`;
const varients = {
  initial: {
    x: '-10vw',
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-20px' });
  return (
    <Container
      id='services'
      className='section'
      variants={varients}
      initial='initial'
      ref={ref}
      animate={inView ? 'animate' : 'initial'}
      // whileInView='animate'
    >
      <Title
        variants={varients}
        className='colorTheme'
      >
        Services
      </Title>
      <Description variants={varients}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        rerum voluptatibus maxime ipsum minima aut aperiam neque qui, illum
        aspernatur earum totam culpa magni Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Voluptates rerum voluptatibus maxime ipsum
        minima aut aperiam neque qui, illum aspernatur earum totam culpa magni
      </Description>
      <Wrapper variants={varients}>
        {services.map((item, index) => (
          <Service
            {...item}
            key={index}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Services;
