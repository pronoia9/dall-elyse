import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import icon from '../assets/icon.png';
import { navLinks } from '../utils';

const NavbarLink = ({ index, link, title }) => (
  <li id='menu-item-19' className='menu-item menu-item-type-custom menu-item-object-custom bricks-menu-item'>
    <a href={link} aria-current='page'>
      {title}
    </a>
  </li>
);

const Navbar = () => {
  return (
    <header id='brx-header' className='sticky'>
      <div id='brxe-xgfsbz' className='brxe-section'>
        <div id='brxe-blwmxr' className='brxe-container'>
          <Link to='/' id='brxe-lnamba' className='brxe-div'>
            <img id='brxe-ihhrdb' className='brxe-image css-filter size-full' src={icon} alt='' />
            <div id='brxe-rjutxq' className='brxe-div'>
              <div id='brxe-ssgcac' className='brxe-text-basic'>
                Open{' '}
                <span id='brxe-yfmrtv' className='brxe-text-basic rad-color'>
                  AI
                </span>
              </div>
            </div>
          </Link>

          <div id='brxe-ufdlom' className='brxe-div'>
            <div id='brxe-flwdpe' className='brxe-nav-menu'>
              <nav className='bricks-nav-menu-wrapper mobile_landscape'>
                <ul id='menu-main-menu' className='bricks-nav-menu'>
                  {/*  */}
                  {navLinks.map((link, index) => (
                    <NavbarLink key={link.title} index={index} {...link} />
                  ))}
                </ul>
              </nav>

              {/* Mobile Menu */}
              {/* <button
                className='bricks-mobile-menu-toggle'
                aria-haspopup='true'
                aria-label='Mobile menu'
                aria-pressed='false'
              >
                <span className='bar-top'></span>
                <span className='bar-center'></span>
                <span className='bar-bottom'></span>
              </button>
              <nav className='bricks-mobile-menu-wrapper right'>
                <ul id='menu-main-menu-1' className='bricks-mobile-menu' role='menubar'>
                  <li
                    className='menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-19 bricks-menu-item'
                    role='menuitem'
                    data-top-index='0'
                  >
                    <a href='/#learn-more' aria-current='page'>
                      Learn more
                    </a>
                  </li>
                  <li
                    className='menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-20 bricks-menu-item'
                    role='menuitem'
                    data-top-index='1'
                  >
                    <a href='/#examples' aria-current='page'>
                      Examples
                    </a>
                  </li>
                  <li
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-21 bricks-menu-item'
                    role='menuitem'
                    data-top-index='2'
                  >
                    <a href='https://leonardo.ai/contact-us/'>Contact</a>
                  </li>
                </ul>
              </nav>
              <div className='bricks-mobile-menu-overlay'></div> */}
            </div>

            {/* Create Button */}
            <div
              id='brxe-nzeybc'
              className='brxe-button menu-request-btn bricks-button md bricks-background-primary'
            >
              Create 🪄
            </div>

            {/* DALLE Link */}
            <a
              id='brxe-aohtdi'
              className='brxe-button menu-launch-btn bricks-button'
              href='https://openai.com/product/dall-e-2'
              target='_blank'
            >
              DALLE-E
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
