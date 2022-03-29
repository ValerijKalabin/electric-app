import { Link } from 'react-router-dom';
import { startElement } from '../../utils/element';
import { getListType, getListTitle, getListExplanation } from '../../utils/buttonList';
import Add from '../../buttons/Add/Add';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Change from '../../buttons/Change/Change';
import Delete from '../../buttons/Delete/Delete';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Left from '../../buttons/Left/Left';
import Right from '../../buttons/Right/Right';
import Search from '../../buttons/Search/Search';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfButtons.css';


function ListOfButtons({
  button,
  elementList,
  onClickButton
}) {
  const selectedElement = elementList.find((element) => element.listName === 'actions') || startElement;
  const listType = getListType(button);

  return (
    <main className="buttons">
      <h1 className="buttons__title">{getListTitle(button)}</h1>
      { button.name === 'add' && <p className="buttons__explanation">{getListExplanation(selectedElement)}</p>}
      <ul className="buttons__list">
        { listType === "elements" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <AutoSwitch id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <JunctionBox id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <Lamp id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <Socket id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <Switch id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <Add id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
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
              <Change id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Изменить параметры элемента
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Search id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Найти элемент по описанию
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Delete id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Удалить элемент из схемы
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Left id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Передвинуть элемент влево
              </p>
            </div>
          </li>
        }
        { listType === "actions" &&
          <li className="buttons__item">
            <div className="buttons__container">
              <Right id={selectedElement.id} listName="buttons" onClickButton={onClickButton} />
            </div>
            <div className="buttons__label">
              <p className="buttons__text">
                Передвинуть элемент вправо
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
