import styled from 'styled-components';
import { Canvas, Navigation } from '../components';
import { navigationData, navigationPositions } from '../utils/data';

export default function HomePage() {
  const { leftMiddle, rightMiddle } = navigationPositions;

  return (
    <Container id='home-page'>
      {/* Background */}
      <Canvas />
      {/* Navigation */}
      {Object.values(navigationData.homePage).map((link) => (
        <Navigation key={`navigation-${link.title}`} {...link} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  span:first-child {
    color: rgba(255, 255, 255, 0.6);
  }
`;