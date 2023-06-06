import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Preloader, Navbar, Navigation } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { useStore } from './store/useStore';
import { contentMotion, circleMotion } from './utils/motion';
import { getPosts } from './utils/utils';
import { navigationData } from './utils/data';

const App = () => {
  const location = useLocation();
  // STORE
  const data = useStore((state) => state.data),
    setData = useStore((state) => state.setData);
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

      {preloading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Circle key={location.pathname} {...circleMotion()} />

          {/* Navigation Links */}
          {Object.values(navigationData[location.pathname]).map((link) => (
            <Navigation key={`${location.pathname}-${link.title}`} {...link} />
          ))}

          <AnimatePresence>
            <Main key={location.pathname} {...contentMotion(location.pathname)}>
              <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/gallery' element={<GalleryPage />} />
                <Route path='/create' element={<CreatePage />} />
              </Routes>
            </Main>
          </AnimatePresence>
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

const Circle = styled(motion.div)`
  width: 100%;
  height: 100%;
  opacity: 0.85;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -999;

  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at left top, #28282e 0%, #000000 65%);
    z-index: -999;
  }
`;

const Main = styled(motion.main)`
  width: calc(100% - 374px);
  max-width: 1280px;
  height: 100%;
  /* padding-top: 50px; */
  /* padding-bottom: 40px; */
  margin: auto;
  overflow: scroll;

  & > div:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 1800px) {
    width: calc(100% - 352px);
  }

  @media only screen and (max-width: 1600px) {
    width: calc(100% - 312px);
  }

  @media only screen and (max-width: 1200px) {
    width: calc(100% - 272px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(100% - 176px);
    margin: auto 40px auto auto;
    /* width: calc(100% - 280px);
    margin: auto; */
  }

  @media only screen and (max-width: 760px) {
    width: calc(100% - 40px);
    margin: auto;
    /* margin: auto auto auto 20px;
    width: calc(100% - 95px); */
    /* width: 100%;
    margin: auto; */
  }
`;
