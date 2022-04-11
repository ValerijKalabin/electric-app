import { step, topHeightV, bottomHeightV, maxHeightV } from "./position";


const getCableType = (cableElements, schemeElements) => {
  if(Math.abs(cableElements[1].posV - cableElements[0].posV) === maxHeightV) return 'vertical-long';
  if(cableElements[1].posV !== cableElements[0].posV) return 'vertical';
  cableElements.sort((element, nextElement) => element.pos - nextElement.pos);
  const obstacles = schemeElements.filter((element) => {
    return element.name !== 'cable' && element.posV === cableElements[0].posV
    && element.pos > cableElements[0].pos && element.pos < cableElements[1].pos;
  });
  if(!obstacles.length) return 'horizontal';
  const topObstacle = obstacles.find((obstacle) => obstacle.cableList.some((cable) => cable.type === 'horizontal-top'));
  if(!topObstacle) return 'horizontal-top';
  const bottomObstacle = obstacles.find((obstacle) => obstacle.cableList.some((cable) => cable.type === 'horizontal-bottom'));
  if(!bottomObstacle) return 'horizontal-bottom';
  return 'no-connection';
}


export const getCableColor = (cableType) => {
  if (cableType === 'vertical-long') return '#656514';
  if (cableType === 'horizontal-top' || cableType === 'horizontal-bottom') return '#154a6b';
  return '#bbbbbb';
}


export const getConnectionStatus = (elements, schemeElements) => {
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
  if (!!elements[0].cableList.length && !!elements[1].cableList.length &&
    elements[0].cableList.some((cable) => cable.elementList[0].id === elements[1].id ||
    cable.elementList[1].id === elements[1].id)) {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = true;
    connectionStatus.errorText = 'Такое соединение уже существует';
  }
  if(connectionStatus.cableType === 'no-connection') {
    connectionStatus.isCorrect = false;
    connectionStatus.toContinue = false;
    connectionStatus.errorText = 'Такое соединение не рекомендуется, измените расположение элементов на схеме';
  }
  return connectionStatus;
}


export const getPath = (elements, internalSpace, type) => {
  const quotientPos = elements[1].pos - elements[0].pos;
  const quotientPosV = elements[1].posV - elements[0].posV
  const width = Math.abs(elements[1].pos - elements[0].pos);
  const heightV = Math.abs(elements[1].posV - elements[0].posV);
  const height = heightV === maxHeightV ? internalSpace : internalSpace / 2;

  if (!width) return 'M 1 0 L 1 ' + String(height);
  if (!heightV && type === 'horizontal') return 'M 0 1 L ' + String(width) + ' 1';
  if (!heightV && type === 'horizontal-top') return 'M 1 ' + String(step) + ' L 1 ' + String(step / 4) + ' Q 1 1 ' + String(step / 4) + ' 1 L ' + String(width - (step / 4)) + ' 1 Q ' + String(width - 1) + ' 1 ' + String(width - 1) + ' ' + String(step / 4) + ' L ' + String(width - 1) + ' ' + String(step);
  if (!heightV && type === 'horizontal-bottom') return 'M 1 0 L 1 ' + String(step * 3 / 4) + ' Q 1 ' + String(step - 1) + ' ' + String(step / 4) + ' ' + String(step - 1) + ' L ' + String(width - (step / 4)) + ' ' + String(step - 1) + ' Q ' + String(width - 1) + ' ' + String(step - 1) + ' ' + String(width - 1) + ' ' + String(step * 3 / 4) + ' L ' + String(width - 1) + ' 0';
  if (!!width && heightV === topHeightV) {
    if (quotientPos * quotientPosV > 0) return 'M 1 0 L 1 ' + String(height * 0.3) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.6) + ' L ' + String(width) + ' ' + String(height);
    if (quotientPos * quotientPosV < 0) return 'M ' + String(width - 1) + ' 0 L ' + String(width - 1) + ' ' + String(height * 0.3) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.6) + ' L 0 ' + String(height);
  }
  if (!!width && heightV === bottomHeightV) {
    if (quotientPos * quotientPosV > 0) return 'M ' + String(width - 1) + ' ' + String(height) + ' L ' + String(width - 1) + ' ' + String(height * 0.7) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.4) + ' L 0 0';
    if (quotientPos * quotientPosV < 0) return 'M 1 ' + String(height) + ' L 1 ' + String(height * 0.7) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.4) + ' L ' + String(width - 1) + ' 0';
  }
  if (!!width && heightV === maxHeightV) {
    if (quotientPos * quotientPosV > 0) return 'M 0 0 L ' + String(width) +  ' ' + String(height);
    if (quotientPos * quotientPosV < 0) return 'M ' + String(width) + ' 0 L 0 ' + String(height);
  }
}


export const getFilteredList = (element, elementList) => {
  element.cableList.forEach((cable) => cable.listName = 'motion');
  const filteredList = elementList.filter((element) => element.listName !== 'motion');
  filteredList.forEach((element) => {
    if (element.cableList) {
      element.cableList = element.cableList.filter((cable) => cable.listName !== 'motion');
    }
  });
  return filteredList;
}