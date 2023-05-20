import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Navbar } from './components';
import { CreatePage, GalleryPage, HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
