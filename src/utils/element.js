import { getPosV } from './position';

export const notElement = {
  id: 'noId',
  name: 'noName',
  type: 'noType',
  listName: 'nolist',
  pos: 0,
  posV: 0,
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
  pos: 0,
};

export const getSchemeElement = (button, pos) => {
  return {
    id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: button.name,
    type: button.type,
    listName: 'motion',
    pos,
    posV: getPosV(button.name),
    blockStatus: 'noblock',
    cableList: []
  };
}

export const getCableElement = (length, elements) => {
  return {
    id: `c-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: 'cable',
    type: 'element',
    listName: 'nolist',
    blockStatus: 'noblock',
    length,
    pos: elements[1].pos < elements[0].pos ? elements[1].pos : elements[0].pos,
    posV: elements[1].posV < elements[0].posV ? elements[1].posV : elements[0].posV,
    elementList: elements
  };
}
