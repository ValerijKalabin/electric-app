import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getElementPosition } from '../../utils/position';
import * as element from '../../utils/element';
import './ElementSetting.css';

function ElementSetting({
  button,
  position,
  onSubmitForm
}) {
  const [nameValue, setNameValue] = useState('');
  const [nameError, setNameError] = useState('');
  const [nameValidity, setNameValidity] = useState(false);

  const [numberValue, setNumberValue] = useState('');
  const [numberError, setNumberError] = useState('');
  const [numberValidity, setNumberValidity] = useState(false);

  const [powerValue, setPowerValue] = useState('');
  const [powerError, setPowerError] = useState('');
  const [powerValidity, setPowerValidity] = useState(false);

  function handleChangeInputName(event) {
    setNameValue(event.target.value);
    setNameError(event.target.validationMessage);
    setNameValidity(event.target.validity.valid);
  }

  function handleChangeInputNumber(event) {
    setNumberValue(event.target.value);
    setNumberError(event.target.validationMessage);
    setNumberValidity(event.target.validity.valid);
  }

  function handleChangeInputPower(event) {
    setPowerValue(event.target.value);
    setPowerError(event.target.validationMessage);
    setPowerValidity(event.target.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitForm({
      id: `a-${(new Date().getTime())}-r-${Math.floor(Math.random() * 1000000)}`,
      name: button.name,
      type: button.type,
      listName: 'actions',
      description: nameValue,
      number: numberValue,
      power: powerValue,
      position: getElementPosition(position, button.name),
      pagePosition: position
    });
  }

  return (
    <main className="element">
      <h1 className="element__title">{element.getElementTitle(button.name)}</h1>
      <form
        className="element__form"
        name="element"
        id="element"
        onSubmit={handleSubmit}
      >
        { element.isInputNameVisible(button.name) &&
          <div className="element__container">
            <label className="element__label" htmlFor="name">Наименование</label>
            <input
              className="element__input"
              type="text"
              name="name"
              id="name"
              required
              minLength="5"
              maxLength="30"
              value={nameValue}
              onChange={handleChangeInputName}
            />
            <span className={ `element__explanation ${ nameValue ? 'element__explanation_error' : '' }` }>
              { nameValue ? nameError : element.getInputNameExplanation(button.name) }
            </span>
          </div>
        }
        { element.isInputNumberVisible(button.name) &&
          <div className="element__container">
            <label className="element__label" htmlFor="number">Количество</label>
            <input
              className="element__input"
              type="number"
              name="number"
              id="number"
              required
              min="1"
              max="10"
              step="1"
              value={numberValue}
              onChange={handleChangeInputNumber}
            />
            <span className={ `element__explanation ${ numberValue ? 'element__explanation_error' : '' }` }>
              { numberValue ? numberError : element.getInputNumberExplanation(button.name) }
            </span>
          </div>
        }
        { element.isInputPowerVisible(button.name) &&
          <div className="element__container">
            <label className="element__label" htmlFor="power">{ element.getLabelPower(button.name) }</label>
            <input
              className="element__input"
              type="number"
              name="power"
              id="power"
              min="1"
              max="10000"
              step="1"
              value={powerValue}
              onChange={handleChangeInputPower}
            />
            <span className={ `element__explanation ${ powerValue ? 'element__explanation_error' : '' }` }>
              { powerValue ? powerError : element.getInputPowerExplanation(button.name) }
            </span>
          </div>
        }
        <div className="element__buttons">
          { element.isButtonSubmitVisible(button.name) &&
            <button
              className={ `element__submit ${ !element.isFormValid(button, nameValidity, numberValidity, powerValidity) ? 'element__submit_disabled' : '' }` }
              type="submit"
              form="element"
              disabled={ !element.isFormValid(button, nameValidity, numberValidity, powerValidity) }
            >
              Ok
            </button>
          }
          <Link to="/scheme" className="element__return">Закрыть</Link>
        </div>
      </form>
    </main>
  );
}

export default ElementSetting;
