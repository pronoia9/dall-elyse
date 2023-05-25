import styled from 'styled-components';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

const GalleryCardOverlay = (props) => {
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);
  console.log('gallery card overlay props =>', props);

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
          <Top className='galleryCardOverlay-top' onClick={() => setPhotoSwipe(null)}>
            <i className='fa-solid fa-xmark' />
          </Top>

          {/* MIDDLE (Image) */}
          <Middle className='galleryCardOverlay-middle'></Middle>

          {/* BOTTOM (Info) */}
          <Bottom className='galleryCardOverlay-bottom'></Bottom>

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
  background: rgba(0, 0, 0, 0.8);
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
`;

const Top = styled.div`
  background: none;
  padding: 12px 0 0 10px;
  height: 44px;
  width: 100%;

  i {
    cursor: pointer;
    float: right;
    margin-right: 10px;
    font-size: 24px;
  }
`;

const Middle = styled.div`
  width: 100%;
`;

const Bottom = styled.div`
  width: 100%;
`;

/****************  CONTROLS START  ****************/
const Controls = styled.div``;

const ControlsTop = styled.div``;
