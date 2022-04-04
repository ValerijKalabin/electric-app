export const step = 36;
export const headerFooterBlocksHeight = 130;

export const getSchemeMarkup = (pageHeight) => {
  const lineCenterHeight = (pageHeight - headerFooterBlocksHeight) / 2;
  return { backgroundImage: `
    linear-gradient(to bottom, transparent 75px, #222 75px, #222 76px, transparent 76px),
    linear-gradient(to top, transparent ${lineCenterHeight}px, #222 ${lineCenterHeight}px, #222 ${lineCenterHeight + 1}px, transparent ${lineCenterHeight + 1}px),
    linear-gradient(to top, transparent 75px, #222 75px, #222 76px, transparent 76px)
  `}
}

export const getItemPos = (activeItem) => activeItem.position ? parseInt(activeItem.position.left.slice(11), 10) : 0;

export const getPosList = (currentItem, elementList) => {
  const similarElementList = elementList.filter((element) => {
    if (currentItem.name === 'auto-switch' || currentItem.name === 'socket' || currentItem.name === 'switch') {
      return element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch';
    }
    return element.name === currentItem.name;
  });
  return similarElementList.map((element) => parseInt(element.position.left.slice(11), 10));
}

export const getExpandedPosList = (currentItem, elementList) => {
  const positionOfElements = getPosList(currentItem, elementList);
  positionOfElements.forEach((pos) => {
    positionOfElements.push(pos - step);
    positionOfElements.push(pos + step);
  });
  return positionOfElements;
}

export const getNeighborList = (elementList) => {
  const applicants = elementList.filter((element) => element.name === 'socket' || element.name === 'switch' || element.name === 'auto-switch');
  const notApplicants = elementList.filter((element) => element.name !== 'socket' && element.name !== 'switch' && element.name !== 'auto-switch');
  applicants.sort((element, nextElement) => element.pagePosition - nextElement.pagePosition);
  const posList = applicants.map((element) => parseInt(element.position.left.slice(11), 10));
  let index = 0
  while (index < posList.length) {
    applicants[index].blockStatus = 'noblock';
    if (posList[index + 1] !== undefined && posList[index] + step === posList[index + 1]) {
      applicants[index].blockStatus = 'first';
      index = index + 1;
      while (index < posList.length && posList[index - 1] + step === posList[index]) {
        applicants[index].blockStatus = 'middle';
        index = index + 1;
      }
      index = index - 1;
      applicants[index].blockStatus = 'last';
    }
    index = index + 1;
  }
  return [...applicants, ...notApplicants];
}

export const getElementPosition = (position, buttonName) => {
  if (buttonName === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '39px' };
  }
  if (buttonName === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '75px' };
  }
}
