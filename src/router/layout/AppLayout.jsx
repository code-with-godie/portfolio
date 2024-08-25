import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import Footer from '../../components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Bottomnav from '../../components/nav/Bottomnav';
const Wrapper = styled.main`
  height: 100vh;
  padding: 0.5rem;
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
  const location = useLocation();
  return (
    <Wrapper key={location.pathname}>
      <Container>
        <Topnav />
        <Outlet />
        <Footer />
        <Bottomnav />
      </Container>
    </Wrapper>
  );
};

export default AppLayout;
