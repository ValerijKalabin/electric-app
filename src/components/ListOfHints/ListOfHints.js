import { Link } from 'react-router-dom';
import Add from '../../buttons/Add/Add';
import Cancel from '../../buttons/Cancel/Cancel';
import Clean from '../../buttons/Clean/Clean';
import Delete from '../../buttons/Delete/Delete';
import Left from '../../buttons/Left/Left';
import Right from '../../buttons/Right/Right';
import './ListOfHints.css';


function ListOfHints({
  centralElement,
  onClickButton
}) {
  return (
    <main className="hints">
      <h2 className="hints__title">Индикатор</h2>
      <ul className="hints__list">
        <li className="hints__item">
          <div className="hints__container">
            <p className="hints__indicator">
              1
              <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="16" fill="#bbbbbb" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
              2
            </p>
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Выберите второй элемент для соединения кабелем
            </p>
          </div>
        </li>
      </ul>
      <h2 className="hints__title">Назначение кнопок</h2>
      <ul className="hints__list">
        <li className="hints__item">
          <div className="hints__container">
            <Add id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить элемент в схему
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Clean id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Начать с чистого листа
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Cancel id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Отменить соединение кабелем
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Delete id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Удалить элемент из схемы
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Left id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Передвинуть элемент влево
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Right id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Передвинуть элемент вправо
            </p>
          </div>
        </li>
      </ul>
      <Link to="/scheme" className="hints__return">Закрыть</Link>
    </main>
  );
}

export default ListOfHints;
