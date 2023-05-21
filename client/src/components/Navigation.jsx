import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import { motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { NavigationSubtitle, NavigationTitle } from '../styles/TextStyles';

// TODO: Add animation
// TODO: Separate text styles and make a TextStyles.js file

export default function Navigation({ title, subtitle, path, position, margin }) {
  const toggleOverlay = useStore((state) => state.toggleOverlay);

  return (
    <LinkContainer position={position}>
      <LinkWrapper margin={margin}>
        <Link to={path} onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
          <NavigationSubtitle>{subtitle}</NavigationSubtitle>
          <NavigationTitle>{title}</NavigationTitle>
        </Link>
      </LinkWrapper>
    </LinkContainer>
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
    props?.margin === 'center' &&
    css`
      margin: 0 auto;
    `}
`;
