import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { navbarData } from '../utils/data';
import { logoMotion, navbarMotion, navlinksMotion } from '../utils/motion';
import { useStore } from '../store/useStore';

// TODO: Fix logo animation on start 'fade in' vs closing mobile menu 'slide in'
// TODO: Animate desktop menu links 'fade slide right'
// TODO: Animate mobile menu links 'slide up'

const NavLink = ({ title, url, animation }) => (
  <NavListItem className='navlist-item' {...animation}>
    <a href={url} target='_blank'>
      {title}
    </a>
  </NavListItem>
);

export default function Navbar() {
  const mobileMenuOpen = useStore((state) => state.mobileMenuOpen),
    openMobileMenu = useStore((state) => state.openMobileMenu),
    closeMobileMenu = useStore((state) => state.closeMobileMenu);
  const mobileMenuRef = useRef();

  // Add click event listener
  useEffect(() => {
    // Handle click outside of ref/mobilemenu
    const handleClick = (e) => {
      const { mobileMenuOpen } = useStore.getState();
      if (mobileMenuOpen && mobileMenuRef?.current !== e.target) closeMobileMenu();
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <>
      <Container id='navbar'>
        <Wrapper>
          {/* Logo */}
          {!mobileMenuOpen && (<Logo {...logoMotion()}><a><img src={navbarData.logo} alt='logo' /></a></Logo>)}

          {/* Navigation Links */}
          {/* Desktop Menu */}
          <NavWrapper>
            <Nav>
              <NavList>
                {navbarData.navlinks.map((link, index) => (
                  <NavLink key={`navbar-${link.title}`} {...link} animation={{ ...navlinksMotion.desktop(index + 1) }} />
                ))}
              </NavList>
            </Nav>
            {/* Mobile Menu Hamburger Icon */}
            {!mobileMenuOpen && (
              <MobileMenuHamburger onClick={openMobileMenu}>
                <i className='fa-solid fa-bars' />
              </MobileMenuHamburger>
            )}
          </NavWrapper>
        </Wrapper>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenuContainer id='mobile-menu' key='mobile-menu' {...navbarMotion.mobile(navbarData.navlinks.length)}>
            {/* Mobile Menu Close Icon */}
            <MobileMenuClose onClick={closeMobileMenu}>
              <i className='fa-solid fa-xmark' />
            </MobileMenuClose>
            {/* Mobile Menu Links List */}
            <MobileMenuWrapper ref={mobileMenuRef}>
              <MobileMenuNavList>
                {navbarData.navlinks.map((link, index) => (
                  <NavLink key={`navbar-${link.title}`} {...link} animation={{ ...navlinksMotion.mobile(index + 1) }} />
                ))}
              </MobileMenuNavList>
            </MobileMenuWrapper>
          </MobileMenuContainer>
        )}
      </AnimatePresence>
    </>
  );
}

// STYLED COMPONENTS
// STYLES
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: z-index 0.5s, transform 0.5s;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  @media only screen and (max-width: 960px) {
    padding: 30px 40px;
  }

  @media only screen and (max-width: 760px) {
    padding: 20px 20px;
  }
`;

/* --- LOGO --- */
const Logo = styled(motion.div)`
  a {
    display: block;
    max-width: 150px;
    height: 55px;
    opacity: 1;
    transform: translate(0px, 0px);
  }

  img {
    display: block;
    /* width: 100%; */
    /* height: auto; */
    height: 100%;
    width: auto;
  }
`;

/* --- DESKTOP NAVIGATION --- */
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const NavList = styled(motion.ul)`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const NavListItem = styled(motion.li)`
  display: block;
  position: relative;
  padding: 0;
  margin: 0 0 0 50px;
  list-style: none;

  a {
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    line-height: 29px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
    letter-spacing: 0.6px;
  }

  &:hover {
    a {
      color: rgba(255, 255, 255, 1);
    }
  }

  @media only screen and (max-width: 960px) {
    margin: 0 0 0 30px;
  }
`;

/* --- MOBILE MENU --- */
const MobileMenuHamburger = styled.div`
  display: none;

  @media only screen and (max-width: 960px) {
    pointer-events: auto;
    display: block;
    width: 30px;
    height: 30px;
    font-size: 32px;
    line-height: 30px;
  }
`;

const MobileMenuClose = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  z-index: 1001 !important;
  transition: opacity 0.3s;
  width: 30px;
  height: 30px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  line-height: 30px;
  transition: color 0.3s;
  color: #fff;
  text-align: right;
`;

const MobileMenuContainer = styled(motion.div)`
  display: none;
  opacity: 1;

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 18px 0;
  }

  @media only screen and (max-width: 960px) {
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    width: 384px;
    height: 100%;
    background: #000000;
    display: block;
    z-index: 1000;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`;

const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MobileMenuNavList = styled(motion.ul)`
  max-width: 100%;
  padding: 40px 40px;
  margin: auto 0;
  width: 100%;

  ul {
    padding: 0;
    margin: 0;
  }

  ul > li {
    padding-top: 10px;
  }

  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    color: rgba(255, 255, 255, 0.5);
    display: block;
  }

  li > a {
    /* margin-bottom: 10px; */
  }
`;
