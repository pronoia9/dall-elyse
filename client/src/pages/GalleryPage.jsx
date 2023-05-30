import styled from 'styled-components';

import { Gallery, Navigation } from '../components';
import { navigationData } from '../utils/data';
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
      <Gallery />
    </Container>
  );
}

const Container = styled.div`
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
