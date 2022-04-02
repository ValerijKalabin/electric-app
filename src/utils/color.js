export const getActionButtonColor = (listName) => {
  if (listName === 'elements') return 'gray';
  if (listName === 'actions' || listName === 'hints' || listName === 'navigation') return 'yellow';
  return '';
};

export const getElementButtonColor = (listName) => {
  if (listName === 'actions' || listName === 'nolist') return 'gray';
  if (listName === 'elements' || listName === 'hints') return 'yellow';
  return '';
};
