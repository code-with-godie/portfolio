import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const DescriptionContainer = styled(motion.div)`
  flex: 1;
`;
const Image = styled.img`
  max-width: 100%;
  max-width: 500px;
  height: 50%;
  object-fit: cover;
`;
const Title = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: var(--color_primary);
`;
const Description = styled.p`
  text-align: center;
`;
// eslint-disable-next-line react/prop-types
const Single = ({ title, image, description }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <Container ref={ref}>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <DescriptionContainer style={{ y }}>
        <Title> {title} </Title>
        <Description> {description} </Description>
      </DescriptionContainer>
    </Container>
  );
};

export default Single;
