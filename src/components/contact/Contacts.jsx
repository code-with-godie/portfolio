import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Email, Person } from '@mui/icons-material';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
const Container = styled.section`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    height: 100vh;
  }
`;
const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;
const Wrapper = styled(motion.div)`
  flex: 1;
  padding: 1rem;
  /* background-color: var(--bg_primary); */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Right = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;
const DescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const DescriptionLabel = styled.h3`
  font-size: 1.2rem;
  text-transform: capitalize;
`;
const Description = styled.p`
  font-style: italic;
`;
const FormWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  position: relative;
`;
const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid var(--color_primary);
  border-radius: 0.5rem;
  .icon {
    color: var(--color_primary);
  }
`;
const Input = styled.input`
  min-width: none;
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 1rem;
`;
const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  border: 1px solid var(--color_primary);
  background: var(--color_primary);
  color: white;
  font-size: 1.2rem;
  text-transform: capitalize;
  cursor: pointer;
`;
const Message = styled.textarea`
  resize: vertical;
  min-height: 150px;
  max-height: 300px;
  padding: 0.5rem;
  border: 1px solid var(--color_primary);
  border-radius: 0.5rem;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  color: white;
`;
const PhoneContainer = styled(motion.div)`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: flex;
  .phone {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: tomato;
`;
const phoneVarients = {
  initial: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};
const formVarients = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1,
    },
  },
};
const varients = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Contacts = () => {
  const schema = z.object({
    name: z
      .string()
      .min(3, { message: 'username must be more than 3 charactors' })
      .max(50, { message: 'username must be less than 3 charactors' }),
    email: z.string(),
    message: z.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = handleSubmit(data => {
    console.log(data, errors);
  });
  return (
    <Container
      id='contact'
      className='section'
    >
      <Left
        variants={varients}
        initial='initial'
        whileInView='animate'
      >
        <Wrapper>
          <Title
            variants={varients}
            className='colorTheme'
          >
            let&apos;s work together
          </Title>
          <DescriptionContainer variants={varients}>
            <DescriptionLabel className='colorTheme'>E-mail</DescriptionLabel>
            <Description>ngugimaina2019@gmail.com</Description>
          </DescriptionContainer>
          <DescriptionContainer variants={varients}>
            <DescriptionLabel className='colorTheme'>address</DescriptionLabel>
            <Description>10205,Nairobi,Kenya</Description>
          </DescriptionContainer>
          <DescriptionContainer variants={varients}>
            <DescriptionLabel className='colorTheme'>phone</DescriptionLabel>
            <Description>+254 112483569</Description>
          </DescriptionContainer>
        </Wrapper>
      </Left>
      <Right>
        <FormWrapper>
          <PhoneContainer
            variants={phoneVarients}
            initial='initial'
            whileInView='animate'
          >
            <svg
              className='phone'
              width='800px'
              height='800px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                d='M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z'
                stroke='#33c648'
                strokeWidth='0.8'
                strokeLinecap='round'
                strokeLinejoin='round'
                initial={{ pathLength: 0 }}
                // animate={inView && { pathLength: 1 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </svg>
          </PhoneContainer>
          <Form
            onSubmit={onSubmit}
            variants={formVarients}
            initial='initial'
            whileInView='animate'
          >
            <InputWrapper>
              <Person className='icon' />
              <Input
                placeholder='name'
                {...register('name')}
                required
              />
            </InputWrapper>
            {errors?.message?.name && (
              <ErrorMessage> {errors?.message?.name?.toString()} </ErrorMessage>
            )}
            <InputWrapper>
              <Email className='icon' />
              <Input
                placeholder='email address...'
                type='email'
                {...register('email')}
                required
              />
            </InputWrapper>
            {errors?.message?.email && (
              <ErrorMessage>
                {' '}
                {errors?.message?.email?.toString()}{' '}
              </ErrorMessage>
            )}

            <Message
              {...register('message')}
              placeholder='message'
            />
            {errors?.message?.message && (
              <ErrorMessage>
                {' '}
                {errors?.message?.message?.toString()}{' '}
              </ErrorMessage>
            )}
            <Button>send</Button>
          </Form>
        </FormWrapper>
      </Right>
    </Container>
  );
};

export default Contacts;
