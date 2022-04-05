import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Cancel from '../../buttons/Cancel/Cancel';
import Confirm from '../../buttons/Confirm/Confirm';
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
        <li className={`
          actions__item
          ${element.blockStatus === 'first' ? 'actions__item_place_first' : ''}
          ${element.blockStatus === 'middle' ? 'actions__item_place_middle' : ''}
          ${element.blockStatus === 'last' ? 'actions__item_place_last' : ''}
        `}>
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
        <li className={`
          actions__item
          ${element.blockStatus === 'first' ? 'actions__item_place_first' : ''}
          ${element.blockStatus === 'middle' ? 'actions__item_place_middle' : ''}
          ${element.blockStatus === 'last' ? 'actions__item_place_last' : ''}
        `}>
          <Socket id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'switch' &&
        <li className={`
          actions__item
          ${element.blockStatus === 'first' ? 'actions__item_place_first' : ''}
          ${element.blockStatus === 'middle' ? 'actions__item_place_middle' : ''}
          ${element.blockStatus === 'last' ? 'actions__item_place_last' : ''}
        `}>
          <Switch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.listType === 'motion' &&
        <li className="actions__item">
          <ul className={`
            actions__list
            ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__list_place_top' : ''}
          `}>
            <li className="actions__item">
              <Left id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
            <li className="actions__item">
              <Delete id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
            <li className="actions__item">
              <Right id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
          </ul>
        </li>
      }
      { element.listType === 'cable' &&
        <li className="actions__item">
          <ul className={`
            actions__list
            ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__list_place_top' : ''}
          `}>
            <li className="actions__item">
              <p className="actions__indicator">1&rarr;2</p>
            </li>
            <li className="actions__item">
              <Cancel id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
          </ul>
        </li>
      }
      { element.listType === 'cable-start' &&
        <li className="actions__item">
          <ul className={`
            actions__list
            ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__list_place_top' : ''}
          `}>
            <li className="actions__item">
              <Confirm id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
            <li className="actions__item">
              <p className="actions__indicator">1</p>
            </li>
            <li className="actions__item">
              <Cancel id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
          </ul>
        </li>
      }
      { element.listType === 'cable-end' &&
        <li className="actions__item">
          <ul className={`
            actions__list
            ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__list_place_top' : ''}
          `}>
            <li className="actions__item">
              <Confirm id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
            <li className="actions__item">
              <p className="actions__indicator">2</p>
            </li>
            <li className="actions__item">
              <Cancel id={element.id} listName="actions" onClickButton={onClickButton} />
            </li>
          </ul>
        </li>
      }
    </ul>
  );
}

export default ListOfActions;
