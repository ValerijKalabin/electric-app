export const getActionButtonColor = (listName) => {
  if (listName === 'elements') return 'gray';
  if (listName === 'actions' || listName === 'buttons') return 'yellow';
};

export const getElementButtonColor = (listName) => {
  if (listName === 'actions') return 'gray';
  if (listName === 'elements' || listName === 'buttons') return 'yellow';
};
