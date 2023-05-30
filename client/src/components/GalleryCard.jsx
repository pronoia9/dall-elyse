import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { galleryCardMotion, galleryCardImageMotion } from '../utils/motion';

const GalleryCard = (props) => {
  const { _id, name, prompt, photo, index } = props;
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);

  return (
    <Container key={`card-${_id}`} onClick={() => { setPhotoSwipe(index); }} {...galleryCardMotion()}>
      <motion.img key={`cardimage-${_id}`} src={photo} {...galleryCardImageMotion()} />
    </Container>
  );
};
export default GalleryCard;

const Container = styled(motion.div)`
  margin: 20px;
  width: calc(25% - 40px);

  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
  overflow: hidden;

  img {
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
