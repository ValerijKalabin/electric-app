export const getButtonListTitle = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Текущий элемент - блок автоматических выключателей. Добавьте следующий...';
  if (buttonName === 'junction-box') return 'Текущий элемент - Распаечная коробка. Добавьте следующий...';
  if (buttonName === 'lamp') return 'Текущий элемент - Светильник. Добавьте следующий...';
  if (buttonName === 'socket') return 'Текущий элемент - Блок розеток. Добавьте следующий...';
  if (buttonName === 'switch') return 'Текущий элемент - Блок выключателей. Добавьте следующий...';
  return 'Элемент схемы не выбран';
}
