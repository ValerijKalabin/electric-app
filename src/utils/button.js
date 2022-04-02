export const getActionItemModifier = (elementName) => {
  if (elementName === 'auto-switch' || elementName === 'socket' || elementName === 'switch') return 'actions__item_bottom';
  return '';
}
