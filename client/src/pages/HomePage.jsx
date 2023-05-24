import { Canvas, Navigation } from '../components';
import { navigationData, navigationPositions } from '../utils/data';

export default function HomePage() {
  const { leftMiddle, rightMiddle } = navigationPositions;

  return (
    <>
      {/* Background */}
      <Canvas />
      {/* Navigation */}
      {Object.values(navigationData.homePage).map((link) => (
        <Navigation key={`navigation-${link.title}`} {...link} />
      ))}
    </>
  );
}
