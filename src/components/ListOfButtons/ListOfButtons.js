import { Link } from 'react-router-dom';
import Add from '../../buttons/Add/Add';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Change from '../../buttons/Change/Change';
import Delete from '../../buttons/Delete/Delete';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Search from '../../buttons/Search/Search';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfButtons.css';


function ListOfButtons({ listType, onClickButton }) {
  return (
    <main className="buttons">
      <h1 className="buttons__title">
        Назначение кнопок
      </h1>
      <ul className="buttons__list">
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <AutoSwitch listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему блок автоматических выключателей
              </p>
            </div>
          </li>
        }
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <JunctionBox listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему распаечную коробку
              </p>
            </div>
          </li>
        }
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Lamp listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему светильник
              </p>
            </div>
          </li>
        }
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Socket listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему блок розеток
              </p>
            </div>
          </li>
        }
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Switch listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему блок выключателей
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Add listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Добавить в схему новый элемент
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Change listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Изменить параметры текущего элемента схемы
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Delete listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Удалить текущий элемент из схемы
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Search listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Найти элемент схемы по названию в списке элементов
              </p>
            </div>
          </li>
        }
      </ul>
      <Link to="/scheme" className="buttons__return">Закрыть</Link>
    </main>
  );
}

export default ListOfButtons;
