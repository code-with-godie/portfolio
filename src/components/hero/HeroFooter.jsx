import styled from 'styled-components';
import { motion } from 'framer-motion';
const Container = styled(motion.article)`
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
`;
const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: center;
    /* flex-direction: column; */
  }
`;
const Number = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  white-space: nowrap;
`;
const Description = styled.p`
  font-weight: 100;
  text-transform: capitalize;
  /* text-align: justify; */
  @media screen and (min-width: 768px) {
    letter-spacing: 2px;
    font-size: 1rem;
  }
`;
const varients = {
  start: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 3, staggerChildren: 0.1 },
  },
};
const HeroFooter = () => {
  return (
    <Container
      initial='start'
      animate='animate'
      variants={varients}
    >
      <Item>
        <Number className='colorTheme'>
          {' '}
          {new Date().getFullYear() - 2022} +
        </Number>
        <Description>years of experience</Description>
      </Item>
      {/* <Item>
        <Number className='colorTheme'> 10+ </Number>
        <Description>project completed</Description>
      </Item> */}
      <Item>
        <Number className='colorTheme'>10+ </Number>
        <Description>technologies mastered</Description>
      </Item>
      <Item>
        <Number className='colorTheme'> 150+ </Number>
        <Description>clients satisfied</Description>
      </Item>
    </Container>
  );
};

export default HeroFooter;
