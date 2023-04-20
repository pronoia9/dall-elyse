import { useState } from 'react';

import MenuItem from './MenuItem';
import { navLinks } from '../utils';
import icon from '../assets/icon.png';

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

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

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
              <div id='brxe-zwuywn' class='brxe-code' onClick={() => setIsOpen(true)}>
                <svg viewBox='0 0 10 8' width='22'>
                  <path d='M1 1h8M1 4h 8M1 7h8' stroke='#fff' stroke-width='1' stroke-linecap='round'></path>
                </svg>
              </div>
            )}

            {/* Mobile Menu */}
            {isMobile && isOpen && (
              <div className='brx-popup brxe-popup-2206'>
                <div className='brx-popup-content'>
                  <section id='brxe-rhpqbi' className='brxe-section'>
                    <div id='brxe-kpnzsk' className='brxe-container'>
                      <div id='brxe-thaeqo' className='brxe-code' onClick={() => setIsOpen(false)}>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'>
                          <g
                            fill='none'
                            stroke='#000'
                            stroke-linecap='round'
                            stroke-miterlimit='10'
                            stroke-width='10'
                          >
                            <path d='m10 10 45 45M10 55l45-45'></path>
                          </g>
                        </svg>
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
