'use client';

// Copyright (c) 2023 by Hakim El Hattab (https://codepen.io/hakimel/pen/kawJWE)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import styled, { keyframes } from 'styled-components';

const Loader = () => (
  <Container>
    <Wrapper>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </Wrapper>
  </Container>
);

export default Loader;

const spin = keyframes`
  from {
    opacity: 0.0;
  }
  to {
    opacity: 0.6;
    transform: translate3d(-4px, -4px, 570px);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -moz-perspective: 500px;
  -webkit-perspective: 500px;
  perspective: 500px;

  i {
    display: block;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    opacity: 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px white;
    animation-name: ${spin};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  i:nth-child(1) {
    -moz-transform: rotate(11.6129deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(11.6129deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(11.6129deg) translate3d(80px, 0, 0);
    transform: rotate(11.6129deg) translate3d(80px, 0, 0);
    animation-delay: 0.04839s;
  }

  i:nth-child(2) {
    -moz-transform: rotate(23.22581deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(23.22581deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(23.22581deg) translate3d(80px, 0, 0);
    transform: rotate(23.22581deg) translate3d(80px, 0, 0);
    animation-delay: 0.09677s;
  }

  i:nth-child(3) {
    -moz-transform: rotate(34.83871deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(34.83871deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(34.83871deg) translate3d(80px, 0, 0);
    transform: rotate(34.83871deg) translate3d(80px, 0, 0);
    animation-delay: 0.14516s;
  }

  i:nth-child(4) {
    -moz-transform: rotate(46.45161deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(46.45161deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(46.45161deg) translate3d(80px, 0, 0);
    transform: rotate(46.45161deg) translate3d(80px, 0, 0);
    animation-delay: 0.19355s;
  }

  i:nth-child(5) {
    -moz-transform: rotate(58.06452deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(58.06452deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(58.06452deg) translate3d(80px, 0, 0);
    transform: rotate(58.06452deg) translate3d(80px, 0, 0);
    animation-delay: 0.24194s;
  }

  i:nth-child(6) {
    -moz-transform: rotate(69.67742deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(69.67742deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(69.67742deg) translate3d(80px, 0, 0);
    transform: rotate(69.67742deg) translate3d(80px, 0, 0);
    animation-delay: 0.29032s;
  }

  i:nth-child(7) {
    -moz-transform: rotate(81.29032deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(81.29032deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(81.29032deg) translate3d(80px, 0, 0);
    transform: rotate(81.29032deg) translate3d(80px, 0, 0);
    animation-delay: 0.33871s;
  }

  i:nth-child(8) {
    -moz-transform: rotate(92.90323deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(92.90323deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(92.90323deg) translate3d(80px, 0, 0);
    transform: rotate(92.90323deg) translate3d(80px, 0, 0);
    animation-delay: 0.3871s;
  }

  i:nth-child(9) {
    -moz-transform: rotate(104.51613deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(104.51613deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(104.51613deg) translate3d(80px, 0, 0);
    transform: rotate(104.51613deg) translate3d(80px, 0, 0);
    animation-delay: 0.43548s;
  }

  i:nth-child(10) {
    -moz-transform: rotate(116.12903deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(116.12903deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(116.12903deg) translate3d(80px, 0, 0);
    transform: rotate(116.12903deg) translate3d(80px, 0, 0);
    animation-delay: 0.48387s;
  }

  i:nth-child(11) {
    -moz-transform: rotate(127.74194deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(127.74194deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(127.74194deg) translate3d(80px, 0, 0);
    transform: rotate(127.74194deg) translate3d(80px, 0, 0);
    animation-delay: 0.53226s;
  }

  i:nth-child(12) {
    -moz-transform: rotate(139.35484deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(139.35484deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(139.35484deg) translate3d(80px, 0, 0);
    transform: rotate(139.35484deg) translate3d(80px, 0, 0);
    animation-delay: 0.58065s;
  }

  i:nth-child(13) {
    -moz-transform: rotate(150.96774deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(150.96774deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(150.96774deg) translate3d(80px, 0, 0);
    transform: rotate(150.96774deg) translate3d(80px, 0, 0);
    animation-delay: 0.62903s;
  }

  i:nth-child(14) {
    -moz-transform: rotate(162.58065deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(162.58065deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(162.58065deg) translate3d(80px, 0, 0);
    transform: rotate(162.58065deg) translate3d(80px, 0, 0);
    animation-delay: 0.67742s;
  }

  i:nth-child(15) {
    -moz-transform: rotate(174.19355deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(174.19355deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(174.19355deg) translate3d(80px, 0, 0);
    transform: rotate(174.19355deg) translate3d(80px, 0, 0);
    animation-delay: 0.72581s;
  }

  i:nth-child(16) {
    -moz-transform: rotate(185.80645deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(185.80645deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(185.80645deg) translate3d(80px, 0, 0);
    transform: rotate(185.80645deg) translate3d(80px, 0, 0);
    animation-delay: 0.77419s;
  }

  i:nth-child(17) {
    -moz-transform: rotate(197.41935deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(197.41935deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(197.41935deg) translate3d(80px, 0, 0);
    transform: rotate(197.41935deg) translate3d(80px, 0, 0);
    animation-delay: 0.82258s;
  }

  i:nth-child(18) {
    -moz-transform: rotate(209.03226deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(209.03226deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(209.03226deg) translate3d(80px, 0, 0);
    transform: rotate(209.03226deg) translate3d(80px, 0, 0);
    animation-delay: 0.87097s;
  }

  i:nth-child(19) {
    -moz-transform: rotate(220.64516deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(220.64516deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(220.64516deg) translate3d(80px, 0, 0);
    transform: rotate(220.64516deg) translate3d(80px, 0, 0);
    animation-delay: 0.91935s;
  }

  i:nth-child(20) {
    -moz-transform: rotate(232.25806deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(232.25806deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(232.25806deg) translate3d(80px, 0, 0);
    transform: rotate(232.25806deg) translate3d(80px, 0, 0);
    animation-delay: 0.96774s;
  }

  i:nth-child(21) {
    -moz-transform: rotate(243.87097deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(243.87097deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(243.87097deg) translate3d(80px, 0, 0);
    transform: rotate(243.87097deg) translate3d(80px, 0, 0);
    animation-delay: 1.01613s;
  }

  i:nth-child(22) {
    -moz-transform: rotate(255.48387deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(255.48387deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(255.48387deg) translate3d(80px, 0, 0);
    transform: rotate(255.48387deg) translate3d(80px, 0, 0);
    animation-delay: 1.06452s;
  }

  i:nth-child(23) {
    -moz-transform: rotate(267.09677deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(267.09677deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(267.09677deg) translate3d(80px, 0, 0);
    transform: rotate(267.09677deg) translate3d(80px, 0, 0);
    animation-delay: 1.1129s;
  }

  i:nth-child(24) {
    -moz-transform: rotate(278.70968deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(278.70968deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(278.70968deg) translate3d(80px, 0, 0);
    transform: rotate(278.70968deg) translate3d(80px, 0, 0);
    animation-delay: 1.16129s;
  }

  i:nth-child(25) {
    -moz-transform: rotate(290.32258deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(290.32258deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(290.32258deg) translate3d(80px, 0, 0);
    transform: rotate(290.32258deg) translate3d(80px, 0, 0);
    animation-delay: 1.20968s;
  }

  i:nth-child(26) {
    -moz-transform: rotate(301.93548deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(301.93548deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(301.93548deg) translate3d(80px, 0, 0);
    transform: rotate(301.93548deg) translate3d(80px, 0, 0);
    animation-delay: 1.25806s;
  }

  i:nth-child(27) {
    -moz-transform: rotate(313.54839deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(313.54839deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(313.54839deg) translate3d(80px, 0, 0);
    transform: rotate(313.54839deg) translate3d(80px, 0, 0);
    animation-delay: 1.30645s;
  }

  i:nth-child(28) {
    -moz-transform: rotate(325.16129deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(325.16129deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(325.16129deg) translate3d(80px, 0, 0);
    transform: rotate(325.16129deg) translate3d(80px, 0, 0);
    animation-delay: 1.35484s;
  }

  i:nth-child(29) {
    -moz-transform: rotate(336.77419deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(336.77419deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(336.77419deg) translate3d(80px, 0, 0);
    transform: rotate(336.77419deg) translate3d(80px, 0, 0);
    animation-delay: 1.40323s;
  }

  i:nth-child(30) {
    -moz-transform: rotate(348.3871deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(348.3871deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(348.3871deg) translate3d(80px, 0, 0);
    transform: rotate(348.3871deg) translate3d(80px, 0, 0);
    animation-delay: 1.45161s;
  }

  i:nth-child(31) {
    -moz-transform: rotate(360deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(360deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(360deg) translate3d(80px, 0, 0);
    transform: rotate(360deg) translate3d(80px, 0, 0);
    animation-delay: 1.5s;
  }

  i:nth-child(32) {
    -moz-transform: rotate(371.6129deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(371.6129deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(371.6129deg) translate3d(80px, 0, 0);
    transform: rotate(371.6129deg) translate3d(80px, 0, 0);
    animation-delay: 1.54839s;
  }

  i:nth-child(33) {
    -moz-transform: rotate(383.22581deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(383.22581deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(383.22581deg) translate3d(80px, 0, 0);
    transform: rotate(383.22581deg) translate3d(80px, 0, 0);
    animation-delay: 1.59677s;
  }

  i:nth-child(34) {
    -moz-transform: rotate(394.83871deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(394.83871deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(394.83871deg) translate3d(80px, 0, 0);
    transform: rotate(394.83871deg) translate3d(80px, 0, 0);
    animation-delay: 1.64516s;
  }

  i:nth-child(35) {
    -moz-transform: rotate(406.45161deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(406.45161deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(406.45161deg) translate3d(80px, 0, 0);
    transform: rotate(406.45161deg) translate3d(80px, 0, 0);
    animation-delay: 1.69355s;
  }

  i:nth-child(36) {
    -moz-transform: rotate(418.06452deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(418.06452deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(418.06452deg) translate3d(80px, 0, 0);
    transform: rotate(418.06452deg) translate3d(80px, 0, 0);
    animation-delay: 1.74194s;
  }

  i:nth-child(37) {
    -moz-transform: rotate(429.67742deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(429.67742deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(429.67742deg) translate3d(80px, 0, 0);
    transform: rotate(429.67742deg) translate3d(80px, 0, 0);
    animation-delay: 1.79032s;
  }

  i:nth-child(38) {
    -moz-transform: rotate(441.29032deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(441.29032deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(441.29032deg) translate3d(80px, 0, 0);
    transform: rotate(441.29032deg) translate3d(80px, 0, 0);
    animation-delay: 1.83871s;
  }

  i:nth-child(39) {
    -moz-transform: rotate(452.90323deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(452.90323deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(452.90323deg) translate3d(80px, 0, 0);
    transform: rotate(452.90323deg) translate3d(80px, 0, 0);
    animation-delay: 1.8871s;
  }

  i:nth-child(40) {
    -moz-transform: rotate(464.51613deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(464.51613deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(464.51613deg) translate3d(80px, 0, 0);
    transform: rotate(464.51613deg) translate3d(80px, 0, 0);
    animation-delay: 1.93548s;
  }

  i:nth-child(41) {
    -moz-transform: rotate(476.12903deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(476.12903deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(476.12903deg) translate3d(80px, 0, 0);
    transform: rotate(476.12903deg) translate3d(80px, 0, 0);
    animation-delay: 1.98387s;
  }

  i:nth-child(42) {
    -moz-transform: rotate(487.74194deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(487.74194deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(487.74194deg) translate3d(80px, 0, 0);
    transform: rotate(487.74194deg) translate3d(80px, 0, 0);
    animation-delay: 2.03226s;
  }

  i:nth-child(43) {
    -moz-transform: rotate(499.35484deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(499.35484deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(499.35484deg) translate3d(80px, 0, 0);
    transform: rotate(499.35484deg) translate3d(80px, 0, 0);
    animation-delay: 2.08065s;
  }

  i:nth-child(44) {
    -moz-transform: rotate(510.96774deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(510.96774deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(510.96774deg) translate3d(80px, 0, 0);
    transform: rotate(510.96774deg) translate3d(80px, 0, 0);
    animation-delay: 2.12903s;
  }

  i:nth-child(45) {
    -moz-transform: rotate(522.58065deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(522.58065deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(522.58065deg) translate3d(80px, 0, 0);
    transform: rotate(522.58065deg) translate3d(80px, 0, 0);
    animation-delay: 2.17742s;
  }

  i:nth-child(46) {
    -moz-transform: rotate(534.19355deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(534.19355deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(534.19355deg) translate3d(80px, 0, 0);
    transform: rotate(534.19355deg) translate3d(80px, 0, 0);
    animation-delay: 2.22581s;
  }

  i:nth-child(47) {
    -moz-transform: rotate(545.80645deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(545.80645deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(545.80645deg) translate3d(80px, 0, 0);
    transform: rotate(545.80645deg) translate3d(80px, 0, 0);
    animation-delay: 2.27419s;
  }

  i:nth-child(48) {
    -moz-transform: rotate(557.41935deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(557.41935deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(557.41935deg) translate3d(80px, 0, 0);
    transform: rotate(557.41935deg) translate3d(80px, 0, 0);
    animation-delay: 2.32258s;
  }

  i:nth-child(49) {
    -moz-transform: rotate(569.03226deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(569.03226deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(569.03226deg) translate3d(80px, 0, 0);
    transform: rotate(569.03226deg) translate3d(80px, 0, 0);
    animation-delay: 2.37097s;
  }

  i:nth-child(50) {
    -moz-transform: rotate(580.64516deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(580.64516deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(580.64516deg) translate3d(80px, 0, 0);
    transform: rotate(580.64516deg) translate3d(80px, 0, 0);
    animation-delay: 2.41935s;
  }

  i:nth-child(51) {
    -moz-transform: rotate(592.25806deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(592.25806deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(592.25806deg) translate3d(80px, 0, 0);
    transform: rotate(592.25806deg) translate3d(80px, 0, 0);
    animation-delay: 2.46774s;
  }

  i:nth-child(52) {
    -moz-transform: rotate(603.87097deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(603.87097deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(603.87097deg) translate3d(80px, 0, 0);
    transform: rotate(603.87097deg) translate3d(80px, 0, 0);
    animation-delay: 2.51613s;
  }

  i:nth-child(53) {
    -moz-transform: rotate(615.48387deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(615.48387deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(615.48387deg) translate3d(80px, 0, 0);
    transform: rotate(615.48387deg) translate3d(80px, 0, 0);
    animation-delay: 2.56452s;
  }

  i:nth-child(54) {
    -moz-transform: rotate(627.09677deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(627.09677deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(627.09677deg) translate3d(80px, 0, 0);
    transform: rotate(627.09677deg) translate3d(80px, 0, 0);
    animation-delay: 2.6129s;
  }

  i:nth-child(55) {
    -moz-transform: rotate(638.70968deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(638.70968deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(638.70968deg) translate3d(80px, 0, 0);
    transform: rotate(638.70968deg) translate3d(80px, 0, 0);
    animation-delay: 2.66129s;
  }

  i:nth-child(56) {
    -moz-transform: rotate(650.32258deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(650.32258deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(650.32258deg) translate3d(80px, 0, 0);
    transform: rotate(650.32258deg) translate3d(80px, 0, 0);
    animation-delay: 2.70968s;
  }

  i:nth-child(57) {
    -moz-transform: rotate(661.93548deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(661.93548deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(661.93548deg) translate3d(80px, 0, 0);
    transform: rotate(661.93548deg) translate3d(80px, 0, 0);
    animation-delay: 2.75806s;
  }

  i:nth-child(58) {
    -moz-transform: rotate(673.54839deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(673.54839deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(673.54839deg) translate3d(80px, 0, 0);
    transform: rotate(673.54839deg) translate3d(80px, 0, 0);
    animation-delay: 2.80645s;
  }

  i:nth-child(59) {
    -moz-transform: rotate(685.16129deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(685.16129deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(685.16129deg) translate3d(80px, 0, 0);
    transform: rotate(685.16129deg) translate3d(80px, 0, 0);
    animation-delay: 2.85484s;
  }

  i:nth-child(60) {
    -moz-transform: rotate(696.77419deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(696.77419deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(696.77419deg) translate3d(80px, 0, 0);
    transform: rotate(696.77419deg) translate3d(80px, 0, 0);
    animation-delay: 2.90323s;
  }

  i:nth-child(61) {
    -moz-transform: rotate(708.3871deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(708.3871deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(708.3871deg) translate3d(80px, 0, 0);
    transform: rotate(708.3871deg) translate3d(80px, 0, 0);
    animation-delay: 2.95161s;
  }

  i:nth-child(62) {
    -moz-transform: rotate(720deg) translate3d(80px, 0, 0);
    -ms-transform: rotate(720deg) translate3d(80px, 0, 0);
    -webkit-transform: rotate(720deg) translate3d(80px, 0, 0);
    transform: rotate(720deg) translate3d(80px, 0, 0);
    animation-delay: 3s;
  }
`;
