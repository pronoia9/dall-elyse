'use client';

import styled, { keyframes } from 'styled-components';

const Loading = ({ loader = 14 }) => {
  return (
    <Container>
      <Wrapper>
        <Loader className={`loader-${loader}`} />
      </Wrapper>
    </Container>
  );
};
export default Loading;

// ANIMATION
const rotation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const rotationBack = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`;

const rotationBreak = keyframes`
  0% { transform: rotate(0); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

const zeroRotation = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(0) rotate(360deg); }
`;

const shadowExpandX = keyframes`
  0% { box-shadow: 0 0, 0 0; color: rgba(255, 255, 255, 0.2); }
  100% { box-shadow: -24px 0, 24px 0; color: rgba(255, 255, 255, 0.8); }
`;

const shadowPulse = keyframes`
  33% { background: #FFF; box-shadow: -24px 0 #FF3D00, 24px 0 #FFF; }
  66% { background: #FF3D00; box-shadow: -24px 0 #FFF, 24px 0 #FFF; }
  100% { background: #FFF; box-shadow: -24px 0 #FFF, 24px 0 #FF3D00; }
`;

const shadowRolling = keyframes`
  0% { box-shadow: 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0); }
  12% { box-shadow: 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0); }
  25% { box-shadow: 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0), 0px 0 rgba(255, 255, 255, 0); }
  36% { box-shadow: 120px 0 white, 110px 0 white, 100px 0 white, 0px 0 rgba(255, 255, 255, 0); }
  50% { box-shadow: 130px 0 white, 120px 0 white, 110px 0 white, 100px 0 white; }
  62% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white, 110px 0 white; }
  75% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white, 120px 0 white; }
  87% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 130px 0 white; }
  100% { box-shadow: 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0), 200px 0 rgba(255, 255, 255, 0); }
`;

const animloader14 = keyframes`
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
`;

const scale50 = keyframes`
  0%, 100% { transform: scale(0); }
  50% { transform: scale(1); }
`;

const scaleOut = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const animloader27 = keyframes`
  0%, 100% { transform: scale(0); opacity: 1; }
  50% { transform: scale(1); opacity: 0; }
`;

const animloader28 = keyframes`
  0% { box-shadow: -72px 0 #FFF inset; }
  100% { box-shadow: 48px 0 #FFF inset; }
`;

const animloader38 = keyframes`
  50% { transform: scale(1) translate(-50%, -50%); }
`;

const animloader42 = keyframes`
  0% { box-shadow: -38px -6px, -14px 6px, 14px -6px; }
  33% { box-shadow: -38px 6px, -14px -6px, 14px 6px; }
  66% { box-shadow: -38px -6px, -14px 6px, 14px -6px; }
  100% { box-shadow: -38px 6px, -14px -6px, 14px 6px; }
`;

const animloader44 = keyframes`
  0% { box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px; }
  25% { box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px; }
  50% { box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px; }
  75% { box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px; }
  100% { box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px; }
`;

const animloader45 = keyframes`
  0% { box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0; }
  33% { box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0; }
  66% { box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0; }
  100% { box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px; }
`;

const animloader46 = keyframes`
  0% { background: white; box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  14% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px white, 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  28% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px white, 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  42% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px white, 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  57% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px white, 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  71% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px white, 9px 16px 0 -6px rgba(255, 255, 255, 0); }
  85% { background: rgba(255, 255, 255, 0); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px white; }
  100% { background: rgba(255, 255, 255, 0.5); box-shadow: 9px -19px 0 -1px rgba(255, 255, 255, 0), 28px -19px 0 -2px rgba(255, 255, 255, 0), 39px -5px 0 -3px rgba(255, 255, 255, 0), 34px 10px 0 -4px rgba(255, 255, 255, 0), 22px 17px 0 -5px rgba(255, 255, 255, 0), 9px 16px 0 -6px rgba(255, 255, 255, 0); }
`;

const animloader34 = keyframes`
  0% { border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75); }
  33% { border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35); }
  66% { border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25); }
  100% { border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15); }
`;

const animloader51 = keyframes`
  0% { border-color: white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0); }
  33% { border-color: white white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0); }
  66% { border-color: white white white rgba(255, 255, 255, 0); }
  100% { border-color: white white white white; }
`;

const animloader57 = keyframes`
  0% { box-shadow: 0 0, 0 0, 0 0; }
  33% { box-shadow: 24px 0px, 24px 0px, 24px 0px; }
  66% { box-shadow: 24px 24px, 24px 24px, 24px 0px; }
  100% { box-shadow: 0px 24px, 24px 24px, 24px 0px; }
`;

const animloader58 = keyframes`
  0%, 32% { box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
  33%, 65% { box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
  66%, 99% { box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white; }
`;

const animloader58m = keyframes`
  0% { transform: translate(0, 0) rotateX(0) rotateY(0); }
  33% { transform: translate(100%, 0) rotateX(0) rotateY(180deg); }
  66% { transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg); }
  100% { transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg); }
`;

const flipX = keyframes`
  0% { transform: perspective(200px) rotateX(0deg) rotateY(0deg); }
  50% { transform: perspective(200px) rotateX(-180deg) rotateY(0deg); }
  100% { transform: perspective(200px) rotateX(-180deg) rotateY(-180deg); }
`;

const fill = keyframes`
  0% { box-shadow: 0 0 inset; }
  100% { box-shadow: 0 -48px inset; }
`;

const fillX = keyframes`
  0% { box-shadow: 0 0 inset; }
  100% { box-shadow: 48px 0 inset; }
`;

const animloader56 = keyframes`
  0% { transform: translate(0, 0) rotateX(0) rotateY(0); }
  25% { transform: translate(100%, 0) rotateX(0) rotateY(180deg); }
  50% { transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg); }
  75% { transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg); }
  100% { transform: translate(0, 0) rotateX(0) rotateY(360deg); }
`;

const animloader59 = keyframes`
  0% { box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
  12% { box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
  25% { box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
  37% { box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0); }
  50% { box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white; }
  62% { box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px white, 24px 48px white, 0px 48px white; }
  75% { box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px white, 0px 48px white; }
  87% { box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px white; }
  100% { box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0); }
`;

const animloader60 = keyframes`
  0% { top: 0; color: white; }
  50% { top: 30px; color: rgba(255, 255, 255, 0.2); }
  100% { top: 0; color: white; }
`;

const animloader61 = keyframes`
  0% { height: 48px; }
  100% { height: 4.8px; }
`;

const animloader61m = keyframes`
  0% { height: 40px; transform: translateY(0); }
  100% { height: 10px; transform: translateY(30px); }
`;

const animloader63 = keyframes`
  0% { box-shadow: 20px 0 rgba(255, 255, 255, 0.25), 40px 0 white, 60px 0 white; }
  50% { box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0.25), 60px 0 white; }
  100% { box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0.25); }
`;

const animloader64 = keyframes`
  0% { box-shadow: 20px -10px, 40px 10px, 60px 0px; }
  25% { box-shadow: 20px 0px, 40px 0px, 60px 10px; }
  50% { box-shadow: 20px 10px, 40px -10px, 60px 0px; }
  75% { box-shadow: 20px 0px, 40px 0px, 60px -10px; }
  100% { box-shadow: 20px -10px, 40px 10px, 60px 0px; }
`;

const animloader65 = keyframes`
  0% { box-shadow: -10px 20px, 10px 35px, 0px 50px; }
  25% { box-shadow: 0px 20px, 0px 35px, 10px 50px; }
  50% { box-shadow: 10px 20px, -10px 35px, 0px 50px; }
  75% { box-shadow: 0px 20px, 0px 35px, -10px 50px; }
  100% { box-shadow: -10px 20px, 10px 35px, 0px 50px; }
`;

const animloader66 = keyframes`
  0% { width: 4.8px; }
  100% { width: 48px; }
`;

const animloader68 = keyframes`
  0% { box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0); }
  20% { box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0); }
  40% { box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0); }
  60% { box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0); }
  80% { box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0); }
  100% { box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white; }
`;

const animloader69 = keyframes`
  0% { width: 20px; }
  100% { width: 48px; }
`;

const animloader71 = keyframes`
  0% { left: 0; transform: translateX(-100%); }
  100% { left: 100%; transform: translateX(0%); }
`;

const animloader89 = keyframes`
  0% { box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0); }
  25% { box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0); }
  50% { box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0); }
  75% { box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0); }
  100% { box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white; }
`;

const animloader91 = keyframes`
  0% { box-shadow: 0 0 inset; }
  100% { box-shadow: 0 -70px inset; }
`;

const animloader92 = keyframes`
  0% { box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0); }
  50% { box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6); }
  100% { box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0); }
`;

const animloader93 = keyframes`
  0% { transform: rotate(-70deg); }
  10% { transform: rotate(-40deg); }
  20%, 45%, 35% { transform: rotate(-10deg); }
  40%, 30% { transform: rotate(-30deg); }
  50%, 60% { transform: rotate(20deg); }
  55%, 65%, 75% { transform: rotate(40deg); }
  70% { transform: rotate(45deg); }
  85%, 90% { transform: rotate(50deg); }
  95% { transform: rotate(75deg); }
  100%, 93% { transform: rotate(70deg); }
`;

const animloader94 = keyframes`
  0% { transform: translate(-10px, -10px); }
  25% { transform: translate(-10px, 10px); }
  50% { transform: translate(10px, 10px); }
  75% { transform: translate(10px, -10px); }
  100% { transform: translate(-10px, -10px); }
`;

const animloader98 = keyframes`
  0% { background-position: 0px 80px; }
  100% { background-position: 0px 0px; }
`;

const animloader98s = keyframes`
  0% { box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0); }
  20% { box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0); }
  40% { box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5); }
  60% { box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5); }
  80% { box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5); }
  100% { box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0); }
`;

const animloader99 = keyframes`
  0% { box-shadow: 0px 0px inset; }
  100% { box-shadow: 0px -80px inset; }
`;

const animloader100 = keyframes`
  0% { box-shadow: 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white, 25px 0 white, 50px 0 white, 75px 0 white, 100px 0 white, 125px 0 white, 150px 0 white; }
  50% { box-shadow: 25px 20px white, 50px 60px rgba(255, 255, 255, 0), 75px 30px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 40px white, 150px 60px rgba(255, 255, 255, 0), 25px 20px white, 50px 30px white, 75px 10px white, 100px 30px white, 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0); }
  100% { box-shadow: 25px 60px rgba(255, 255, 255, 0), 50px 60px rgba(255, 255, 255, 0), 75px 50px rgba(255, 255, 255, 0), 100px 70px rgba(255, 255, 255, 0), 125px 70px rgba(255, 255, 255, 0), 150px 60px rgba(255, 255, 255, 0), 25px 80px rgba(255, 255, 255, 0), 50px 80px rgba(255, 255, 255, 0), 75px 70px rgba(255, 255, 255, 0), 100px 60px rgba(255, 255, 255, 0), 125px 30px rgba(255, 255, 255, 0), 150px 30px rgba(255, 255, 255, 0); }
`;

const animloader105 = keyframes`
  0% { height: 64px; }
  90%, 100% { height: 0px; }
`;

const animloader106back = keyframes`
  0%, 30%, 70% { transform: translateY(0px); }
  20%, 40%, 100% { transform: translateY(-5px); }
`;

const animloader106 = keyframes`
  0% { box-shadow: 4px 4px 12px 2px rgba(255, 61, 0, 0.75); width: 34px; height: 34px; background-position: -44px -44px; background-size: 100px 100px; }
  100% { box-shadow: 2px 2px 8px 0px rgba(255, 61, 0, 0.5); width: 30px; height: 28px; background-position: -36px -36px; background-size: 80px 80px; }
`;

const animloader108 = keyframes`
  0% { box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px; }
  20% { box-shadow: 40px -1px 0 -2px, 0 0 0 -2px, 40px -1px 0 -5px, 0 0 0 -5px; }
  40% { box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 40px -1px 0 -5px, -40px -1px 0 -5px; }
  60% { box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -40px -1px 0 -5px; }
  80%, 95% { box-shadow: 40px -1px 0 -2px, -40px -1px 0 -2px, 23px -29px 0 -5px, -23px -29px 0 -5px; }
  100% { box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0), -40px -1px 0 -2px rgba(255, 255, 255, 0), 23px -29px 0 -5px rgba(255, 255, 255, 0), -23px -29px 0 -5px rgba(255, 255, 255, 0); }
`;

const animloader108s = keyframes`
  0% { box-shadow: 0 0 0 -2px, 0 0 0 -2px, 0 0 0 -5px, 0 0 0 -5px; }
  20% { box-shadow: 40px 2px 0 -2px, 0 0 0 -2px, 40px 2px 0 -5px, 0 0 0 -5px; }
  40% { box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 40px 2px 0 -5px, -40px 2px 0 -5px; }
  60% { box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -40px 2px 0 -5px; }
  80%, 95% { box-shadow: 40px 2px 0 -2px, -40px 2px 0 -2px, 23px -23px 0 -5px, -23px -23px 0 -5px; }
  100% { box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0), -40px 2px 0 -2px rgba(255, 255, 255, 0), 23px -23px 0 -5px rgba(255, 255, 255, 0), -23px -23px 0 -5px rgba(255, 255, 255, 0); }
`;

const animloader115 = keyframes`
  0% { box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0); }
  50% { box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0); }
  100% { box-shadow: 10px 0 white, 20px 0 white; }
`;

const animloader116 = keyframes`
  0% { top: 8px; transform: rotate(0deg) scale(1); }
  100% { top: 0px; transform: rotate(180deg) scale(1.5); }
`;

const animloader117 = keyframes`
  0% { box-shadow: 0 0 inset; }
  100% { box-shadow: 0 -28px inset; }
`;

const animMarker = keyframes`
  0% { transform: rotate(45deg) translate(5px, 5px); }
  100% { transform: rotate(45deg) translate(-5px, -5px); }
`;

const animShadow = keyframes`
  0% { transform: scale(0.5); }
  100% { transform: scale(1); }
`;

const bump = keyframes`
  0% { transform: translate(-50%, 5px); }
  100% { transform: translate(-50%, -5px); }
`;

const animPend = keyframes`
  0% { transform: rotate(22deg); }
  50% { transform: rotate(0deg); }
`;

const animPend2 = keyframes`
  0%, 55% { transform: rotate(0deg); }
  100% { transform: rotate(-22deg); }
`;

const animloader85 = keyframes`
  0%, 100% { transform: translateX(-150%); }
  50% { transform: translateX(150%); }
`;

const barStripe = keyframes`
  0% { background-position: 1em 0; }
  100% { background-position: 0 0; }
`;

const raceBoard = keyframes`
  0% { background-position: 0 0, 16px 16px; }
  100% { background-position: 32px 0px, 48px 16px; }
`;

const fadePush = keyframes`
  0% { transform: translate(-50%, -15px); opacity: 0; }
  50% { transform: translate(-50%, 0px); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
`;

const fadePull = keyframes`
  0% { transform: translate(-50%, 15px); opacity: 0; }
  50% { transform: translate(-50%, 0px); opacity: 1; }
  100% { transform: translate(-50%, -15px); opacity: 0; }
`;

const hitZak = keyframes`
  0% { left: 0; transform: translateX(-1%); }
  100% { left: 100%; transform: translateX(-99%); }
`;

const animFw = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const coli1 = keyframes`
  0% { transform: rotate(-45deg) translateX(0px); opacity: 0.7; }
  100% { transform: rotate(-45deg) translateX(-45px); opacity: 0; }
`;

const coli2 = keyframes`
  0% { transform: rotate(45deg) translateX(0px); opacity: 1; }
  100% { transform: rotate(45deg) translateX(-45px); opacity: 0.7; }
`;

const animloader121 = keyframes`
  0% { background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px; }
  100% { background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px; }
`;

const animloader123 = keyframes`
  0% { background-position: 0% 0, 120px 0, 120px 40px, 120px 80px; }
  100% { background-position: 100% 0, 120px 0, 120px 40px, 120px 80px; }
`;

const animloader124 = keyframes`
  0% { background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px; }
  100% { background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px; }
`;

const animloader126 = keyframes`
  0% { background-position: 0 0, 0 0, 0px 85px, 0px 110px; }
  100% { background-position: 150% 0, 0 0, 0px 85px, 0px 110px; }
`;

const floating = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-25px); }
`;

const animloader110 = keyframes`
  0% { height: 100%; }
  100% { height: 0%; }
`;

const animloader111 = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const animloader113 = keyframes`
  0% { transform: translate(0px, 0px) scaleX(1); }
  14% { transform: translate(-12px, -16px) scaleX(1.05); }
  28% { transform: translate(-27px, -28px) scaleX(1.07); }
  42% { transform: translate(-46px, -35px) scaleX(1.1); }
  57% { transform: translate(-70px, -37px) scaleX(1.1); }
  71% { transform: translate(-94px, -32px) scaleX(1.07); }
  85% { transform: translate(-111px, -22px) scaleX(1.05); }
  100% { transform: translate(-125px, -9px) scaleX(1); }
`;

const animloader113L = keyframes`
  0% { box-shadow: 0 -6px, -122.9px -8px; }
  25%, 75% { box-shadow: 0 0px, -122.9px -8px; }
  100% { box-shadow: 0 0px, -122.9px -16px; }
`;

const animloader114 = keyframes`
  0% { transform: translateY(8px) scaleY(1) scaleX(1.25); }
  25%, 75% { transform: translateY(-5px) scaleY(1.2) scaleX(1); }
  50% { transform: translateY(-10px) scaleY(1) scaleX(1); }
  100% { transform: translateY(8px) scaleY(0.8) scaleX(0.8); }
`;

const animloader118 = keyframes`
  0% { transform: scale(0.8); }
  100% { transform: scale(1.2); }
`;

const animloader119 = keyframes`
  0% { filter: blur(0px); transform: skew(0deg); }
  100% { filter: blur(3px); transform: skew(-4deg); }
`;

// STYLES
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background: #131313; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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

const Loader = styled.div`
  &.loader-1 {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;
  }

  &.loader-2 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #ff3d00;
    }
  }

  &.loader-3 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-bottom-color: #ff3d00;
    }
  }

  &.loader-4 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid;
      border-color: #ff3d00 transparent;
    }
  }

  &.loader-5 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 3px solid;
      border-color: #ff3d00 transparent;
    }
  }

  &.loader-6 {
    width: 48px;
    height: 48px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 6px;
      height: 6px;
      transform: translate(150%, 150%);
      border-radius: 50%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 6px;
      height: 6px;
      transform: translate(150%, 150%);
      border-radius: 50%;
      left: auto;
      top: auto;
      right: 0;
      bottom: 0;
      transform: translate(-150%, -150%);
    }
  }

  &.loader-7 {
    width: 48px;
    height: 48px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      left: auto;
      top: auto;
      right: 0;
      bottom: 0;
    }
  }

  &.loader-8 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }
  }

  &.loader-9 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 2px solid #ff3d00;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 4px;
      border: 2px solid #fff;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }

  &.loader-10 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #fff #fff transparent;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent #ff3d00 #ff3d00;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      -webkit-animation: ${rotationBack} 0.5s linear infinite;
      animation: ${rotationBack} 0.5s linear infinite;
      transform-origin: center center;
    }
  }

  &.loader-11 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 3px solid;
    border-color: #fff #fff transparent transparent;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent #ff3d00 #ff3d00;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      -webkit-animation: ${rotationBack} 0.5s linear infinite;
      animation: ${rotationBack} 0.5s linear infinite;
      transform-origin: center center;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px solid;
      border-color: transparent transparent #ff3d00 #ff3d00;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      -webkit-animation: ${rotationBack} 0.5s linear infinite;
      animation: ${rotationBack} 0.5s linear infinite;
      transform-origin: center center;
      width: 32px;
      height: 32px;
      border-color: #fff #fff transparent transparent;
      -webkit-animation: ${rotation} 1.5s linear infinite;
      animation: ${rotation} 1.5s linear infinite;
    }
  }

  &.loader-12 {
    width: 48px;
    height: 48px;
    border: 3px dotted #fff;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 2s linear infinite;
    animation: ${rotation} 2s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 3px dotted #ff3d00;
      border-style: solid solid dotted;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      -webkit-animation: ${rotationBack} 1s linear infinite;
      animation: ${rotationBack} 1s linear infinite;
      transform-origin: center center;
    }
  }

  &.loader-13 {
    width: 48px;
    height: 48px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      background: #ff3d00;
      width: 3px;
      height: 24px;
      transform: translateX(-50%);
    }
  }

  &.loader-14 {
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
      border: 2px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${animloader14} 2s linear infinite;
      animation: ${animloader14} 2s linear infinite;
    }

    &::after {
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-15 {
    width: 48px;
    height: 48px;
    border: 5px dotted #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 2s linear infinite;
    animation: ${rotation} 2s linear infinite;
  }

  &.loader-16 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #263238;
    }
  }

  &.loader-17 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;
  }

  &.loader-18 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-bottom: 4px solid #ff3d00;
      border-left: 4px solid transparent;
    }
  }

  &.loader-19 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #fff;
    border-right: 4px solid transparent;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border-left: 4px solid #ff3d00;
      border-bottom: 4px solid transparent;
      animation: ${rotation} 0.5s linear infinite reverse;
    }
  }

  &.loader-20 {
    width: 48px;
    height: 48px;
    border: 5px solid;
    border-color: #ff3d00 transparent;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;
  }

  &.loader-21 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;
  }

  &.loader-22 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 10px solid;
    -webkit-animation: ${animloader51} 1s linear infinite alternate;
    animation: ${animloader51} 1s linear infinite alternate;
  }

  &.loader-23 {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 20px;
      top: 31px;
      border: 10px solid transparent;
      border-right-color: #fff;
      transform: rotate(-40deg);
    }
  }

  &.loader-24 {
    width: 48px;
    height: 48px;
    border-width: 3px;
    border-style: dashed solid solid dotted;
    border-color: #ff3d00 #ff3d00 transparent #ff3d00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 20px;
      top: 31px;
      border: 10px solid transparent;
      border-right-color: #ff3d00;
      transform: rotate(-40deg);
    }
  }

  &.loader-25 {
    width: 48px;
    height: 48px;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    -webkit-animation: ${animloader14} 1s ease-in infinite;
    animation: ${animloader14} 1s ease-in infinite;
  }

  &.loader-26 {
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
      -webkit-animation: ${animloader14} 2s linear infinite;
      animation: ${animloader14} 2s linear infinite;
    }

    &::after {
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-27 {
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
      -webkit-animation: ${animloader27} 2s ease-in-out infinite;
      animation: ${animloader27} 2s ease-in-out infinite;
    }

    &::after {
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-28 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: ${animloader28} 1s linear infinite;
    animation: ${animloader28} 1s linear infinite;
  }

  &.loader-29 {
    border: 24px solid #fff;
    border-bottom-color: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;
  }

  &.loader-30 {
    border: 2px solid #fff;
    width: 48px;
    height: 48px;
    background: #ff3d00;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 2s linear infinite;
    animation: ${rotation} 2s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border: 24px solid;
      border-color: transparent #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.loader-31 {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 10px;
      width: 12px;
      height: 12px;
      color: #ff3d00;
      background: currentColor;
      border-radius: 50%;
      box-shadow: 25px 2px, 10px 22px;
    }
  }

  &.loader-32 {
    width: 48px;
    height: 48px;
    border: 4px solid;
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent #fff #fff transparent;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s ease-in-out infinite;
    animation: ${rotation} 1s ease-in-out infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border: 12px solid;
      border-color: transparent #ff3d00 #ff3d00 transparent;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }

  &.loader-33 {
    border: 2px solid;
    border-color: transparent #fff;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 2s linear infinite;
    animation: ${rotation} 2s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      border: 24px solid;
      border-color: transparent rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.loader-34 {
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: ${animloader34} 1s linear infinite;
    animation: ${animloader34} 1s linear infinite;
  }

  &.loader-35 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
      left: auto;
      right: 0;
      background: #fff;
      transform: translate(50%, 100%);
    }
  }

  &.loader-36 {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    -webkit-animation: ${zeroRotation} 1s linear infinite alternate;
    animation: ${zeroRotation} 1s linear infinite alternate;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: #ff3d00;
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
      left: auto;
      right: 0;
      transform: translate(50%, 100%);
    }
  }

  &.loader-37 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #fff;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      background-color: #fff;
      border-radius: 50%;
      -webkit-animation: ${scale50} 1s infinite ease-in-out;
      animation: ${scale50} 1s infinite ease-in-out;
    }

    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      top: 0;
      background-color: #fff;
      border-radius: 50%;
      -webkit-animation: ${scale50} 1s infinite ease-in-out;
      animation: ${scale50} 1s infinite ease-in-out;
      top: auto;
      bottom: 0;
      background-color: #ff3d00;
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
  }

  &.loader-38 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #fff;
    -webkit-animation: ${rotation} 1s linear infinite;
    animation: ${rotation} 1s linear infinite;

    &:after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: scale(0.5) translate(0, 0);
      background-color: #fff;
      border-radius: 50%;
      -webkit-animation: ${animloader38} 1s infinite ease-in-out;
      animation: ${animloader38} 1s infinite ease-in-out;
    }

    &:before {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      left: 50%;
      transform: scale(0.5) translate(0, 0);
      background-color: #fff;
      border-radius: 50%;
      -webkit-animation: ${animloader38} 1s infinite ease-in-out;
      animation: ${animloader38} 1s infinite ease-in-out;
      background-color: #ff3d00;
      transform: scale(0.5) translate(-48px, -48px);
    }
  }

  &.loader-39 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #fff;
    -webkit-animation: ${shadowExpandX} 2s linear infinite alternate;
    animation: ${shadowExpandX} 2s linear infinite alternate;
  }

  &.loader-40 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #fff;
    box-shadow: -24px 0 #fff, 24px 0 #fff;
    -webkit-animation: ${shadowPulse} 2s linear infinite;
    animation: ${shadowPulse} 2s linear infinite;
  }

  &.loader-41 {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    background: #ff3d00;
    color: #fff;
    box-shadow: -24px 0, 24px 0;
    -webkit-animation: ${rotation} 2s ease-in-out infinite;
    animation: ${rotation} 2s ease-in-out infinite;
  }

  &.loader-42 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #fff;
    -webkit-animation: ${animloader42} 1s linear infinite alternate;
    animation: ${animloader42} 1s linear infinite alternate;
  }

  &.loader-43 {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #fff;
    left: -100px;
    -webkit-animation: ${shadowRolling} 2s linear infinite;
    animation: ${shadowRolling} 2s linear infinite;
  }

  &.loader-44 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #fff;
    -webkit-animation: ${animloader44} 2s linear infinite;
    animation: ${animloader44} 2s linear infinite;
  }

  &.loader-45 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    color: #fff;
    -webkit-animation: ${animloader45} 1s linear infinite alternate;
    animation: ${animloader45} 1s linear infinite alternate;
  }

  &.loader-46 {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 50%;
      position: absolute;
      left: 0;
      transform: translate(-50%, 100%);
      -webkit-animation: ${animloader46} 1s linear infinite;
      animation: ${animloader46} 1s linear infinite;
      top: 0;
    }
  }

  &.loader-47 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${rotation} 2s ease-in-out infinite;
      animation: ${rotation} 2s ease-in-out infinite;
    }

    &::after {
      border-color: #ff3d00;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-48 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';
      width: 48px;
      height: 48px;
      border: 4px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${animloader14} 2s ease-in-out infinite;
      animation: ${animloader14} 2s ease-in-out infinite;
    }

    &::after {
      border-color: #ff3d00;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-49 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${rotation} 2s ease-in-out infinite alternate;
      animation: ${rotation} 2s ease-in-out infinite alternate;
    }

    &::after {
      border-color: #ff3d00;
      animation-direction: alternate-reverse;
    }
  }

  &.loader-50 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${scaleOut} 2s ease-in-out infinite;
      animation: ${scaleOut} 2s ease-in-out infinite;
    }

    &::after {
      border-color: #ff3d00;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
    }
  }

  &.loader-51 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after,
    &::before {
      content: '';
      width: 48px;
      height: 48px;
      border: 2px solid #fff;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-animation: ${rotationBreak} 3s ease-in-out infinite alternate;
      animation: ${rotationBreak} 3s ease-in-out infinite alternate;
    }

    &::after {
      border-color: #ff3d00;
      animation-direction: alternate-reverse;
    }
  }

  &.loader-52 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 2px solid #fff;
    -webkit-animation: ${rotation} 2s linear infinite;
    animation: ${rotation} 2s linear infinite;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 2px solid #ff3d00;
      width: 38px;
      height: 38px;
      -webkit-animation: ${rotationBack} 1.5s linear infinite;
      animation: ${rotationBack} 1.5s linear infinite;
      transform-origin: center center;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 2px solid #ff3d00;
      width: 38px;
      height: 38px;
      -webkit-animation: ${rotationBack} 1.5s linear infinite;
      animation: ${rotationBack} 1.5s linear infinite;
      transform-origin: center center;
      width: 28px;
      height: 28px;
      border-color: #fff;
      -webkit-animation: ${rotation} 1s linear infinite;
      animation: ${rotation} 1s linear infinite;
    }
  }

  &.loader-53 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #fff;
    -webkit-animation: ${flipX} 1s linear infinite;
    animation: ${flipX} 1s linear infinite;
  }

  &.loader-54 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    color: #fff;
    border: 1px solid;
    -webkit-animation: ${fill} 2s linear infinite alternate;
    animation: ${fill} 2s linear infinite alternate;
  }

  &.loader-55 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #fff;
    animation: ${zeroRotation} 1s ease infinite alternate-reverse;
  }

  &.loader-56 {
    width: 24px;
    height: 24px;
    display: inline-block;
    position: relative;
    background: #fff;
    -webkit-animation: ${animloader56} 2s linear infinite;
    animation: ${animloader56} 2s linear infinite;
  }

  &.loader-57 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: 0;
      background: #fff;
      color: #fff;
      -webkit-animation: ${animloader57} 2s linear infinite alternate;
      animation: ${animloader57} 2s linear infinite alternate;
    }
  }

  &.loader-58 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::before {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: -24px;
      -webkit-animation: ${animloader58} 2s linear infinite alternate;
      animation: ${animloader58} 2s linear infinite alternate;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      -webkit-animation: ${animloader58m} 2s linear infinite alternate;
      animation: ${animloader58m} 2s linear infinite alternate;
    }
  }

  &.loader-59 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    transform: rotate(45deg);

    &::before {
      content: '';
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      top: -24px;
      -webkit-animation: ${animloader59} 4s ease infinite;
      animation: ${animloader59} 4s ease infinite;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: rgba(255, 255, 255, 0.85);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      -webkit-animation: ${animloader56} 2s ease infinite;
      animation: ${animloader56} 2s ease infinite;
    }
  }

  &.loader-60 {
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    display: inline-block;
    position: relative;
    color: #fff;
    left: -30px;
    -webkit-animation: ${animloader60} 2s ease infinite;
    animation: ${animloader60} 2s ease infinite;

    &::after {
      content: '';
      width: 16px;
      height: 16px;
      box-shadow: 0 30px, 0 -30px;
      border-radius: 4px;
      background: currentColor;
      color: #fff;
      position: absolute;
      left: 30px;
      top: 0;
      -webkit-animation: ${animloader60} 2s 0.2s ease infinite;
      animation: ${animloader60} 2s 0.2s ease infinite;
    }

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      box-shadow: 0 30px, 0 -30px;
      border-radius: 4px;
      background: currentColor;
      color: #fff;
      position: absolute;
      left: 30px;
      top: 0;
      -webkit-animation: ${animloader60} 2s 0.2s ease infinite;
      animation: ${animloader60} 2s 0.2s ease infinite;
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
      left: 60px;
    }
  }

  [data-index='61'] {
    align-items: normal;
    padding-top: 75px;
  }

  &.loader-61 {
    width: 8px;
    height: 40px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    background: currentColor;
    color: #fff;
    -webkit-animation: ${animloader61m} 0.3s 0.3s linear infinite alternate;
    animation: ${animloader61m} 0.3s 0.3s linear infinite alternate;

    &::after {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      bottom: 0;
      left: 20px;
      -webkit-animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
    }

    &::before {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      bottom: 0;
      left: 20px;
      -webkit-animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      left: -20px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
  }

  &.loader-62 {
    width: 8px;
    height: 40px;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    background: currentColor;
    color: #fff;
    -webkit-animation: ${animloader61} 0.3s 0.3s linear infinite alternate;
    animation: ${animloader61} 0.3s 0.3s linear infinite alternate;

    &::after {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      -webkit-animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
    }

    &::before {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      -webkit-animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader61} 0.3s 0.45s linear infinite alternate;
      left: -20px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
  }

  &.loader-63 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -40px;
    -webkit-animation: ${animloader63} 1s linear infinite alternate;
    animation: ${animloader63} 1s linear infinite alternate;
  }

  &.loader-64 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -60px;
    color: #fff;
    -webkit-animation: ${animloader64} 0.6s linear infinite;
    animation: ${animloader64} 0.6s linear infinite;
  }

  &.loader-65 {
    width: 48px;
    height: 6px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    top: -50px;
    color: #fff;
    -webkit-animation: ${animloader65} 0.6s linear infinite;
    animation: ${animloader65} 0.6s linear infinite;
  }

  [data-index='66'] {
    justify-content: normal;
    padding-left: 15%;
  }

  &.loader-66 {
    width: 4.8px;
    height: 4.8px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #fff;
    background: currentColor;
    -webkit-animation: ${animloader66} 0.3s 0.3s linear infinite alternate;
    animation: ${animloader66} 0.3s 0.3s linear infinite alternate;

    &::after,
    &::before {
      content: '';
      width: 4.8px;
      height: 4.8px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      left: 0;
      top: 15px;
      -webkit-animation: ${animloader66} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader66} 0.3s 0.45s linear infinite alternate;
    }

    &::after {
      top: -15px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
  }

  &.loader-67 {
    width: 4.8px;
    height: 4.8px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #fff;
    background: currentColor;
    -webkit-animation: ${animloader66} 0.3s 0.3s linear infinite alternate;
    animation: ${animloader66} 0.3s 0.3s linear infinite alternate;

    &::after,
    &::before {
      content: '';
      width: 4.8px;
      height: 4.8px;
      border-radius: 4px;
      background: currentColor;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 15px;
      -webkit-animation: ${animloader66} 0.3s 0.45s linear infinite alternate;
      animation: ${animloader66} 0.3s 0.45s linear infinite alternate;
    }

    &::after {
      top: -15px;
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
  }

  &.loader-68 {
    width: 8px;
    height: 48px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    left: -100px;
    -webkit-animation: ${animloader68} 1s linear infinite alternate;
    animation: ${animloader68} 1s linear infinite alternate;
  }

  &.loader-69 {
    width: 20px;
    height: 12px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: #fff;
    background: currentColor;
    -webkit-animation: ${animloader69} 0.6s 0.3s ease infinite alternate;
    animation: ${animloader69} 0.6s 0.3s ease infinite alternate;

    &::after,
    &::before {
      content: '';
      width: 20px;
      height: 12px;
      background: currentColor;
      position: absolute;
      border-radius: 4px;
      top: 0;
      right: 110%;
      -webkit-animation: ${animloader69} 0.6s ease infinite alternate;
      animation: ${animloader69} 0.6s ease infinite alternate;
    }

    &::after {
      left: 110%;
      right: auto;
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
  }

  &.loader-70 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;

    &::after {
      content: '';
      width: 96px;
      height: 4.8px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${hitZak} 1s linear infinite alternate;
      animation: ${hitZak} 1s linear infinite alternate;
    }
  }

  &.loader-71 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;

    &::after {
      content: '';
      width: 192px;
      height: 4.8px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${animloader71} 2s linear infinite;
      animation: ${animloader71} 2s linear infinite;
    }
  }

  &.loader-72 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;

    &::after {
      content: '';
      width: 0;
      height: 4.8px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${animFw} 10s linear infinite;
      animation: ${animFw} 10s linear infinite;
    }
  }

  [data-index='73'] {
    justify-content: normal;
  }

  &.loader-73 {
    width: 0;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: #fff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    -webkit-animation: ${animFw} 8s linear infinite;
    animation: ${animFw} 8s linear infinite;

    &::after {
      content: '';
      width: 10px;
      height: 1px;
      background: #fff;
      position: absolute;
      top: 9px;
      right: -2px;
      opacity: 0;
      transform: rotate(-45deg) translateX(0px);
      -webkit-animation: ${coli1} 0.3s linear infinite;
      animation: ${coli1} 0.3s linear infinite;
    }

    &::before {
      content: '';
      width: 10px;
      height: 1px;
      background: #fff;
      position: absolute;
      top: 9px;
      right: -2px;
      opacity: 0;
      transform: rotate(-45deg) translateX(0px);
      -webkit-animation: ${coli1} 0.3s linear infinite;
      animation: ${coli1} 0.3s linear infinite;
      top: -4px;
      transform: rotate(45deg);
      -webkit-animation: ${coli2} 0.3s linear infinite;
      animation: ${coli2} 0.3s linear infinite;
    }
  }

  &.loader-74 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      width: 96px;
      height: 4.8px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${hitZak} 0.6s ease-in-out infinite alternate;
      animation: ${hitZak} 0.6s ease-in-out infinite alternate;
    }
  }

  &.loader-75 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      width: 0%;
      height: 4.8px;
      background-color: #fff;
      background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 0.25) 75%,
        transparent 75%,
        transparent
      );
      background-size: 15px 15px;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${animFw} 6s ease-in infinite;
      animation: ${animFw} 6s ease-in infinite;
    }
  }

  &.loader-76 {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      width: 0%;
      height: 4.8px;
      background-color: #fff;
      font-size: 15px;
      background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 0.25) 75%,
        transparent 75%,
        transparent
      );
      background-size: 1em 1em;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-animation: ${animFw} 10s ease-in infinite, ${barStripe} 1s linear infinite;
      animation: ${animFw} 10s ease-in infinite, ${barStripe} 1s linear infinite;
    }
  }

  &.loader-77 {
    width: 100%;
    height: 8px;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.15);
      background-image: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.25) 25%,
        transparent 25%,
        transparent 50%,
        rgba(0, 0, 0, 0.25) 50%,
        rgba(0, 0, 0, 0.25) 75%,
        transparent 75%,
        transparent
      );
      background-size: 15px 15px;
      z-index: 10;
    }

    &::after {
      content: '';
      width: 0%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      border-radius: 0 4px 4px 0;
      top: 0;
      left: 0;
      -webkit-animation: ${animFw} 10s ease-in infinite;
      animation: ${animFw} 10s ease-in infinite;
    }
  }

  &.loader-78 {
    width: 100%;
    height: 12px;
    display: inline-block;
    background-color: #fff;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      transparent 75%,
      transparent
    );
    font-size: 30px;
    background-size: 1em 1em;
    -webkit-animation: ${barStripe} 1s linear infinite;
    animation: ${barStripe} 1s linear infinite;
  }

  &.loader-79 {
    width: 96px;
    height: 16px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      transparent 75%,
      transparent
    );
    font-size: 30px;
    background-size: 1em 1em;
    -webkit-animation: ${barStripe} 1s linear infinite;
    animation: ${barStripe} 1s linear infinite;
  }

  &.loader-80 {
    width: 96px;
    height: 24px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    background: linear-gradient(45deg, transparent 49%, #fff 50%, #fff 50%, transparent 51%, transparent),
      linear-gradient(-45deg, transparent 49%, #fff 50%, #fff 50%, transparent 51%, transparent);
    font-size: 15px;
    background-size: 1em 1em;
    -webkit-animation: ${barStripe} 0.6s linear infinite;
    animation: ${barStripe} 0.6s linear infinite;
  }

  &.loader-81 {
    width: 130px;
    height: 48px;
    display: inline-block;
    background: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%),
      linear-gradient(45deg, #000 25%, white 25%, white 75%, #000 75%, #000 100%);
    font-size: 10px;
    background-size: 32px 32px;
    -webkit-animation: ${raceBoard} 0.6s linear infinite;
    animation: ${raceBoard} 0.6s linear infinite;
    background-position: 0 0, 16px 16px;
  }

  &.loader-82 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    background-color: #fff;
    background: radial-gradient(ellipse at center, #ff3d00 0%, #ff3d00 14%, #fff 15%, #fff 100%);
    background-size: cover;
    background-position: center;
    border-radius: 50%;

    &::after {
      content: '';
      position: absolute;
      height: 16px;
      width: 4px;
      background: #ff3d00;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) rotate(0deg);
      transform-origin: 25% 0;
      -webkit-animation: ${rotation} 10s linear infinite;
      animation: ${rotation} 10s linear infinite;
    }

    &::before {
      content: '';
      position: absolute;
      height: 16px;
      width: 4px;
      background: #ff3d00;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) rotate(0deg);
      transform-origin: 25% 0;
      -webkit-animation: ${rotation} 10s linear infinite;
      animation: ${rotation} 10s linear infinite;
      height: 22px;
      width: 2px;
      transform: translateX(-50%) rotate(0deg);
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
    }
  }

  &.loader-83 {
    width: 175px;
    height: 80px;
    position: relative;

    &::before {
      content: '';
      left: 60px;
      bottom: 18px;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #fff;
      background-image: radial-gradient(circle 8px at 18px 18px, #263238 100%, transparent 0),
        radial-gradient(circle 4px at 18px 0px, #263238 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #263238 100%, transparent 0),
        radial-gradient(circle 4px at 36px 18px, #263238 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #263238 100%, transparent 0),
        radial-gradient(circle 4px at 30px 5px, #263238 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #263238 100%, transparent 0),
        radial-gradient(circle 4px at 30px 30px, #263238 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #263238 100%, transparent 0),
        radial-gradient(circle 4px at 5px 5px, #263238 100%, transparent 0);
      background-repeat: no-repeat;
      -webkit-animation: ${rotationBack} 3s linear infinite;
      animation: ${rotationBack} 3s linear infinite;
    }

    &::after {
      content: '';
      left: 94px;
      bottom: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #fff;
      background-image: radial-gradient(circle 5px at 12px 12px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 12px 0px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 24px 12px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 12px 24px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 20px 3px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 20px 20px, #263238 100%, transparent 0),
        radial-gradient(circle 2.5px at 3px 20px, #263238 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, #263238 100%, transparent 0);
      background-repeat: no-repeat;
      animation: ${rotationBack} 4s linear infinite reverse;
    }
  }

  &.loader-84 {
    width: 15px;
    height: 20px;
    background: #fff;
    display: inline-block;
    position: relative;
    -webkit-animation: ${bump} 0.4s ease-in infinite alternate;
    animation: ${bump} 0.4s ease-in infinite alternate;

    &::after {
      content: '';
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: #fff;
    }
  }

  &.loader-85 {
    width: 15px;
    height: 20px;
    background: #fff;
    display: inline-block;
    position: relative;
    -webkit-animation: ${bump} 0.4s linear infinite alternate;
    animation: ${bump} 0.4s linear infinite alternate;

    &::after {
      content: '';
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: #fff;
    }
  }

  &.loader-86 {
    width: 48px;
    height: 12px;
    background: #fff;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: #fff;
      -webkit-animation: ${bump} 0.4s ease-in-out infinite alternate;
      animation: ${bump} 0.4s ease-in-out infinite alternate;
    }

    &::before {
      content: '';
      left: 50%;
      bottom: 25px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 20px;
      background: #fff;
      -webkit-animation: ${bump} 0.4s ease-in-out infinite alternate;
      animation: ${bump} 0.4s ease-in-out infinite alternate;
    }
  }

  &.loader-87 {
    width: 48px;
    height: 12px;
    background: #fff;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      left: 50%;
      top: -47px;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: #fff;
      -webkit-animation: ${bump} 0.4s ease-in-out infinite alternate;
      animation: ${bump} 0.4s ease-in-out infinite alternate;
    }

    &::before {
      content: '';
      left: 50%;
      bottom: 15px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 20px;
      background: #fff;
      -webkit-animation: ${bump} 0.4s ease-in-out infinite alternate;
      animation: ${bump} 0.4s ease-in-out infinite alternate;
    }
  }

  &.loader-88 {
    width: 48px;
    height: 24px;
    display: inline-block;
    position: relative;
    color: #fff;
    border: 1px solid;
    -webkit-animation: ${fillX} 2s linear infinite;
    animation: ${fillX} 2s linear infinite;

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background: #fff;
      width: 5px;
      height: 12px;
    }
  }

  &.loader-89 {
    width: 48px;
    height: 24px;
    display: inline-block;
    position: relative;
    border: 1px solid #fff;

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 1px solid #fff;
      width: 5px;
      height: 12px;
    }

    &::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      height: 80%;
      width: 6px;
      -webkit-animation: ${animloader89} 2s linear infinite;
      animation: ${animloader89} 2s linear infinite;
    }
  }

  &.loader-90 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 4px solid #fff;
    -webkit-animation: ${fill} 2s linear infinite alternate;
    animation: ${fill} 2s linear infinite alternate;
    color: rgba(255, 61, 0, 0.9);
    border-radius: 0 0 4px 4px;

    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border: 4px solid #fff;
      width: 20px;
      height: 25px;
      border-radius: 0 4px 4px 0;
    }
  }

  &.loader-91 {
    width: 32px;
    height: 72px;
    display: inline-block;
    position: relative;
    border: 2px solid #fff;
    -webkit-animation: ${animloader91} 2s linear infinite alternate;
    animation: ${animloader91} 2s linear infinite alternate;
    color: #ff3d00;
    border-radius: 0 0 4px 4px;
    transform: perspective(140px) rotateX(-45deg);
  }

  &.loader-92 {
    width: 48px;
    height: 40px;
    display: inline-block;
    position: relative;
    background: #fff;
    border-radius: 15% 15% 35% 35%;

    &::after {
      content: '';
      position: absolute;
      left: 45px;
      top: 8px;
      border: 4px solid #fff;
      width: 16px;
      height: 20px;
      border-radius: 0 4px 4px 0;
    }

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 10px;
      color: #fff;
      top: -15px;
      left: 11px;
      -webkit-animation: ${animloader92} 1s ease infinite;
      animation: ${animloader92} 1s ease infinite;
    }
  }

  &.loader-93 {
    width: 96px;
    height: 48px;
    display: inline-block;
    position: relative;
    background: #fff;
    border-radius: 48px 48px 0 0;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 12px;
      border-radius: 24px 24px 0 0;
      background: #ff3d00;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 32px;
      left: 0;
      right: 0;
      margin: auto;
      bottom: 0;
      background: #ff3d00;
      transform-origin: 50% 100%;
      -webkit-animation: ${animloader93} 2s linear infinite alternate;
      animation: ${animloader93} 2s linear infinite alternate;
    }
  }

  &.loader-94 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
    border: 3px solid #fff;
    border-radius: 50%;
    -webkit-animation: ${animloader94} 2s linear infinite;
    animation: ${animloader94} 2s linear infinite;

    &::after {
      content: '';
      width: 6px;
      height: 24px;
      background: #fff;
      transform: rotate(-45deg);
      position: absolute;
      bottom: -20px;
      left: 46px;
    }
  }

  &.loader-95 {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      width: 48px;
      height: 48px;
      left: 0;
      bottom: 0;
      position: absolute;
      border-radius: 50% 50% 0;
      border: 15px solid #fff;
      transform: rotate(45deg) translate(0, 0);
      -webkit-animation: ${animMarker} 0.4s ease-in-out infinite alternate;
      animation: ${animMarker} 0.4s ease-in-out infinite alternate;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 150%;
      width: 24px;
      height: 4px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.2);
      -webkit-animation: ${animShadow} 0.4s ease-in-out infinite alternate;
      animation: ${animShadow} 0.4s ease-in-out infinite alternate;
    }
  }

  &.loader-96 {
    width: 48px;
    height: 48px;
    background: #ff3d00;
    display: inline-block;
    position: relative;
    animation: ${rotationBack} 1s ease-in-out infinite reverse;

    &::before {
      content: '';
      left: 0;
      top: 0;
      transform: rotate(45deg);
      position: absolute;
      width: 48px;
      height: 48px;
      background: #ff3d00;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }

    &::after {
      content: '';
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }
  }

  &.loader-97 {
    width: 60px;
    height: 60px;
    display: inline-block;
    position: relative;
    background: radial-gradient(ellipse at center, #fff 69%, rgba(0, 0, 0, 0) 70%),
      linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #fff 48%, #fff 52%, rgba(0, 0, 0, 0) 53%);
    background-size: 20px 20px, 20px auto;
    background-repeat: repeat-x;
    background-position: center bottom, center -5px;

    &::before {
      content: '';
      position: absolute;
      left: -20px;
      top: 0;
      width: 20px;
      height: 60px;
      background: radial-gradient(ellipse at center, #fff 69%, rgba(0, 0, 0, 0) 70%),
        linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #fff 48%, #fff 52%, rgba(0, 0, 0, 0) 53%);
      background-size: 20px 20px, 20px auto;
      background-repeat: no-repeat;
      background-position: center bottom, center -5px;
      transform: rotate(0deg);
      transform-origin: 50% 0%;
      -webkit-animation: ${animPend} 1s linear infinite alternate;
      animation: ${animPend} 1s linear infinite alternate;
    }

    &::after {
      content: '';
      position: absolute;
      left: -20px;
      top: 0;
      width: 20px;
      height: 60px;
      background: radial-gradient(ellipse at center, #fff 69%, rgba(0, 0, 0, 0) 70%),
        linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #fff 48%, #fff 52%, rgba(0, 0, 0, 0) 53%);
      background-size: 20px 20px, 20px auto;
      background-repeat: no-repeat;
      background-position: center bottom, center -5px;
      transform: rotate(0deg);
      transform-origin: 50% 0%;
      -webkit-animation: ${animPend} 1s linear infinite alternate;
      animation: ${animPend} 1s linear infinite alternate;
      -webkit-animation: ${animPend2} 1s linear infinite alternate;
      animation: ${animPend2} 1s linear infinite alternate;
      left: 100%;
    }
  }

  &.loader-98 {
    width: 24px;
    height: 80px;
    border: 1px solid #fff;
    border-radius: 0 0 50px 50px;
    position: relative;
    box-shadow: 0px 0px #ff3d00 inset;
    background-image: linear-gradient(#ff3d00 100px, transparent 0);
    background-position: 0px 0px;
    background-size: 22px 80px;
    background-repeat: no-repeat;
    -webkit-animation: ${animloader98} 6s linear infinite;
    animation: ${animloader98} 6s linear infinite;

    &::after {
      content: '';
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      border: 1px solid #fff;
      border-radius: 50%;
      width: 28px;
      height: 6px;
    }

    &::before {
      content: '';
      left: 0;
      bottom: -4px;
      border-radius: 50%;
      position: absolute;
      width: 6px;
      height: 6px;
      -webkit-animation: ${animloader98s} 6s linear infinite;
      animation: ${animloader98s} 6s linear infinite;
    }
  }

  &.loader-99 {
    width: 20px;
    height: 20px;
    margin-top: 80px;
    border-radius: 50%;
    background: #ff3d00;
    border: 5px solid #fff;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      width: 8px;
      height: 80px;
      border: 2px solid #fff;
      border-bottom: none;
      background: #fff;
      color: #ff3d00;
      border-radius: 50px 50px 0 0;
      box-shadow: 0px 0px inset;
      -webkit-animation: ${animloader99} 6s linear infinite;
      animation: ${animloader99} 6s linear infinite;
    }
  }

  &.loader-100 {
    width: 180px;
    height: 140px;
    background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 15px at 15px 15px, #fff 100%, transparent 0), linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
    background-repeat: no-repeat;
    background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 2px;
      top: 65px;
      width: 2px;
      height: 6px;
      color: #fff;
      -webkit-animation: ${animloader100} 0.6s linear infinite;
      animation: ${animloader100} 0.6s linear infinite;
    }
  }

  &.loader-101 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: '';
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-top-color: #ff3d00;
      -webkit-animation: ${fadePush} 1s linear infinite;
      animation: ${fadePush} 1s linear infinite;
    }

    &::before {
      content: '';
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 15px;
      background: #ff3d00;
      -webkit-animation: ${fadePush} 1s linear infinite;
      animation: ${fadePush} 1s linear infinite;
    }
  }

  &.loader-102 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: '';
      left: 50%;
      bottom: 30px;
      transform: translate(-50%, 0);
      position: absolute;
      border: 15px solid transparent;
      border-bottom-color: #ff3d00;
      -webkit-animation: ${fadePull} 1s linear infinite;
      animation: ${fadePull} 1s linear infinite;
    }

    &::before {
      content: '';
      left: 50%;
      bottom: 15px;
      transform: translate(-50%, 0);
      position: absolute;
      width: 15px;
      height: 15px;
      background: #ff3d00;
      -webkit-animation: ${fadePull} 1s linear infinite;
      animation: ${fadePull} 1s linear infinite;
    }
  }

  &.loader-103 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: '';
      left: 0;
      right: 0;
      margin: auto;
      bottom: 20px;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 5px solid transparent;
      border-color: #ff3d00 transparent;
      -webkit-animation: ${rotation} 1s linear infinite;
      animation: ${rotation} 1s linear infinite;
    }
  }

  &.loader-104 {
    width: 175px;
    height: 80px;
    background-image: radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;

    &::before {
      content: '';
      left: 60px;
      bottom: 18px;
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #ff3d00;
      background-image: radial-gradient(circle 8px at 18px 18px, #fff 100%, transparent 0),
        radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),
        radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),
        radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
        radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),
        radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);
      background-repeat: no-repeat;
      -webkit-animation: ${rotationBack} 3s linear infinite;
      animation: ${rotationBack} 3s linear infinite;
    }

    &::after {
      content: '';
      left: 94px;
      bottom: 15px;
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #ff3d00;
      background-image: radial-gradient(circle 5px at 12px 12px, #fff 100%, transparent 0),
        radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),
        radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),
        radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
        radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),
        radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);
      background-repeat: no-repeat;
      animation: ${rotationBack} 4s linear infinite reverse;
    }
  }

  &.loader-105 {
    width: 175px;
    height: 80px;
    background-image: linear-gradient(#263238 50px, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
      linear-gradient(#fff 50px, transparent 0);
    background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
    background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(-180deg);
      top: 62px;
      height: 64px;
      width: 60px;
      background-color: #fff;
      background-image: linear-gradient(#ddd 20px, transparent 0), linear-gradient(#ddd 5px, transparent 0), linear-gradient(#ddd 10px, transparent 0),
        linear-gradient(#ddd 10px, transparent 0);
      background-size: 50px 20px;
      background-position: 5px 36px, 5px 25px, 5px 10px;
      background-repeat: no-repeat;
      border-radius: 2px 2px 4px 4px;
      z-index: 10;
      box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.5);
      -webkit-animation: ${animloader105} 4s linear infinite;
      animation: ${animloader105} 4s linear infinite;
    }
  }

  &.loader-106 {
    width: 32px;
    height: 90px;
    margin-bottom: 20px;
    position: relative;
    border-radius: 50% 50% 0 0;
    border-bottom: 10px solid #ff3d00;
    background-color: #fff;
    background-image: radial-gradient(ellipse at center, #fff 34%, #ff3d00 35%, #ff3d00 54%, #fff 55%), linear-gradient(#ff3d00 10px, transparent 0);
    background-size: 28px 28px;
    background-position: center 20px, center 2px;
    background-repeat: no-repeat;
    -webkit-animation: ${animloader106back} 1s linear infinite alternate;
    animation: ${animloader106back} 1s linear infinite alternate;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 64px;
      height: 44px;
      border-radius: 50%;
      box-shadow: 0px 15px #ff3d00 inset;
      top: 67px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 34px;
      height: 34px;
      top: 112%;
      background: radial-gradient(ellipse at center, #ffdf00 8%, rgba(249, 62, 0, 0.6) 24%, rgba(0, 0, 0, 0) 100%);
      border-radius: 50% 50% 0;
      background-repeat: no-repeat;
      background-position: -44px -44px;
      background-size: 100px 100px;
      box-shadow: 4px 4px 12px 0px rgba(255, 61, 0, 0.5);
      -webkit-animation: ${animloader106} 1s linear infinite alternate;
      animation: ${animloader106} 1s linear infinite alternate;
    }
  }

  &.loader-107 {
    width: 106px;
    height: 56px;
    background-image: linear-gradient(#fff 50px, transparent 0), linear-gradient(#fff 50px, transparent 0), linear-gradient(#fff 50px, transparent 0),
      linear-gradient(#fff 50px, transparent 0), radial-gradient(circle 14px, #fff 100%, transparent 0);
    background-size: 48px 15px, 15px 35px, 15px 35px, 25px 15px, 28px 28px;
    background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
    background-repeat: no-repeat;
    position: relative;
    transform: rotate(-45deg);

    &::after {
      content: '';
      position: absolute;
      width: 56px;
      height: 56px;
      border: 6px solid #fff;
      border-radius: 50%;
      left: -45px;
      top: -10px;
      background-repeat: no-repeat;
      background-image: linear-gradient(#fff 64px, transparent 0), linear-gradient(#fff 66px, transparent 0),
        radial-gradient(circle 4px, #fff 100%, transparent 0);
      background-size: 40px 1px, 1px 40px, 8px 8px;
      background-position: center center;
      -webkit-animation: ${rotation} 0.3s linear infinite;
      animation: ${rotation} 0.3s linear infinite;
    }

    &::before {
      content: '';
      position: absolute;
      width: 56px;
      height: 56px;
      border: 6px solid #fff;
      border-radius: 50%;
      left: -45px;
      top: -10px;
      background-repeat: no-repeat;
      background-image: linear-gradient(#fff 64px, transparent 0), linear-gradient(#fff 66px, transparent 0),
        radial-gradient(circle 4px, #fff 100%, transparent 0);
      background-size: 40px 1px, 1px 40px, 8px 8px;
      background-position: center center;
      -webkit-animation: ${rotation} 0.3s linear infinite;
      animation: ${rotation} 0.3s linear infinite;
      left: 25px;
      top: 60px;
    }
  }

  &.loader-108 {
    width: 48px;
    height: 24px;
    color: #fff;
    background: currentColor;
    border-radius: 50% 50% 0 0;
    position: relative;
    margin-top: 36px;
    -webkit-animation: ${animloader108} 4s linear infinite;
    animation: ${animloader108} 4s linear infinite;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: currentColor;
      top: -34px;
      -webkit-animation: ${animloader108s} 4s linear infinite;
      animation: ${animloader108s} 4s linear infinite;
    }
  }

  &.loader-109 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #ff3d00;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-animation: ${animloader110} 6s linear infinite;
      animation: ${animloader110} 6s linear infinite;
    }
  }

  &.loader-110 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: #263238;
      text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-animation: ${animloader110} 6s linear infinite;
      animation: ${animloader110} 6s linear infinite;
    }
  }

  &.loader-111 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #263238;
    text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #fff;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-animation: ${animloader111} 6s linear infinite;
      animation: ${animloader111} 6s linear infinite;
    }
  }

  &.loader-112 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #fff;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 34px;
      bottom: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 5px solid #fff;
      border-bottom-color: #ff3d00;
      -webkit-animation: ${rotation} 0.6s linear infinite;
      animation: ${rotation} 0.6s linear infinite;
    }
  }

  &.loader-113 {
    color: #fff;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;

    &::before {
      content: '';
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 28px;
      width: 5.15px;
      background: currentColor;
      -webkit-animation: ${animloader113L} 1s linear infinite alternate;
      animation: ${animloader113L} 1s linear infinite alternate;
    }

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      left: 125px;
      top: 2px;
      border-radius: 50%;
      background: red;
      -webkit-animation: ${animloader113} 1s linear infinite alternate;
      animation: ${animloader113} 1s linear infinite alternate;
    }
  }

  &.loader-114 {
    color: #fff;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;

    &::before {
      content: '';
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 28px;
      width: 5.15px;
      background: currentColor;
    }

    &::after {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      left: 125px;
      top: 2px;
      border-radius: 50%;
      background: red;
      -webkit-animation: ${animloader114} 1s ease-in infinite;
      animation: ${animloader114} 1s ease-in infinite;
    }
  }

  &.loader-115 {
    color: #fff;
    position: relative;
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;

    &::after {
      content: '';
      width: 5px;
      height: 5px;
      background: currentColor;
      position: absolute;
      bottom: 10px;
      right: -5px;
      -webkit-animation: ${animloader115} 1s linear infinite;
      animation: ${animloader115} 1s linear infinite;
    }
  }

  &.loader-116 {
    color: #fff;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;

    &::before {
      content: '';
      position: absolute;
      right: 70px;
      bottom: 10px;
      height: 28px;
      width: 5px;
      background: currentColor;
    }

    &::after {
      content: '';
      width: 4px;
      height: 4px;
      background: currentColor;
      position: absolute;
      right: 70px;
      top: 8px;
      -webkit-animation: ${animloader116} 0.6s ease-out infinite alternate;
      animation: ${animloader116} 0.6s ease-out infinite alternate;
    }
  }

  &.loader-117 {
    color: #fff;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    letter-spacing: 4px;

    &::before {
      content: '';
      position: absolute;
      right: 68px;
      bottom: 10px;
      height: 28px;
      width: 7px;
      outline: 1px solid #fff;
      color: #ff3d00;
      -webkit-animation: ${animloader117} 1s linear infinite alternate;
      animation: ${animloader117} 1s linear infinite alternate;
    }

    &::after {
      content: '';
      width: 4px;
      height: 4px;
      background: #ff3d00;
      position: absolute;
      right: 70px;
      top: 8px;
      -webkit-animation: ${animloader116} 1s ease-out infinite alternate;
      animation: ${animloader116} 1s ease-out infinite alternate;
    }
  }

  &.loader-118 {
    position: relative;

    &::before {
      content: 'Loading';
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 48px;
      letter-spacing: 2px;
      display: inline-block;
      -webkit-animation: ${floating} 1s ease-out infinite alternate;
      animation: ${floating} 1s ease-out infinite alternate;
    }

    &::after {
      content: '';
      width: 100%;
      height: 10px;
      background: rgba(0, 0, 0, 0.15);
      position: absolute;
      left: 0;
      top: 100%;
      filter: blur(4px);
      border-radius: 50%;
      -webkit-animation: ${animloader118} 1s ease-out infinite alternate;
      animation: ${animloader118} 1s ease-out infinite alternate;
    }
  }

  &.loader-119 {
    font-size: 48px;
    letter-spacing: 2px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    -webkit-animation: ${animloader119} 1s ease-in infinite alternate;
    animation: ${animloader119} 1s ease-in infinite alternate;
  }

  &.loader-120 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #ff3d00;
    letter-spacing: 2px;
    position: relative;

    &::after {
      content: 'Loading';
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      -webkit-animation: ${animloader111} 10s ease-in infinite;
      animation: ${animloader111} 10s ease-in infinite;
    }
  }

  &.loader-121 {
    width: 95%;
    height: 100px;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%),
      radial-gradient(circle 50px at 50px 50px, #fff 99%, transparent 0), linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    -webkit-animation: ${animloader121} 1s linear infinite;
    animation: ${animloader121} 1s linear infinite;
  }

  &.loader-122 {
    width: 95%;
    height: 100px;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#fff 100px, transparent 0),
      linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
    -webkit-animation: ${animloader121} 1s linear infinite;
    animation: ${animloader121} 1s linear infinite;
  }

  &.loader-123 {
    width: 95%;
    height: 100px;
    position: relative;
    background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#fff 20px, transparent 0),
      linear-gradient(#fff 20px, transparent 0), linear-gradient(#fff 20px, transparent 0);
    background-repeat: no-repeat;
    background-size: 75px 100px, 125px 20px, 260px 20px, 260px 20px;
    background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
    -webkit-animation: ${animloader123} 1s linear infinite;
    animation: ${animloader123} 1s linear infinite;

    &::after {
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 8px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &.loader-124 {
    width: 320px;
    height: 150px;
    position: relative;
    background: #fff;

    &::after {
      content: '';
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), linear-gradient(#ddd 56px, transparent 0),
        linear-gradient(#ddd 24px, transparent 0), linear-gradient(#ddd 18px, transparent 0), linear-gradient(#ddd 66px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      -webkit-animation: ${animloader124} 1s linear infinite;
      animation: ${animloader124} 1s linear infinite;
    }
  }

  &.loader-125 {
    width: 320px;
    height: 150px;
    position: relative;
    background: #fff;

    &::after {
      content: '';
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%),
        radial-gradient(circle 28px at 28px 28px, #ddd 99%, transparent 0), linear-gradient(#ddd 24px, transparent 0),
        linear-gradient(#ddd 18px, transparent 0), linear-gradient(#ddd 66px, transparent 0);
      background-repeat: no-repeat;
      background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
      background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
      -webkit-animation: ${animloader124} 1s linear infinite;
      animation: ${animloader124} 1s linear infinite;
    }
  }

  &.loader-126 {
    width: 164px;
    height: 170px;
    position: relative;
    background: #fff;

    &::after {
      content: '';
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      top: 15px;
      left: 15px;
      position: absolute;
      background-image: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 100%), linear-gradient(#ddd 74px, transparent 0),
        linear-gradient(#ddd 16px, transparent 0), linear-gradient(#ddd 24px, transparent 0);
      background-repeat: no-repeat;
      background-size: 50px 170px, 100% 74px, 100% 16px, 100% 32px;
      background-position: 0 0, 0 0, 0px 85px, 0px 110px;
      -webkit-animation: ${animloader126} 1s linear infinite;
      animation: ${animloader126} 1s linear infinite;
    }
  }
`;
