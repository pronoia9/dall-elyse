import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Gallery } from '../components';
import { useStore } from '../store/useStore';
import { galleryPageMotion } from '../utils/motion';

export default function GalleryPage() {
  const searchKey = useStore((state) => state.searchKey),
    setSearchKey = useStore((state) => state.setSearchKey);

  return (
    <Container {...galleryPageMotion()}>
      {/* Searchbar maybe? */}
      <InputWrapper>
        <input type='text' name='searchKey' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      </InputWrapper>

      {/* Gallery Grid */}
      <Gallery />
    </Container>
  );
}

const Container = styled(motion.section)`
  width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 960px) {
    width: calc(100% - 15px);
  }

  @media only screen and (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;
