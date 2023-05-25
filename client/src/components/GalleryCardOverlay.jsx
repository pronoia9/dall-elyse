import styled from 'styled-components';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

const GalleryCardOverlay = ({ index, name, photo, prompt, _id }) => {
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);

  // EVENT LISTENER FOR ESC BUTTON TO CLOSE OVERLAY
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') setPhotoSwipe(null);
    };
    document.addEventListener('keydown', (e) => close(e));
    return () => {
      document.removeEventListener('keydown', (e) => close(e));
    };
  }, []);

  return (
    <>
      <Overlay className='galleryCardOverlay-overlay'>
        <Container className='galleryCardOverlay-container'>
          {/* TOP (Close Icon) */}
          <CloseButton className='galleryCardOverlay-top' onClick={() => setPhotoSwipe(null)}>
            <i className='fa-solid fa-xmark' />
          </CloseButton>

          {/* MIDDLE (Image) */}
          <ImageWrapper className='galleryCardOverlay-middle'>
            <img src={photo} />
            <p onClick={() => navigator.clipboard.writeText(prompt)}>{prompt}</p>
          </ImageWrapper>

          {/* CONTROLS */}
          <Controls className='galleryCardOverlay-controls'>
            <ControlsTop className='galleryCardOverlay-controlsTop'></ControlsTop>
          </Controls>
        </Container>
      </Overlay>
    </>
  );
};
export default GalleryCardOverlay;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
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

const ImageWrapper = styled.div`
  max-width: 75%;
  height: calc(100% - 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 100%;
    height: auto;
    max-height: calc(100% - 44px);
  }

  p {
    min-height: 44px;
    max-height: 88px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: color 0.5s;

    &:hover {
      color: #fff;
    }
  }
`;

const Bottom = styled(CloseButton)``;

/****************  CONTROLS START  ****************/
const Controls = styled.div``;

const ControlsTop = styled.div``;
