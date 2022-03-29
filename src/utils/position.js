export const step = 180;

export const getElementPosition = (position, buttonName) => {
  if (buttonName === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '60px' };
  }
  if (buttonName === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '120px' };
  }
}
