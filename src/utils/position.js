export const step = 36;

export const getLine = (pageHeight) => {
  const headerFooterBlocksHeight = 130;
  const lineTop = 75;
  const lineCenter = (pageHeight - headerFooterBlocksHeight) / 2;
  const lineBottom = pageHeight - headerFooterBlocksHeight - lineTop;
  return {
    top: lineTop,
    center: lineCenter,
    bottom: lineBottom
  }
}


export const getSchemeMarkup = (pageHeight) => {
  const line = getLine(pageHeight);
  return { backgroundImage: `
    linear-gradient(to bottom, transparent ${line.top}px, #222 ${line.top}px, #222 ${line.top + 1}px, transparent ${line.top + 1}px),
    linear-gradient(to bottom, transparent ${line.center}px, #222 ${line.center}px, #222 ${line.center + 1}px, transparent ${line.center + 1}px),
    linear-gradient(to bottom, transparent ${line.bottom}px, #222 ${line.bottom}px, #222 ${line.bottom + 1}px, transparent ${line.bottom + 1}px)
  `}
}


export const getVerticalPosition = (buttonName, pageHeight) => {
  const line = getLine(pageHeight);
  if (buttonName === 'lamp') return line.top;
  if (buttonName === 'junction-box') return line.center;
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') return line.bottom;
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
  const applicants = elementList.filter((element) => element.name !== 'lamp' && element.name !== 'junction-box');
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
