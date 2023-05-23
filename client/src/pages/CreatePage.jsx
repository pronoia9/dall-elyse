import styled from 'styled-components';

import { Navigation } from '../components';
import ContentWrapper from '../hoc/ContentWrapper';
import { navigationData } from '../utils/data';

const CreatePage = () => {
  const { left, right } = navigationData.positions;

  return (
    <Container className='Container'>
      {/* Navigation Links */}
      <Navigation {...navigationData.return} {...{ position: left, center: true }} />
      <Navigation {...navigationData.gallery} {...{ position: right, center: false }} />

      <Content>
        {/* Text Section */}
        <TextContainer className='TextContainer'>
          <p>
            Generate an imaginative image through DALL-E AI and share it with the community. <br />
            Once you have created the image you want, you can share it with others in the community
          </p>
        </TextContainer>

        {/* Create/Form Section */}
        <FormSection className='FormSection'>
          {/* Image */}
          <ImageContainer className='ImageContainer'>
            <ImageWrapper className='ImageWrapper' image={null} />
            <p>CREATE</p>
          </ImageContainer>
          {/* Form */}
          <FormContainer className='FormContainer'>
            <FormWrapper className='FormWrapper'>
              {/* Name */}
              <input type='text' placeholder='Your Name' />
              {/* Prompt + Prompt Button */}
              <textarea placeholder='A futuristic cyborg dance club, neon lights' />
              <Buttons className='Buttons'>
                <button>Generate</button>
                <button>Surprise Me</button>
                <button>Share</button>
              </Buttons>
            </FormWrapper>
          </FormContainer>
        </FormSection>
      </Content>
    </Container>
  );
};
export default ContentWrapper(CreatePage, 'create');

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
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
  }

  @media only screen and (max-width: 760px) {
    margin: 0;
  }
`;

/******************  IMAGE AREA START  ******************/
const ImageContainer = styled.div`
  margin: 0 20px;
  width: calc(33.33% - 40px);

  @media only screen and (max-width: 1440px) {
    margin: 0 15px;
    width: calc(33.33% - 30px);
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 10px;
    width: calc(33.33% - 20px);
  }

  @media only screen and (max-width: 960px) {
    width: 100%;
  }

  @media only screen and (max-width: 760px) {
    margin: 0 0 30px 0;
  }
`;

const ImageWrapper = styled.div``;
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

const FormWrapper = styled.div``;

const Form = styled.div``;

const Buttons = styled.div``;
/**********************  FORM END  **********************/
/******************  FORM SECTION END  ******************/