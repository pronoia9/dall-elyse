import { easeInOut } from 'framer-motion';

// NAVBAR ANIMATIONS
export const logoMotionInitial = { ...fadeIn(0.5, 0, easeInOut) };
export const logoMotionSlide = { ...slideInOut('left') };
export const navbarMotion = {
  mobile: (count, delay = 0, duration = 0.5, ease = easeInOut) => ({
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay, duration, ease } },
    exit: { x: 100, opacity: 0, transition: { delay: (count - 1) * 0.25, duration, ease } },
  }),
};
export const navlinksMotion = {
  desktop: (index, delay = 0.5, duration = 0.5, ease = easeInOut) => ({
    initial: { x: -10, y: -10, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { delay, duration: duration * index, ease } },
    exit: { x: -10, y: -10, opacity: 0, transition: { delay, duration: duration * index, ease } },
  }),
  mobile: (index, delay = 0.25, duration = 0.25, ease = easeInOut) => ({
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay, duration: duration * index, ease } },
    exit: { y: -100, opacity: 0, transition: { delay, duration: duration * index, ease } },
  }),
};

// GENERAL ANIMATIONS
export function fadeIn(delay = 0, duration = 0.5, ease = easeInOut) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay, duration, ease } },
    exit: { opacity: 0, transition: { delay, duration, ease } },
  };
}

export function fadeOut(delay = 0, duration = 0.5, ease = easeInOut) {
  return {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { delay, duration, ease } },
    exit: { opacity: 1, transition: { delay, duration, ease } },
  };
}

export function slideInOut(direction, delay = 0, duration = 0.5, ease = easeInOut, i = 1) {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? 100 : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1, transition: { delay, duration: duration * i, ease } },
    exit: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? 100 : 0,
      opacity: 0,
      transition: { delay, duration: duration * i, ease },
    },
  };
}

export function slideInOut2(directionIn, directionOut, delay = 0, duration = 0.5, ease = easeInOut, i = 1) {
  return {
    initial: {
      x: directionIn === 'left' ? -100 : directionIn === 'right' ? 100 : 0,
      y: directionIn === 'up' ? 100 : directionIn === 'down' ? 100 : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1, transition: { delay, duration, ease } },
    exit: {
      x: directionOut === 'left' ? -100 : directionOut === 'right' ? 100 : 0,
      y: directionOut === 'up' ? 100 : directionOut === 'down' ? 100 : 0,
      opacity: 0,
      transition: { delay, duration, ease },
    },
  };
}

// export const textVariant = (delay) => {
//   return {
//     hidden: {
//       y: -50,
//       opacity: 0,
//     },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         duration: 1.25,
//         delay: delay,
//       },
//     },
//   };
// };

// export const fadeIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
//       y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

// export const zoomIn = (delay, duration) => {
//   return {
//     hidden: {
//       scale: 0,
//       opacity: 0,
//     },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: 'tween',
//         delay: delay,
//         duration: duration,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
//       y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: 'easeOut',
//       },
//     },
//   };
// };

// export const staggerContainer = (staggerChildren, delayChildren) => {
//   return {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: staggerChildren,
//         delayChildren: delayChildren || 0,
//       },
//     },
//   };
// };
