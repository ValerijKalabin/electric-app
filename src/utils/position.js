export const step = 36;

export const schemeMarkup = { backgroundImage: `
    linear-gradient(to bottom, transparent 75px, #222 75px, #222 76px, transparent 76px),
    linear-gradient(to bottom, transparent 50%, #222 50%, #222 calc(50% + 1px), transparent calc(50% + 1px)),
    linear-gradient(to top, transparent 75px, #222 75px, #222 76px, transparent 76px)
`}


export const getPosV = (buttonName) => {
  if (buttonName === 'lamp') return 40;
  if (buttonName === 'junction-box') return 50;
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') return 70;
}


export const getSchemeElementPosition = (element) => {
  if (element.posV === 40) return { left: `${element.pos}px`, top: '75px' };
  if (element.posV === 50) return { left: `${element.pos}px`, top: '50%' };
  if (element.posV === 70) return { left: `${element.pos}px`, bottom: '39px' };
}


export const gerCableHeight = (heightV, internalSpace) => {
  if (heightV === 0) return step;
  if (heightV < 30) return internalSpace / 2;
  if (heightV === 30) return internalSpace;
}


export const getPosList = (currentItem, elementList) => {
  const similarElementList = elementList.filter((element) => {
    if (currentItem.name === 'auto-switch' || currentItem.name === 'socket' || currentItem.name === 'switch') {
      return element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch';
    }
    return element.name === currentItem.name;
  });
  return similarElementList.map((element) => element.pos);
}


export const getExpandedPosList = (currentItem, elementList) => {
  const positionOfElements = getPosList(currentItem, elementList);
  positionOfElements.forEach((pos) => {
    positionOfElements.push(pos - step);
    positionOfElements.push(pos + step);
  });
  return positionOfElements;
}


export const setNeighbors = (elementList) => {
  const applicants = elementList.filter((element) => element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch');
  applicants.sort((element, nextElement) => element.pos - nextElement.pos);
  let index = 0
  while (index < applicants.length) {
    applicants[index].blockStatus = 'noblock';
    if (applicants[index + 1] !== undefined && applicants[index].pos + step === applicants[index + 1].pos) {
      applicants[index].blockStatus = 'first';
      index = index + 1;
      while (index < applicants.length && applicants[index - 1].pos + step === applicants[index].pos) {
        applicants[index].blockStatus = 'middle';
        index = index + 1;
      }
      index = index - 1;
      applicants[index].blockStatus = 'last';
    }
    index = index + 1;
  }
}
