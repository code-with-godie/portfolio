import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectList = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  return (
    <ListContainer ref={ref}>
      <ProjectItem>Project 1</ProjectItem>
      <ProjectItem>Project 2</ProjectItem>
      <ProjectItem>Project 3</ProjectItem>
      <ProjectItem>Project 4</ProjectItem>
      <DynamicBar style={{ width }} />
    </ListContainer>
  );
};

export default ProjectList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  /* background-color: #e0e0e0; */
  border-radius: 10px;
`;

const ProjectItem = styled.div`
  padding: 15px;
  /* background-color: #fff; */
  border-radius: 5px;
  height: 100vh;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DynamicBar = styled(motion.div)`
  position: fixed;
  top: 50px;
  left: 0;
  height: 5px;
  background-color: white;
  width: 100%;
`;
