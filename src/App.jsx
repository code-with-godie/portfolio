import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
const App = () => {
  return <RouterProvider router={router} />;
};

// import styled from 'styled-components';
// import Hero from './components/hero/Hero';
// import Projects from './components/projects/Projects';
// import Skill from './components/skills/Skill';
// import Topnav from './components/nav/Topnav';
// import Services from './components/services/Services';

// // export default App;
// const Wrapper = styled.main`
//   display: flex;
//   justify-content: center;
//   height: 100vh;
//   overflow: auto;
// `;
// const Container = styled.section`
//   width: 100%;
//   min-height: 100vh;
//   max-width: 1500px;
// `;
// const App = () => {
//   return (
//     <Wrapper>
//       <Container>
//         <Topnav />
//         <Hero />
//         <Services />

//         <Skill />
//         <Projects />
//       </Container>
//     </Wrapper>
//   );
// };

export default App;
