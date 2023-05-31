import { motion } from "framer-motion";
import styled from "styled-components";

const Loading = () => {
  return <Container>Loading</Container>;
};
export default Loading;

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
`;