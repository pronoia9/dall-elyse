import merge from 'lodash.merge';
import { easeInOut } from 'framer-motion';

// DEFAULTS
// x = 0, y = 0
// delay = 0
// duration = 0.5
// ease = easeInOut

// PAGE WRAPPER
export const contentMotion = () => bigMotion();

// HOME PAGE
// NAVIGATION ANIMATIONS - Total Duration: 0.5 + 0.5 = 1
export const navigationMotion = {
  container: (center) =>
    bigMotion({
      directionIn: { y: -window.screen.height * 0.25 * (center ? 1 : -1) },
      directionOut: { y: window.screen.height * 0.25 * (center ? 1 : -1) },
      duration: 0.5,
    }),
  title: (center) =>
    bigMotion({ directionIn: { x: 50 * (center ? 1 : -1) }, directionOut: { x: -50 * (center ? 1 : -1) }, delay: 0.5, ease: 'linear' }),
  subtitle: (center) =>
    bigMotion({ directionIn: { x: -50 * (center ? 1 : -1) }, directionOut: { x: 50 * (center ? 1 : -1) }, delay: 0.5, ease: 'linear' }),
};
export const backgroundMotion = () => bigMotion({ delay: 1 });

// NAVBAR ANIMATIONS
export const navbarMotion = {
  logo: (count = 3) =>
    bigMotion({ direction: 'left', delay: 0.25 * count, duration: 0.5 }),
  desktopLinks: (index) =>
    bigMotion({ direction: -10, delayIn: 1, duration: 0.25 * index }),
  mobileMenu: (count = 3) =>
    bigMotion({ direction: { x: window.screen.width }, delayOut: 0.25 * count, opacity: 1 }),
  mobileLinks: (index) =>
    bigMotion({ directionIn: 'up', directionOut: 'down', delayIn: 0.5, duration: 0.25 * index }),
};

// GENERAL ANIMATIONS
export function bigMotion(props = {}, extra = {}) {
  const {
    direction, directionIn, directionOut,
    opacity, opacityIn, opacityOut,
    type, typeIn, typeOut,
    delay, delayIn, delayOut,
    duration, durationIn, durationOut,
    ease_, easeIn_, easeOut_,
  } = props;
  const options = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { type: '', delay: 0, duration: 0.5, ease: easeInOut } },
    exit: { x: 0, y: 0, opacity: 0, transition: { type: '', delay: 0, duration: 0.5, ease: easeInOut } },
  };

  // DIRECTION
  if (direction) {
    if (direction === 'up' || direction === 'top') (options.initial.y = 100), (options.exit.y = 100);
    else if (direction === 'right') (options.initial.x = 100), (options.exit.x = 100);
    else if (direction === 'down' || direction === 'bottom') (options.initial.y = -100), (options.exit.y = -100);
    else if (direction === 'left') (options.initial.x = -100), (options.exit.x = -100);
    else if (direction.x) (options.initial.x = direction.x), (options.exit.x = direction.x);
    else if (direction.y) (options.initial.y = direction.y), (options.exit.y = direction.y);
    else (options.initial.x = direction), (options.exit.x = direction), (options.initial.y = direction), (options.exit.y = direction);
  }
  if (directionIn) {
    if (directionIn === 'up' || directionIn === 'top') options.initial.y = 100;
    else if (directionIn === 'right') options.initial.x = 100;
    else if (directionIn === 'down' || directionIn === 'bottom') options.initial.y = -100;
    else if (directionIn === 'left') options.initial.x = -100;
    else if (directionIn.x) (options.initial.x = directionIn.x), (options.exit.x = directionIn.x);
    else if (directionIn.y) (options.initial.y = directionIn.y), (options.exit.y = directionIn.y);
    else (options.initial.x = directionIn), (options.exit.x = directionIn), (options.initial.y = directionIn), (options.exit.y = directionIn);
  }
  if (directionOut) {
    if (directionOut === 'up' || directionOut === 'top') options.exit.y = 100;
    else if (directionOut === 'right') options.exit.x = 100;
    else if (directionOut === 'down' || directionOut === 'bottom') options.exit.y = -100;
    else if (directionOut === 'left') options.exit.x = -100;
    else if (directionOut.x) (options.initial.x = directionOut.x), (options.exit.x = directionOut.x);
    else if (directionOut.y) (options.initial.y = directionOut.y), (options.exit.y = directionOut.y);
    else (options.initial.x = directionOut), (options.exit.x = directionOut), (options.initial.y = directionOut), (options.exit.y = directionOut);
  }

  // OPACITY
  if (opacity) options.initial.opacity = opacity, options.animate.opacity = opacity, options.exit.opacity = opacity;

  // TYPE
  if (type) options.animate.transition.type = type, options.exit.transition.type = type;
  if (typeIn) options.animate.transition.type = typeIn;
  if (typeOut) options.exit.transition.type = typeOut;

  // DELAY
  if (delay) (options.animate.transition.delay = delay), (options.exit.transition.delay = delay);
  if (delayIn) options.animate.transition.delay = delayIn;
  if (delayOut) options.exit.transition.delay = delayOut;

  // DURATION
  if (duration) (options.animate.transition.duration = duration), (options.exit.transition.duration = duration);
  if (durationIn) options.animate.transition.duration = durationIn;
  if (durationOut) options.exit.transition.duration = durationOut;

  // EASE
  if (ease_) (options.animate.transition.ease = ease_), (options.exit.transition.ease = ease_);
  if (easeIn_) options.animate.transition.ease = easeIn_;
  if (easeOut_) options.exit.transition.ease = easeOut_;

  return merge(options, extra);
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
