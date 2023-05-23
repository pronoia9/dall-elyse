import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { easeInOut, motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { NavigationSubtitle, NavigationTitle } from '../styles/TextStyles';
import { navigationMotion } from '../utils/motion';

export default function Navigation({ title = 'title', subtitle = 'subtitle', path = '/', position, center }) {
  const toggleOverlay = useStore((state) => state.toggleOverlay);

  return (
    <motion.div {...navigationMotion.container(center)}>
      <LinkContainer position={position}>
        <LinkWrapper center={center}>
          <Link to={path} onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
            <NavigationSubtitle {...navigationMotion.subtitle(center)}>{subtitle}</NavigationSubtitle>
            <NavigationTitle {...navigationMotion.title(center)}>{title}</NavigationTitle>
          </Link>
        </LinkWrapper>
      </LinkContainer>
    </motion.div>
  );
}

const LinkContainer = styled.div`
  position: fixed;
  top: 100%;
  left: calc(100vw - 182px);
  width: 100vh;
  display: flex;
  justify-content: flex-start;
  transform-origin: 0% 0%;
  transform: rotate(-90deg) translate(0, 0);
  z-index: 15;
  /* cursor: default; */
  padding-left: 100px;
  /* text-align: center; */

  span {
    &:first-child {
      margin: 0 0 3px 0;
      color: rgba(255, 255, 255, 0);
      color: rgba(255, 255, 255, 0.6);
    }

    &:last-child {
      margin: 0;
      color: rgba(255, 255, 255, 0);
      color: rgba(255, 255, 255, 0.5);
    }
  }

  ${(props) =>
    css`
      ${props.position}
    `}

  &:hover {
    z-index: 25;
  }

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
    position: absolute;
    left: 0;
    top: 21px;
  }
`;

const LinkWrapper = styled.div`
  ${(props) =>
    props?.center &&
    css`
      margin: 0 auto;
    `}

  &:hover {
    span {
      &:first-child {
        color: rgba(255, 255, 255, 0.8);
        transform: translateX(${(props) => (props?.center ? -40 : 40)}px);
      }

      &:last-child {
        color: #fff;
        transform: translateX(${(props) => (props?.center ? -10 : 10)}px);
      }
    }
  }
`;
