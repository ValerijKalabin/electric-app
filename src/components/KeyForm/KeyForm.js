import { useState } from 'react';
import { Link } from 'react-router-dom';
import './KeyForm.css';

function KeyForm() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isValueValid, setValueValidity] = useState(false);
  const [isErrorVisible, setErrorVisibility] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
    setError(event.target.validationMessage);
    setValueValidity(event.target.validity.valid);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorVisibility(true);
  }

  function handleClick() {
    setValue('');
    setValueValidity(false);
    setErrorVisibility(false);
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
          onChange={handleChange}
        />
        <span className={ `key__explanation ${ value ? 'key__explanation_error' : '' }` }>
          { value ? error : 'Для получения ключа отправьте запрос на kavat@internet.ru' }
        </span>
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
      </form>
      <div className={`key__error ${isErrorVisible ? 'key__error_visible' : ''}`}>
        <div className="key__container">
          <p className="key__message">
            {`Ключ "${value}" не существует.`}
          </p>
          <button
            className="key__close"
            type="button"
            name="close"
            onClick={handleClick}
          >
            Закрыть
          </button>
        </div>
      </div>
    </main>
  );
}

export default KeyForm;
