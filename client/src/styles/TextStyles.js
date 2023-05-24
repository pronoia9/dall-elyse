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
  /* margin: 0 0 -3px 0; */
  margin: 0 0 3px 0;

  @media only screen and (max-width: 960px) {
    text-align: center !important;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const NavigationTitle = styled(NavigationSubtitle)`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  line-height: 55px;
  /* margin: 0 0 28px 0; */
  margin: 0;

  @media only screen and (max-width: 960px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
