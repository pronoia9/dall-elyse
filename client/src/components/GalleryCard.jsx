import { useState } from 'react';
import styled from 'styled-components';

const GalleryCard = ({ _id, name, prompt, photo }) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <Container className='galleryCard-container' onClick={() => setOverlay((prev) => !prev)}>
        <Wrapper className='galleryCard-wrapper'>
          <img src={photo} />
        </Wrapper>
      </Container>

      <Overlay overlay={overlay}>
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

const Wrapper = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  display: ${(props) => !props.overlay && 'none'};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`;
