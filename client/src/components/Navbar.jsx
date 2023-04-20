import { useState, useEffect } from 'react';

import MenuItem from './MenuItem';
import { navLinks } from '../utils';
import icon from '../assets/icon.png';
import close from '../assets/close-circle-white.svg';
import menu from '../assets/menu.svg';

const NavbarButtons = ({ styles }) => (
  <>
    <div id={styles[0]} className='brxe-button menu-request-btn bricks-button md bricks-background-primary'>
      Create 🪄
    </div>
    <a
      id={styles[1]}
      className='brxe-button menu-launch-btn bricks-button'
      href='https://openai.com/product/dall-e-2'
      target='_blank'
    >
      DALLE-E
    </a>
  </>
);

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991px)'); // Add a listener for changes to the screen size
    setIsMobile(mediaQuery.matches); // Set the initial value of the `isMobile` state variable
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }; // Define a callback function to handle changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange); // Add the callback function as a listener for changes to the media query
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }; // Remove the listener when the component is unmounted
  }, []);

  return (
    <header id='brx-header' className='sticky'>
      <div id='brxe-xgfsbz' className='brxe-section'>
        <div id='brxe-blwmxr' className='brxe-container'>
          <a href='/' id='brxe-lnamba' className='brxe-div'>
            <img id='brxe-ihhrdb' className='brxe-image css-filter size-full' src={icon} alt='' />
            <div id='brxe-rjutxq' className='brxe-div'>
              <div id='brxe-ssgcac' className='brxe-text-basic'>
                Open{' '}
                <span id='brxe-yfmrtv' className='brxe-text-basic rad-color'>
                  AI
                </span>
              </div>
            </div>
          </a>

          <div id='brxe-ufdlom' className='brxe-div'>
            <div id='brxe-flwdpe' className='brxe-nav-menu'>
              {!isMobile && (
                <nav className='bricks-nav-menu-wrapper mobile_landscape'>
                  <ul id='menu-main-menu' className='bricks-nav-menu'>
                    {navLinks.map((link, index) => (
                      <MenuItem key={link.title} index={index} {...link} />
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {isMobile && !isOpen && (
              <div id='brxe-zwuywn' className='brxe-code' onClick={() => setIsOpen(true)}>
                <img src={menu} />
              </div>
            )}

            {/* Mobile Menu */}
            {isMobile && isOpen && (
              <div className='brx-popup brxe-popup-2206'>
                <div className='brx-popup-content'>
                  <section id='brxe-rhpqbi' className='brxe-section'>
                    <div id='brxe-kpnzsk' className='brxe-container'>
                      <div id='brxe-thaeqo' className='brxe-code' onClick={() => setIsOpen(false)}>
                        <img src={close} alt='close-button' />
                      </div>
                      <div id='brxe-lbwvkh' className='brxe-nav-menu'>
                        <nav className='bricks-nav-menu-wrapper never'>
                          <ul id='menu-main-menu-2' className='bricks-nav-menu'>
                            {navLinks.map((link, index) => (
                              <MenuItem key={link.title} index={index} {...link} />
                            ))}
                          </ul>
                        </nav>
                      </div>

                      <NavbarButtons styles={['brxe-ruwtte', 'brxe-smrgev']} />
                    </div>
                  </section>
                </div>
              </div>
            )}

            {!isMobile && <NavbarButtons styles={['brxe-nzeybc', 'brxe-aohtdi']} />}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
