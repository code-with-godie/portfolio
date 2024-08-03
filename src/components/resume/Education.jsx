import React from 'react';
import styled from 'styled-components';
import Card from '../styled/Card';
import { education } from '../../data/data';
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    height: 300px;
    overflow: auto;
  }
`;

const Years = styled.p`
  font-weight: 100;
`;
const Career = styled.h3`
  flex: 1;
  word-spacing: 5px;
  font-size: 1.2rem;
  font-weight: 100;
  text-transform: capitalize;
  /* text-align: justify; */
`;
const CompanyContaner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .dot {
    background-color: var(--color_primary);
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
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};
const Education = () => {
  return (
    <Container>
      <Title className='colorTheme'>Education</Title>
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
        {education.map((item, index) => (
          <Card
            variants={variants}
            key={index}
          >
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

export default Education;
