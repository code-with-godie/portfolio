import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.5rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;
const Title = styled.h2``;
const Name = styled.span`
  font-weight: bold;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Description = styled.p`
  letter-spacing: 1.5px;
  &::first-letter {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: bold;
    font-style: oblique;
  }
`;

const Wrapper = styled.div`
  flex: 1 1 350px;
  @media screen and (min-width: 768px) {
    &:first-child {
      padding: 0 2rem 0 2rem;
    }
  }
`;

const Biography = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Biography</Title>
        <DescriptionContainer>
          <Description>
            hi am <Name>Godfrey Maina</Name> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas distinctio porro sit earum,
            dolores suscipit corrupti nesciunt possimus voluptatem magni culpa
            explicabo nulla impedit deserunt molestiae. Doloremque, illum
            perspiciatis. Provident.
          </Description>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio porro sit earum, dolores suscipit corrupti nesciunt
            possimus voluptatem magni culpa explicabo nulla impedit deserunt
            molestiae. Doloremque, illum perspiciatis. Provident.
          </Description>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio porro sit earum, dolores suscipit corrupti nesciunt
            possimus voluptatem magni culpa explicabo nulla impedit deserunt
            molestiae. Doloremque, illum perspiciatis. Provident.
          </Description>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            distinctio porro sit earum, dolores suscipit corrupti nesciunt
            possimus voluptatem magni culpa explicabo nulla impedit deserunt
            molestiae. Doloremque, illum perspiciatis. Provident.
          </Description>
        </DescriptionContainer>
      </Wrapper>
      <Wrapper>
        <Title>image</Title>
      </Wrapper>
    </Container>
  );
};

export default Biography;
