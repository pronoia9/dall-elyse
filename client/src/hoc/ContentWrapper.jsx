import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contentMotion } from '../utils/motion';

const ContentWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Container {...contentMotion()}>
        <Wrapper>
          <Header />
          <Content>
            <Component id={idName} />
          </Content>
        </Wrapper>
      </Container>
    );
  };

export default ContentWrapper;

const Container = styled(motion.div)`
  /* position: relative; */
  z-index: 5;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  transition: transform 0.5s;

  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;

  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vh;
    height: 100vh;
    z-index: -100;
    background: radial-gradient(ellipse at left top, #28282e 0%, #000000 70%);
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  height: 155px;
`;

const Content = styled(motion.div)`
  width: calc(100% - 374px);
  max-width: 1280px;
  margin: auto;
  /* min-height: 100%; */
  min-height: 100vh;
  /* padding-top: 100px;
   padding-bottom: 90px; */
  padding-top: 50px;
  padding-bottom: 40px; 

  div:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1800px) {
    width: calc(100% - 352px);
  }

  @media only screen and (max-width: 1600px) {
    width: calc(100% - 312px);
  }

  @media only screen and (max-width: 1200px) {
    width: calc(100% - 272px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(100% - 176px);
    margin: auto 40px auto auto;
    /* width: calc(100% - 280px);
    margin: auto; */
  }

  @media only screen and (max-width: 760px) {
    width: calc(100% - 40px);
    margin: auto;
    /* margin: auto auto auto 20px;
    width: calc(100% - 95px); */
    /* width: 100%;
    margin: auto; */
  }
`;
