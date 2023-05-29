import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { GalleryCardOverlay, Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { useStore } from './store/useStore';

const App = () => {
  const loading = useStore((state) => state.loading),
    setLoading = useStore((state) => state.setLoading),
    setData = useStore((state) => state.setData),
    photoSwipe = useStore((state) => state.photoSwipe);

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
  useEffect(() => {
    fetchPosts();
  }, []);

  return loading ? (
    <></>
  ) : (
    <Container>
      <GlobalStyles />
      <Navbar />
      <Circle className='contentwrapper-circle' />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>

      {/* Gallery Card Overlay (Had to be here cause of z-index) */}
      {photoSwipe && <GalleryCardOverlay {...photoSwipe} />}
    </Container>
  );
};
export default App;

const Container = styled.div`
  z-index: 5;
  position: fixed;
  width: 100%;
  height: calc(100% - 155px);
  left: 0;
  bottom: 0;
  display: block;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 0%, #000 150%);
  transition: transform 0.5s;

  overflow: scroll;
  scroll-behavior: smooth;

  @media only screen and (max-width: 960px) {
    height: calc(100% - 115px);
  }
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.85;
  position: fixed;
  z-index: -100;

  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vh;
    height: 100vh;
    background: radial-gradient(ellipse at left top, #28282e 0%, #000000 65%);
    z-index: -100;
  }
`;
