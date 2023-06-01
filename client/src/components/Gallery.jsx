import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Gallery as PhotoSwipeGallery } from 'react-photoswipe-gallery';

import { useStore } from '../store/useStore';
import { GalleryCard } from './';
import 'photoswipe/dist/photoswipe.css';
import '../styles/default-skin.css';

export default function Gallery() {
  // STORE
  const data = useStore((state) => state.data),
    searchKey = useStore((state) => state.searchKey);
  // LOCAL STATE (FILTERED DATA)
  const [filteredData, setFilteredData] = useState(data);

  // Check if input includes the search key
  const check = (a) => `${a}`.toLowerCase().includes(`${searchKey}`.toLowerCase());

  // SET SEARCH KEY WITH A 0.5s DELAY
  useEffect(() => {
    setTimeout(() => {
      setFilteredData(data.filter(({ name, prompt }) => check(name) || check(prompt)));
    }, 500);
  }, [searchKey]);

  // PHOTOSWIPE OPTIONS
  const options = {
    zoom: false,
    close: true,
    counter: true,
    bgOpacity: 0.75,
    pswpModule: () => import('photoswipe'),
  };

  return (
    <Container>
      <PhotoSwipeGallery withDownloadButton withCaption options={options}>
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

  @media only screen and (max-width: 760px) {
    margin: -15px 0;
  }
`;
