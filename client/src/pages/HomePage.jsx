import { Canvas, Navigation } from '../components';
import { navigationData } from '../utils/data';

export default function HomePage() {
  const { leftMiddle, rightMiddle } = navigationData.positions;

  return (
    <>
      {/* Background */}
      <Canvas />
      {/* Navigation */}
      <Navigation key='navigation-gallery' {...navigationData.gallery} {...{ position: leftMiddle, center: true }} />
      <Navigation key='navigation-create' {...navigationData.create} position={rightMiddle} />
    </>
  );
}

