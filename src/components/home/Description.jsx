/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import resume from '../../assets/resume.docx';
import { Typewriter } from 'react-simple-typewriter';
import {
  // FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { FaDownload } from 'react-icons/fa';
const Container = styled.section`
  padding-top: 3rem;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    align-items: center;
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
  background-color: red;
`;
const Career = styled.h4`
  font-weight: 100;
  word-spacing: 2px;
  letter-spacing: 2px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
const CareerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`;
const CareerDescriptionContent = styled.h1`
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
    font-size: 1.7rem;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
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
  gap: 0.5rem;
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
  gap: 0.3rem;
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
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    justify-content: start;
    padding: 0.5rem 1rem;
  }
`;
const varients = {
  start: { x: '-100vw', opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const imageVarients = {
  start: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1 } },
};
const Description = () => {
  const words = ['GODFREY MAINA.'];
  // const words = [
  //   'Front-End Developer.',
  //   'Backend Developer.',
  //   'Mobile Developer.',
  //   'UI/UX Designer.',
  // ];
  return (
    <Container>
      <InfoContainer
        variants={varients}
        initial='start'
        animate='animate'
      >
        <Career className='colorTheme'>software developer</Career>
        <CareerDescription>
          <CareerDescriptionContent>Hello I'm a, </CareerDescriptionContent>
          <CareerDescriptionContent className='colorTheme'>
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
        <CareerDetails>
          i exel in grafting elegant digitsl experience and am profiencient in
          various languages and technologies
        </CareerDetails>
        <SocialLinksContainer>
          <a
            style={{ color: 'inherit', textDecoration: 'none' }}
            href={resume}
            download='Godfrey Maina resume'
          >
            <DownLoadCV>
              Download CV
              <FaDownload />
            </DownLoadCV>
          </a>
          <SocialWrapper>
            <a
              target='_blank'
              href='https://github.com/code-with-godie'
            >
              <IconButton className='social'>
                <GitHub className='icon' />
              </IconButton>
            </a>
            <a
              target='_blank'
              href='https://linkedin.com/in/codewithgodie'
            >
              <IconButton className='social'>
                <LinkedIn className='icon' />
              </IconButton>
            </a>
            <a
              target='_blank'
              href='https://linkedin.com/in/codewithgodie'
            >
              <IconButton className='social'>
                <Instagram className='icon' />
              </IconButton>
            </a>
            {/* <IconButton className='social'>
              <FacebookOutlined className='icon' />
            </IconButton> */}
          </SocialWrapper>
        </SocialLinksContainer>
      </InfoContainer>
      <ImageContainer
        variants={imageVarients}
        initial='start'
        animate='animate'
      >
        image
      </ImageContainer>
    </Container>
  );
};

export default Description;
