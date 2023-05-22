import styled from 'styled-components';

const CreatePage = () => {
  return (
    <Container className='Container'>
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
                <button>Share</button>
                <button>Generate</button>
              </Buttons>
            </Form>
          </FormContainer>
        </Row>
      </Wrapper>
    </Container>
  );
};
export default CreatePage;

const Container = styled.div`
  width: calc(100% - 374px);
  max-width: 1280px;
  min-height: 100%;
  height: 100vh;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 -20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:last-child {
    gap: 2%;
  }
`;

const TextContainer = styled.div`
  width: 75%;
  text-align: center;
  /* margin-bottom: 80px; */
`;

const ImageContainer = styled.div`
  width: calc(33.33% - 40px);
  height: 100%;
`;

const ImageWrapper = styled.div`
  background: url(${(props) => (props.image ? props.image : '')}) center center #000;
  background-size: ${(props) => props.image && 'cover'};
  height: 100%;
  width: 100%;
`;

const FormContainer = styled.div`
  width: calc(66.66% - 40px);
`;

const Form = styled.div``;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5%;

  button {
    width: 100%;
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column-reverse;

    button {
      &:last-child {
        margin-bottom: 10px;
      }
    }
  }
`;
