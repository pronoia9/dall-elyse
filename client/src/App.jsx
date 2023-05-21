import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/create' element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
};
export default App;
