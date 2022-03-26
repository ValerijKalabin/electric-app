export const defaultParameters = {
  listType: '',
  listTitle: '',
  listExplanation: ''
}

export const getExplanation = (elementName) => {
  if (elementName === 'auto-switch') return 'Текущий элемент - блок автоматических выключателей. Добавьте следующий...';
  if (elementName === 'junction-box') return 'Текущий элемент - распаечная коробка. Добавьте следующий...';
  if (elementName === 'lamp') return 'Текущий элемент - светильник. Добавьте следующий...';
  if (elementName === 'socket') return 'Текущий элемент - блок розеток. Добавьте следующий...';
  if (elementName === 'switch') return 'Текущий элемент - блок выключателей. Добавьте следующий...';
  return 'Элемент схемы не выбран';
}
