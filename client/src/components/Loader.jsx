import './Loader.css';

const Loader = ({ text }) => (
  <>
    <div className='arc'></div>
    {text && (
      <h1 className='loading-text'>
        <span>LOADING</span>
      </h1>
    )}
  </>
);

export default Loader;
