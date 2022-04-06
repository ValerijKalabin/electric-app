const headerFooterBlocksHeight = 130;
const lineTop = 75;

export const step = 36;

export const getSchemeMarkup = (pageHeight) => {
  const lineCenter = (pageHeight - headerFooterBlocksHeight) / 2;
  const lineBottom = lineTop;
  return { backgroundImage: `
    linear-gradient(to bottom, transparent ${lineTop}px, #222 ${lineTop}px, #222 ${lineTop + 1}px, transparent ${lineTop + 1}px),
    linear-gradient(to bottom, transparent ${lineCenter}px, #222 ${lineCenter}px, #222 ${lineCenter + 1}px, transparent ${lineCenter + 1}px),
    linear-gradient(to top, transparent ${lineBottom}px, #222 ${lineBottom}px, #222 ${lineBottom + 1}px, transparent ${lineBottom + 1}px)
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
  const lineBottom = lineTop - step;
  if (buttonName === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: `${lineTop}px` };
  }
  if (buttonName === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, top: '50%' };
  }
  if (buttonName === 'auto-switch' || buttonName === 'socket' || buttonName === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: `${lineBottom}px` };
  }
}

const getY = (elementName, pageHeight) => {
  if (elementName === 'lamp') return lineTop;
  if (elementName === 'junction-box') return (pageHeight - headerFooterBlocksHeight) / 2;
  return pageHeight - headerFooterBlocksHeight - lineTop;
}

const getLine = (xStart, xEnd, yStart, yEnd) => {
  if (xEnd === xStart && yEnd !== yStart) return { x1: 0, x2: 0, y1: 0, y2: Math.abs(yEnd - yStart)};
  if (xEnd !== xStart && yEnd === yStart) return { x1: 0, x2: Math.abs(xEnd - xStart), y1: 0, y2: 0};
  if (xEnd > xStart && yEnd > yStart) return {x1: 0, x2: Math.abs(xEnd - xStart), y1: 0, y2: Math.abs(yEnd - yStart)};
  if (xEnd < xStart && yEnd < yStart) return {x1: 0, x2: Math.abs(xEnd - xStart), y1: 0, y2: Math.abs(yEnd - yStart)};
  return {x1: Math.abs(xEnd - xStart), x2: 0, y1: 0, y2: Math.abs(yEnd - yStart)};
}

export const getCable = (startElement, stopElement, pageHeight) => {
  const xStart = parseInt(startElement.position.left.slice(11), 10);
  const xEnd = parseInt(stopElement.position.left.slice(11), 10);
  const yStart = getY(startElement.name, pageHeight);
  const yEnd = getY(stopElement.name, pageHeight);

  const position = { left: `calc(50% + ${xEnd < xStart ? xEnd : xStart}px)`, top: `${yEnd < yStart ? yEnd :yStart}px` };
  const width = xEnd !== xStart ? Math.abs(xEnd - xStart) : step;
  const height = yEnd !== yStart ? Math.abs(yEnd - yStart) : step;
  const line = getLine(xStart, xEnd, yStart, yEnd);

  return { position, width, height, line };
}
