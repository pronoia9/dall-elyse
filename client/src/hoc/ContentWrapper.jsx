import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contentMotion } from '../utils/motion';

const ContentWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Container {...contentMotion()} className='CONTAINER'>
        <Circle className='CIRCLE' />
        <Wrapper className='WRAPPER'>
          <Component id={idName} />
        </Wrapper>
      </Container>
    );
  };

export default ContentWrapper;

const Container = styled(motion.div)`
  z-index: 5;
  position: fixed;
  width: 100%;
  height: calc(100% - 155px);
  left: 0;
  bottom: 0;
  display: block;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, #000 150%);
  transition: transform 0.5s;

  overflow: scroll;
  scroll-behavior: smooth;

  @media only screen and (max-width: 960px) {
    height: calc(100% - 115px);
  }
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.85;
  position: fixed;
  z-index: -100;

  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vh;
    height: 100vh;
    background: radial-gradient(ellipse at left top, #28282e 0%, #000000 65%);
    z-index: -100;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 374px);
  max-width: 1280px;
  min-height: 100%;
  /* padding-top: 100px;
  padding-bottom: 90px; */
  /* padding-top: 50px;
  padding-bottom: 40px; */
  padding: 0;
  margin: auto;

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
