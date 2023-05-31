import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { Loading } from './';
import { useStore } from '../store/useStore';
import { galleryCardImageMotion, galleryCardMotion, galleryCardOverlayMotion } from '../utils/motion';
import { copyToClipboard, downloadImage } from '../utils/utils';

const GalleryCard = ({ _id, name, prompt, photo, index }) => {
  // STORE
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);
  // STATES
  const [loading, setLoading] = useState(true), [hover, setHover] = useState(false);
  // REFS
  const avatarRef = useRef(), promptRef = useRef(), downloadRef = useRef();

  const handleClick = (e) => {
    if (e.target !== downloadRef.current && e.target !== avatarRef.current && e.target !== promptRef.current) setPhotoSwipe(index);
  };

  const handleHover = (e) => {
    if (!loading) {
      e.type === 'mouseenter' && setHover(true);
      e.type === 'mouseleave' && setHover(false);
    }
  };

  const imageLoaded = () => { setLoading(true); };

  return (
    <Container hover={hover} onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHover} {...galleryCardMotion()}>
      {loading && <Loading loader={14} />}
      <motion.img key={`cardimage-${_id}`} src={photo} alt={`image-${index}`} onLoad={imageLoaded} {...galleryCardImageMotion(loading, hover)} />

      {/* OVERLAY ON HOVER */}
      {!loading && hover && (
        <Overlay hover={hover} {...galleryCardOverlayMotion(hover)}>
          {/* DOWNLOAD */}
          <ButtonContainer>
            <p ref={downloadRef} onClick={() => downloadImage(_id, photo)} className='fa-solid fa-cloud-arrow-down' />
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
  );
};
export default GalleryCard;

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
