import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Delete from '../../buttons/Delete/Delete';
import Right from '../../buttons/Right/Right';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import { getActionItemModifier } from '../../utils/position';
import './ListOfActions.css';


function ListOfActions({ element, onClickButton }) {
  return (
    <ul className="actions">
      { element.name === 'auto-switch' &&
        <li className="actions__item actions__item_element">
          <AutoSwitch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'junction-box' &&
        <li className="actions__item actions__item_element">
          <JunctionBox id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'lamp' &&
        <li className="actions__item actions__item_element">
          <Lamp id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'socket' &&
        <li className="actions__item actions__item_element">
          <Socket id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { element.name === 'switch' &&
        <li className="actions__item actions__item_element">
          <Switch id={element.id} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      <li className={`actions__item actions__item_left ${getActionItemModifier(element.name)}`}>
        <Left id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_delete ${getActionItemModifier(element.name)}`}>
        <Delete id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_right ${getActionItemModifier(element.name)}`}>
        <Right id={element.id} listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfActions;
