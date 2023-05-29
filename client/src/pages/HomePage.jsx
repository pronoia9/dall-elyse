import styled from 'styled-components';
import { Particles, Navigation } from '../components';
import { navigationData } from '../utils/data';

export default function HomePage() {
  return (
    <Container id='home-page'>
      {/* Background */}
      <Particles />
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