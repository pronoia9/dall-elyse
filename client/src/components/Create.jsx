import { useState } from 'react';

import Loader from './Loader';
import { close, preview } from '../assets';
import { getRandomPrompt } from '../utils';

const Create = ({ setIsOpen }) => {
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    setForm({ ...form, prompt: getRandomPrompt(form.prompt) });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(import.meta.env.VITE_OPENAI_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.error(error);
        alert('There was an error getting a response from OpenAI.');
      } finally {
        setGeneratingImg(false);
      }
    } else alert('Please enter a prompt.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(import.meta.env.VITE_POSTS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        await response.json();
        navigate('/');
      } catch (error) {
        alert('Something went wrong posting image.');
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else alert('Please enter all the form fields.');
  };

  return (
    <div className='brx-popup brxe-popup-2159 brx-animated listening'>
      <div className='brx-popup-content brxe-container'>
        <section id='brxe-inqzid' className='brxe-section'>
          {/* Close Icon */}
          <div id='brxe-thaeqo' className='brxe-code' onClick={() => setIsOpen(false)}>
            <img src={close} alt='close-button' />
          </div>
          {/* Title */}
          <div id='brxe-dekhcm' className='brxe-code'>
            <h1 align='center'>
              Use <span className='rad-color'>DALL-Elyse</span>
            </h1>
            <h3 className='txt-center' style={{ margin: '25px auto' }}>
              Create a stunning images with the help of AI and share it with the community.
            </h3>
          </div>
          {/* Form */}
          <div id='brxe-liisel' className='brxe-block grid'>
            <form>
              <div id='brxe-nwxeps' className='brxe-form news-field' style={{ marginBottom: '25px' }}>
                {/* Name */}
                <div className='form-group'>
                  <input
                    id='form-name'
                    type='text'
                    name='name'
                    placeholder='Ex: Jane Doe'
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Prompt + Surprise Me Button */}
              <div id='brxe-nwxeps' className='brxe-form news-field news-field-main'>
                {/* Prompt */}
                <div className='form-group'>
                  <input
                    id='form-prompt'
                    type='text'
                    name='prompt'
                    value={form.prompt}
                    placeholder='A futuristic cyborg dance club, neon lights'
                    onChange={handleChange}
                  />
                </div>
                {/* Prompt Button */}
                <div className='form-group submit-button-wrapper'>
                  <div
                    className='bricks-button bricks-background-primary'
                    onClick={handleSurpriseMe}
                    style={{
                      cursor: 'pointer',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      fontSize: '13px',
                      color: 'white',
                      maxWidth: '100px',
                    }}
                  >
                    <p className='text' style={{ color: 'white' }}>
                      Surprise Me 🎁
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div id='brxe-wujkiw' className='brxe-text-basic'>
            Once you have created the image you want, you can share it with others in the community.
          </div>
          {/* Preview */}
          <img src={preview} style={{ width: '250px', heigh: 'auto' }} />
          {/* Buttons */}
          <div
            id='brxe-liisel'
            className='brxe-block grid'
            style={{
              marginTop: '25px',
              display: 'flex',
              flexDirection: 'row',
              gap: '5%',
              justifyContent: 'center',
              maxWidth: '60%'
            }}
          >
            {/* Generate Button */}
            <div id='brxe-nwxeps' className='brxe-form news-field' style={{ padding: 0, maxWidth: '200px' }}>
              <div className='form-group submit-button-wrapper'>
                <button className='bricks-button bricks-background-primary'>
                  <span className='text'>Generate</span>
                </button>
              </div>
            </div>
            {/* Share Button */}
            <div id='brxe-nwxeps' className='brxe-form news-field' style={{ padding: 0, maxWidth: '200px' }}>
              <div className='form-group submit-button-wrapper'>
                <button className='bricks-button bricks-background-primary'>
                  <span className='text'>Share</span>
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
