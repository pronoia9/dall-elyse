import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <Container>
      {/* Background */}
      <Background id='background' />

      {/* Gallery Link */}
      <LinkContainer className='gallery'>
        <LinkWrapper>
          <Link to='/gallery'>
            <span>From DALL-E</span>
            <span>Explore Gallery</span>
          </Link>
        </LinkWrapper>
      </LinkContainer>

      {/* Create Link */}
      <LinkContainer className='create'>
        <LinkWrapper>
          <Link to='/create'>
            <span>How To Make Your OWn</span>
            <span>Create Image</span>
          </Link>
        </LinkWrapper>
      </LinkContainer>
    </Container>
  );
}

// STYLES
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

// className='ashade-home-link--works ashade-home-link-wrap is-loaded'
const LinkContainer = styled.div`
  position: fixed;
  top: 100%;
  left: calc(100vw - 182px);
  width: 100vh;
  display: flex;
  justify-content: flex-start;
  transform-origin: 0% 0%;
  transform: rotate(-90deg) translate(0, 0);
  z-index: 15;
  cursor: default;
  text-align: right;
  padding-left: 100px;

  &:hover {
    z-index: 25;
  }

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
    position: absolute;
    left: 0;
    top: 21px;
  }

  span {
    &:last-child {
      font-family: 'Roboto Condensed', sans-serif;
    }
  }

  &.gallery {
    left: calc(33.33% - 21px);
    text-align: center;
    padding: 0;

    span {
      &:first-child {
        text-align: left;
        margin: 0 0 3px 0;
        transform: translateX(-100px);
        color: rgba(255, 255, 255, 0);
        color: rgba(255, 255, 255, 0.6);
        transform: translateX(-50px);
      }

      &:last-child {
        margin: 0;
        color: rgba(255, 255, 255, 0);
        transform: translateX(50px);
        color: rgba(255, 255, 255, 0.5);
        transform: translateX(0px);
      }
    }
  }

  &.create {
    left: calc(66.66% + 21px);
    text-align: left;

    span {
      &:first-child {
        text-align: right;
        margin: 0 0 3px 0;
        transform: translateX(100px);
        color: rgba(255, 255, 255, 0);
        color: rgba(255, 255, 255, 0.6);
        transform: translateX(50px);
      }

      &:last-child {
        margin: 0;
        color: rgba(255, 255, 255, 0);
        transform: translateX(-50px);
        color: rgba(255, 255, 255, 0.5);
        transform: translateX(0px);
      }
    }
  }
`;

// className='ashade-home-link is-link'
const LinkWrapper = styled.div`
  margin: 0 auto;

  span {
    display: block;
    transition: transform 0.5s, color 0.5s;

    &:first-child {
      display: block;
      color: #5c5c60;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 18px;
      margin: 0 0 -3px 0;
    }

    &:last-child {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 50px;
      line-height: 55px;
      margin: 0 0 28px 0;
    }
  }

  &:hover span:first-child {
    transform: translateX(-40px);
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover span:last-child {
    transform: translateX(-10px);
    color: #fff;
  }

  &:hover span:first-child {
    color: rgba(255, 255, 255, 0.8);
    transform: translateX(40px);
  }

  &:hover span:last-child {
    transform: translateX(10px);
    color: #fff;
  }
`;
