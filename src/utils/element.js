import { getVerticalPosition } from './position';

export const notElement = {
  id: 'noId',
  name: 'noName',
  type: 'noType',
  listName: 'nolist',
  pos: 0,
  posV: 0,
  position: { left: '0px', top: '0px' },
  pagePosition: { right: '0px' },
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

export const getSchemeElement = (button, pos, pageHeight) => {
  return {
    id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: button.name,
    type: button.type,
    listName: 'motion',
    pos,
    posV: getVerticalPosition(button.name, pageHeight),
    position: { left: `${pos}px`, top: `${ getVerticalPosition(button.name, pageHeight) }px` },
    pagePosition: { right: `${pos}px` },
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
    path: cable.path,
    elementList: cableElementList
  };
}
