import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const Wrapper = styled.main`
  height: 100vh;
  padding: 0.5rem;
  overflow: auto;
  display: flex;
  justify-content: center;
`;
const Container = styled(motion.section)`
  flex: 1;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
`;

const AppLayout = () => {
  const location = useLocation();
  return (
    <Wrapper key={location.pathname}>
      <Container>
        <Topnav />
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default AppLayout;
