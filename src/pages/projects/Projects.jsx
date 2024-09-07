import { motion } from 'framer-motion';
import styled from 'styled-components';
import { projects } from '../../data/data';
import Single from './Single';
import Filters from './Filters';
import CurveAnimation from '../../components/animations/CurveAnimation';
const Container = styled(motion.section)`
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const TitleContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color_primary);
  margin-bottom: 1rem;
  background-color: black;
`;
// const Title = styled.h2`
//   font-size: 1.5rem;
//   text-transform: capitalize;
//   text-align: center;
//   @media screen and (min-width: 768px) {
//     font-size: 1.7rem;
//   }
// `;
const ProjectsWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  @media screen and (min-width: 768px) {
    padding: 0.5rem 4rem;
  }
`;
// const ProgressBar = styled(motion.div)`
//   height: 10px;
//   border-radius: 0.5rem;
//   background-color: var(--color_primary);
// `;
const Projects = () => {
  return (
    <Container>
      <TitleContainer>
        {/* <Title>featurd projects</Title> */}
        {/* <ProgressBar style={{ scaleX: width }} /> */}
        <Filters />
      </TitleContainer>
      <ProjectsWrapper>
        {projects.map((item, index) => (
          <Single
            key={index}
            {...item}
          />
        ))}
      </ProjectsWrapper>
      <CurveAnimation />
    </Container>
  );
};

export default Projects;
