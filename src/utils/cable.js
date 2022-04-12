import { step, stepV, topHeightV, bottomHeightV, maxHeightV } from "./position";


const getCableType = (cableElements, schemeElements) => {
  const heightV = Math.abs(cableElements[1].posV - cableElements[0].posV);
  if(heightV === maxHeightV) {
    const centerPos = (cableElements[0].pos + cableElements[1].pos) / 2;
    const requiredPositions = centerPos % step === 0 ? [centerPos] : [centerPos - step / 2, centerPos + step / 2];
    const elementsPositions = schemeElements.map((element) => element.name === 'junction-box' && element.pos);
    if (!elementsPositions.some((elementPos) => requiredPositions.some((pos) => pos === elementPos))) return 'vertical-long';
    return 'no-connection';
  }
  if(heightV === topHeightV) return 'vertical-top';
  if(heightV === bottomHeightV) return 'vertical-bottom';
  if(heightV === 0) {
    cableElements.sort((element, nextElement) => element.pos - nextElement.pos);
    if(!schemeElements.some((element) => element.posV === cableElements[0].posV &&
    element.pos > cableElements[0].pos && element.pos < cableElements[1].pos)) return 'horizontal';

    const topCables = schemeElements.filter((element) => element.type === 'horizontal-top' && element.posV === cableElements[0].posV - stepV);
    const topPositions = topCables.reduce((positions, cable) => positions.concat(cable.posList), []);
    if(!topPositions.some((pos) => pos > cableElements[0].pos && pos < cableElements[1].pos)) return 'horizontal-top';

    const bottomCables = schemeElements.filter((element) => element.type === 'horizontal-bottom' && element.posV === cableElements[0].posV);
    const bottomPositions = bottomCables.reduce((positions, cable) =>  positions.concat(cable.posList), []);
    if(!bottomPositions.some((pos) => pos > cableElements[0].pos && pos < cableElements[1].pos)) return 'horizontal-bottom';
  }
  return 'no-connection';
}


export const getCableStatus = (elements, schemeElements) => {
  const connectionStatus = {
    cableType: '',
    isCorrect: true,
    toContinue: true,
    errorText: ''
  };
  connectionStatus.cableType = getCableType(elements, schemeElements);
  if (elements.every((e) => e.name === 'switch')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять выключатели между собой';
  }
  if (elements.some((e) => e.name === 'switch') && elements.some((e) => e.name === 'socket')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой выключатель и розетку';
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'switch')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой автомат и выключатель';
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'lamp')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой автомат и светильник';
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'socket')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой автомат и розетку';
  }
  if (elements.some((e) => e.name === 'switch') && elements.some((e) => e.name === 'lamp')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой выключатель и светильник';
  }
  if (elements.some((e) => e.name === 'socket') && elements.some((e) => e.name === 'lamp')) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Не рекомендуется соединять между собой розетку и светильник';
  }
  if(connectionStatus.cableType === 'no-connection') {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = false;
    connectionStatus.errorText = 'Такому соединению мешают другие элементы, измените расположение элементов на схеме';
  }
  if (!!elements[0].cableList.length && !!elements[1].cableList.length &&
    elements[0].cableList.some((cable) => cable.elementList[0].id === elements[1].id ||
    cable.elementList[1].id === elements[1].id)) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Такое соединение уже существует';
  }
  return connectionStatus;
}


export const getCablePosList = (elements, status) => {
  if (status.cableType === 'vertical') return [];
  if (status.cableType === 'vertical-long') {
    const centerPos = (elements[0].pos + elements[1].pos) / 2;
    if (centerPos % step === 0) return [centerPos];
    return [centerPos - step / 2, centerPos + step / 2];
  }
  elements.sort((element, nextElement) => element.pos - nextElement.pos);
  const posList = [];
  let pos = elements[0].pos + step;
  while (pos < elements[1].pos) {
    posList.push(pos);
    pos = pos + step;
  }
  return posList;
}


export const getCableHeight = (heightV, internalSpace) => {
  if (heightV === 0) return step;
  if (heightV < maxHeightV) return internalSpace / 2;
  if (heightV === maxHeightV) return internalSpace;
}


export const getCableColor = (cableType) => {
  if (cableType === 'vertical-long') return '#656514';
  if (cableType === 'horizontal-top' || cableType === 'horizontal-bottom') return '#154a6b';
  return '#777777';
}


export const getCablePath = (elements, internalSpace, type) => {
  const quotientPos = elements[1].pos - elements[0].pos;
  const quotientPosV = elements[1].posV - elements[0].posV
  const width = Math.abs(elements[1].pos - elements[0].pos);
  const heightV = Math.abs(elements[1].posV - elements[0].posV);
  const height = heightV === maxHeightV ? internalSpace : internalSpace / 2;

  if (!width) return 'M 1 0 L 1 ' + String(height);
  if (type === 'horizontal') return 'M 0 1 L ' + String(width) + ' 1';
  if (type === 'horizontal-top') return 'M 1 ' + String(step) + ' L 1 ' + String(step / 4) + ' Q 1 1 ' + String(step / 4) + ' 1 L ' + String(width - (step / 4)) + ' 1 Q ' + String(width - 1) + ' 1 ' + String(width - 1) + ' ' + String(step / 4) + ' L ' + String(width - 1) + ' ' + String(step);
  if (type === 'horizontal-bottom') return 'M 1 0 L 1 ' + String(step * 3 / 4) + ' Q 1 ' + String(step - 1) + ' ' + String(step / 4) + ' ' + String(step - 1) + ' L ' + String(width - (step / 4)) + ' ' + String(step - 1) + ' Q ' + String(width - 1) + ' ' + String(step - 1) + ' ' + String(width - 1) + ' ' + String(step * 3 / 4) + ' L ' + String(width - 1) + ' 0';
  if (type === 'vertical-top') {
    if (quotientPos * quotientPosV > 0) return 'M 1 0 L 1 ' + String(height * 0.3) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.6) + ' L ' + String(width) + ' ' + String(height);
    if (quotientPos * quotientPosV < 0) return 'M ' + String(width - 1) + ' 0 L ' + String(width - 1) + ' ' + String(height * 0.3) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.6) + ' L 0 ' + String(height);
  }
  if (type === 'vertical-bottom') {
    if (quotientPos * quotientPosV > 0) return 'M ' + String(width - 1) + ' ' + String(height) + ' L ' + String(width - 1) + ' ' + String(height * 0.7) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.4) + ' L 0 0';
    if (quotientPos * quotientPosV < 0) return 'M 1 ' + String(height) + ' L 1 ' + String(height * 0.7) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.4) + ' L ' + String(width - 1) + ' 0';
  }
  if (type === 'vertical-long') {
    if (quotientPos * quotientPosV > 0) return 'M 0 0 L ' + String(width) +  ' ' + String(height);
    if (quotientPos * quotientPosV < 0) return 'M ' + String(width) + ' 0 L 0 ' + String(height);
  }
}


export const getFilteredElementList = (element, elementList) => {
  element.cableList.forEach((cable) => cable.listName = 'motion');
  const filteredList = elementList.filter((element) => element.listName !== 'motion');
  filteredList.forEach((element) => {
    if (element.cableList) {
      element.cableList = element.cableList.filter((cable) => cable.listName !== 'motion');
    }
  });
  return filteredList;
}
