export const step = 180;

export const getElementPosition = (position, name) => {
  if (name === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '60px' };
  }
  if (name === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (name === 'auto-switch' || name === 'socket' || name === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '120px' };
  }
}
