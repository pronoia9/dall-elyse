import styled from 'styled-components';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

// TODO: ADD ANIMATIONS
// TODO: FIX STYLING FOR 2 LINE PROMPT

const GalleryCardOverlay = ({ index, name, photo, prompt, _id }) => {
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe),
    photoSwipePrev = useStore((state) => state.photoSwipePrev),
    photoSwipeNext = useStore((state) => state.photoSwipeNext);

  // EVENT LISTENER FOR ESC BUTTON TO CLOSE OVERLAY
  useEffect(() => {
    const close = (e) => { e.key === 'Escape' && setPhotoSwipe(null); };
    document.addEventListener('keydown', (e) => close(e));
    return () => { document.removeEventListener('keydown', (e) => close(e)); };
  }, []);

  // EVENT LISTENER FOR LEFT/RIGHT KEYS
  useEffect(() => {
    const arrowKey = (e) => { e.key === 'ArrowLeft' ? photoSwipePrev() : e.key === 'ArrowRight' && photoSwipeNext(); }
    document.addEventListener('keydown', arrowKey);
    return () => { document.removeEventListener('keydown', arrowKey) }
  }, [])

  return (
    <>
      <Overlay className='galleryCardOverlay-overlay'>
        <Container className='galleryCardOverlay-container'>
          {/* TOP (Close Icon) */}
          <CloseButton className='galleryCardOverlay-closeButton' onClick={() => setPhotoSwipe(null)}>
            <i className='fa-solid fa-xmark' />
          </CloseButton>

          {/* MIDDLE (Image) */}
          <ImageContainer className='galleryCardOverlay-imageContainer'>
            <ImageWrapper>
              <img src={photo} />
            </ImageWrapper>
            <TextWrapper>
              <p onClick={() => navigator.clipboard.writeText(prompt)}>{prompt}</p>
            </TextWrapper>
          </ImageContainer>
        </Container>

        {/* CONTROLS */}
        <Controls className='galleryCardOverlay-controls'>
          <ControlButton onClick={photoSwipePrev}>{index > 0 && <i className='fa-solid fa-chevron-left' />}</ControlButton>
          <ControlButton onClick={photoSwipeNext}>
            <i className='fa-solid fa-chevron-right' />
          </ControlButton>
        </Controls>
      </Overlay>
    </>
  );
};
export default GalleryCardOverlay;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 5px 5px 44px 5px;
  max-width: 55%;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  bottom: 44px;
  max-width: 50%;
  height: 44px;
  padding: 0 16px;

  font-size: 12px;
  line-height: 16px;
  text-align: center;
  
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Controls = styled.div``;

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
