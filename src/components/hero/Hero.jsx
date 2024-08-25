import styled from 'styled-components';
import HeroDescription from './HeroDescription';
const Container = styled.section`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`;
const FilteredBackground = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  background-color: var(--color_success);
  filter: blur(55px);
  border-radius: 50%;
  position: absolute;
  right: -7%;
  top: -10%;
  z-index: -1000;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    background-color: var(--color_primary);
    height: 300px;
  }
`;
const Hero = () => {
  return (
    <Container className='section'>
      <FilteredBackground />
      <HeroDescription />
      {/* <HeroFooter /> */}
    </Container>
  );
};

export default Hero;
