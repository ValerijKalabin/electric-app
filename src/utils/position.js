export const step = 120;
export const lineBottom = 80;
export const navigationBlockHeight = 40;
export const headerFooterBlocksHeight = 130;

export const getElementPosition = (position, name) => {
  if (name === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '40px' };
  }
  if (name === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (name === 'auto-switch' || name === 'socket' || name === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '80px' };
  }
}
