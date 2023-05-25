import styled from 'styled-components';

import GalleryCard from './GalleryCard';
import { useStore } from '../store/useStore';

const Gallery = () => {
  const data = useStore((state) => state.data);
  console.log(data);

  return (
    <Container className='gallery-container'>
      <Wrapper className='gallery-wrapper'>
        {data?.map((d, i) => (
          <GalleryCard key={`card-${i}${d.id}`} {...d} />
        ))}
      </Wrapper>
    </Container>
  );
};
export default Gallery;

const Container = styled.div``;

const Wrapper = styled.div``;
