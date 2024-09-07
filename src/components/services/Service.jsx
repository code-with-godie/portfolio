import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem;
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--bg_primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  position: relative;
  &.play {
    &::before,
    &::after {
      animation-play-state: running;
    }
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1px;
    background-image: conic-gradient(
      from var(--a),
      transparent 70%,
      #c20b3f,
      var(--color_primary)
    );
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    animation: spin 6s linear infinite;
    animation-play-state: paused;
  }
  &::after {
    background-image: conic-gradient(
      from var(--a),
      transparent 70%,
      #c20b3f,
      var(--color_primary)
    );
    animation: spin 6s linear infinite;
    animation-delay: 3s;
    animation-play-state: paused;
  }
`;
const TitleContainer = styled.div`
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
const Description = styled.p`
  padding: 1rem 0.5rem;
  text-align: center;
`;
const More = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color_primary);
  margin: 0 auto;
  cursor: pointer;
`;
// eslint-disable-next-line react/prop-types
const Service = ({ Icon, title, description }) => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-50px' });
  return (
    <Container
      ref={ref}
      className={inView && 'play'}
    >
      <TitleContainer>
        <IconButton>
          <Icon
            size={30}
            color={`var(--color_primary)`}
          />
        </IconButton>
        <Title className='colorTheme'> {title} </Title>
      </TitleContainer>
      <Description> {description} </Description>
      <More>read More</More>
    </Container>
  );
};

export default Service;
