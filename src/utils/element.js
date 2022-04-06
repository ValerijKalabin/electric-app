import { getElementPosition } from './position';

export const notElement = {
  id: 'noId',
  name: 'noName',
  type: 'noType',
  listName: 'nolist',
  position: { left: `calc(50% + 0px)`, bottom: '50%' },
  pagePosition: 0,
  blockStatus: 'noblock',
  cableList: []
};

export const getSchemeElement = (button, pos) => {
  return {
    id: `e-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: button.name,
    type: button.type,
    listName: 'motion',
    position: getElementPosition(pos, button.name),
    pagePosition: pos,
    blockStatus: 'noblock',
    cableList: []
  };
}

export const getCableElement = (number, cable) => {
  return {
    id: `c-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
    name: 'cable',
    type: 'element',
    listName: 'nolist',
    length: number,
    position: cable.position,
    width: cable.width,
    height: cable.height,
    line: cable.line
  };
}

