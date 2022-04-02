import { Link } from 'react-router-dom';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Cable from '../../buttons/Cable/Cable';
import Delete from '../../buttons/Delete/Delete';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Left from '../../buttons/Left/Left';
import Right from '../../buttons/Right/Right';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfHints.css';


function ListOfHints({
  someElement,
  selectedElement,
  onClickButton
}) {
  return (
    <main className="hints">
      <h1 className="hints__title">Назначение кнопок</h1>
      <ul className="hints__list">
        <li className="hints__item">
          <div className="hints__container">
            <AutoSwitch id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить в схему автоматический выключатель
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <JunctionBox id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить в схему распаечную коробку
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Lamp id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить в схему светильник
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Socket id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить в схему розетку
            </p>
          </div>
        </li>
        <li className="hints__item">
          <div className="hints__container">
            <Switch id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
          </div>
          <div className="hints__label">
            <p className="hints__text">
              Добавить в схему выключатель
            </p>
          </div>
        </li>
        { someElement &&
          <li className="hints__item">
            <div className="hints__container">
              <Cable id={selectedElement.id} listName="hints" onClickButton={onClickButton} />
            </div>
            <div className="hints__label">
              <p className="hints__text">
                Добавить в схему соединительный кабель
              </p>
            </div>
          </li>
        }
        { someElement &&
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
        }
        { someElement &&
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
        }
        { someElement &&
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
        }
      </ul>
      <Link to="/scheme" className="hints__return">Закрыть</Link>
    </main>
  );
}

export default ListOfHints;
