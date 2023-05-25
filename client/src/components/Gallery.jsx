import styled from 'styled-components';

import { useStore } from '../store/useStore';
import { GalleryCard, GalleryCardOverlay } from './';

const Gallery = () => {
  const data = useStore((state) => state.data),
    photoSwipe = useStore((state) => state.photoSwipe);

  return (
    <Container className='gallery-container'>
      {/* Gallery Cards */}
      {data?.map((d, index) => (
        <GalleryCard key={`card-${d._id}`} {...d} index={index} />
      ))}
    </Container>
  );
};
export default Gallery;

const Container = styled.div`
  margin: -20px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1200px) {
    margin: -15px;
  }

  @media only screen and (max-width: 760px) {
    margin: -15px 0;
  }
`;
