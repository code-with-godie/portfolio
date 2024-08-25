import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled(motion.section)`
  padding: 0.5rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--bg_primary);
  padding: 1rem;
`;

const Title = styled(motion.h2)`
  text-transform: capitalize;
`;

const Description = styled.p`
  padding: 0.2rem;
  text-transform: capitalize;
  &.level {
    color: gray;
    text-transform: lowercase;
    font-size: 0.9rem;
  }
`;
const Wrapper = styled(motion.div)`
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 0.5rem;
`;
const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: flex-start;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
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
// eslint-disable-next-line react/prop-types
const Skill = ({ title, data }) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '30px' });
  return (
    <Container
      variants={varients}
      initial='initial'
      ref={ref}
      animate={inView ? 'animate' : 'initial'}
    >
      <Title
        className='colorTheme'
        variants={varients}
      >
        {' '}
        {title}{' '}
      </Title>
      <Wrapper variants={varients}>
        {
          // eslint-disable-next-line react/prop-types
          data?.map((item, index) => (
            <SkillContainer key={index}>
              <Logo
                src={item.logo}
                alt='logo'
              />
              <DescriptionContainer>
                <Description> {item?.skill} </Description>
                <Description className='level'> {item?.level} </Description>
              </DescriptionContainer>
            </SkillContainer>
          ))
        }
      </Wrapper>
    </Container>
  );
};

export default Skill;
