import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useStore } from '../store/useStore';
import { downloadImage } from '../utils/utils';

const GalleryCardOverlay = ({ index, name, photo, prompt, _id, isLast }) => {
  // STORE
  const resetPhotoSwipe = useStore((state) => state.resetPhotoSwipe),
    photoSwipePrev = useStore((state) => state.photoSwipePrev),
    photoSwipeNext = useStore((state) => state.photoSwipeNext);

  // EVENT LISTENER FOR ESC BUTTON TO CLOSE OVERLAY
  useEffect(() => {
    const close = (e) => { e.key === 'Escape' && resetPhotoSwipe(); };
    document.addEventListener('keydown', close);
    return () => { document.removeEventListener('keydown', close); };
  }, []);

  // EVENT LISTENER FOR LEFT/RIGHT KEYS
  useEffect(() => {
    const arrowKey = (e) => { e.key === 'ArrowLeft' ? photoSwipePrev() : e.key === 'ArrowRight' && photoSwipeNext(); };
    document.addEventListener('keydown', arrowKey);
    return () => { document.removeEventListener('keydown', arrowKey); };
  }, []);

  return (
    <>
      <Overlay>
        <Container>
          {/* TOP (Close Icon) */}
          <CloseButton onClick={() => resetPhotoSwipe(null)}>
            <i className='fa-solid fa-xmark' />
          </CloseButton>

          {/* MIDDLE (Image) */}
          <ImageContainer>
            <ImageWrapper>
              <img src={photo} />
            </ImageWrapper>
            <TextWrapper>
              <p onClick={() => navigator.clipboard.writeText(prompt)}>{prompt}</p>
              <p onClick={() => downloadImage(_id, photo)} className='fa-solid fa-cloud-arrow-down' />
            </TextWrapper>
          </ImageContainer>
        </Container>

        {/* CONTROLS */}
        <Controls>
          <ControlButton onClick={photoSwipePrev}>{index > 0 && <i className='fa-solid fa-chevron-left' />}</ControlButton>
          <ControlButton onClick={photoSwipeNext}>{!isLast && <i className='fa-solid fa-chevron-right' />}</ControlButton>
        </Controls>
      </Overlay>
    </>
  );
};
export default GalleryCardOverlay;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;

  @media only screen and (max-width: 760px) {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CloseButton = styled.div`
  padding: 10px;
  width: 100%;
  height: 44px;

  i {
    cursor: pointer;
    float: right;
    margin-right: 10px;
    font-size: 24px;
  }
`;

const ImageContainer = styled.div`
  max-width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 760px) {
    max-width: 95%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 10px 10px 44px 10px;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  min-height: 44px;
  position: relative;
  bottom: 44px;
  padding: 16px;
  background: #000;

  font-size: 12px;
  line-height: 16px;
  text-align: center;

  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  p:first-child {
    width: 100%;
  }

  P:last-child {
    padding-right: 10px;
    font-size: 16px;
  }

  p:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Controls = styled.div`
  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

const ControlButton = styled.div`
  position: absolute;
  top: calc(50% - 22px);

  font-size: 24px;
  width: 44px;
  height: 44px;
  /* background: black; */
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }
`;
