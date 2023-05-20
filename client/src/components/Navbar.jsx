import { useState } from 'react';
import styled from 'styled-components';

import { navbarData } from '../utils/data';

const NavLink = ({ title, url }) => (
  <NavListItem>
    <a href={url} target='_blank'>
      {title}
    </a>
  </NavListItem>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        {/* Logo */}
        <Logo>
          <a>
            <img src={navbarData.logo} alt='logo' />
          </a>
        </Logo>

        {/* Navigation Links */}
        {/* Desktop Menu */}
        <NavWrapper>
          <Nav>
            <NavList>
              {navbarData.navlinks.map((link) => (
                <NavLink key={`navbar-${link.title}`} {...link} />
              ))}
            </NavList>
          </Nav>
          {/* Mobile Menu Hamburger Icon */}
          {!mobileMenuOpen && (
            <MobileMenuHamburger onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <i className='fa-solid fa-bars' />
            </MobileMenuHamburger>
          )}
        </NavWrapper>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <MobileMenu>
            {navbarData.navlinks.map((link) => (
              <NavLink key={`navbar-${link.title}`} {...link} />
            ))}
          </MobileMenu>
        )}
      </Wrapper>
    </Container>
  );
}

// STYLES
// Animation

// Styles
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
const Logo = styled.div`
  a {
    display: block;
    max-width: 150px;
    height: 100%;
    opacity: 1;
    transform: translate(0px, 0px);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
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

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const NavListItem = styled.li`
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
  @media only screen and (max-width: 960px) {
    display: block;
    width: 30px;
    height: 30px;
    font-size: 32px;
    line-height: 30px;
  }
`;

const MobileMenu = styled.div`
  display: none;

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 29px;
    margin: 0 0 18px 0;
  }

  @media only screen and (max-width: 960px) {
    display: block;
  }
`;
