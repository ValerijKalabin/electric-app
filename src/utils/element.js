import { getElementPosition } from './position';

export const notElement = {
  id: 'noId',
  name: 'noName',
  type: 'noType',
  listName: 'nolist',
  pos: 0,
  position: { left: '0px', bottom: '50%' },
  pagePosition: { right: '0px', transition: 'right 0.3s linear' },
  blockStatus: 'noblock',
  cableList: []
};

export const notVirtualElement = {
  id: 'virtualId',
  name: 'virtual',
  isButtonPressed: false,
  isMovingScheme: false,
  divider: 30,
  cursorOffset: 0,
  startPosition: 0,
  position: 0,
  pagePosition: { right: '0px' }
};

export const getSchemeElement = (button, pos) => {
  return {
    id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: button.name,
    type: button.type,
    listName: 'motion',
    pos,
    position: getElementPosition(pos, button.name),
    pagePosition: { right: `${pos}px`, transition: 'right 0.3s linear' },
    blockStatus: 'noblock',
    cableList: []
  };
}

export const getCableElement = (number, cable, cableElementList) => {
  return {
    id: `c-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: 'cable',
    type: 'element',
    listName: 'nolist',
    blockStatus: 'noblock',
    length: number,
    position: cable.position,
    width: cable.width,
    height: cable.height,
    line: cable.line,
    elementList: cableElementList
  };
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

