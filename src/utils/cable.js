import { getPosList } from "./position";

export const defaultStatus = {
  isCorrect: true,
  toContinue: true,
  errorText: ''
};


export const getConnectionStatus = (elements, schemeElements) => {
  if(elements[0].posV === elements[1].posV && elements[0].name !== 'junction-box') {
      const positions = getPosList(elements[0], schemeElements);
      elements.sort((element, nextElement) => element.pos - nextElement.pos);
      if(positions.some((pos) => pos > elements[0].pos && pos < elements[1].pos)) {
        return {
          isCorrect: false,
          toContinue: false,
          errorText: 'Такое соединение не рекомендуется, измените расположение элементов на схеме'
        };
      }
    }
  if (!!elements.length &&
    elements[0].cableList.some((cable) => cable.elementList[0].id === elements[1].id ||
    cable.elementList[1].id === elements[1].id)) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Такое соединение уже существует'
    };
  }
  if (elements.every((e) => e.name === 'switch')) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Не рекомендуется соединять выключатели между собой'
    };
  }
  if (elements.some((e) => e.name === 'switch') && elements.some((e) => e.name === 'socket')) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Не рекомендуется соединять между собой выключатель и розетку'
    };
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'switch')) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Не рекомендуется соединять между собой автомат и выключатель'
    };
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'lamp')) {
    return {
      isCorrect: false,
      toContinue: false,
      errorText: 'Не рекомендуется соединять между собой автомат и светильник'
    };
  }
  if (elements.some((e) => e.name === 'auto-switch') && elements.some((e) => e.name === 'socket')) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Не рекомендуется соединять между собой автомат и розетку'
    };
  }
  if (elements.some((e) => e.name === 'switch') && elements.some((e) => e.name === 'lamp')) {
    return {
      isCorrect: false,
      toContinue: false,
      errorText: 'Не рекомендуется соединять между собой выключатель и светильник'
    };
  }
  if (elements.some((e) => e.name === 'socket') && elements.some((e) => e.name === 'lamp')) {
    return {
      isCorrect: false,
      toContinue: false,
      errorText: 'Не рекомендуется соединять между собой розетку и светильник'
    };
  }
  return defaultStatus;
}


export const getPath = (elements, internalSpace) => {
  const quotientPos = elements[1].pos - elements[0].pos;
  const quotientPosV = elements[1].posV - elements[0].posV
  const width = Math.abs(elements[1].pos - elements[0].pos);
  const heightV = Math.abs(elements[1].posV - elements[0].posV);
  const height = internalSpace / 2;

  if (!width) return 'M 1 0 L 1 ' + String(height);
  if (!heightV) return 'M 0 1 L ' + String(width) + ' 1';
  if (!!width && heightV === 10) {
    if (quotientPos * quotientPosV > 0) return 'M 1 0 L 1 ' + String(height * 0.3) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.6) + ' L ' + String(width) + ' ' + String(height);
    if (quotientPos * quotientPosV < 0) return 'M ' + String(width - 1) + ' 0 L ' + String(width - 1) + ' ' + String(height * 0.3) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.6) + ' L 0 ' + String(height);
  }
  if (!!width && heightV === 20) {
    if (quotientPos * quotientPosV > 0) return 'M ' + String(width - 1) + ' ' + String(height) + ' L ' + String(width - 1) + ' ' + String(height * 0.7) + ' Q ' + String(width - 1) + ' ' + String(height * 0.5) + ' ' + String(width * 0.8) + ' ' + String(height * 0.4) + ' L 0 0';
    if (quotientPos * quotientPosV < 0) return 'M 1 ' + String(height) + ' L 1 ' + String(height * 0.7) + ' Q 1 ' + String(height * 0.5) + ' ' + String(width * 0.2) + ' ' + String(height * 0.4) + ' L ' + String(width - 1) + ' 0';
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
