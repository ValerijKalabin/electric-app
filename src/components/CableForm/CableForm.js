import { useState } from 'react';
import './CableForm.css';

function CableForm({ connection, centralElement, onClickButton, onSubmitForm }) {
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
      id: centralElement.id,
      name: 'cancel'
    });
  }

  function handleClickContinue() {
    onClickButton({
      id: centralElement.id,
      name: 'continue'
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitForm(numberValue);
  }

  return (
    <main className="magnitude">
      <h1 className={`magnitude__title ${connection.isCorrect ? '' : 'magnitude__title_attention'}`}>
        {connection.isCorrect ? 'Длина кабеля' : 'Внимание!'}
      </h1>
      { connection.isCorrect &&
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
            min="0.5"
            max="100"
            step="0.5"
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
      }
      { !connection.isCorrect &&
        <div className="magnitude__error">
          <p className="magnitude__text">{connection.errorText}</p>
          <div className="magnitude__buttons">
            { connection.toContinue &&
              <button
                className="magnitude__continue"
                type="button"
                name="continue"
                onClick={handleClickContinue}
              >
                Продолжить
              </button>
            }
            <button
              className="magnitude__cancel magnitude__cancel_error"
              type="button"
              name="cancel"
              onClick={handleClickCancel}
            >
              Отменить
            </button>
          </div>
        </div>
      }
    </main>
  );
}

export default CableForm;
