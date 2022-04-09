import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Cancel from '../../buttons/Cancel/Cancel';
import Delete from '../../buttons/Delete/Delete';
import Right from '../../buttons/Right/Right';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfActions.css';


function ListOfActions({ element, onClickButton }) {
  return (
    <ul className="actions">
      { element.name === 'auto-switch' &&
        <li className="actions__item">
          <AutoSwitch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'junction-box' &&
        <li className="actions__item">
          <JunctionBox id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'lamp' &&
        <li className="actions__item">
          <Lamp id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'socket' &&
        <li className="actions__item">
          <Socket id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'switch' &&
        <li className="actions__item">
          <Switch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.listName === 'motion' &&
        <li className="actions__item actions__item_container">
          <div className={`
            actions__container
            ${element.name === 'lamp' || element.name === 'junction-box' ? 'actions__container_bottom' : ''}
          `}>
            <ul className="actions__list">
              <li className="actions__item">
                <Left id={element.id} listName="actions" cableList={element.cableList} onClickButton={onClickButton} />
              </li>
              <li className="actions__item">
                <Delete id={element.id} listName="actions" cableList={element.cableList} onClickButton={onClickButton} />
              </li>
              <li className="actions__item">
                <Right id={element.id} listName="actions" cableList={element.cableList} onClickButton={onClickButton} />
              </li>
            </ul>
          </div>
        </li>
      }
      { element.listName === 'cable' &&
        <li className="actions__item actions__item_container">
          <div className={`
            actions__container
            ${element.name === 'lamp' || element.name === 'junction-box' ? 'actions__container_bottom' : ''}
          `}>
            <ul className="actions__list">
              <li className="actions__item actions__item_container">
                <p className="actions__indicator">1&rarr;2</p>
              </li>
              <li className="actions__item">
                <Cancel id={element.id} listName="actions" onClickButton={onClickButton} />
              </li>
            </ul>
          </div>
        </li>
      }
    </ul>
  );
}

export default ListOfActions;
