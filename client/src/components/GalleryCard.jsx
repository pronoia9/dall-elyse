import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const GalleryCard = ({ _id, name, prompt, photo }) => {
  const [overlay, setOverlay] = useState(false);

  // HANDLE CLICK ELSEWHERE TO CLOSE OVERLAY
  const overlayRef = useRef();
  useEffect(() => {
    const handleClick = (e) => { if (overlay && e.target !== overlayRef.current) setOverlay(false); };
    document.addEventListener('mousedown', handleClick);
    return () => { document.removeEventListener('mousedown', handleClick); };
  }, [overlay]);

  return (
    <>
      <Container className='galleryCard-container' onClick={() => setOverlay(true)}>
        <Wrapper className='galleryCard-wrapper'>
          <img src={photo} />
        </Wrapper>
      </Container>

      <Overlay ref={overlayRef} overlay={overlay}>
        <p>{name}</p>
        <p>{prompt}</p>
      </Overlay>
    </>
  );
};
export default GalleryCard;

const Container = styled.div`
  margin: 20px;
  width: calc(33.33% - 40px);

  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Wrapper = styled.div``;

const Overlay = styled.div`
  display: ${(props) => !props.overlay && 'none'};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
`;
