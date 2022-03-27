const getPosition = (button, elementList) => {
  const elementCount = elementList.reduce((count, element) => element.name === button.name ? count = count + 1 : count, 0)
  return elementCount * 180;
}

export const getPagePosition = (button, elementList) => {
  return {right: `${getPosition(button, elementList)}px`};
}

export const getElementPosition = (button, elementList) => {
  if (button.name === 'lamp') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, top: '60px' };
  }
  if (button.name === 'help' || button.name === 'junction-box') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, bottom: '50%' };
  }
  if (button.name === 'auto-switch' || button.name === 'socket' || button.name === 'switch') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, bottom: '120px' };
  }
}
