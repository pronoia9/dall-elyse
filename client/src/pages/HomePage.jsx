import styled, { css } from 'styled-components';

import Navigation from '../components/Navigation';
import { navigationLinks } from '../utils/data';
import { useStore } from '../store/useStore';

// TODO: Change Background with Canvas (particles)

export default function HomePage() {
  const overlay = useStore((state) => state.overlay);

  return (
    <>
      {/* Background */}
      <Background id='background' overlay={overlay} />
      <div style={{ width: '75%', height: '100vh' }} />
      {/* Navigation */}
      <Navigation key={`navigation-gallery`} {...navigationLinks.gallery} position={navigationLinks.positions.leftMiddle} center={true} />
      <Navigation key={`navigation-create`} {...navigationLinks.create} position={navigationLinks.positions.rightMiddle} />
    </>
  );
}

// STYLES
const Background = styled.div`
  opacity: ${(props) => (props.overlay ? 0.25 : 0.75)};
  transition: 0.75s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1579648999496-65a8fa8d77ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')
    no-repeat center;
  background-size: cover;
`;
