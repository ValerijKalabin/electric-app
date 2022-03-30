export const getElementTitle = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Добавить блок автоматических выключателей';
  if (buttonName === 'junction-box') return 'Добавить распаечную коробку';
  if (buttonName === 'lamp') return 'Добавить светильник';
  if (buttonName === 'socket') return 'Добавить блок розеток';
  if (buttonName === 'switch') return 'Добавить блок выключателей';
  return 'Элемент схемы не выбран';
};

export const isInputNameVisible = (buttonName) => {
  if (buttonName === 'auto-switch') return true;
  if (buttonName === 'junction-box') return true;
  if (buttonName === 'lamp') return true;
  if (buttonName === 'socket') return true;
  if (buttonName === 'switch') return true;
  return false;
};

export const isInputNumberVisible = (buttonName) => {
  if (buttonName === 'auto-switch') return true;
  if (buttonName === 'junction-box') return false;
  if (buttonName === 'lamp') return false;
  if (buttonName === 'socket') return true;
  if (buttonName === 'switch') return true;
  return false;
};

export const isInputPowerVisible = (buttonName) => {
  if (buttonName === 'auto-switch') return true;
  if (buttonName === 'junction-box') return false;
  if (buttonName === 'lamp') return true;
  if (buttonName === 'socket') return true;
  if (buttonName === 'switch') return false;
  return false;
};

export const isButtonSubmitVisible = (buttonName) => {
  if (buttonName === 'auto-switch') return true;
  if (buttonName === 'junction-box') return true;
  if (buttonName === 'lamp') return true;
  if (buttonName === 'socket') return true;
  if (buttonName === 'switch') return true;
  return false;
};

export const getLabelPower = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Номинальная сила тока (A)';
  if (buttonName === 'lamp') return 'Потребляемая мощность (Bт)';
  if (buttonName === 'socket') return 'Мощность вероятных потребителей (Вт)';
  return '';
};

export const getInputNameExplanation = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Обязательно укажите наименование автомата. Это поможет при поиске нужного автомата в дальнейшем. ПРИМЕР: <<Автомат зал>>';
  if (buttonName === 'junction-box') return 'Обязательно укажите наименование распаечной коробки. Это поможет при поиске нужной распаечной коробки в дальнейшем. ПРИМЕР: <<Распайка зал розетки>>';
  if (buttonName === 'lamp') return 'Обязательно укажите наименование светильника. Это поможет при поиске нужного светильника в дальнейшем. ПРИМЕР: <<Люстра зал>>';
  if (buttonName === 'socket') return 'Обязательно укажите наименование блока розеток. Это поможет при поиске нужных розеток в дальнейшем. ПРИМЕР: <<Розетки спальня стол>>';
  if (buttonName === 'switch') return 'Обязательно укажите наименование блока выключателей. Это поможет при поиске нужных выключателей в дальнейшем. ПРИМЕР: <<Выключатель зал люстра>>';
  return '';
};

export const getInputNumberExplanation = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Укажите количество автоматов в блоке.';
  if (buttonName === 'socket') return 'Укажите количество розеток в блоке.';
  if (buttonName === 'switch') return 'Укажите количество выключателей в блоке.';
  return '';
};

export const getInputPowerExplanation = (buttonName) => {
  if (buttonName === 'auto-switch') return 'Укажите номинальную силу тока в амперах. Силу тока можно не указывать. В этом случае она будет рассчитана автоматически.';
  if (buttonName === 'lamp') return 'Укажите потребляемую мощность светильника или светильников, которые планируется здесь установить.';
  if (buttonName === 'socket') return 'Укажите мощность потребителей, которые планируется подключать к розеткам.';
  return '';
};

export const isFormValid = ({ buttonName, nameValidity, numberValidity, powerValidity }) => {
  if (buttonName === 'auto-switch') return nameValidity && numberValidity && powerValidity;
  if (buttonName === 'junction-box') return nameValidity;
  if (buttonName === 'lamp') return nameValidity && powerValidity;
  if (buttonName === 'socket') return nameValidity && numberValidity && powerValidity;
  if (buttonName === 'switch') return nameValidity && numberValidity;
  return false;
};

export const startElement = {
  id: 'not-element',
  name: 'help',
  type: 'action',
  listName: 'elements',
  description: '',
  number: '',
  power: '',
  position: { left: 'calc(50% + 0px)', bottom: '50%' },
  pagePosition: 0
};
