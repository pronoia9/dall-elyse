import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Gallery as PhotoSwipeGallery } from 'react-photoswipe-gallery';

import { useStore } from '../store/useStore';
import { GalleryCard } from './';

export default function Gallery() {
  // STORE
  const data = useStore((state) => state.data),
    searchKey = useStore((state) => state.searchKey);
  // LOCAL STATE (FILTERED DATA)
  const [filteredData, setFilteredData] = useState(data);

  const check = (a) => `${a}`.toLowerCase().includes(`${searchKey}`.toLowerCase());

  // SET SEARCH KEY WITH A 0.5s DELAY
  useEffect(() => {
    setTimeout(() => {
      setFilteredData(data.filter(({ name, prompt }) => check(name) || check(prompt)));
    }, 500);
  }, [searchKey]);

  return (
    <Container>
      <PhotoSwipeGallery withCaption withDownloadButton>
        {filteredData?.map((d, index) => (
          <GalleryCard key={`card-${d._id}`} {...d} index={index} />
        ))}
      </PhotoSwipeGallery>
    </Container>
  );
}

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
