import { Navbar } from './components';
import { HomePage } from './pages';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HomePage />
    </>
  );
};
export default App;
