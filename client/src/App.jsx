import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Navbar } from './components';
import { Home, CreatePost } from './pages';
import { logo } from './assets';

const App = () => (
  <BrowserRouter>
    {/* Old Navbar */}
    {/* <header className='w-full flex justify-between items-center bg-[#001e38] sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-28 object-contain' />
      </Link>
      <Link
        to='/create-post'
        className='font-inter font-medium bg-[#4a6d88] text-[#d5d9e0] px-4 py-2 rounded-md'
      >
        Create
      </Link>
    </header> */}

    {/* Navbar */}
    <Navbar />

    {/* Main */}
    {/* <main className='sm:p-8 px-4 py-8 w-full bg-[#0b0b14] text-[#d5d9e0] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main> */}
  </BrowserRouter>
);

export default App;
