import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
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
    </>
  );
};
export default App;
