import React from 'react';
import styled from 'styled-components';
import Card from '../styled/Card';
import { skills } from '../../data/data';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;
const Description = styled.p`
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 1.5px;
`;
const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    height: 300px;
    overflow: auto;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;
const variants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  hidden: { opacity: 0 },
};
const Skills = () => {
  return (
    <Container>
      <Title className='colorTheme'>Skills</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nihil
        porro quia iusto, esse qui saepe quis autem maiores totam dolores odit
        similique fuga suscipit neque ipsa enim cumque voluptatem.
      </Description>
      <Wrapper
        variants={variants}
        initial='hidden'
        animate='visible'
      >
        {skills.map((item, index) => (
          <Card
            variants={variants}
            center
          >
            <Tooltip
              key={index}
              title={item.title}
            >
              <Logo
                src={item?.logo}
                alt={item.title}
              />
            </Tooltip>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;
