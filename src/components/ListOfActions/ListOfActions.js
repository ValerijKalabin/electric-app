import Left from '../../buttons/Left/Left';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Delete from '../../buttons/Delete/Delete';
import Right from '../../buttons/Right/Right';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListOfActions.css';


function ListOfActions({ elementID, elementName, onClickButton }) {
  const isElementPositionBottom = elementName === 'auto-switch' || elementName === 'socket' || elementName === 'switch';
  const bottomElementClass = isElementPositionBottom ? 'actions__item_bottom' : '';

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
      <li className={`actions__item actions__item_left ${bottomElementClass}`}>
        <Left id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_delete ${bottomElementClass}`}>
        <Delete id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
      <li className={`actions__item actions__item_right ${bottomElementClass}`}>
        <Right id={elementID} listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListOfActions;
