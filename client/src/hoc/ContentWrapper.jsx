import styled from 'styled-components';
import { motion } from 'framer-motion';

import { contentMotion } from '../utils/motion';

const ContentWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Wrapper className='contentwrapper-wrapper'>
        <Component id={idName} />
      </Wrapper>
    );
  };

export default ContentWrapper;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: calc(100% - 374px);
  max-width: 1280px;
  min-height: 100%;
  /* padding-top: 100px;
  padding-bottom: 90px; */
  padding-top: 50px;
  padding-bottom: 40px;
  margin: auto;

  & > div:last-child {
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
