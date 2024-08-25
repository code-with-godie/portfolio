import { Home, Phone } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  padding: 0.5rem;
  background-color: var(--bg_primary);
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000000;
  display: flex;
  gap: 0.5rem;
  justify-content: space-evenly;
  .link {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: inherit;
    text-decoration: none;
    .icon {
      font-size: 2.5rem;
    }
  }
  .link.active {
    color: var(--color_primary);
  }
  /* .above {
    position: absolute;
    top: -100%;
    z-index: 1000000000000;
    background-color: red;
  } */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Label = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
`;
const Bottomnav = () => {
  return (
    <Container>
      <NavLink
        className='link'
        to='/'
      >
        <Home className='icon' />
        <Label>home</Label>
      </NavLink>
      <NavLink
        className='link above'
        to='/projects'
      >
        <Home className='icon' />
        <Label>work</Label>
      </NavLink>
      <NavLink
        className='link'
        to='/'
      >
        <Phone className='icon' />
        <Label>contact</Label>
      </NavLink>
      <NavLink
        className='link'
        to='/about'
      >
        <Home className='icon' />
        <Label>about</Label>
      </NavLink>
    </Container>
  );
};

export default Bottomnav;
