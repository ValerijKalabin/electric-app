import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/Api';
import ServerError from '../ServerError/ServerError';
import './KeyForm.css';

function KeyForm({ onSubmitSignin }) {
  const [value, setValue] = useState('');
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
    api.signin(value)
      .then(() => {
        onSubmitSignin();
      })
      .catch(() => {
        setServerErrorMessage(`Ключ "${value}" не существует.`);
      })
      .finally(() => {
        setFormDisability(false);
      });
  }

  function handleClick() {
    setValue('');
    setValueValidity(false);
    setServerErrorMessage('');
  }

  return (
    <main className="key">
      <h1 className="key__title">
        Электронный ключ
      </h1>
      <form
        className="key__form"
        name="key"
        id="key"
        onSubmit={handleSubmit}
      >
        <input
          className="key__input"
          type="password"
          name="password"
          id="password"
          required
          minLength="14"
          maxLength="14"
          value={value}
          disabled={isFormDisabled}
          onChange={handleChange}
        />
        <span className={ `key__explanation ${ value ? 'key__explanation_error' : '' }` }>
          { value ? error : 'Для получения ключа отправьте запрос на kavat@internet.ru' }
        </span>
        { !isFormDisabled &&
          <div className="key__buttons">
            <button
              className={ `key__submit ${ !isValueValid ? 'key__submit_disabled' : '' }` }
              type="submit"
              name="confirm"
              form="key"
              disabled={ !isValueValid }
            >
              Ok
            </button>
            <Link to="/" className="key__return">Закрыть</Link>
          </div>
        }
        { isFormDisabled &&
          <p className="key__authorization">Авторизация...</p>
        }
      </form>
      <ServerError
        serverErrorMessage={serverErrorMessage}
        onClickClose={handleClick}
      />
    </main>
  );
}

export default KeyForm;
