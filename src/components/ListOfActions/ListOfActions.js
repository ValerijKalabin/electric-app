import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
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
        <li className="actions__item actions__item_plase_default">
          <AutoSwitch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'junction-box' &&
        <li className="actions__item actions__item_plase_default">
          <JunctionBox id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'lamp' &&
        <li className="actions__item actions__item_plase_default">
          <Lamp id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'socket' &&
        <li className={`
          actions__item actions__item_plase_default
          ${element.blockStatus === 'first' ? 'actions__item_place_first' : ''}
          ${element.blockStatus === 'middle' ? 'actions__item_place_middle' : ''}
          ${element.blockStatus === 'last' ? 'actions__item_place_last' : ''}
        `}>
          <Socket id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'switch' &&
        <li className={`
          actions__item actions__item_plase_default
          ${element.blockStatus === 'first' ? 'actions__item_place_first' : ''}
          ${element.blockStatus === 'middle' ? 'actions__item_place_middle' : ''}
          ${element.blockStatus === 'last' ? 'actions__item_place_last' : ''}
        `}>
          <Switch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      <li className={`
        actions__item
        actions__item_place_left
        ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__item_place_bottom' : ''}
      `}>
        <Left id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`
        actions__item
        actions__item_place_center
        ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__item_place_bottom' : ''}
      `}>
        <Delete id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`
        actions__item
        actions__item_place_right
        ${element.name === 'auto-switch' || element.name === 'socket' || element.name === 'switch' ? 'actions__item_place_bottom' : ''}
      `}>
        <Right id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfActions;
