import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavigationSubtitle = styled(motion.span)`
  display: block;
  color: #5c5c60;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 18px;
  margin: 0 0 -3px 0;
  transition: transform 0.5s, color 0.5s;
`;

export const NavigationTitle = styled(NavigationSubtitle)`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  line-height: 55px;
  margin: 0 0 28px 0;
`;
