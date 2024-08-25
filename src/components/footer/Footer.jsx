import styled from 'styled-components';

const Container = styled.footer`
  padding: 0.5rem;
  padding-bottom: 7rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
const Footer = () => {
  return <Container>Footer</Container>;
};

export default Footer;
