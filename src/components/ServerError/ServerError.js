import './ServerError.css';

function ServerError({ serverErrorMessage, onClickClose }) {
  return (
    <div className={`server-error ${!!serverErrorMessage ? 'server-error_visible' : ''}`}>
      <div className="server-error__container">
        <p className="server-error__message">
          {serverErrorMessage}
        </p>
        <button
          className="server-error__close"
          type="button"
          name="close"
          onClick={onClickClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default ServerError;
