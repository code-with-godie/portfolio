import { Home, Person, Phone } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { GrProjects } from 'react-icons/gr';
const Container = styled.nav`
  width: 100%;
  padding: 0.2rem;
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
    gap: 0.1rem;
    color: inherit;
    align-items: center;
    text-decoration: none;
    .icon {
      font-size: 1.5rem;
    }
  }
  .link.active {
    color: var(--color_primary);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Label = styled.p`
  text-transform: capitalize;
  font-size: 1rem;
`;
const Bottomnav = () => {
  const location = useLocation();
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
        <GrProjects className='icon' />
        <Label>work</Label>
      </NavLink>
      <Link
        className={location.hash === '/#contact' ? 'link active ' : 'link'}
        to='/#contact'
        offset={-150}
        scroll={el =>
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      >
        <Phone className='icon' />
        <Label>contact</Label>
      </Link>
      <NavLink
        className='link'
        to='/about'
      >
        <Person className='icon' />
        <Label>about</Label>
      </NavLink>
    </Container>
  );
};

export default Bottomnav;
