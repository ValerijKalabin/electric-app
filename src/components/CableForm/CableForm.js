import { useState } from 'react';
import './CableForm.css';

function CableForm({ selectedElement, onClickButton, onSubmitForm }) {
  const [numberValue, setNumberValue] = useState('');
  const [numberError, setNumberError] = useState('');
  const [numberValidity, setNumberValidity] = useState(false);

  function handleChange(event) {
    setNumberValue(event.target.value);
    setNumberError(event.target.validationMessage);
    setNumberValidity(event.target.validity.valid);
  }

  function handleClickCancel() {
    onClickButton({
      id: selectedElement.id,
      name: 'cancel'
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitForm(numberValue);
  }

  return (
    <main className="magnitude">
      <h1 className="magnitude__title">Длина кабеля</h1>
      <form
        className="magnitude__form"
        name="magnitude"
        id="magnitude"
        onSubmit={handleSubmit}
      >
        <input
          className="magnitude__input"
          type="number"
          name="number"
          id="number"
          required
          min="1"
          max="100"
          step="1"
          value={numberValue}
          onChange={handleChange}
        />
        <span className={ `magnitude__explanation ${ numberValue ? 'magnitude__explanation_error' : '' }` }>
          { numberValue ? numberError : 'Укажите длину кабеля в метрах' }
        </span>
        <div className="magnitude__buttons">
          <button
            className={ `magnitude__submit ${ !numberValidity ? 'magnitude__submit_disabled' : '' }` }
            type="submit"
            name="confirm"
            form="magnitude"
            disabled={ !numberValidity }
          >
            Ok
          </button>
          <button
            className="magnitude__cancel"
            type="button"
            name="cancel"
            onClick={handleClickCancel}
          >
            Отменить
          </button>
        </div>
      </form>
    </main>
  );
}

export default CableForm;
