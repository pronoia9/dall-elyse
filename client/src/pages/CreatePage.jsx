import styled from 'styled-components';

import ContentWrapper from '../hoc/ContentWrapper';

const CreatePage = () => {
  return (
    <Container className='Container'>
      {/* Gallery Link */}
      <Wrapper className='Wrapper'>
        {/* Text */}
        <Row className='Row'>
          <TextContainer className='TextContainer'>
            <p>
              Generate an imaginative image through DALL-E AI and share it with the community.
              <br />
              Once you have created the image you want, you can share it with others in the community
            </p>
          </TextContainer>
        </Row>

        {/* Create */}
        <Row className='Row'>
          {/* Image */}
          <ImageContainer className='ImageContainer'>
            <ImageWrapper className='ImageWrapper' image={null} />
          </ImageContainer>
          {/* Form */}
          <FormContainer className='FormContainer'>
            <Form className='Form'>
              {/* Name */}
              <input type='text' placeholder='Your Name' />
              {/* Prompt + Prompt Button */}
              <textarea placeholder='A futuristic cyborg dance club, neon lights' />
              <Buttons className='Buttons'>
                <button>Generate</button>
                <button>Surprise Me</button>
                <button>Share</button>
              </Buttons>
            </Form>
          </FormContainer>
        </Row>
      </Wrapper>
      {/* Back Link */}
    </Container>
  );
};
export default ContentWrapper(CreatePage, 'create');

const Container = styled.div``;

const Wrapper = styled.div``;

const Row = styled.div``;

const TextContainer = styled.div``;

const ImageContainer = styled.div``;

const ImageWrapper = styled.div``;

const FormContainer = styled.div``;

const Form = styled.div``;

const Buttons = styled.div``;
