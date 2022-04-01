export const step = 120;
export const lineBottom = 80;
export const navigationBlockHeight = 40;
export const headerFooterBlocksHeight = 130;

export const getElementPosition = (position, name) => {
  if (name === 'lamp') {
    return { left: `calc(50% + ${position}px)`, top: '40px' };
  }
  if (name === 'junction-box') {
    return { left: `calc(50% + ${position}px)`, bottom: '50%' };
  }
  if (name === 'auto-switch' || name === 'socket' || name === 'switch') {
    return { left: `calc(50% + ${position}px)`, bottom: '80px' };
  }
}

const getOutsideHeight = (someElement) => {
  return someElement ? headerFooterBlocksHeight + navigationBlockHeight : headerFooterBlocksHeight;
}

export const getSchemeHeight = (someElement) => {
  return `calc(100vh - ${getOutsideHeight(someElement)}px)`
}

export const getSchemeMarkup = (pageHeight, someElement) => {
  const lineTop = someElement ? lineBottom + navigationBlockHeight : lineBottom;
  const lineCenter = (pageHeight - getOutsideHeight(someElement)) / 2;
  return { backgroundImage: `
    linear-gradient(to bottom, transparent ${lineTop}px, #222 ${lineTop}px, #222 ${lineTop + 1}px, transparent ${lineTop + 1}px),
    linear-gradient(to top, transparent ${lineCenter}px, #222 ${lineCenter}px, #222 ${lineCenter + 1}px, transparent ${lineCenter + 1}px),
    linear-gradient(to top, transparent ${lineBottom}px, #222 ${lineBottom}px, #222 ${lineBottom + 1}px, transparent ${lineBottom + 1}px)
  `}
}
