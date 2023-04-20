import { useState, useEffect } from 'react';

import { Navbar, Hero, Gallery, About, Create, Contact, Footer } from './components';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

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

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter(
          (post) =>
            post.name.toLowerCase().includes(searchText.toLowerCase()) ||
            post.prompt.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <>
      <Navbar />
      <main id='brx-content'>
        <Hero />
        <Gallery />
        <About />
        <Create />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
