import React, { useState } from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import Experince from '../../components/resume/Experince';
import Education from '../../components/resume/Education';
import Skills from '../../components/resume/Skills';
import About from '../../components/resume/About';
import { motion } from 'framer-motion';
const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-top: 8rem;
  }
`;
const Left = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex: 1;
    max-width: 350px;
  }
`;
const Right = styled(motion.div)`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

const WhyHireMe = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
const Description = styled.p`
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 1.5px;
`;
const ResumeTitlesContaner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.button`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-transform: capitalize;
  background: #27262b;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--color_white);
  &.active {
    background: var(--color_primary);
  }
`;
const leftVariants = {
  start: { x: '-100vw', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { x: '-100vw', opacity: 0, transition: { duration: 1 } },
};
const rightVariants = {
  start: { x: '50vw', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const Resume = () => {
  const words = ['Why hire me?.'];
  const titles = ['experince', 'Education', 'skills', 'about'];
  const [activeIndex, setactiveIndex] = useState(0);

  return (
    <Container>
      <Left
        variants={leftVariants}
        initial='start'
        animate='animate'
        exit='exit'
      >
        <WhyHireMe className='colorTheme'>
          <Typewriter
            loop
            cursor
            cursorBlinking
            typeSpeed={150}
            deleteSpeed={70}
            words={words}
          />
        </WhyHireMe>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
        </Description>
        <ResumeTitlesContaner>
          {titles.map((item, index) => (
            <Title
              key={index}
              onClick={() => setactiveIndex(index)}
              className={index === activeIndex && 'active'}
            >
              {' '}
              {item}{' '}
            </Title>
          ))}
        </ResumeTitlesContaner>
      </Left>
      <Right
        variants={rightVariants}
        initial='start'
        animate='animate'
      >
        {activeIndex === 0 && <Experince />}
        {activeIndex === 1 && <Education />}
        {activeIndex === 2 && <Skills />}
        {activeIndex === 3 && <About />}
      </Right>
    </Container>
  );
};

export default Resume;
