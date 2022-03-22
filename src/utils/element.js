export const getElementTitle = (elementName) => {
  if (elementName === 'auto-switch') return 'Добавить блок автоматических выключателей';
  if (elementName === 'junction-box') return 'Добавить распаечную коробку';
  if (elementName === 'lamp') return 'Добавить светильник';
  if (elementName === 'socket') return 'Добавить блок розеток';
  if (elementName === 'switch') return 'Добавить блок выключателей';
  return 'Элемент схемы не выбран';
};

export const isInputNameVisible = (elementName) => {
  if (elementName === 'auto-switch') return true;
  if (elementName === 'junction-box') return true;
  if (elementName === 'lamp') return true;
  if (elementName === 'socket') return true;
  if (elementName === 'switch') return true;
  return false;
};

export const isInputNumberVisible = (elementName) => {
  if (elementName === 'auto-switch') return true;
  if (elementName === 'junction-box') return false;
  if (elementName === 'lamp') return false;
  if (elementName === 'socket') return true;
  if (elementName === 'switch') return true;
  return false;
};

export const isInputPowerVisible = (elementName) => {
  if (elementName === 'auto-switch') return true;
  if (elementName === 'junction-box') return false;
  if (elementName === 'lamp') return true;
  if (elementName === 'socket') return true;
  if (elementName === 'switch') return false;
  return false;
};

export const isButtonSubmitVisible = (elementName) => {
  if (elementName === 'auto-switch') return true;
  if (elementName === 'junction-box') return true;
  if (elementName === 'lamp') return true;
  if (elementName === 'socket') return true;
  if (elementName === 'switch') return true;
  return false;
};

export const getLabelPower = (elementName) => {
  if (elementName === 'auto-switch') return 'Номинальная сила тока';
  if (elementName === 'lamp') return 'Потребляемая мощность';
  if (elementName === 'socket') return 'Мощность вероятных потребителей';
  return '';
};

export const getInputNameExplanation = (elementName) => {
  if (elementName === 'auto-switch') return 'Обязательно укажите наименование автомата. Это поможет при поиске нужного автомата в дальнейшем. ПРИМЕР: <<Автомат зал>>';
  if (elementName === 'junction-box') return 'Обязательно укажите наименование распаечной коробки. Это поможет при поиске нужной распаечной коробки в дальнейшем. ПРИМЕР: <<Распайка зал розетки>>';
  if (elementName === 'lamp') return 'Обязательно укажите наименование светильника. Это поможет при поиске нужного светильника в дальнейшем. ПРИМЕР: <<Люстра зал>>';
  if (elementName === 'socket') return 'Обязательно укажите наименование блока розеток. Это поможет при поиске нужных розеток в дальнейшем. ПРИМЕР: <<Розетки спальня стол>>';
  if (elementName === 'switch') return 'Обязательно укажите наименование блока выключателей. Это поможет при поиске нужных выключателей в дальнейшем. ПРИМЕР: <<Выключатель зал люстра>>';
  return '';
};

export const getInputNumberExplanation = (elementName) => {
  if (elementName === 'auto-switch') return 'Укажите количество автоматов в блоке.';
  if (elementName === 'socket') return 'Укажите количество розеток в блоке.';
  if (elementName === 'switch') return 'Укажите количество выключателей в блоке.';
  return '';
};

export const getInputPowerExplanation = (elementName) => {
  if (elementName === 'auto-switch') return 'Укажите номинальную силу тока в амперах. Силу тока можно не указывать. В этом случае она будет рассчитана автоматически.';
  if (elementName === 'lamp') return 'Укажите потребляемую мощность светильника или светильников, которые планируется здесь установить.';
  if (elementName === 'socket') return 'Укажите мощность потребителей, которые планируется подключать к розеткам.';
  return '';
};
