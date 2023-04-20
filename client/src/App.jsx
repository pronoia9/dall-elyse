import { useState, useEffect } from 'react';

import { Navbar, Footer } from './components';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Home />
      {/* <main className='sm:p-8 px-4 py-8 w-full bg-[#0b0b14] text-[#d5d9e0] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main> */}
      <Footer />
    </>
  );
};

export default App;
