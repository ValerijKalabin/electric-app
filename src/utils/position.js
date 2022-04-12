export const step = 36;
export const stepV = 5;
export const topPosV = 40;
export const middlePosV = 50;
export const bottomPosV = 70;
export const topHeightV = middlePosV - topPosV;
export const bottomHeightV = bottomPosV - middlePosV;
export const maxHeightV = bottomPosV - topPosV;

export const schemeMarkup = { backgroundImage: `
  linear-gradient(to bottom, transparent 75px, #222 75px, #222 76px, transparent 76px),
  linear-gradient(to bottom, transparent 50%, #222 50%, #222 calc(50% + 1px), transparent calc(50% + 1px)),
  linear-gradient(to top, transparent 75px, #222 75px, #222 76px, transparent 76px)
`}


export const getPosV = (buttonName) => {
  if (buttonName === 'lamp') return topPosV;
  if (buttonName === 'junction-box') return middlePosV;
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') return bottomPosV;
}


export const getSchemeElementPosition = (element) => {
  if (element.posV === topPosV - stepV) return { left: `${element.pos}px`, top: '39px' };
  if (element.posV === topPosV) return { left: `${element.pos}px`, top: '75px' };
  if (element.posV === middlePosV - stepV) return { left: `${element.pos}px`, top: 'calc(50% - 36px)' };
  if (element.posV === middlePosV) return { left: `${element.pos}px`, top: '50%' };
  if (element.posV === bottomPosV - stepV) return { left: `${element.pos}px`, bottom: '75px' };
  if (element.posV === bottomPosV) return { left: `${element.pos}px`, bottom: '39px' };
}


export const getPosList = (posV, elementList) => {
  const positionOfElements = elementList.map((element) => element.posV === posV && element.type === 'element' && element.pos);
  const cables = elementList.filter((element) => element.posV === posV && element.type === 'horizontal');
  const positionOfCables = cables.reduce((positions, cable) => positions.concat(cable.posList), []);
  if(posV === middlePosV) {
    const longCables = elementList.filter((element) => element.type === 'vertical-long');
    const positionOfLongCables = longCables.reduce((positions, cable) => positions.concat(cable.posList), []);
    return [...positionOfCables, ...positionOfElements, ...positionOfLongCables];
  }
  return [...positionOfCables, ...positionOfElements];
}


export const getExpandedPosList = (button, elementList) => {
  const positionOfElements = getPosList(getPosV(button.name), elementList);
  positionOfElements.forEach((pos) => {
    positionOfElements.push(pos - step);
    positionOfElements.push(pos + step);
  });
  return positionOfElements;
}


export const setNeighbors = (elementList) => {
  const applicants = elementList.filter((element) => element.name === 'socket' || element.name === 'switch' || element.name === 'auto-switch');
  applicants.sort((element, nextElement) => element.pos - nextElement.pos);
  applicants.forEach((element) => element.elementsInBlock = 1);
  let index = 0
  let elementsInBlock = 0;
  while (index < applicants.length) {
    applicants[index].blockStatus = 'noblock';
    elementsInBlock = 1;
    if (applicants[index + 1] !== undefined && applicants[index].pos + step === applicants[index + 1].pos) {
      applicants[index].blockStatus = 'first';
      index = index + 1;
      while (index < applicants.length && applicants[index - 1].pos + step === applicants[index].pos) {
        applicants[index].blockStatus = 'middle';
        elementsInBlock = elementsInBlock + 1;
        index = index + 1;
      }
      index = index - 1;
      applicants[index].blockStatus = 'last';
      applicants[index].elementsInBlock = applicants[index].name !== 'auto-switch' ? elementsInBlock : 1;
    }
    index = index + 1;
  }
}
