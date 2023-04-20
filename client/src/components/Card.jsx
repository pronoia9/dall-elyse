import { download } from '../assets';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
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

export default Card;

{
  /* <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
  <img className='w-full h-auto object-cover rounded-xl' src={photo} alt={prompt} />
  <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
    <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>

    <div className='mt-5 flex justify-between items-center gap-2'>
      <div className='flex items-center gap-2'>
        <div className='w-7 h-7 rounded-full object-cover bg-[#4a6d88] flex justify-center items-center text-white text-xs font-bold'>
          {name[0]}
        </div>
        <p className='text-white text-sm'>{name}</p>
      </div>
      <button
        type='button'
        onClick={() => downloadImage(_id, photo)}
        className='outline-none bg-transparent border-none'
      >
        <img src={download} alt='download' className='w-6 h-6 object-contain' />
      </button>
    </div>
  </div>
</div>; */
}
