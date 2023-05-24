import styled from 'styled-components';

import { Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';

const GalleryPage = () => {
  return (
    <Container>
      {/* Navigation Links */}
      <Navigation {...navigationData.return} {...{ position: left, center: true }} />
      <Navigation {...navigationData.gallery} {...{ position: right, center: false }} />
    </Container>
  );
};
export default ContentWrapper(GalleryPage, 'gallery');
