import { Link } from 'react-router-dom';
import Delete from '../../buttons/Delete/Delete';
import Left from '../../buttons/Left/Left';
import Right from '../../buttons/Right/Right';
import './ListOfHints.css';


function ListOfHints({
  selectedElement,
  onClickButton
}) {
  return (
    <main className="hints">
      <h1 className="hints__title">Назначение кнопок</h1>
      <ul className="hints__list">
        <li className="hints__item">
          <div className="hints__container">
            <Delete id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Удалить элемент из схемы
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Left id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Передвинуть элемент влево
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Right id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
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
