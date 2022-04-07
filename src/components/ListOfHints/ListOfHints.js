import { Link } from 'react-router-dom';
import Add from '../../buttons/Add/Add';
import Cancel from '../../buttons/Cancel/Cancel';
import Change from '../../buttons/Change/Change';
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
            <p className="hints__indicator">1&rarr;2</p>
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
            <Change id={centralElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Изменить длину кабеля
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
