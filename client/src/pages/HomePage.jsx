import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container>
      {/* Background */}
      <Background id='background' />

      {/* Gallery Link */}
      <LinkLeft>
        <Link to='/gallery'></Link>
      </LinkLeft>

      {/* Create Link */}
      <LinkRight>
        <Link to='/create'></Link>
      </LinkRight>
    </Container>
  );
}

const Container = styled.div``;

const Background = styled.div`
  opacity: 0.75;
  transition: left 0.5s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1634128510033-a548c3456cad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3318&q=80')
    no-repeat center;
  background-size: cover;
`;

const LinkLeft = styled.div``;

const LinkRight = styled(LinkLeft)``;
