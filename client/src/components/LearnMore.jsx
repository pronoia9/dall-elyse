import { useState } from 'react';
import { learnMore } from '../utils';

const LearnMoreBox = ({ index, id, title, description, open, handleClick }) => (
  <div
    id={`brxe-${id[0]}`}
    className={`brxe-div c${index + 1} tab-title${open ? ' brx-open' : ''}`} onClick={handleClick}
  >
    <div id={`brxe-${id[1]}`} className='brxe-div number'>
      <div id={`brxe-${id[2]}`} className='brxe-text-basic'>
        {index + 1}
      </div>
    </div>
    <div id={`brxe-${id[3]}`} className='brxe-div'>
      <div id={`brxe-${id[4]}`} className='brxe-text-basic'>
        {title}
      </div>
      <div id={`brxe-${id[5]}`} className='brxe-text-basic'>
        {description}
      </div>
    </div>
  </div>
);

const LearnMore = () => {
  const [active, setActive] = useState(learnMore[0]);

  return (
    <section id='learn-more' className='brxe-section'>
      <div id='brxe-gtnkua' className='brxe-container'>
        <div id='brxe-ximfdp' className='brxe-code'>
          <h2 className='txt-center'>
            Fast, Easy and <span className='rad-color'>Artist Friendly</span> 🧑‍🎨
          </h2>
        </div>
        <div id='brxe-vbnkvu' className='brxe-tabs-nested grid grid-artist col-gap-40'>
          {learnMore.map((data, index) => (
            <LearnMoreBox key={`learn_more-${index}`} index={index} {...data} open={active.title === data.title} handleClick={() => setActive(data)} />
          ))}
          <div id={`brxe-${active.id[6]}`} className={`brxe-block grid-art-img tab-pane brx-open`}>
            <img
              id={`brxe-${active.id[7]}`}
              className='brxe-image css-filter size-large'
              src={active.image}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
