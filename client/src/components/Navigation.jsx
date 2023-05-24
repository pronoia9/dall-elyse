import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { useStore } from '../store/useStore';
import { NavigationSubtitle, NavigationTitle } from '../styles/TextStyles';
import { navigationMotion } from '../utils/motion';

export default function Navigation({ title = 'title', subtitle = 'subtitle', path = '/', position, center, mobile, titleOffset, subtitleOffset }) {
  const toggleOverlay = useStore((state) => state.toggleOverlay);
  const { containerMotion, titleMotion, subtitleMotion } = navigationMotion;

  return (
    <LinkContainer position={position} center={center} mobile={mobile} {...containerMotion(center)}>
      <LinkWrapper center={center}>
        <Link to={path} onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
          <NavigationSubtitle {...subtitleMotion(center, subtitleOffset)}>{subtitle}</NavigationSubtitle>
          <NavigationTitle {...titleMotion(center, titleOffset)}>{title}</NavigationTitle>
        </Link>
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
  padding: ${(props) => (props.center && '0')};

  /* Text alignments for centered vs not */
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  span { text-align: ${(props) => (props.center ? 'left' : 'right')}; }

  /* left: calc()s */
  ${(props) => css`${props.position}`}

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

  @media only screen and (max-width: 960px) {
    display: ${(props) => (!props.mobile ? 'none' : 'block')};
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transform: none;
    margin-bottom: 50px;

    &:before {
      width: 200vh;
      left: -50%;
      top: 18px;
    }
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
