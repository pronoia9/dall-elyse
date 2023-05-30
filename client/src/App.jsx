import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Preloader, Navbar, GalleryCardOverlay } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { useStore } from './store/useStore';
import { contentMotion } from './utils/motion';
import { getPosts } from './utils/utils';

const App = () => {
  const location = useLocation();
  // STORE
  const data = useStore((state) => state.data),
    setData = useStore((state) => state.setData),
    photoSwipe = useStore((state) => state.photoSwipe);
  // LOCAL STATE
  const [preloading, setPreloading] = useState(true),
    [time, setTime] = useState(0);
  const preloaderTime = 10;

  // FETCHING GALLERY DATA (End the loading screen in 5s if theres local data and we dont have to fetch it)
  useEffect(() => { if (getPosts(setData)) setInterval(() => { setTime(preloaderTime); }, 5000); }, []);

  // SET TIMEOUT FOR THE PRELOADER (10s)
  useEffect(() => { setTimeout(() => { setTime(preloaderTime); }, 1000 * preloaderTime); }, []);

  // ONCE BOTH DATA IS SET & TIME IS AT LEAST 10s, DISABLE PRELOADER
  useEffect(() => { if (data.length && time >= 10) setPreloading(false); }, [data, time]);

  return (
    <Container>
      <GlobalStyles />

      {preloading === -1 ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Circle className='contentwrapper-circle' />

          <AnimatePresence>
            <motion.main key={location.pathname} {...contentMotion()}>
              <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/create' element={<CreatePage />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          {/* Gallery Card Overlay (Had to be here cause of z-index) */}
          {photoSwipe && <GalleryCardOverlay {...photoSwipe} />}
        </>
      )}
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

  overflow: hidden;
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