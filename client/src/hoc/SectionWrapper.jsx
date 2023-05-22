import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section className='' variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.25 }}>
        <span id={idName} className='hash-span'>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
