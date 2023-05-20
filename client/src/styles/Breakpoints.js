const size = {
  xxs: '340px',    // Old Mobile Phone Styles
  xsm: '450px',    // Mobile Phone Styles
  sm: '760px',     // Tablet Portrait Styles
  md: '960px',     // Tablet Portrait Styles
  lg: '1200px',    // Tablet Landscape Styles
  xl: '1440px',    // Desktop Styles
  xxl: '1600px',   // Desktop Styles
  xxxl: '1679px',  // Desktop Styles
  xxxxl: '1800px', // Desktop Styles
};

export const device = {
  xxs: `(max-width: ${size.xxs})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
  xxxl: `(max-width: ${size.xxxl})`,
  xxxxl: `(max-width: ${size.xxxxl})`,
};
