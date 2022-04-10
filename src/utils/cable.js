import { step, getLine, getPosList } from "./position";

export const defaultStatus = {
  isCorrect: true,
  toContinue: true,
  errorText: ''
};


const getPath = (xStart, xEnd, yStart, yEnd, pageHeight) => {
  const line = getLine(pageHeight);
  const xMax = Math.abs(xEnd - xStart);
  const yMax = Math.abs(yEnd - yStart);
  if (xEnd === xStart && yEnd !== yStart) return 'M 1 0 L 1 ' + String(yMax);
  if (xEnd !== xStart && yEnd === yStart) return 'M 0 1 L ' + String(xMax) + ' 1';
  if (xEnd !== xStart && yEnd !== yStart && (yStart === line.top || yEnd === line.top)) {
    if ((xEnd > xStart && yEnd > yStart) || (xEnd < xStart && yEnd < yStart)) return 'M 1 0 L 1 ' + String(yMax * 0.3) + ' Q 1 ' + String(yMax * 0.5) + ' ' + String(xMax * 0.2) + ' ' + String(yMax * 0.6) + ' L ' + String(xMax) + ' ' + String(yMax);
    if ((xEnd < xStart && yEnd > yStart) || (xEnd > xStart && yEnd < yStart)) return 'M ' + String(xMax - 1) + ' 0 L ' + String(xMax - 1) + ' ' + String(yMax * 0.3) + ' Q ' + String(xMax - 1) + ' ' + String(yMax * 0.5) + ' ' + String(xMax * 0.8) + ' ' + String(yMax * 0.6) + ' L 0 ' + String(yMax);
  }
  if (xEnd !== xStart && yEnd !== yStart && (yStart === line.bottom || yEnd === line.bottom)) {
    if ((xEnd > xStart && yEnd > yStart) || (xEnd < xStart && yEnd < yStart)) return 'M ' + String(xMax - 1) + ' ' + String(yMax) + ' L ' + String(xMax - 1) + ' ' + String(yMax * 0.7) + ' Q ' + String(xMax - 1) + ' ' + String(yMax * 0.5) + ' ' + String(xMax * 0.8) + ' ' + String(yMax * 0.4) + ' L 0 0';
    if ((xEnd < xStart && yEnd > yStart) || (xEnd > xStart && yEnd < yStart)) return 'M 1 ' + String(yMax) + ' L 1 ' + String(yMax * 0.7) + ' Q 1 ' + String(yMax * 0.5) + ' ' + String(xMax * 0.2) + ' ' + String(yMax * 0.4) + ' L ' + String(xMax - 1) + ' 0';
  }
}


export const getCable = (cableElementList, pageHeight) => {
  const xStart = cableElementList[0].pos;
  const xEnd = cableElementList[1].pos;
  const yStart = cableElementList[0].posV;
  const yEnd = cableElementList[1].posV;

  const position = {
    left: `${xEnd < xStart ? xEnd : xStart}px`,
    top: `${yEnd < yStart ? yEnd : yStart}px`
  };
  const width = xEnd !== xStart ? Math.abs(xEnd - xStart) : step;
  const height = yEnd !== yStart ? Math.abs(yEnd - yStart) : step;
  const path = getPath(xStart, xEnd, yStart, yEnd, pageHeight);

  return { position, width, height, path };
}


export const getConnectionStatus = (elements, schemeElements) => {
  if(elements[0].posV === elements[1].posV && elements[0].name !== 'junction-box') {
      const positions = getPosList(elements[0], schemeElements);
      elements.sort((element, nextElement) => element.pos - nextElement.pos);
      if(positions.some((pos) => pos > elements[0].pos && pos < elements[1].pos)) {
        return {
          isCorrect: false,
          toContinue: false,
          errorText: 'Такое соединение невозможно, измените расположение элементов на схеме'
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
      toContinue: true,
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
      toContinue: true,
      errorText: 'Не рекомендуется соединять между собой выключатель и светильник'
    };
  }
  if (elements.some((e) => e.name === 'socket') && elements.some((e) => e.name === 'lamp')) {
    return {
      isCorrect: false,
      toContinue: true,
      errorText: 'Не рекомендуется соединять между собой розетку и светильник'
    };
  }
  return defaultStatus;
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
