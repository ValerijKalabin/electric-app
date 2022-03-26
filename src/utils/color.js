export const getActionButtonColor = (listName) => {
  if (listName === 'elements') return 'gray';
  if (listName === 'actions' || listName === 'buttons') return 'yellow';
  return '';
};

export const getElementButtonColor = (listName) => {
  if (listName === 'actions' || listName === 'nolist') return 'gray';
  if (listName === 'elements' || listName === 'buttons') return 'yellow';
  return '';
};
