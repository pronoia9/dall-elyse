import styled from 'styled-components';

import { GalleryCard, Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';
import { useStore } from '../store/useStore';

const GalleryPage = () => {
  const data = useStore((state) => state.data);
  console.log(data);

  return (
    <Container id='gallery-page' className='galleryPage-container'>
      {/* Navigation Links */}
      {Object.values(navigationData.galleryPage).map((link) => (
        <Navigation key={`navigation-${link.title}`} {...link} />
      ))}

      <Wrapper className='galleryPage-wrapper'>
        <Grid className='galleryPage-grid'>
          {data?.map((d, i) => (
            <GalleryCard key={`card-${i}${d.id}`} {...d} />
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};
export default ContentWrapper(GalleryPage, 'gallery');

const Container = styled.div``;

const Wrapper = styled.div``;

const Grid = styled.div``;