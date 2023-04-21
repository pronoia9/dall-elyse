import { close, preview } from '../assets';

const Create = ({ setIsOpen }) => {
  return (
    <div className='brx-popup brxe-popup-2159 brx-animated listening'>
      <div className='brx-popup-content brxe-container'>
        <section id='brxe-inqzid' className='brxe-section'>
          <div id='brxe-thaeqo' className='brxe-code' onClick={() => setIsOpen(false)}>
            <img src={close} alt='close-button' />
          </div>
          <div id='brxe-dekhcm' className='brxe-code'>
            <h1 align='center'>
              Use <span className='rad-color'>DALL-Elyse</span>
            </h1>
            <br />
            <h3 className='txt-center' style={{ marginBottom: '25px' }}>
              Create a stunning images with the help of AI and share it with the community.
            </h3>
          </div>
          <div id='brxe-liisel' className='brxe-block grid'>
            <form>
              <div
                id='brxe-nwxeps'
                className='brxe-form news-field news-field-main'
                style={{ marginBottom: '25px' }}
              >
                <div className='form-group'>
                  <input
                    id='form-field-08e6c6'
                    name='form-field-kmhhru'
                    type='email'
                    value=''
                    placeholder='Email'
                    required=''
                  />
                </div>
              </div>

              <div id='brxe-nwxeps' className='brxe-form news-field news-field-main'>
                <div className='form-group'>
                  <input
                    id='form-field-08e6c6'
                    name='form-field-kmhhru'
                    type='email'
                    value=''
                    placeholder='Email'
                    required=''
                  />
                </div>
                <div className='form-group submit-button-wrapper'>
                  <button className='bricks-button bricks-background-primary'>
                    <span className='text'>Surprise Me 🎁</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div id='brxe-wujkiw' className='brxe-text-basic'>
            Once you have created the image you want, you can share it with others in the community.
          </div>
          <img src={preview} style={{ width: '250px', heigh: 'auto' }} />
          <div id='brxe-liisel' className='brxe-block grid' style={{ marginTop: '25px' }}>
            <div id='brxe-nwxeps' className='brxe-form news-field news-field-main' style={{ padding: 0 }}>
              <div className='form-group submit-button-wrapper'>
                <button className='bricks-button bricks-background-primary'>
                  <span className='text'>Share with the community</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Create;
