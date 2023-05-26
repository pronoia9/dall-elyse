import styled, { keyframes } from 'styled-components';

const Loader = ({ text }) => (
  <>
    <Arc className='arc'></Arc>
    {text && (
      <Text className='loading-text'>
        <span>LOADING</span>
      </Text>
    )}
  </>
);

export default Loader;

// ANIMATION
const rt = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const cw = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  75% {
    width: 40px;
    height: 40px;
  }
  100% {
    width: 0;
    height: 0;
  }
`;

const txt = keyframes`
  0% {
    content: 'LOADING';
  }
  33% {
    content: 'LOADING.';
  }
  66% {
    content: 'LOADING..';
  }
  100% {
    content: 'LOADING...';
  }
`;

// STYLED
const Arc = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 2px solid #ffea29;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  animation: ${rt} 2s infinite linear;

  &::before {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border-top: 2px solid #8d29ff;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    animation: ${rt} 4s infinite linear reverse;
    content: '';
  }

  &::after {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-radius: 50%;
    border-top: initial;
    border-left: initial;
    border-right: initial;
    animation: ${cw} 1s infinite;
    content: '';
    background: snow;
  }
`;

const Text = styled.h1`
  font-family: 'Inconsolata', monospace;
  position: absolute;
  height: 40px;
  margin: auto;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 14px;
  font-weight: lighter;
  color: white;

  span {
    display: none;

    &::after {
      animation: ${txt} 5s infinite;
      content: '';
    }
  }
`;
