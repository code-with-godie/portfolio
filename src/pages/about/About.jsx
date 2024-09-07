import styled from 'styled-components';
import Biography from '../../components/about/Biography';
import Education from '../../components/about/Education';
import Experience from '../../components/about/Experience';
import CurveAnimation from '../../components/animations/CurveAnimation';
const Container = styled.div`
  justify-content: center;
  display: flex;
`;
const Wrapper = styled.div`
  max-width: 900px;
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Biography />
        <Education />
        <Experience />
      </Wrapper>
      <CurveAnimation />
    </Container>
  );
};

export default About;
