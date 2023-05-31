import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <Wrapper>
        <Loader />
      </Wrapper>
    </Container>
  );
};
export default Loading;

const animation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #131313;
`;

const Wrapper = styled(motion.div)`
  min-width: 200px;
  width: 33.33%;
  height: 200px;
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  cursor: pointer;
  transition: 0.3s linear;

  &:nth-child(2n + 1) {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Loader = styled(motion.div)`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: '';
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: ${animation} 2s linear infinite;
    animation: ${animation} 2s linear infinite;
  }
  &::after {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }
`;
