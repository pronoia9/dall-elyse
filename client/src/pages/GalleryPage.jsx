import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Gallery, Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';
import { useStore } from '../store/useStore';

const GalleryPage = () => {
  // STORE
  const loading = useStore((state) => state.loading),
    setLoading = useStore((state) => state.setLoading),
    setData = useStore((state) => state.setData),
    searchKey = useStore((state) => state.searchKey),
    setSearchKey = useStore((state) => state.setSearchKey);

  // FETCHING GALLERY DATA
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_POSTS_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const result = await response.json();
        setData(result.data.reverse());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { fetchPosts(); }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <div id='gallery-page' className='galleryPage-container'>
        {/* Navigation Links */}
        {Object.values(navigationData.galleryPage).map((link) => (
          <Navigation key={`navigation-${link.title}`} {...link} />
        ))}

        <Wrapper>
          {/* Searchbar maybe? */}
          <InputWrapper>
            <input type='text' name='searchKey' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
          </InputWrapper>

          {/* Gallery Grid */}
          <Gallery />
        </Wrapper>
      </div>
    </>
  );
};
export default ContentWrapper(GalleryPage, 'gallery');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;

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
