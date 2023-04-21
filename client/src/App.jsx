import { useState, useEffect } from 'react';

import { Navbar, Hero, Create, Gallery, About, Contact, Footer, LearnMore } from './components';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_POSTS_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        // alert('Something went wrong getting posts.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <Create setIsOpen={setIsOpen} />}
      <main id='brx-content'>
        <Hero allPosts={allPosts} searchText={searchText} setSearchText={setSearchText} setSearchedResults={setSearchedResults} />
        <Gallery allPosts={allPosts} searchText={searchText} searchedResults={searchedResults} />
        <About />
        <LearnMore />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
