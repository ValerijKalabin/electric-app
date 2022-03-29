export const getListType = (button) => {
  if (button.name === 'add') return 'elements';
  if (button.name === 'help') return button.listName;
  return '';
}

export const getListTitle = (button) => {
  if (button.name === 'add') return 'Следующий элемент';
  if (button.name === 'help') return 'Назначение кнопок';
  return '';
}

export const getListExplanation = (element) => {
  if (element.name === 'auto-switch') return 'Текущий элемент - блок автоматических выключателей. Добавьте следующий...';
  if (element.name === 'junction-box') return 'Текущий элемент - распаечная коробка. Добавьте следующий...';
  if (element.name === 'lamp') return 'Текущий элемент - светильник. Добавьте следующий...';
  if (element.name === 'socket') return 'Текущий элемент - блок розеток. Добавьте следующий...';
  if (element.name === 'switch') return 'Текущий элемент - блок выключателей. Добавьте следующий...';
  return 'Текущий элемент не выбран';
}
