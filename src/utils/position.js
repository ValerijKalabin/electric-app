export const step = 36;
export const headerFooterBlocksHeight = 130;

export const getElementPosition = (position, name) => {
  if (name === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '39px' };
  }
  if (name === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (name === 'auto-switch' || name === 'socket' || name === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '75px' };
  }
}

export const getSchemeMarkup = (pageHeight) => {
  const lineCenter = (pageHeight - headerFooterBlocksHeight) / 2;
  return { backgroundImage: `
    linear-gradient(to bottom, transparent 75px, #222 75px, #222 76px, transparent 76px),
    linear-gradient(to top, transparent ${lineCenter}px, #222 ${lineCenter}px, #222 ${lineCenter + 1}px, transparent ${lineCenter + 1}px),
    linear-gradient(to top, transparent 75px, #222 75px, #222 76px, transparent 76px)
  `}
}

export const getItemPos = (activeItem) => parseInt(activeItem.position.left.slice(11), 10);

export const getPosList = (currentItem, elementList) => {
  const similarElementList = elementList.filter((element) => {
    if (currentItem.name === 'auto-switch' || currentItem.name === 'socket' || currentItem.name === 'switch') {
      return element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch';
    }
    return element.name === currentItem.name;
  });
  return similarElementList.map((element) => parseInt(element.position.left.slice(11), 10));
}
