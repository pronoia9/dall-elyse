import { download } from '../assets';
import { downloadImage } from '../utils';

const GalleryCard = ({ _id, name, prompt, photo }) => {
  return (
    <div
      key={_id}
      className='vp-portfolio__item-wrap vp-portfolio__item-uid-70aca6ce'
      style={{ padding: '10px 15px', borderRadius: '20px' }}
    >
      {/* <div className='vp-portfolio__item-popup'></div> */}
      <figure className='vp-portfolio__item'>
        <div className='vp-portfolio__item-img-wrap'>
          <div className='vp-portfolio__item-img'>
            <img src={photo} className='' alt='' />
            {/* <div className='vp-portfolio__item-img-overlay'></div> */}
          </div>
        </div>

        {/* <figcaption className='vp-portfolio__item-overlay vp-portfolio__item-align-center'></figcaption> */}
      </figure>
    </div>
  );
};

export default GalleryCard;
