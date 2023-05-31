import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStore } from '../store/useStore';
import { GalleryCard } from './';

const Gallery = () => {
  // STORE
  const data = useStore((state) => state.data), searchKey = useStore((state) => state.searchKey);
  // LOCAL STATE (FILTERED DATA)
  const [filteredData, setFilteredData] = useState(data);
  const [imagesLoaded, setImagesLoaded] = useState([0, data.length]);

  useEffect(() => {
    const check = (a) => `${a}`.toLowerCase().includes(`${searchKey}`.toLowerCase());
    setTimeout(() => {
      setFilteredData(data.filter(({ name, prompt }) => check(name) || check(prompt)));
     }, 500);
  }, [searchKey]);

  return (
    <Container>
      {filteredData?.map((d, index) => (
        <GalleryCard key={`card-${d._id}`} {...d} index={index} setImagesLoaded={setImagesLoaded} />
      ))}
    </Container>
  );
};
export default Gallery;

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
