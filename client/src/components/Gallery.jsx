import GalleryCard from './GalleryCard';

const RenderCards = ({ data, title }) =>
  data?.length > 0 ? (
    data.map((post, index) => <GalleryCard key={post._id} index={index} {...post} />)
  ) : (
    <></>
  );

const Gallery = ({ allPosts, searchText, searchedResults }) => {
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
            {/* {allPosts
              ?.filter(
                (post) =>
                  post.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  post.prompt.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((post, index) => (
                <GalleryCard key={post._id} index={index} {...post} />
              ))} */}
            <RenderCards
              data={searchText ? searchedResults : allPosts}
              title={searchText ? 'No search results found' : 'No posts found'}
            />
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
  );
};
export default Gallery;
