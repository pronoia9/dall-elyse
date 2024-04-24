'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Item as PhotoSwipeItem } from 'react-photoswipe-gallery';

import { Loading } from '@/components';
import { galleryCardImageMotion, galleryCardMotion, galleryCardOverlayMotion, copyToClipboard, downloadImage, smaller } from '@/utils';

export default function GalleryCard({ _id, name, prompt, photo, index, ref, open }) {
  // STATES
  const [loading, setLoading] = useState(true),
    [hover, setHover] = useState(false);
  // REFS
  const avatarRef = useRef(),
    promptRef = useRef(),
    downloadRef = useRef();
  // Open photo swipe overlay when clicking on the image and not download link/prompt/etc
  const handleClick = (e, open) => {
    if (!loading && e.target !== downloadRef.current && e.target !== avatarRef.current && e.target !== promptRef.current) open(e);
  };

  // Handle hover state for overlay when hovering on the container after image has loaded
  const handleHover = (e) => {
    !loading && e.type === 'mouseenter' && setHover(true);
    !loading && e.type === 'mouseleave' && setHover(false);
  };

  // Function for when the image loads (onLoad)
  const imageLoaded = () => {
    setLoading(false);
  };

  // PhotoSwipe Image size
  const imageSize = smaller(window.innerWidth * 0.85, window.innerHeight * 0.85);

  return (
    <AnimatePresence>
      <PhotoSwipeItem original={photo} thumbnail={photo} alt={prompt} width={imageSize} height={imageSize}>
        {({ ref, open }) => (
          <Container ref={ref} onClick={(e) => handleClick(e, open)} onMouseEnter={handleHover} onMouseLeave={handleHover} {...galleryCardMotion()}>
            {loading && <Loading loader={14} />}
            <motion.img src={photo} alt={`image-${index}`} onLoad={imageLoaded} {...galleryCardImageMotion(hover, index, loading)} />

            {/* OVERLAY ON HOVER */}
            {!loading && hover && (
              <Overlay hover={hover} {...galleryCardOverlayMotion(hover)}>
                {/* DOWNLOAD */}
                <ButtonContainer>
                  <p ref={downloadRef} onClick={() => downloadImage(_id, photo)} className='fa-solid fa-circle-down' />
                </ButtonContainer>

                {/* FAKE AVATAR & PROMPT */}
                <TextContainer>
                  <p>
                    <span ref={avatarRef}>{name[0]}</span>
                    <span ref={promptRef} onClick={() => copyToClipboard(prompt)}>
                      {prompt}
                    </span>
                  </p>
                </TextContainer>
              </Overlay>
            )}
          </Container>
        )}
      </PhotoSwipeItem>
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  position: relative;
  margin: 20px;
  width: calc(25% - 40px);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  /* background: #131313; */

  img {
    background: none;
    display: block;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1600px) {
    width: calc(33.33% - 40px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(50% - 40px);
  }

  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;

const Overlay = styled(motion.div)`
  display: ${(props) => !props.hover && 'none'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  p {
    font-size: 24px;
    float: right;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.75);
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
      transform: scale(1.1);
    }
  }
`;

const TextContainer = styled.div`
  span:first-child {
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.9);
    color: rgba(0, 0, 0, 1);
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
  }

  span:last-child {
    cursor: pointer;
    transition: color cubic-bezier(0.19, 1, 0.22, 1) 0.5s;

    &:hover {
      color: rgba(255, 255, 255, 0.65);
    }
  }
`;
