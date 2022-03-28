const schemeHeight = document.documentElement.clientHeight - 170;

export const schemeMarkup = { backgroundImage: `
  linear-gradient(360deg, transparent 120px, #222 120px, #222 121px, transparent 121px),
  linear-gradient(180deg, transparent 120px, #222 120px, #222 121px, transparent 121px),
  linear-gradient(360deg, transparent ${ schemeHeight / 2 }px, #222 ${ schemeHeight / 2 }px, #222 ${ schemeHeight / 2 + 1 }px, transparent ${ schemeHeight / 2 + 1 }px)
`};

const getPosition = (button, elementList) => {
  const elementCount = elementList.reduce((count, element) => element.name === button.name ? count = count + 1 : count, 0)
  return elementCount * 240;
}

export const getPagePosition = (button, elementList) => {
  return {right: `${getPosition(button, elementList)}px`};
}

export const getElementPosition = (button, elementList) => {
  if (button.name === 'lamp') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, top: '60px' };
  }
  if (button.name === 'junction-box') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, bottom: '50%' };
  }
  if (button.name === 'auto-switch' || button.name === 'socket' || button.name === 'switch') {
    return { left: `calc(50% + ${getPosition(button, elementList)}px)`, bottom: '120px' };
  }
}
