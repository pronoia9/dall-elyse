import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GalleryCardOverlay, Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';
import { useStore } from './store/useStore';

const App = () => {
  const photoSwipe = useStore((state) => state.photoSwipe);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </AnimatePresence>

      {/* Gallery Card Overlay */}
      {photoSwipe && <GalleryCardOverlay {...photoSwipe} />}
    </>
  );
};
export default App;
