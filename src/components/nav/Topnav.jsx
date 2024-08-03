import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo2.png';
import { motion } from 'framer-motion';
const Container = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
`;
const LogoContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LinkContainer = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .link {
      /* color: var(--color_primary); */
      text-transform: capitalize;
      text-decoration: none;
      font-weight: 200;
      font-size: 1.1rem;
      padding-bottom: 0.5rem;
    }
    .link.active {
      color: var(--color_primary);
      border-bottom: 2px solid var(--color_primary);
    }
    .link:hover {
      background: linear-gradient(
        to right,
        var(--color_primary) 100%,
        var(--color_white) 0%
      );
      color: transparent;
      background-clip: text;
    }
  }
`;
const HireContainer = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const Logo = styled(motion.img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Name = styled(motion.h3)`
  font-size: 1.7rem;
`;
const HireButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  color: white;
  background-color: var(--color_primary);
  border-radius: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
`;
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, staggerChildren: 1 } },
  exit: { opacity: 1 },
};
const btnVariants = {
  initial: { opacity: 0, x: '100vh' },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, staggerChildren: 1, delay: 5 },
  },
};
const Topnav = () => {
  return (
    <Container
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <LogoContainer variants={variants}>
        <Logo
          src={logo}
          variants={variants}
        />
        <Name
          variants={variants}
          className='colorTheme'
          bg={logo}
        >
          Godfrey.
        </Name>
      </LogoContainer>
      <LinkContainer variants={variants}>
        <motion.div variants={variants}>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            home
          </NavLink>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            services
          </NavLink>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/resume'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            resume
          </NavLink>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/work'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            work
          </NavLink>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            contact
          </NavLink>
        </motion.div>
      </LinkContainer>
      <HireContainer variants={btnVariants}>
        <HireButton variants={variants}>Hire</HireButton>
      </HireContainer>
    </Container>
  );
};

export default Topnav;
