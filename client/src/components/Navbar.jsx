import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import icon from '../assets/icon.png';

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
                <ul id='menu-main-menu' className='bricks-nav-menu' role='menubar'>
                  <li
                    id='menu-item-19'
                    className='menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-19 bricks-menu-item'
                    role='menuitem'
                    data-top-index='0'
                  >
                    <a href='/#learn-more' aria-current='page'>
                      Learn more
                    </a>
                  </li>
                  <li
                    id='menu-item-20'
                    className='menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-20 bricks-menu-item'
                    role='menuitem'
                    data-top-index='1'
                  >
                    <a href='/#examples' aria-current='page'>
                      Examples
                    </a>
                  </li>
                  <li
                    id='menu-item-21'
                    className='menu-item menu-item-type-custom menu-item-object-custom menu-item-21 bricks-menu-item'
                    role='menuitem'
                    data-top-index='2'
                  >
                    <a href='https://leonardo.ai/contact-us/'>Contact</a>
                  </li>
                </ul>
              </nav>
              <button
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
              <div className='bricks-mobile-menu-overlay'></div>
            </div>
            <div
              id='brxe-zwuywn'
              data-script-id='zwuywn'
              className='brxe-code'
              data-interactions='[{"id":"hahteq","trigger":"click","action":"startAnimation","target":"popup","templateId":"2206","animationType":"slideInRight","animationDuration":".1s"}]'
              data-interaction-id='dc3bec'
            >
              <svg viewBox='0 0 10 8' width='22'>
                <path d='M1 1h8M1 4h 8M1 7h8' stroke='#fff' stroke-width='1' stroke-linecap='round'></path>
              </svg>
            </div>
            <span
              id='brxe-nzeybc'
              className='brxe-button menu-request-btn bricks-button md bricks-background-primary'
              data-interactions='[{"id":"vuefkg","trigger":"click","action":"show","target":"popup","templateId":"2159"}]'
              data-interaction-id='ad9631'
            >
              Create
            </span>
            <a
              id='brxe-aohtdi'
              className='brxe-button menu-launch-btn bricks-button'
              data-interactions='[{"id":"qzvajw","trigger":"click","action":"show","target":"popup","templateId":"2441"}]'
              data-interaction-id='7b5c63'
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
