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
          {/*  */}
          {/* <div id='brxe-tqbtwq' className='brxe-div c1 tab-title brx-open'>
            <div id='brxe-xmewoc' className='brxe-div number'>
              <div id='brxe-pkkonv' className='brxe-text-basic'>
                1
              </div>
            </div>
            <div id='brxe-wwscio' className='brxe-div'>
              <div id='brxe-icsnit' className='brxe-text-basic'>
                Use an Existing Model
              </div>
              <div id='brxe-hujvwo' className='brxe-text-basic'>
                Use a general or fine-tuned model to generate all sorts of production-ready art assets.
              </div>
            </div>
          </div> */}
          {/*  */}
          {/* <div id='brxe-ckxiqj' className='brxe-block grid-art-img tab-pane brx-open'>
            <img
              src='https://leonardo-cdn.b-cdn.net/wp-content/uploads/2022/12/use-existing-model-880x1024.png'
              className='brxe-image css-filter size-large'
              alt=''
              decoding='async'
              loading='eager'
              id='brxe-iffjce'
              sizes='(max-width: 880px) 100vw, 880px'
            />
          </div> */}
          {/*  */}
          {/* <div id='brxe-kuozju' className='brxe-div c2 tab-title'>
            <div id='brxe-qnuneh' className='brxe-div number'>
              <div id='brxe-oajiol' className='brxe-text-basic'>
                2
              </div>
            </div>
            <div id='brxe-smylyn' className='brxe-div'>
              <div id='brxe-gpeteu' className='brxe-text-basic'>
                Train Your Own AI Models
              </div>
              <div id='brxe-qakwbg' className='brxe-text-basic'>
                In just a few clicks, you can train your own AI model and generate thousands of variations and
                deviations from your training data. Iterate to your heart's content.
              </div>
            </div>
          </div> */}
          {/*  */}
          {/* <div id='brxe-kuvfqz' className='brxe-block grid-art-img tab-pane'>
            <img
              width='453'
              height='530'
              src='https://leonardo-cdn.b-cdn.net/wp-content/uploads/2022/12/AI-train.png'
              className='brxe-image css-filter size-full'
              alt=''
              decoding='async'
              loading='eager'
              id='brxe-xlxnrj'
              sizes='(max-width: 453px) 100vw, 453px'
            />
          </div> */}
          {/*  */}
          {/* <div id='brxe-hdalft' className='brxe-block c3 tab-menu'>
            <div id='brxe-zbugrd' className='brxe-div tab-title'>
              <div id='brxe-ehezic' className='brxe-div number'>
                <div id='brxe-tawmmd' className='brxe-text-basic'>
                  3
                </div>
              </div>
              <div id='brxe-joxxwz' className='brxe-div'>
                <div id='brxe-zjehaq' className='brxe-text-basic'>
                  Discover Unlimited Potential
                </div>
                <div id='brxe-dmldij' className='brxe-text-basic'>
                  Create a universe with infinite possibilities in minutes. Rapidly iterate with ease while
                  keeping a consistent look or style. T
                  <span
                  // style='background-color: var(--bricks-color-utpgak); color: var(--bricks-color-njbocs)'
                  >
                    his is a real Game Changer.
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/*  */}
          {/* <div id='brxe-ukegzg' className='brxe-block grid-art-img tab-pane'>
            <img
              width='771'
              height='736'
              src='https://leonardo-cdn.b-cdn.net/wp-content/uploads/2022/12/unlimited-potential.png'
              className='brxe-image css-filter size-full'
              alt=''
              decoding='async'
              loading='eager'
              id='brxe-anaaee'
              sizes='(max-width: 771px) 100vw, 771px'
            />
          </div> */}
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
