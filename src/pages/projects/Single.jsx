/* eslint-disable react/prop-types */
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { A11y, EffectCoverflow, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background-color: var(--bg_primary);
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 1rem;
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  .swiper {
    flex: 1;
    height: 250px;
  }
`;
const DescriptionContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;
const DescWrapper = styled.div``;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
  &.logo {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  color: var(--color_primary);
`;
const Description = styled.p`
  /* text-align: center; */
`;
const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
`;
const Technology = styled.div`
  padding: 0.5rem;
  background-color: #25252b;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.2rem;
  &.demo {
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
  }
`;
const Label = styled.p`
  font-size: 0.9rem;
`;
const DemoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// eslint-disable-next-line react/prop-types
const Single = ({ title, images, description, technologies }) => {
  return (
    <Container>
      <ImageContainer>
        {/* <Swiper
          className='swiper'
          // autoplay={{ delay: 2000 }}
          loop={true}
          centeredSlides
          spaceBetween={600}
          slidesPerView='auto'
          modules={[A11y, EffectCoverflow, Pagination]}
          pagination={{
            clickable: true,
          }}
          effect='coverflow'
          coverflowEffect={{
            stretch: 0,
            slideShadows: 0,
            depth: 200,
            modifier: 1,
          }}
          // spaceBetween={10}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index}>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Image src={images[0]?.image} />
      </ImageContainer>
      <DescriptionContainer>
        <DescWrapper>
          <Title> {title} </Title>
          <Description> {description} </Description>
        </DescWrapper>
        <DescWrapper>
          <TechnologyContainer>
            {technologies?.map((item, index) => (
              <Technology key={index}>
                <Image
                  src={item?.image}
                  className='logo'
                />
                <Label>{item?.name}</Label>{' '}
              </Technology>
            ))}
          </TechnologyContainer>
          <DemoContainer>
            <Technology className='demo'>
              <Label>demo</Label>
            </Technology>
            <Technology>
              <GitHub />
            </Technology>
          </DemoContainer>
        </DescWrapper>
      </DescriptionContainer>
    </Container>
  );
};

export default Single;
