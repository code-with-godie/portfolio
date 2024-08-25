import styled from 'styled-components';
import Hero from '../../components/hero/Hero';
import { motion } from 'framer-motion';
import Services from '../../components/services/Services';
import Skills from '../../components/skills/Skill';
import Contacts from '../../components/contact/Contacts';
const Container = styled(motion.article)``;
const Home = () => {
  return (
    <Container>
      <Hero />
      <Services />
      <Skills />
      <Contacts />
    </Container>
  );
};

export default Home;
