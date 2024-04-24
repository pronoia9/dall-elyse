'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { useStore } from '@/store';
import { NavigationSubtitle, NavigationTitle } from '@/styles';
import { navigationMotion } from '@/utils';

const LinkType = ({ ifLink, ...props }) => (ifLink ? <Link {...props} /> : <p {...props} />);

export default function Navigation({
  title = 'title',
  subtitle = 'subtitle',
  path = '/',
  position,
  center,
  mobileTitle,
  titleOffset,
  subtitleOffset,
}) {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(null); // local state for hover
  const toggleOverlay = useStore((state) => state.toggleOverlay); // store, toggles overlay on background when hovering
  const { lineMotion, titleMotion, subtitleMotion } = navigationMotion; // motion data

  const checkIfLink = () => pathname !== path; // checks if the links path is the same as the current page

  const handleHover = (hover) => {
    toggleOverlay();
    setIsHover(hover);
  };

  return (
    <LinkContainer $position={position} $center={center} $mobileTitle={mobileTitle}>
      <Line className='navigation-line' {...lineMotion(center)} />
      <LinkWrapper $center={center}>
        <LinkType href={path} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} ifLink={checkIfLink()}>
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
  padding: ${({ $center }) => $center && '0'};

  /* Text alignments for centered vs not */
  text-align: ${($center) => ($center ? 'center' : 'left')};
  span {
    text-align: ${($center) => ($center ? 'left' : 'right')};
  }

  /* left: calc()s */
  ${({ $position }) =>
    css`
      ${$position}
    `}

  &:hover {
    z-index: 25;
  }

  /* TITLE STYLING (MOVE FROM SIDE TO TOP) */
  /* Must set 'mobile: true/false' in 'data', not setting it is necessary to keep home page links' styling */
  @media only screen and (max-width: 960px) {
    display: ${({ $mobileTitle }) => $mobileTitle === false && 'none'};
  }

  @media only screen and (max-width: 760px) {
    ${({ $mobileTitle }) =>
      $mobileTitle === true &&
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
  ${({$center}) =>
    $center &&
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
