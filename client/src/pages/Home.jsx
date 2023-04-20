import { useState, useEffect } from 'react';

import { Card, FormField, Loader } from '../components';
import { download } from '../assets';

const RenderCards = ({ data, title }) =>
  data?.length > 0 ? (
    data.map((post) => <Card key={post._id} {...post} />)
  ) : (
    <h2 className='mt-5 font-bold text-[#4a6d88] text-xl uppercase'>{title}</h2>
  );

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

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
  useEffect(() => {
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

  console.log(allPosts);

  return (
    <main id='brx-content' style={{ marginTop: 200 }}>
      {/* HERO SECTION */}
      {/* GALLERY */}
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
                <div
                  key={post._id}
                  className='vp-portfolio__item-wrap vp-portfolio__item-uid-70aca6ce'
                  style={{ padding: '10px 15px', borderRadius: '20px' }}
                >
                  {/* <div className='vp-portfolio__item-popup'></div> */}
                  <figure className='vp-portfolio__item'>
                    <div className='vp-portfolio__item-img-wrap'>
                      <div className='vp-portfolio__item-img'>
                        <img src={post.photo} className='' alt='' />
                        {/* <div className='vp-portfolio__item-img-overlay'></div> */}
                      </div>
                    </div>

                    {/* <figcaption className='vp-portfolio__item-overlay vp-portfolio__item-align-center'></figcaption> */}
                  </figure>
                </div>
              ))}

              {/* BUTTON */}
              <div className='vp-portfolio__layout-elements vp-portfolio__layout-elements-bottom vp-portfolio__layout-elements-align-center'>
                <div className='vp-portfolio__pagination-wrap'>
                  <div className='vp-pagination vp-pagination__style-minimal'>
                    <div className='vp-pagination__item'>
                      <a className='vp-pagination__load-more' href='/?vp_page=2'>
                        <span>Show more cool stuff 👀</span>
                        <span className='vp-pagination__load-more-loading'>
                          <span className='vp-spinner'></span>
                          <span className='vp-screen-reader-text'> Loading More...</span>
                        </span>
                        <span className='vp-pagination__load-more-no-more'>
                          You’ve reached the end of the list
                        </span>
                      </a>
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
    
    // <section className='max-w-7xl mx-auto'>
    //   <div>
    //     <h1 className='font-extrabold text-[#d5d9e0] text-[32px]'>The Community Showcase</h1>
    //     <p className='mt-2 text-[#c6cdd7] text-[14px] max-w-[500px]'>
    //       Browse through a collection of imaginative and visually stunning images generated by DALL-E AI.
    //     </p>
    //   </div>

    //   <div className='mt-16'>
    //     <FormField
    //       labelName='Search Posts'
    //       type='text'
    //       name='text'
    //       placeholder='Search Something...'
    //       value={searchText}
    //       handleChange={handleSearchChange}
    //     />
    //   </div>

    //   <div className='mt-10'>
    //     {loading ? (
    //       <div className='flex justify-center items-center'>
    //         <Loader />
    //       </div>
    //     ) : (
    //       <>
    //         {searchText && (
    //           <h2 className='font-medium text-[#666e75] text-xl mb-3'>
    //             Showing resuls for <span className='text-[#4a6d88]'>{searchText}</span>
    //           </h2>
    //         )}
    //         <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
    //           <RenderCards
    //             data={searchText ? searchedResults : allPosts}
    //             title={searchText ? 'No search results found' : 'No posts found'}
    //           />
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </section>
  );
};

export default Home;
