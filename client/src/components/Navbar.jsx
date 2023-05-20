import { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
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
        {isMobile ? (
          <>
            {/* Desktop */}
            <Nav></Nav>
          </>
        ) : (
          <>
            {/* Mobile Menu */}
            <MobileMenu></MobileMenu>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
export default Navbar;

const Container = styled.div``;

const Wrapper = styled.div``;

const Logo = styled.div``;

const Nav = styled.nav``;

const MobileMenu = styled.div``;
