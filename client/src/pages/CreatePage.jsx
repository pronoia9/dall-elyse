import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Loader, Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';
import placeholder from '../assets/placeholder.png';
import { getRandomPrompt } from '../utils/utils';

// TODO: Add animations
const defaultForm = { name: '', prompt: '', photo: null };

const CreatePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(defaultForm);
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => { setForm((prev) => ({ ...prev, [e.target.name]: e.target.values })); }
  
  // SURPRISE ME BUTTON THAT GENERATED RANDOM PROMPTS
  const handleSurpriseMe = () => { setForm((prev) => ({ ...prev, prompt: getRandomPrompt(form.prompt) })) }
  
  // HANDLE GENERATE
  const handleGenerate = async () => {
    if (form.prompt) {
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
        setForm((prev) => ({ ...prev, photo: `data:image/jpeg;base64,${data.photo}` }));
      } catch (error) {
        console.error(error);
      } finally {
        setGenerating(false);
      }
    } else alert('Need a prompt bro...');
  }
  
  // HANDLE SHARE
  const handleShare = () => {}

  return (
    <Container id='create-page' className='createPage-container'>
      {/* Navigation Links */}
      {Object.values(navigationData.createPage).map((link) => (
        <Navigation key={`navigation-${link.title}`} {...link} />
      ))}

      <Wrapper className='createPage-content'>
        {/* Text Section */}
        <TextContainer className='createPage-textContainer'>
          <p>Generate an imaginative image through DALL-E AI and share it with the community.</p>
          <p>Once you have created the image you want, you can share it with others in the community.</p>
        </TextContainer>

        {/* Create/Form Section */}
        <FormSection className='createPage-formSection'>
          {/* Image */}
          <ImageContainer className='createPage-imageContainer'>
            <img src={form.photo ?? placeholder} alt={form.prompt} />
            {generating && <Loader />}
          </ImageContainer>
          {/* Form */}
          <FormContainer className='createPage-formContainer'>
            <FormWrapper className='createPage-formWrapper'>
              {/* Name */}
              <input type='text' name='name' placeholder='EX: Jane Doe' value={form.name} onChange={handleChange} />
              {/* Prompt + Prompt Button */}
              <textarea type='text' name='prompt' placeholder='A futuristic cyborg dance club, neon lights' value={form.prompt} onChange={handleChange} />
              <Buttons className='Buttons'>
                <button onClick={handleGenerate}>Generate</button>
                <button onClick={handleSurpriseMe}>Surprise Me</button>
                <button onClick={handleShare}>Share</button>
              </Buttons>
            </FormWrapper>
          </FormContainer>
        </FormSection>
      </Wrapper>
    </Container>
  );
};
export default ContentWrapper(CreatePage, 'create');

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
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
  gap: 20px;

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
