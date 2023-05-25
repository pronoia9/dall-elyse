import styled from 'styled-components';

import { Gallery, Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';

const GalleryPage = () => {
  return (
    <Container id='gallery-page' className='galleryPage-container'>
      {/* Navigation Links */}
      {Object.values(navigationData.galleryPage).map((link) => <Navigation key={`navigation-${link.title}`} {...link} />)}
      {/* Gallery Grid */}
      <Gallery />
    </Container>
  );
};
export default ContentWrapper(GalleryPage, 'gallery');

const Container = styled.div``;
