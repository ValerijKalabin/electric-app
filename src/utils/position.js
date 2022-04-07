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


const getLine = (xStart, xEnd, yStart, yEnd, pageHeight) => {
  const lineBottom = pageHeight - headerFooterBlocksHeight - lineTop;
  const xMax = Math.abs(xEnd - xStart);
  const yMax = Math.abs(yEnd - yStart);
  if (xEnd === xStart && yEnd !== yStart) return 'M 1 0 L 1 ' + String(yMax);
  if (xEnd !== xStart && yEnd === yStart) return 'M 0 1 L ' + String(xMax) + ' 1';
  if (xEnd !== xStart && yEnd !== yStart && (yStart === lineTop || yEnd === lineTop)) {
    if ((xEnd > xStart && yEnd > yStart) || (xEnd < xStart && yEnd < yStart)) return 'M 1 0 L 1 ' + String(yMax * 0.3) + ' Q 1 ' + String(yMax * 0.5) + ' ' + String(xMax * 0.2) + ' ' + String(yMax * 0.6) + ' L 0 ' + String(yMax);
    if ((xEnd < xStart && yEnd > yStart) || (xEnd > xStart && yEnd < yStart)) return 'M ' + String(xMax - 1) + ' 0 L ' + String(xMax - 1) + ' ' + String(yMax * 0.3) + ' Q ' + String(xMax - 1) + ' ' + String(yMax * 0.5) + ' ' + String(xMax * 0.8) + ' ' + String(yMax * 0.6) + ' L 0 ' + String(yMax);
  }
  if (xEnd !== xStart && yEnd !== yStart && (yStart === lineBottom || yEnd === lineBottom)) {
    if ((xEnd > xStart && yEnd > yStart) || (xEnd < xStart && yEnd < yStart)) return 'M ' + String(xMax - 1) + ' ' + String(yMax) + ' L ' + String(xMax - 1) + ' ' + String(yMax * 0.7) + ' Q ' + String(xMax - 1) + ' ' + String(yMax * 0.5) + ' ' + String(xMax * 0.8) + ' ' + String(yMax * 0.4) + ' L 0 0';
    if ((xEnd < xStart && yEnd > yStart) || (xEnd > xStart && yEnd < yStart)) return 'M 1 ' + String(yMax) + ' L 1 ' + String(yMax * 0.7) + ' Q 1 ' + String(yMax * 0.5) + ' ' + String(xMax * 0.2) + ' ' + String(yMax * 0.4) + ' L ' + String(xMax - 1) + ' 0';
  }
}


export const getCable = (cableElementList, pageHeight) => {
  const xStart = parseInt(cableElementList[0].position.left.slice(11), 10);
  const xEnd = parseInt(cableElementList[1].position.left.slice(11), 10);
  const yStart = getY(cableElementList[0].name, pageHeight);
  const yEnd = getY(cableElementList[1].name, pageHeight);

  const position = {
    left: `calc(50% + ${xEnd < xStart ? xEnd : xStart}px)`,
    top: `${yEnd < yStart ? yEnd : yStart}px`
  };
  const width = xEnd !== xStart ? Math.abs(xEnd - xStart) : step;
  const height = yEnd !== yStart ? Math.abs(yEnd - yStart) : step;
  const line = getLine(xStart, xEnd, yStart, yEnd, pageHeight);

  return { position, width, height, line };
}
