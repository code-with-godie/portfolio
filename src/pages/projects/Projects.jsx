import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/data';
import Single from './Single';
// import Filters from './Filters';
const Container = styled(motion.section)`
  padding: 0.5rem;
  /* position: relative; */
  overflow: auto;
  height: 85vh;
`;
const TitleContainer = styled.div`
  position: sticky;
  top: 55px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color_primary);
  margin-bottom: 1rem;
  background-color: black;
`;
const Title = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const ProgressBar = styled(motion.div)`
  height: 10px;
  border-radius: 0.5rem;
  background-color: var(--color_primary);
  /* background-color: white; */
`;
const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end', 'end', 'start', 'start'],
    layoutEffect: true,
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <Container ref={ref}>
      <TitleContainer>
        <Title>featurd projects</Title>
        <ProgressBar style={{ scaleX }} />
        {/* <Filters /> */}
      </TitleContainer>
      {projects.map((item, index) => (
        <Single
          key={index}
          {...item}
        />
      ))}
    </Container>
  );
};

export default Projects;
