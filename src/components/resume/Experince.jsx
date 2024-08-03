import React from 'react';
import styled from 'styled-components';
import Card from '../styled/Card';
import { motion } from 'framer-motion';
import { experience } from '../../data/data';
const Container = styled(motion.div)`
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
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
`;

const Years = styled.p`
  font-weight: 100;
`;
const Career = styled.h3`
  flex: 1;
  word-spacing: 5px;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
`;
const CompanyContaner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .dot {
    background-color: var(--color_green);
    padding: 0.2rem;
    border-radius: 50%;
  }
`;
const Company = styled.p`
  text-transform: capitalize;
  font-weight: 100;
  letter-spacing: 2px;
`;
const variants = {
  start: { x: '50vw', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { y: '50vw', opacity: 0 },
};
const Experince = () => {
  return (
    <Container
      variants={variants}
      exit='exit'
    >
      <Title className='colorTheme'>Experience</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nihil
        porro quia iusto, esse qui saepe quis autem maiores totam dolores odit
        similique fuga suscipit neque ipsa enim cumque voluptatem.
      </Description>
      <Wrapper>
        {experience.map((item, index) => (
          <Card key={index}>
            <Years className='colorTheme'> {item.year} </Years>
            <Career> {item.career} </Career>
            <CompanyContaner>
              <span className='dot' />
              <Company className='colorTheme'> {item.company} </Company>
            </CompanyContaner>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Experince;
