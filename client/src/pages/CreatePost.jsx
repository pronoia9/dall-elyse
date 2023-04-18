import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = (e) => {
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
        const response = await fetch(import.meta.env.VITE_POST_URL, {
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
    }
    else alert('Please enter all the form fields.')
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#d5d9e0] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#c6cdd7] text-[14px] max-w-[500px]'>
          Create imaginative and visually stunning images through DALL-E AI and share them with the community.
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName='Your Name'
            type='text'
            name='name'
            placeholder='Jane Doe'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='A futuristic cyborg dance club, neon lights'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-[#0b0b14] border border-[#001e38] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {form.photo ? (
              <img src={form.photo} alt={form.photo} className='w-full h-full object-contain' />
            ) : (
              <img src={preview} alt={preview} className='w-9/12 h-9/12 object-contain opacity-50' />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader text={false} />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-[#d5d9e0] bg-[#4a6d88] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#c6cdd7] text-[14px]'>
            Once you have created the image you want, you can share it with others in the community.
          </p>
          <button
            type='submit'
            className='mt-3 text-[#c6cdd7] bg-[#001e38] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
