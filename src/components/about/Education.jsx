import styled from 'styled-components';
import Card from '../styled/Card';
import { education } from '../../data/data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  padding: 2rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 640px) {
    gap: 0;
    display: block;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  display: flex;
  overflow-y: hidden;
  @media screen and (min-width: 640px) {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;
const Empty = styled.div`
  flex: 1;
  padding: 1rem;
  display: none;
  @media screen and (min-width: 640px) {
    display: block;
  }
`;
const LineContainer = styled.div`
  padding: 0.5rem;
  position: relative;
  display: none;
  @media screen and (min-width: 640px) {
    display: block;
  }
`;
const Line = styled.div`
  width: 3px;
  height: 100%;
  background-color: var(--bg_primary);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const LineCircle = styled.div`
  padding: 0.5rem;
  background-color: var(--bg_primary);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const Years = styled.p`
  font-weight: 100;
`;
const Career = styled.h3`
  flex: 1;
  word-spacing: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  text-transform: capitalize;
`;
const CompanyContaner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .dot {
    background-color: var(--color_success);
    padding: 0.2rem;
    border-radius: 50%;
  }
`;
const Company = styled.p`
  text-transform: capitalize;
  font-weight: 100;
  letter-spacing: 2px;
`;
const Education = () => {
  return (
    <Container>
      <Title>Education</Title>
      <Wrapper>
        {education.map((item, index) => (
          <CardWrapper key={index}>
            <Card index={index}>
              <Years className='colorTheme'> {item?.year} </Years>
              <Career> {item?.career} </Career>
              <CompanyContaner>
                <span className='dot' />
                <Company className='colorTheme'> {item?.company} </Company>
              </CompanyContaner>
            </Card>
            <LineContainer>
              <LineCircle />
              <Line />
            </LineContainer>
            <Empty />
          </CardWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Education;
