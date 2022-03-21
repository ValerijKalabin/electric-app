export const getActionButtonColor = (type) => {
  if (type === 'elements') return 'gray';
  if (type === 'actions') return 'yellow';
};

export const getElementButtonColor = (type) => {
  if (type === 'actions') return 'gray';
  if (type === 'elements') return 'yellow';
};
