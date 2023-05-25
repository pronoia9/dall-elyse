import styled from 'styled-components';

import GalleryCard from './GalleryCard';
import { useStore } from '../store/useStore';

const Gallery = () => {
  const data = useStore((state) => state.data);
  console.log(data);

  return (
    <Container className='gallery-container'>
      {data?.map((d, i) => (
        <GalleryCard key={`card-${d._id}`} {...d} />
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
