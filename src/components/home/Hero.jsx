import styled from 'styled-components';
import Description from './Description';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2.5rem;
  /* padding: 4rem 0; */
`;

const Hero = () => {
  return (
    <Container>
      <Description />
      <Footer />
    </Container>
  );
};

export default Hero;
