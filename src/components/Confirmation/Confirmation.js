import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../utils/Api';
import ServerError from '../ServerError/ServerError';
import './Confirmation.css';

function Confirmation({ deletedDrawing, onClickDelete }) {
  const [isBannerVisible, setBannerVisibility] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState('');


  function handleClickConfirm() {
    if(deletedDrawing._id) {
      setBannerVisibility(true);
      api.deleteDrawing(deletedDrawing._id)
        .then(() => api.getDrawings()
          .then((drawings) => {
            onClickDelete(drawings);
          })
        )
        .catch(() => {
          setServerErrorMessage('Ошибка сервера, повторите попытку');
        })
        .finally(() => {
          setBannerVisibility(false);
        });
    }
  }


  function handleClickClose() {
    setServerErrorMessage('');
  }


  return (
    <main className="confirmation">
      <h1 className="confirmation__title">
        Удаление чертежа
      </h1>
      <p className="confirmation__question">
        {deletedDrawing.name ? `Вы уверены, что хотите удалить чертёж "${deletedDrawing.name}"?` : 'Чертёж не выбран!'}
      </p>
      {!isBannerVisible &&
        <div className="confirmation__actions">
          {!!deletedDrawing.name &&
            <button
              className="confirmation__continue"
              type="button"
              name="confirm"
              onClick={handleClickConfirm}
            >
              Удалить
            </button>
          }
          <Link
            to='/'
            className="confirmation__cancel"
          >
            {deletedDrawing.name ? 'Отменить' : 'Закрыть'}
          </Link>
        </div>
      }
      {isBannerVisible &&
        <p className="confirmation__banner">Удаление...</p>
      }
      <ServerError
        serverErrorMessage={serverErrorMessage}
        onClickClose={handleClickClose}
      />
    </main>
  );
}

export default Confirmation;
