import { useState } from 'react';

import icon from '../assets/icon.png';
import { navLinks } from '../utils';
import './Navbar.css';

const NavbarLink = ({ index, link, title }) => (
  <li id='menu-item-19' className='menu-item menu-item-type-custom menu-item-object-custom bricks-menu-item'>
    <a href={link} aria-current='page'>
      {title}
    </a>
  </li>
);

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
  const [isMobile, setisMobile] = useState(false);

  return !isMobile ? (
    // Web Menu
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
                      <NavbarLink key={link.title} index={index} {...link} />
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            <NavbarButtons styles={['brxe-nzeybc', 'brxe-aohtdi']} />
          </div>
        </div>
      </div>
    </header>
  ) : (
    // Mobile Menu
    <div data-popup-id='2206' class='brx-popup brxe-popup-2206 listening'>
      <div class='brx-popup-content'>
        <section id='brxe-rhpqbi' class='brxe-section'>
          <div id='brxe-kpnzsk' class='brxe-container'>
            <div id='brxe-thaeqo' class='brxe-code'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'>
                <g fill='none' stroke='#000' stroke-linecap='round' stroke-miterlimit='10' stroke-width='10'>
                  <path d='m10 10 45 45M10 55l45-45'></path>
                </g>
              </svg>
            </div>
            <div id='brxe-lbwvkh' class='brxe-nav-menu'>
              <nav class='bricks-nav-menu-wrapper never'>
                <ul id='menu-main-menu-2' class='bricks-nav-menu'>
                  {navLinks.map((link, index) => (
                    <NavbarLink key={link.title} index={index} {...link} />
                  ))}
                </ul>
              </nav>
            </div>

            <NavbarButtons styles={['brxe-ruwtte', 'brxe-smrgev']} />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Navbar;
