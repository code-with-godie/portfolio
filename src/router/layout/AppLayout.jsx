import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Bottomnav from '../../components/nav/Bottomnav';
import PageTransitionAnimation from './PageTransitionAnimation';
const Wrapper = styled.main`
  height: 100vh;
  /* padding: 0.5rem; */
  overflow: auto;
  display: flex;
  justify-content: center;
`;
const Container = styled(motion.section)`
  flex: 1;
  max-width: 1500px;
  overflow: auto;
`;

const AppLayout = () => {
  return (
    <Wrapper key={location.pathname}>
      <Container>
        <Topnav />
        <PageTransitionAnimation>
          <Outlet />
        </PageTransitionAnimation>
        <Footer />
        <Bottomnav />
      </Container>
    </Wrapper>
  );
};

export default AppLayout;
