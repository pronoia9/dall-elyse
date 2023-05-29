// The MIT License (MIT)

// Copyright (c) 2023 Dimitra Vasilopoulou (https://codepen.io/mimikos/pen/wKqyqY)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { Canvas } from '@react-three/fiber';

const Background = () => {
  const overlay = useStore((state) => state.overlay);

  return (
    <Container key='background-canvas' id='background' overlay={overlay}>
      <Canvas>
        <mesh>
          <torusGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </Container>
  );
};
export default Background;

// STYLES
const Container = styled(motion.div)`
  opacity: ${(props) => (props.overlay ? 0.25 : 0.75)};
  transition: 0.75s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1579648999496-65a8fa8d77ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')
    no-repeat center;
  background-size: cover;
  z-index: -10;
`;
