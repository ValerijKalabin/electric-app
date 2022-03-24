import Add from '../../buttons/Add/Add';
import AutoSwitch from '../../buttons/AutoSwitch/AutoSwitch';
import Change from '../../buttons/Change/Change';
import Delete from '../../buttons/Delete/Delete';
import Help from '../../buttons/Help/Help';
import JunctionBox from '../../buttons/JunctionBox/JunctionBox';
import Lamp from '../../buttons/Lamp/Lamp';
import Search from '../../buttons/Search/Search';
import Socket from '../../buttons/Socket/Socket';
import Switch from '../../buttons/Switch/Switch';
import './ListActions.css';

function ListActions({ elementName, onClickButton }) {
  return (
    <ul className="actions">
      { elementName === 'auto-switch' &&
        <li className="actions__item actions__item_element">
          <AutoSwitch listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'junction-box' &&
        <li className="actions__item actions__item_element">
          <JunctionBox listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'lamp' &&
        <li className="actions__item actions__item_element">
          <Lamp listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'socket' &&
        <li className="actions__item actions__item_element">
          <Socket listName="actions" onClickButton={onClickButton} />
        </li>
      }
      { elementName === 'switch' &&
        <li className="actions__item actions__item_element">
          <Switch listName="actions" onClickButton={onClickButton} />
        </li>
      }
      <li className="actions__item actions__item_add">
        <Add listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_change">
        <Change listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_delete">
        <Delete listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_help">
        <Help listName="actions" onClickButton={onClickButton} />
      </li>
      <li className="actions__item actions__item_search">
        <Search listName="actions" onClickButton={onClickButton} />
      </li>
    </ul>
  );
}

export default ListActions;
