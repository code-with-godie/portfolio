import styled from 'styled-components';

const FeaturedProject = () => {
  return (
    <FeaturedContainer>
      <h2>Featured Project</h2>
      <p>This is a detailed description of the featured project.</p>
    </FeaturedContainer>
  );
};

export default FeaturedProject;

const FeaturedContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  /* background-color: #f5f5f5; */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50px;
`;
