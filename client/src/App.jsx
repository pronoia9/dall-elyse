import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Canvas, Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  let location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Navbar />
      {location.pathname !== '/gallery' && <Canvas />}
      <AnimatePresence>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default App;
