import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  padding: 0.5rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--bg_primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;
const TitleContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1rem;
`;
const Title = styled.h2``;
const IconButton = styled.div`
  padding: 1rem;
  border: 1px solid var(--color_primary);
  border-radius: 50%;
`;
const Description = styled(motion.p)`
  padding: 1rem 0.5rem;
  text-align: center;
`;
const More = styled(motion.div)`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color_primary);
  margin: 0 auto;
  cursor: pointer;
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
// eslint-disable-next-line react/prop-types
const Service = ({ Icon, title, description }) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-20px' });
  return (
    <Container
      variants={varients}
      initial='initial'
      ref={ref}
      animate={inView ? 'animate' : 'initial'}
    >
      <TitleContainer variants={varients}>
        <IconButton>
          <Icon
            size={30}
            color={`var(--color_primary)`}
          />
        </IconButton>
        <Title className='colorTheme'> {title} </Title>
      </TitleContainer>
      <Description variants={varients}> {description} </Description>
      <More variants={varients}>read More</More>
    </Container>
  );
};

export default Service;
