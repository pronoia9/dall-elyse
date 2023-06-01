import styled from 'styled-components';

import { Gallery } from '../components';
import { useStore } from '../store/useStore';

export default function GalleryPage() {
  const searchKey = useStore((state) => state.searchKey),
    setSearchKey = useStore((state) => state.setSearchKey);

  return (
    <Container>
      {/* Searchbar maybe? */}
      <InputWrapper>
        <input type='text' name='searchKey' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      </InputWrapper>

      {/* Gallery Grid */}
      <GalleryWrapper>
        <Gallery />
      </GalleryWrapper>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
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

const GalleryWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  padding-bottom: 40px;
`;