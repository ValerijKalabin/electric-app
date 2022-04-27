import { getCablePosList } from './cable';
import { getPosV, stepV } from './position';

export const notElement = {
  id: 'noid',
  name: 'noname',
  type: 'notype',
  listName: 'nolist',
  pos: 0,
  posV: 0,
  blockStatus: 'noblock',
  elementsInBlock: 1,
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
    type: 'element',
    listName: 'motion',
    pos,
    posV: getPosV(button.name),
    blockStatus: 'noblock',
    elementsInBlock: 1,
    cableList: []
  };
}


export const getCableElement = (length, elements, status) => {
  const defaultPosV = elements[1].posV < elements[0].posV ? elements[1].posV : elements[0].posV;
  const posV = status.cableType === 'horizontal-top' ? defaultPosV - stepV : defaultPosV;
  return {
    id: `c-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: 'cable',
    type: status.cableType,
    listName: 'nolist',
    length,
    pos: elements[1].pos < elements[0].pos ? elements[1].pos : elements[0].pos,
    posV,
    posList: getCablePosList(elements, status),
    elementList: elements
  };
}
