import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useStore } from '../store/useStore';
import { backgroundMotion } from '../utils/motion';

// TODO: Change Background with Canvas (particles)

const Canvas = () => {
  const overlay = useStore((state) => state.overlay);

  return <Background key='background-canvas' id='background' overlay={overlay} {...backgroundMotion()} />;
};
export default Canvas;

// STYLES
const Background = styled(motion.div)`
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
`;
