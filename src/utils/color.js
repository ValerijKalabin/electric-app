export const getActionButtonColor = (type) => {
  if (type === 'element') return 'gray';
  if (type === 'action') return 'yellow';
};

export const getElementButtonColor = (type) => {
  if (type === 'action') return 'gray';
  if (type === 'element') return 'yellow';
};
