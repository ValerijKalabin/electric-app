const schemeHeight = document.documentElement.clientHeight - 170;

export const schemeMarkup = { backgroundImage: `
  linear-gradient(360deg, transparent 120px, #222 120px, #222 121px, transparent 121px),
  linear-gradient(180deg, transparent 120px, #222 120px, #222 121px, transparent 121px),
  linear-gradient(360deg, transparent ${ schemeHeight / 2 }px, #222 ${ schemeHeight / 2 }px, #222 ${ schemeHeight / 2 + 1 }px, transparent ${ schemeHeight / 2 + 1 }px)
`};

const getPosition = (button, elementList) => {
  const activeElement = elementList.find((element) => element.listName === 'actions');
  const similarButtons = elementList.filter((element) => element.name === button.name);
  const positionsOfSimilarButtons = similarButtons.map((element) => parseInt(element.position.left.slice(11), 10));
  let position = 0;
  if (activeElement) {
    const positionOfActiveElement = parseInt(activeElement.position.left.slice(11), 10);
    if (!positionsOfSimilarButtons.includes(positionOfActiveElement)) {
      return positionOfActiveElement;
    }
    while (positionsOfSimilarButtons.includes(position)) {
      position = position + 240;
    }
  }
  return position;
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
