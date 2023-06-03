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

    // Filter data
  const filter = (data) => data.filter(({ name, prompt }) => check(name) || check(prompt));

  // SET SEARCH KEY WITH A 0.5s DELAY
  useEffect(() => { setTimeout(() => { setFilteredData(filter(data)); }, 500); }, [searchKey]);

  // Update data
  useEffect(() => { setFilteredData(filter(data)); }, [data]);

  // PHOTOSWIPE OPTIONS
  const options = {
    pswpModule: () => import('photoswipe'),
    zoom: false,
    close: true,
    counter: true,
    bgOpacity: 0.75,
    loop: true,
    wheelToZoom: true,
    pinchToClose: true,
    preload: [1, 4],
    closeTitle: 'Close the dialog',
    zoomTitle: 'Zoom the photo',
    arrowPrevTitle: 'Go to the previous photo',
    arrowNextTitle: 'Go to the next photo',
    errorMsg: 'The photo cannot be loaded',
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
