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


export const basicVirtualElement = {
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


export const getSchemeCable = (length, elements, status) => {
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


export const getDataBaseElements = (elements) => {
  const dbElements = elements.map((element) => {
    return {
      id: element.id,
      name: element.name,
      type: element.type,
      listName: element.listName,
      length: element.length ? element.length : 0,
      pos: element.pos,
      posV: element.posV,
      posList: element.posList ? 'db|' + element.posList.join('|') : 'db',
      blockStatus: element.blockStatus ? element.blockStatus : 'noblock',
      elementsInBlock: element.elementsInBlock ? element.elementsInBlock : 0,
      cableIdList: element.cableList ? element.cableList.reduce((list, item) => list + '|' + item.id, 'db') : 'db',
      elementIdList: element.elementList ? element.elementList.reduce((list, item) => list + '|' + item.id, 'db') : 'db',
    }
  });
  return dbElements;
}


export const getDataBaseElement = (element) => {
  return {
    id: element.id,
    name: element.name,
    type: 'element',
    listName: element.listName,
    pos: element.pos,
    posV: element.posV,
    blockStatus: element.blockStatus,
    elementsInBlock: element.elementsInBlock,
    cableIdList: element.cableIdList.split('|'),
    cableList: []
  };
}


export const getDataBaseCable = (cable) => {
  const positions = cable.posList.split('|');
  positions.shift();
  return {
    id: cable.id,
    name: 'cable',
    type: cable.type,
    listName: cable.listName,
    length: cable.length,
    pos: cable.pos,
    posV: cable.posV,
    posList: positions[0] ? positions.map((pos) => Number(pos)) : [],
    elementIdList: cable.elementIdList.split('|'),
    elementList: []
  };
}


export const getSchemeElements = (elements) => {
  const items = elements.map((element) => element.type === 'element' ? getDataBaseElement(element) : getDataBaseCable(element));
  items.forEach((item) => {
    if(item.type === 'element') {
      item.cableIdList.forEach((cableId) => {
        const cable = items.find((item) => item.id === cableId);
        if(cable) {
          item.cableList.push(cable);
        }
      });
    }
    if(item.name === 'cable') {
      item.elementIdList.forEach((elementId) => {
        const element = items.find((item) => item.id === elementId);
        if(element) {
          item.elementList.push(element);
        }
      });
    }
  });
  return items;
}
