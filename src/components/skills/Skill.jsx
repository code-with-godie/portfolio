import styled from 'styled-components';
import { mySkills } from '../../data/data';
import Skill from './MySkill';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Parent = styled.section`
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 0;
  }
`;
const Container = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const Title = styled(motion.h1)`
  padding: 1rem;
  font-size: 3rem;
`;
const Wrapper = styled(motion.div)`
  width: 100%;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;
const varients = {
  initial: {
    x: 300,
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
const Skills = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '30px' });
  return (
    <Parent>
      <Container
        id='skills'
        className='section '
        variants={varients}
        initial='initial'
        // ref={ref}
        whileInView='animate'
        // animate={inView ? 'animate' : 'initial'}
      >
        <Title
          className='colorTheme'
          variants={varients}
        >
          My Skills
        </Title>
        <Wrapper variants={varients}>
          {mySkills.map((item, index) => (
            <Skill
              varients={varients}
              inView={inView}
              {...item}
              key={index}
            />
          ))}
        </Wrapper>
      </Container>
    </Parent>
  );
};

export default Skills;
