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
            <img />
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

const Logo = styled.div``;

const NavWrapper = styled.div``;

const Nav = styled.nav``;

const NavList = styled.ul``;

const NavListItem = styled.li``;

const MobileMenu = styled.div``;
