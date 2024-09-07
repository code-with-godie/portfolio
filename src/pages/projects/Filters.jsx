import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Label = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
  padding: 0.3rem 0.7rem;
  border-radius: 1rem;
  cursor: pointer;
  &.active {
    color: white;
    background-color: var(--bg_primary);
  }
`;
const Filters = () => {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <Label
        className={index === 0 && 'active'}
        onClick={() => setIndex(0)}
      >
        all
      </Label>
      <Label
        className={index === 1 && 'active'}
        onClick={() => setIndex(1)}
      >
        react
      </Label>
      <Label
        className={index === 2 && 'active'}
        onClick={() => setIndex(2)}
      >
        HTML
      </Label>
      <Label
        className={index === 3 && 'active'}
        onClick={() => setIndex(3)}
      >
        CSS
      </Label>
    </Container>
  );
};

export default Filters;
