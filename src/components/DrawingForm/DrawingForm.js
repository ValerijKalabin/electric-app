import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/Api';
import ServerError from '../ServerError/ServerError';
import './DrawingForm.css';

function DrawingForm({ newDrawing, onSubmitDrawing }) {
  const [value, setValue] = useState(newDrawing.name ? newDrawing.name : '');
  const [error, setError] = useState('');
  const [isValueValid, setValueValidity] = useState(false);
  const [isFormDisabled, setFormDisability] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
    setError(event.target.validationMessage);
    setValueValidity(event.target.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormDisability(true);
    if(!newDrawing.name) {
      api.createDrawing({
        name: value,
        elements: []
      })
        .then((drawing) => {
          onSubmitDrawing(drawing);
        })
        .catch(() => {
          setServerErrorMessage('Ошибка сервера, повторите попытку');
        })
        .finally(() => {
          setFormDisability(false);
        });
    } else {
      api.updateDrawing(newDrawing._id, value, newDrawing.elements)
        .then((drawing) => {
          onSubmitDrawing(drawing);
        })
        .catch((error) => {
          setServerErrorMessage(error.message ? error.message : 'Ошибка сервера, повторите попытку');
        })
        .finally(() => {
          setFormDisability(false);
        });
    }
  }

  function handleClick() {
    setValue('');
    setValueValidity(false);
    setServerErrorMessage('');
  }

  return (
    <main className="drawing">
      <h1 className="drawing__title">
        Наименование схемы
      </h1>
      <form
        className="drawing__form"
        name="drawing"
        id="drawing"
        onSubmit={handleSubmit}
      >
        <input
          className="drawing__input"
          type="text"
          name="drawing-input"
          id="drawing-input"
          required
          minLength="5"
          maxLength="30"
          value={value}
          disabled={isFormDisabled}
          onChange={handleChange}
        />
        <span className={ `drawing__explanation ${ error ? 'drawing__explanation_error' : '' }` }>
          { error ? error : 'Укажите наименование схемы. Обычно используется адрес объекта.' }
        </span>
        { !isFormDisabled &&
          <div className="drawing__buttons">
            <button
              className={ `drawing__submit ${ !isValueValid ? 'drawing__submit_disabled' : '' }` }
              type="submit"
              name="drawing-submit"
              form="drawing"
              disabled={ !isValueValid }
            >
              Ok
            </button>
            <Link to="/" className="drawing__return">Закрыть</Link>
          </div>
        }
        { isFormDisabled &&
          <p className="drawing__conservation">Сохранение...</p>
        }
      </form>
      <ServerError
        serverErrorMessage={serverErrorMessage}
        onClickClose={handleClick}
      />
    </main>
  );
}

export default DrawingForm;
