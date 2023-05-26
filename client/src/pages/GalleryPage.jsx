// import { useState } from 'react';
import styled from 'styled-components';

import { Gallery, Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

const GalleryPage = () => {
  // STORE
  const loading = useStore((state) => state.loading),
    setLoading = useStore((state) => state.setLoading),
    data = useStore((state) => state.data),
    setData = useStore((state) => state.setData);

  // FETCHING GALLERY DATA
  const fetchPosts = async () => {
    console.log('fetching posts');
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
      alert('Something went wrong getting posts.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container id='gallery-page' className='galleryPage-container'>
      {/* Navigation Links */}
      {Object.values(navigationData.galleryPage).map((link) => (
        <Navigation key={`navigation-${link.title}`} {...link} />
      ))}

      {/* Searchbar maybe? */}

      {/* Gallery Grid */}
      <Gallery />
    </Container>
  );
};
export default ContentWrapper(GalleryPage, 'gallery');

const Container = styled.div``;
