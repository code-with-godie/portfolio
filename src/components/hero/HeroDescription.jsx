/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import resume from '../../assets/resume.docx';
import { Typewriter } from 'react-simple-typewriter';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import me from '../../assets/me.png';
import { SiFiverr } from 'react-icons/si';
import HeroFooter from './HeroFooter';
import { useRef } from 'react';
const Container = styled.section`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    align-items: center;
    margin: 3rem;
    margin-right: 7rem;
    flex-direction: row;
    gap: 2rem;
  }
`;
const InfoContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const ImageContainer = styled(motion.div)`
  flex: 0.7;
  /* height: 70vh; */
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 2rem solid transparent;
`;
const Career = styled(motion.h4)`
  font-weight: 100;
  word-spacing: 2px;
  letter-spacing: 2px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
const CareerDescription = styled(motion.h4)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
const CareerDescriptionContent = styled(motion.h1)`
  padding-top: 0.5rem;
  font-weight: bold;
  font-size: 2.3rem;
  &:first-child {
    font-weight: bold;
    letter-spacing: 2px;
    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
  &:last-child {
    font-size: 1.5rem;
    @media screen and (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const CareerDetails = styled(Career)`
  text-align: justify;
  @media screen and (min-width: 768px) {
  }
`;
const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 1rem;
  .social {
    background: transparent;
    border: 1px solid var(--color_primary);
    color: var(--color_primary);
    .icon {
      font-size: 1rem;
      @media screen and (min-width: 768px) {
        font-size: 1.7rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;
const DownLoadCV = styled.button`
  padding: 1rem;
  color: var(--color_green);
  border: 1px solid var(--color_primary);
  border-radius: 2rem;
  background: transparent;
  outline: none;
  white-space: nowrap;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 0.5rem;
  flex: 1;
  @media screen and (min-width: 768px) {
    justify-content: start;
    padding: 0.5rem 1rem;
  }
`;
const StyledLink = styled(motion.a)`
  display: flex;
  width: 100%;
  color: inherit;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    align-items: center;
    width: auto !important;
  }
`;
const varients = {
  start: { opacity: 0, y: 300, x: -300 },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};
const btnVarients = {
  start: { x: '-100vw', opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 2, staggerChildren: 0.2 },
  },
};
const imageVarients = {
  start: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
};
const HeroDescription = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const words = [
    'Software Development.',
    'Front-End Development.',
    'Backend Development.',
    'Mobile Development.',
    'Artificial Intelligence.',
    'Machine Learning.',
    'Rigging and Animation.',
    'UI/UX Designer.',
  ];
  return (
    <Container ref={ref}>
      <InfoContainer
        variants={varients}
        initial='start'
        animate={inView ? 'animate' : 'start'}
      >
        <Career variants={varients}>
          Hello, I'm <span className='colorTheme'>Godfrey Maina</span>
        </Career>

        <CareerDescription variants={varients}>
          <CareerDescriptionContent variants={varients}>
            I specialize in,{' '}
          </CareerDescriptionContent>
          <CareerDescriptionContent
            className='colorTheme'
            variants={varients}
          >
            <Typewriter
              loop
              cursor
              cursorBlinking
              typeSpeed={100}
              deleteSpeed={30}
              words={words}
            />
          </CareerDescriptionContent>
        </CareerDescription>
        <CareerDetails variants={varients}>
          As an innovative Software Developer. Am well equipped with a robust
          educational foundation. My eagerness to drive team success is
          underpinned by a proven skill set to leveraging my expertise to
          contribute to impactful projects and collaborate effectively with
          dynamic team
        </CareerDetails>
        <SocialLinksContainer
          variants={btnVarients}
          initial='start'
          animate='animate'
        >
          <StyledLink
            variants={btnVarients}
            href={resume}
            download='Godfrey Maina resume'
          >
            <DownLoadCV>
              Download CV
              <FaDownload />
            </DownLoadCV>
          </StyledLink>
          <SocialWrapper variants={btnVarients}>
            <motion.a
              variants={btnVarients}
              target='_blank'
              href='https://github.com/code-with-godie'
            >
              <IconButton className='social'>
                <SiFiverr className='icon' />
              </IconButton>
            </motion.a>
            <motion.a
              variants={btnVarients}
              target='_blank'
              href='https://github.com/code-with-godie'
            >
              <IconButton className='social'>
                <GitHub className='icon' />
              </IconButton>
            </motion.a>
            <motion.a
              variants={btnVarients}
              target='_blank'
              href='https://linkedin.com/in/codewithgodie'
            >
              <IconButton className='social'>
                <LinkedIn className='icon' />
              </IconButton>
            </motion.a>
            <motion.a
              variants={btnVarients}
              target='_blank'
              href='https://www.instagram.com/code_with_godie/?hl=en'
            >
              <IconButton className='social'>
                <Instagram className='icon' />
              </IconButton>
            </motion.a>
            {/* <IconButton className='social'>
              <FacebookOutlined className='icon' />
            </IconButton> */}
          </SocialWrapper>
        </SocialLinksContainer>
        <HeroFooter />
      </InfoContainer>
      <ImageContainer
        variants={imageVarients}
        initial='start'
        animate='animate'
      >
        <Image src={me} />
      </ImageContainer>
    </Container>
  );
};

export default HeroDescription;
