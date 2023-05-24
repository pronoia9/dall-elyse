import { Canvas, Navigation } from '../components';
import { navigationData, navigationPositions } from '../utils/data';

export default function HomePage() {
  const { leftMiddle, rightMiddle } = navigationPositions;

  return (
    <>
      {/* Background */}
      <Canvas />
      {/* Navigation */}
      <Navigation key='navigation-gallery' {...navigationData.gallery} position={leftMiddle} center={true} />
      <Navigation key='navigation-create' {...navigationData.create} position={rightMiddle} />
    </>
  );
}
