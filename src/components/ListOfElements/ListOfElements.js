import { Link } from 'react-router-dom';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Cable from '../../buttons/Cable/Cable';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfElements.css';


function ListOfElements({
  centralElement,
  elementList,
  onClickButton
}) {
  return (
    <main className="elements">
      <h1 className="elements__title">{!elementList.length ? 'Назначение кнопок' : 'Добавить элемент'}</h1>
      <ul className="elements__list">
        { elementList.length > 1 && !!centralElement.name && centralElement.name !== 'deleted' &&
          <li className="elements__item">
            <div className="elements__container">
              <Cable id={centralElement.id} listName="elements" onClickButton={onClickButton} />
            </div>
            <div className="elements__label">
              <p className="elements__text">
                Добавить в схему соединительный кабель
              </p>
            </div>
          </li>
        }
        <li className="elements__item">
          <div className="elements__container">
            <AutoSwitch id={centralElement.id} listName="elements" onClickButton={onClickButton} />
          </div>
          <div className="elements__label">
            <p className="elements__text">
              Добавить в схему автоматический выключатель
            </p>
          </div>
        </li>
        <li className="elements__item">
          <div className="elements__container">
            <JunctionBox id={centralElement.id} listName="elements" onClickButton={onClickButton} />
          </div>
          <div className="elements__label">
            <p className="elements__text">
              Добавить в схему распаечную коробку
            </p>
          </div>
        </li>
        <li className="elements__item">
          <div className="elements__container">
            <Lamp id={centralElement.id} listName="elements" onClickButton={onClickButton} />
          </div>
          <div className="elements__label">
            <p className="elements__text">
              Добавить в схему светильник
            </p>
          </div>
        </li>
        <li className="elements__item">
          <div className="elements__container">
            <Socket id={centralElement.id} listName="elements" onClickButton={onClickButton} />
          </div>
          <div className="elements__label">
            <p className="elements__text">
              Добавить в схему розетку
            </p>
          </div>
        </li>
        <li className="elements__item">
          <div className="elements__container">
            <Switch id={centralElement.id} listName="elements" onClickButton={onClickButton} />
          </div>
          <div className="elements__label">
            <p className="elements__text">
              Добавить в схему выключатель
            </p>
          </div>
        </li>
      </ul>
      <Link to="/scheme" className="elements__return">Закрыть</Link>
    </main>
  );
}

export default ListOfElements;
