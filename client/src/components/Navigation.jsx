import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { NavigationSubtitle, NavigationTitle } from '../styles/TextStyles';
import { navigationMotion } from '../utils/motion';

const LinkType = ({ ifLink, ...props }) => (ifLink ? <Link {...props} /> : <p {...props} />);

export default function Navigation({ title = 'title', subtitle = 'subtitle', path = '/', position, center, mobileTitle, titleOffset, subtitleOffset, }) {
  const location = useLocation();
  const [isHover, setIsHover] = useState(null); // local state for hover
  const toggleOverlay = useStore((state) => state.toggleOverlay); // store, toggles overlay on background when hovering
  const { lineMotion, titleMotion, subtitleMotion } = navigationMotion; // motion data

  const checkIfLink = () => location.pathname !== path; // checks if the links path is the same as the current page

  const handleHover = (hover) => { toggleOverlay(); setIsHover(hover); };

  return (
    <LinkContainer position={position} center={center} mobileTitle={mobileTitle}>
      <Line className='navigation-line' {...lineMotion(center)} />
      <LinkWrapper center={center}>
        <LinkType to={path} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} ifLink={checkIfLink()}>
          <NavigationSubtitle {...subtitleMotion(center, subtitleOffset, isHover && checkIfLink(), mobileTitle)}>{subtitle}</NavigationSubtitle>
          <NavigationTitle {...titleMotion(center, titleOffset, isHover && checkIfLink())}>{title}</NavigationTitle>
        </LinkType>
      </LinkWrapper>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  position: fixed;
  top: 100%;
  width: 100vh;
  display: flex;
  justify-content: flex-start;
  transform-origin: 0% 0%;
  transform: rotate(-90deg) translate(0, 0);
  z-index: 15;
  padding-left: 100px;
  padding: ${(props) => props.center && '0'};

  /* Text alignments for centered vs not */
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  span {
    text-align: ${(props) => (props.center ? 'left' : 'right')};
  }

  /* left: calc()s */
  ${(props) =>
    css`
      ${props.position}
    `}

  &:hover {
    z-index: 25;
  }

  /* TITLE STYLING (MOVE FROM SIDE TO TOP) */
  /* Must set 'mobile: true/false' in 'data', not setting it is necessary to keep home page links' styling */
  @media only screen and (max-width: 960px) {
    display: ${(props) => props.mobileTitle === false && 'none'};
  }

  @media only screen and (max-width: 760px) {
    ${(props) =>
      props.mobileTitle === true &&
      css`
        display: block;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        transform: none;
        margin-bottom: 50px;

        .navigation-line {
          width: 200vh;
          left: -50%;
          top: 18px;
        }
      `}
  }
`;

const Line = styled(motion.div)`
  content: '';
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  position: absolute;
  left: 0;
  top: 21px;
`;

const LinkWrapper = styled.div`
  ${(props) =>
    props?.center &&
    css`
      margin: 0 auto;
    `}

  p {
    cursor: default;
  }

  &:hover {
    a > span {
      &:first-child {
        color: rgba(255, 255, 255, 0.8);
      }
      &:last-child {
        color: #fff;
      }
    }
  }
`;
