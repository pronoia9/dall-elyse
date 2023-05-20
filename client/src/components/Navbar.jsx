import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { navlinks } from '../utils/data';

const NavLink = ({ title, url }) => (
  <NavListItem>
    <a href={url} target='_blank'>
      {title}
    </a>
  </NavListItem>
);

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Container>
      <Wrapper>
        {/* Logo */}
        <Logo>
          <a>
            <img src='/src/assets/logo.png' alt='logo' />
          </a>
        </Logo>

        {/* Navigation Links */}
        <NavWrapper>
          <Nav>
            <NavList>
              {navlinks.map((link, index) => (
                <NavLink key={link.title} {...link} />
              ))}
            </NavList>
          </Nav>
        </NavWrapper>

        {isMobile && <MobileMenu></MobileMenu>}
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
`;

/* --- Logo --- */
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

/* --- Navigation --- */
const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav``;

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
    font-family: 'Montserrat', sans-serif;
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
`;

const MobileMenu = styled.div``;
