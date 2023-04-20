import { useState, useEffect } from 'react';

import { Navbar } from './components';
import { Home, CreatePost } from './pages';

const App = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 990px)'); // Add a listener for changes to the screen size
    setIsMobile(mediaQuery.matches); // Set the initial value of the `isMobile` state variable
    const handleMediaQueryChange = (event) => { setIsMobile(event.matches); }; // Define a callback function to handle changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);  // Add the callback function as a listener for changes to the media query
    return () => {  mediaQuery.removeEventListener('change', handleMediaQueryChange); }; // Remove the listener when the component is unmounted
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar isMobile={isMobile} />

      {/* Main */}
      <Home />
      {/* <main className='sm:p-8 px-4 py-8 w-full bg-[#0b0b14] text-[#d5d9e0] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main> */}
    </>
  );
};

export default App;
