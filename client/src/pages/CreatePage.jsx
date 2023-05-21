import styled from 'styled-components';

const CreatePage = () => {
  return (
    <Container>
      <Wrapper>
        {/* Text */}
        <Row>
          <TextContainer>
            <p>Generate an imaginative image through DALL-E AI and share it with the community</p>
          </TextContainer>
        </Row>

        {/* Create */}
        <Row>
          {/* Image */}
          <ImageContainer>
            <ImageWrapper>{/* Image */}</ImageWrapper>
          </ImageContainer>
          {/* Form */}
          <FormContainer>
            <Form>
              {/* Name */}
              <input type='text' placeholder='Your Name' />
              {/* Prompt + Prompt Button */}
              <textarea />
              <Buttons>
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 -20px;
`;

const TextContainer = styled.div`
  p {
    margin-bottom: 80px;
  }
`;

const ImageContainer = styled.div`
  width: calc(33.33% - 40px);
`;

const ImageWrapper = styled.div``;

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
`;
