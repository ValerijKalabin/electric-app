import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Delete from '../../buttons/Delete/Delete';
import Right from '../../buttons/Right/Right';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import { getActionItemModifier } from '../../utils/buttonList';
import './ListOfActions.css';


function ListOfActions({ elementID, elementName, onClickButton }) {
  return (
    <ul className="actions">
      { elementName === 'auto-switch' &&
        <li className="actions__item actions__item_element">
          <AutoSwitch id={elementID} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'junction-box' &&
        <li className="actions__item actions__item_element">
          <JunctionBox id={elementID} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'lamp' &&
        <li className="actions__item actions__item_element">
          <Lamp id={elementID} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'socket' &&
        <li className="actions__item actions__item_element">
          <Socket id={elementID} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'switch' &&
        <li className="actions__item actions__item_element">
          <Switch id={elementID} listName="actions" onClickButton={onClickButton} />
        </li>
      }
      <li className={`actions__item actions__item_left ${getActionItemModifier(elementName)}`}>
        <Left id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_delete ${getActionItemModifier(elementName)}`}>
        <Delete id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_right ${getActionItemModifier(elementName)}`}>
        <Right id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfActions;
