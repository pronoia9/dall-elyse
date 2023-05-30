import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Loading, Navigation } from '../components';
import { navigationData } from '../utils/data';
import { getRandomPrompt } from '../utils/utils';
import placeholder from '../assets/placeholder.png';
import { createPageMotion } from '../utils/motion';

// TODO: Add animations
const defaultForm = { name: '', prompt: '', photo: null, generationPrompt: false, shared: false };

export default function CreatePage () {
  const [form, setForm] = useState(defaultForm);
  const [generating, setGenerating] = useState(false);
  const [sharing, setSharing] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SURPRISE ME BUTTON THAT GENERATED RANDOM PROMPTS
  const handleSurpriseMe = () => {
    setForm((prev) => ({ ...prev, prompt: getRandomPrompt(form.prompt) }));
  };

  // HANDLE GENERATE
  const handleGenerate = async () => {
    if (generating) alert('Please chill out.');
    else if (!form.prompt) alert('Need a prompt bro...');
    else {
      try {
        setGenerating(true);
        const response = await fetch(import.meta.env.VITE_OPENAI_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`, generationPrompt: form.prompt });
      } catch (error) {
        console.error(error);
      } finally {
        setGenerating(false);
      }
    }
  };

  // HANDLE SHARE
  const handleShare = async () => {
    if (!form.prompt || !form.photo) alert('Please enter a prompt and generate an image.');
    else if (!form.shared) {
      setSharing(true);
      try {
        const response = await fetch(import.meta.env.VITE_POSTS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form, prompt: form.generationPrompt, name: !form.name && 'Anonymous' }),
        });
        await response.json();
      } catch (error) {
        console.log(error);
      } finally {
        setForm({ ...form, shared: true });
        setSharing(false);
      }
    }
  };

  return (
    <Container {...createPageMotion()}>
      <Wrapper>
        {/* Text Section */}
        <TextContainer>
          <p>Generate an imaginative image through DALL-E AI and share it with the community.</p>
          <p>Once you have created the image you want, you can share it with others in the community.</p>
        </TextContainer>

        {/* Create/Form Section */}
        <FormSection>
          {/* Image */}
          <ImageContainer>
            <img src={form.photo ?? placeholder} alt={form.prompt} />
            {generating && (
              <LoaderContainer>
                <Loading />
              </LoaderContainer>
            )}
          </ImageContainer>
          {/* Form */}
          <FormContainer>
            <FormWrapper>
              {/* Name */}
              <input id='name' type='text' name='name' placeholder='EX: Jane Doe' value={form.name} onChange={handleChange} />
              {/* Prompt */}
              <textarea
                id='prompt'
                type='text'
                name='prompt'
                placeholder='A futuristic cyborg dance club, neon lights'
                value={form.prompt}
                onChange={handleChange}
                required
              />
              <Buttons>
                <button onClick={handleGenerate} disabled={generating || sharing ? true : false}>
                  {generating ? 'Generating...' : 'Generate'}
                </button>
                <button onClick={handleSurpriseMe}>Surprise Me</button>
                <button onClick={handleShare} disabled={generating || sharing ? true : false}>
                  {sharing ? 'Sharing...' : form.shared ? 'Shared' : 'Share'}
                </button>
              </Buttons>
            </FormWrapper>
          </FormContainer>
        </FormSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media only screen and (max-width: 960px) {
    gap: 40px;
  }
`;

/*****************  TEXT SECTION START  *****************/
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    text-align: center;
    width: 100%;
    max-width: 735px;
    margin: 0 auto;
  }
`;
/******************  TEXT SECTION END  ******************/

/*****************  FORM SECTION START  *****************/
const FormSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 -20px;

  @media only screen and (max-width: 1440px) {
    margin: 0 -15px;
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 -10px;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 20px;
  }

  @media only screen and (max-width: 760px) {
    margin: 0;
  }
`;

/******************  IMAGE AREA START  ******************/
const ImageContainer = styled.div`
  position: relative;
  width: calc(33.33% - 40px);
  background: #111;
  margin: 0 20px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 1440px) {
    width: calc(33.33% - 30px);
    margin: 0 15px;
  }

  @media only screen and (max-width: 1200px) {
    width: calc(33.33% - 20px);
    margin: 0 10px;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  @media only screen and (max-width: 760px) {
    margin: 0 0 30px 0;
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
/*******************  IMAGE AREA END  *******************/

/*********************  FORM START  *********************/
const FormContainer = styled.div`
  margin: 0 20px;
  width: calc(66.66% - 40px);

  @media only screen and (max-width: 1440px) {
    margin: 0 15px;
    width: calc(66.66% - 30px);
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 10px;
    width: calc(66.66% - 20px);
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`;

const FormWrapper = styled.div`
  textarea {
    max-height: 150px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  button {
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    gap: 5px;
  }
`;
/**********************  FORM END  **********************/
/******************  FORM SECTION END  ******************/
