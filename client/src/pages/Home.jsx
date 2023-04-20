import { useState, useEffect } from 'react';

import { Card, FormField, Loader } from '../components';
import { download } from '../assets';

const Home = () => {
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
    <main id='brx-content'>
      {/* HERO SECTION */}

      {/* GALLERY SECTION */}
      <section id='brxe-mfscie' className='brxe-section'>
        {/* SECTION WRAPPER */}
        <div id='brxe-dmikyu' className='brxe-container'>
          {/* TITLE */}
          <div id='brxe-qyhmpn' className='brxe-code'>
            <h2 className='txt-center'>
              Explore <span className='rad-color'>The Possible</span>
            </h2>
          </div>
          {/* GALLERY */}
          <div id='brxe-vmjrln' className='brxe-shortcode'>
            <div className='vp-portfolio vp-uid-1019295b vp-id-1098 vp-portfolio__ready'>
              {/* GALLERY ITEMS */}
              {allPosts?.map((post, index) => (
                <Card key={post._id} {...post} />
              ))}
              {/* BUTTON */}
              <div className='vp-portfolio__layout-elements vp-portfolio__layout-elements-bottom vp-portfolio__layout-elements-align-center'>
                <div className='vp-portfolio__pagination-wrap'>
                  <div className='vp-pagination vp-pagination__style-minimal'>
                    <div className='vp-pagination__item'>
                      <div className='vp-pagination__load-more'>
                        <span>Show more cool stuff 👀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {/* CREATE */}
      {/* CONTACT */}
    </main>
  );
};

export default Home;
