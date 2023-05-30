import styled from 'styled-components';

import { ParticlesCanvas } from '../components';

export default function HomePage() {
  return (
    <Container>
      {/* ThreeJS Particles */}
      <ParticlesCanvas />
    </Container>
  );
}

const Container = styled.section`
  span:first-child {
    color: rgba(255, 255, 255, 0.6);
  }
`;