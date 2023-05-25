import styled from 'styled-components';
import { useStore } from '../store/useStore';

const GalleryCardOverlay = (props) => {
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);
  console.log('gallery card overlay props =>', props);

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
`;

const Top = styled.div`
  background: none;
  box-sizing: border-box;
  padding: 12px 0 0 10px;
  position: absolute;
  top: 0;
  left: 0;
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
