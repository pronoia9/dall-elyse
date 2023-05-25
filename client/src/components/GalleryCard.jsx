import styled from 'styled-components';

const GalleryCard = ({ _id, name, prompt, photo }) => {
  return (
    <Container className='galleryCard-container'>
      <Wrapper className='galleryCard-wrapper'>
        <img src={photo} />
      </Wrapper>
    </Container>
  );
};
export default GalleryCard;

const Container = styled.div``;

const Wrapper = styled.div``;
