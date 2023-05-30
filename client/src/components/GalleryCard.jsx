import styled from 'styled-components';
import { useStore } from '../store/useStore';

const GalleryCard = (props) => {
  const { /*_id, name, prompt,*/ photo, index } = props;
  const setPhotoSwipe = useStore((state) => state.setPhotoSwipe);

  return (
    <Container onClick={() => { setPhotoSwipe(index); }}>
      <img src={photo} />
    </Container>
  );
};
export default GalleryCard;

const Container = styled.div`
  margin: 20px;
  width: calc(25% - 40px);

  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  cursor: pointer;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1200px) {
    width: calc(33.33% - 40px);
  }

  @media only screen and (max-width: 960px) {
    width: calc(50% - 40px);
  }

  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;
