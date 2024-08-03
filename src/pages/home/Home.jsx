import styled from 'styled-components';
import Hero from '../../components/home/Hero';
import { motion } from 'framer-motion';
const Container = styled(motion.article)`
  flex: 1;
  height: 100%;
`;
const Home = () => {
  const slideUpVarients = {
    exit: { opacity: 0, y: '-100vh', transition: { duration: 0.5 } },
  };
  return (
    <Container
      variants={slideUpVarients}
      exit='exit'
    >
      <Hero />
    </Container>
  );
};

export default Home;
