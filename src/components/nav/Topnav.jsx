import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo2.png';
import { motion } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';
const Container = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  background: var(--main_black);
  position: sticky;
  top: 0;
  z-index: 100000;
  padding: 0.5rem;
`;
const LogoContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const LinkContainer = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
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
  padding: 0.5rem 2rem;
  color: white;
  background-color: var(--main_black);
  /* background-color: var(--color_primary); */
  border-radius: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1px;
    background-image: conic-gradient(
      from var(--a),
      green,
      #c20b3f,
      var(--color_primary)
    );
    border-radius: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -10;
    animation: spin 6s linear infinite;
  }
`;
const variants = {
  initial: {},
  animate: {},
  exit: {},
};
const btnVariants = {
  initial: {},
  animate: {},
};
// const variants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 2, staggerChildren: 1 } },
//   exit: { opacity: 1 },
// };
// const btnVariants = {
//   initial: { opacity: 0, x: '100vh' },
//   animate: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 1.5, staggerChildren: 1, delay: 5 },
//   },
// };
const Topnav = () => {
  const navigate = useNavigate();
  return (
    <Container
      variants={variants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <LogoContainer
        onClick={() => navigate('/')}
        variants={variants}
      >
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
          <Link
            className='link colorTheme'
            to='/#services'
            offset={-150}
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
            }
          >
            services
          </Link>
        </motion.div>
        <motion.div variants={variants}>
          <Link
            className='link colorTheme'
            to='/#skills'
            smooth
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
            }
          >
            skills
          </Link>
        </motion.div>
        <motion.div variants={variants}>
          <Link
            className='link colorTheme'
            to='/#contact'
            smooth
            scroll={el =>
              el.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
            }
          ></Link>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            my projects
          </NavLink>
        </motion.div>
        <motion.div variants={variants}>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'colorTheme link active' : 'link colorTheme'
            }
          >
            About
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
