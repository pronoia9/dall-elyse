import { aboutCols } from '../utils/index';

const AboutColumn = ({ id, image, title, description }) => (
  <div id={`brxe-${id[0]}`} className='brxe-block craft-item'>
    <div id={`brxe-${id[1]}`} className='brxe-code code-svg'>
      <img src={image} style={{ width: 75, height: 'auto' }} />
    </div>
    <h4 id={`brxe-${id[2]}`} className='brxe-heading'>{title}</h4>
    <div id={`brxe-${id[3]}`} className='brxe-text-basic'>{description}</div>
  </div>
);

const About = () => (
  <section id='brxe-bsbfqq' className='brxe-section'>
    <div id='brxe-mlkpgf' className='brxe-container'>
      <div id='brxe-exwufv' data-script-id='exwufv' className='brxe-code'>
        <h2 className='txt-center'>
          Craft Worlds <span className='rad-color'>in Minutes</span> <br />
          Not Months
        </h2>
      </div>
      <div id='brxe-ltcvfw' className='brxe-container grid col-gap-120 craft-worlds grid-af-190 row-gap-50'>
        {aboutCols.map((col, index) => <AboutColumn key={`about-${index}`} {...col} />)}
      </div>
    </div>
  </section>
);

export default About;
