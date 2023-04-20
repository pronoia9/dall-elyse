import { useState, useEffect } from 'react';

import GalleryCard from './GalleryCard';

const RenderCards = ({ data, title }) =>
  data?.length > 0 ? (
    data.map((post, index) => <GalleryCard key={post._id} index={index} {...post} />)
  ) : (
    <></>
  );

const Gallery = ({ allPosts, searchText, searchedResults }) => {
  const [postsRendered, setPostsRendered] = useState(9);
  
  return (
    <section id='brxe-mfscie' className='brxe-section'>
      {/* SECTION WRAPPER */}
      <div id='brxe-dmikyu' className='brxe-container'>
        {/* TITLE */}
        <div id='brxe-qyhmpn' className='brxe-code'>
          <h2 className='txt-center'>
            The Community <span className='rad-color'>Showcase</span>
          </h2>
        </div>
        {/* GALLERY */}
        <div id='brxe-vmjrln' className='brxe-shortcode'>
          <div className='vp-portfolio vp-uid-1019295b vp-id-1098 vp-portfolio__ready'>
            {/* GALLERY ITEMS */}
            <RenderCards
              data={searchText ? searchedResults.slice(0, postsRendered) : allPosts.slice(0, postsRendered)}
              title={searchText ? 'No search results found' : 'No posts found'}
            />
            {/* BUTTON */}
            {(allPosts?.length > postsRendered || searchedResults?.length > postsRendered) ? (
              <div className='vp-portfolio__layout-elements vp-portfolio__layout-elements-bottom vp-portfolio__layout-elements-align-center'>
                <div className='vp-portfolio__pagination-wrap'>
                  <div className='vp-pagination vp-pagination__style-minimal'>
                    <div
                      className='vp-pagination__item'
                      onClick={() => setPostsRendered((postsRendered) => postsRendered + 9)}
                    >
                      <div className='vp-pagination__load-more'>
                        <span>Show more cool stuff 👀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
