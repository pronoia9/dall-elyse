import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Loading } from './';
import { useStore } from '../store/useStore';
import { galleryCardMotion, galleryCardImageMotion } from '../utils/motion';

const GalleryCard = ({ _id, name, prompt, photo, index, setImagesLoaded }) => {
  // STORE
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);
  // STATES
  const [loading, setLoading] = useState(true);
  
  const handleClick = () => { setPhotoSwipe(index); }
  
  const imageLoaded = () => {
    setImagesLoaded((prev) => ([prev[0] + 1, prev[1]]));
    setLoading(false);
  }
  
  return (
    <Container key={`card-${_id}`} onClick={handleClick} {...galleryCardMotion(index, loading)}>
      {loading && <Loading />}
      <motion.img key={`cardimage-${_id}`} src={photo} onLoad={imageLoaded} {...galleryCardImageMotion(index, loading)} />
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
  cursor: pointer;
  overflow: hidden;
  /* background: #131313; */

  img {
    background: none;
    display: block;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1200px) {
    width: calc(33.33% - 40px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(50% - 40px);
  }

  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;
