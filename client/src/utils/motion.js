import { easeInOut } from 'framer-motion';

/*******************************************  APP START  *******************************************/
// PAGE WRAPPER (delay: 1) (duration: 1) (total duration: 2)
export const contentMotion = (path) => ({
  initial: { y: path !== '/' ? 50 : 0, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: 'tween', delay: 1, duration: path !== '/' ? 1 : 2.5, ease: easeInOut } },
  exit: { y: path !== '/' ? -50 : 0, opacity: 0 },
});

// CIRCLE BACKGROUND (delay: 0) (duration: 0.5)
export const circleMotion = () => ({
  initial: { x: -500, y: -500 },
  animate: { x: 0, y: 0, transition: { type: 'tween', duration: 0.5, ease: easeInOut } },
  exit: { x: 500, y: 500 }, // added key to location so exit animation happens between pages
});

// NAVIGATION ANIMATIONS (delay: 0.5) (duration: 0.5) (total duration: 1)
export const navigationMotion = {
  transition: { type: 'tween', delay: 0.5, duration: 0.5, ease: 'linear' },
  lineMotion: (center) => {
    const direction = window.screen.height * 0.75 * (center ? 1 : -1);
    return {
      initial: { x: direction, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { ...navigationMotion.transition, delay: 0 } },
      exit: { x: -direction, opacity: 0 },
    };
  },
  titleMotion: (center, titleOffset = 0, hover) => {
    const sign = center ? 1 : -1,
      location = titleOffset * sign;
    return {
      initial: { x: location + 100, opacity: 0 },
      animate: { x: location + (hover ? -5 * sign : location), opacity: 1, transition: { ...navigationMotion.transition, delay: hover ? 0 : 0.5 } },
      exit: { x: location - 100, opacity: 0 },
    };
  },
  subtitleMotion: (center, subtitleOffset = 75, hover, mobile) => {
    const sign = -(center ? 1 : -1), // reverse sign from title so they animate towards the opposite sides
      location = !(mobile && window.screen.width < 960) ? subtitleOffset * sign : 0;
    return {
      initial: { x: location - 100, opacity: 0 },
      animate: { x: location + (hover ? -10 * sign : 0), opacity: 1, transition: { ...navigationMotion.transition, delay: hover ? 0 : 0.5 } },
      exit: { x: location + 100, opacity: 0 },
    };
  },
};

// NAVBAR ANIMATIONS (count: 3) (delay: 0.75 - 1) (duration: 0.5 - 0.75) (total duration: 1.75)
export const navbarMotion = {
  // LOGO (delay: 0.25 * 3 = 0.75) (duration: 0.5) (total duration: 1.25)
  // if the mobile menu is open move it to the left (it slides with the mobile menu), also remove any delays
  logoMotion: (count = 3, mobileMenuOpen) => ({
    initial: { x: -100, opacity: 0 },
    animate: {
      x: !mobileMenuOpen ? 0 : -window.screen.width / 2,
      opacity: 1,
      transition: { type: 'tween', delay: !mobileMenuOpen ? 0.25 * count : 0, duration: 0.5, ease: easeInOut },
    },
    exit: { x: -window.screen.width / 2 },
  }),
  // DESKTOP NAVBAR (delay: 1) (duration: 0.25 * 3 = 0.75) (total duration: 1.75)
  desktopLinksMotion: (index) => ({
    initial: { x: -25, y: -25, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { type: 'tween', delay: 1, duration: 0.25 * index, ease: easeInOut } },
    exit: { x: -25, y: -25, opacity: 0 },
  }),
  // MOBILE MENU (delay: 0 || 0.25 * 3 = 0.75) (duration: 0.5) (total duration: 0.5 || 1.25)
  mobileMenuMotion: (count = 3) => {
    const transition = { type: 'tween', delay: 0, duration: 0.5, ease: easeInOut };
    return {
      initial: { x: window.screen.width },
      animate: { x: 0, transition },
      exit: { x: window.screen.width, transition: { ...transition, delay: 0.25 * count } },
    };
  },
  // MOBILE MENU LINKS (delay: 0.5 || 0) (duration: 0.25 * 3 = 0.75) (total duration: 1.25 || 0.75)
  mobileLinksMotion: (index) => {
    const transition = { type: 'tween', delay: 0.5, duration: 0.25 * index, ease: easeInOut };
    return {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1, transition },
      exit: { y: -100, opacity: 0, transition: { ...transition, delay: 0 } },
    };
  },
};
/********************************************  APP END  ********************************************/

/****************************************  HOME PAGE START  ****************************************/
/*****************************************  HOME PAGE END  *****************************************/

/***************************************  CREATE PAGE START  ***************************************/
/****************************************  CREATE PAGE END  ****************************************/

/***************************************  GALLERY PAGE START  **************************************/
// GALLERY CARD (duration: 0.5)
export const galleryCardMotion = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: 'tween', duration: 0.5, ease: easeInOut } },
  exit: { opacity: 0 },
});
// GALLERY CARD IMAGE (duration: 0.33)
export const galleryCardImageMotion = (hover, index, loading) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: loading ? 0 : 1, scale: hover ? 1.05 : 1, transition: { type: 'tween', delay: hover ? 0 : 0.1, duration: 0.33, ease: easeInOut } },
  exit: { x: -50, opacity: 0, scale: 1 },
});
// GALLERY CARD OVERLAY (duration: 0.25)
export const galleryCardOverlayMotion = (hover) => ({
  initial: { opacity: 0 },
  animate: { opacity: hover ? 1 : 0, transition: { type: 'tween', duration: 0.25, ease: easeInOut } },
  exit: { opacity: 0 },
});
/****************************************  GALLERY PAGE END  ***************************************/

/******************************************  UTILS START  ******************************************/
export const textVariant = (delay) => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  },
});

export const fadeIn = (direction = false, type = 'tween', delay = 0, duration = 5, ease = easeInOut) => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    initial: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1, transition: { type, duration, ease } },
  },
});

export const zoomIn = (delay, duration) => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  },
});

export const slideIn = (direction, type, delay, duration) => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    initial: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  initial: 'initial',
  animate: 'animate',
  variants: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  },
});
/*******************************************  UTILS END  *******************************************/
