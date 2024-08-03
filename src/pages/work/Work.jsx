import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h1``;
const Progress = styled.div`
  flex: 1;
  padding: 0.5rem;
  background-color: red;
`;
const WorkContainer = styled``;
const Work = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>featured work</Title>
        <Progress />
      </TitleContainer>
      <WorkContainer></WorkContainer>
    </Container>
  );
};

export default Work;
